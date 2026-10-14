// Optimizes every image added to the project before it is used.
// Runs automatically before `npm run dev` and `npm run build` (including on Netlify),
// or on demand with `npm run images`.
//
// src/**          photos -> WebP, max 2400px long edge, quality 82, EXIF rotation applied,
//                 metadata stripped, kebab-case file names. References in the code are
//                 rewritten to the new file name. Transparent PNGs (logos) stay PNG.
// public/**       served as-is, so JPGs are recompressed in place (names kept, because
//                 files like og-image.jpg are referenced by URL).
import { readdir, readFile, writeFile, stat, unlink, rename } from 'node:fs/promises';
import { join, extname, basename, dirname, relative } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const MAX_EDGE = 2400;
const MAX_LOGO_WIDTH = 1600;
const WEBP = { quality: 82, effort: 5 };
const JPEG = { quality: 82, mozjpeg: true };
const PUBLIC_JPEG_MAX_BYTES = 400 * 1024;
const MAX_JPEG_BYTES_PER_PIXEL = 0.25;
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff', '.heic', '.heif']);
const CODE_EXT = new Set(['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.mdx', '.css', '.json']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const kebab = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'image';

const kb = (bytes) => `${Math.round(bytes / 1024)}KB`;
const rel = (p) => relative(ROOT, p);

async function optimizeSrcImage(file, renames, log) {
  const ext = extname(file).toLowerCase();
  const stem = basename(file, extname(file));
  const before = (await stat(file)).size;

  let meta;
  try {
    meta = await sharp(file).metadata();
  } catch {
    log.push(`! ${rel(file)}: can't be read (HEIC from iPhones isn't supported). Export it as JPG and add it again.`);
    return;
  }
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  const isLogo = ext === '.png' && meta.hasAlpha && !(await sharp(file).stats()).isOpaque;

  const targetExt = isLogo ? '.png' : '.webp';
  const target = join(dirname(file), kebab(stem) + targetExt);
  const needsWork = isLogo
    ? (meta.width ?? 0) > MAX_LOGO_WIDTH || target !== file
    : ext !== '.webp' || longEdge > MAX_EDGE || target !== file;
  if (!needsWork) return;

  if (target !== file && (await stat(target).catch(() => null))) {
    log.push(`! ${rel(file)}: skipped, ${rel(target)} already exists. Rename one of them.`);
    return;
  }

  let pipeline = sharp(file).rotate();
  if (isLogo) {
    pipeline = pipeline.resize({ width: MAX_LOGO_WIDTH, withoutEnlargement: true }).png({ compressionLevel: 9 });
  } else {
    pipeline = pipeline.resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true }).webp(WEBP);
  }
  const data = await pipeline.toBuffer();
  await writeFile(target, data);
  if (target !== file) {
    await unlink(file);
    renames.push([basename(file), basename(target)]);
  }
  log.push(`✓ ${rel(file)} -> ${rel(target)} (${kb(before)} -> ${kb(data.length)})`);
}

async function optimizePublicImage(file, log) {
  const ext = extname(file).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg') return;
  const before = (await stat(file)).size;
  const meta = await sharp(file).metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  // Bytes per pixel tells an unoptimized camera JPG from one this script already wrote,
  // so files aren't recompressed (and degraded) on every run.
  const heavy = before > PUBLIC_JPEG_MAX_BYTES && before / ((meta.width ?? 1) * (meta.height ?? 1)) > MAX_JPEG_BYTES_PER_PIXEL;
  if (!heavy && longEdge <= MAX_EDGE) return;

  const data = await sharp(file)
    .rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .jpeg(JPEG)
    .toBuffer();
  if (data.length >= before) return;
  const tmp = `${file}.tmp`;
  await writeFile(tmp, data);
  await rename(tmp, file);
  log.push(`✓ ${rel(file)} recompressed (${kb(before)} -> ${kb(data.length)})`);
}

async function rewriteReferences(renames, log) {
  if (!renames.length) return;
  const files = (await walk(join(ROOT, 'src'))).filter((f) => CODE_EXT.has(extname(f).toLowerCase()));
  for (const f of files) {
    const original = await readFile(f, 'utf8');
    let text = original;
    for (const [from, to] of renames) text = text.split(`/${from}`).join(`/${to}`);
    if (text !== original) {
      await writeFile(f, text);
      log.push(`  updated references in ${rel(f)}`);
    }
  }
}

const log = [];
const renames = [];
for (const file of await walk(join(ROOT, 'src'))) {
  if (IMAGE_EXT.has(extname(file).toLowerCase())) await optimizeSrcImage(file, renames, log);
}
for (const file of await walk(join(ROOT, 'public'))) {
  await optimizePublicImage(file, log);
}
await rewriteReferences(renames, log);

console.log(log.length ? `Optimized images:\n${log.join('\n')}` : 'Images: all optimized.');
