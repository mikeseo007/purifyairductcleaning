export interface LiveReview {
  name: string;
  text: string;
  rating: number;
  date: string;
  meta?: string;
}

export interface LiveReviewFeed {
  rating: number;
  reviewCount: number;
  reviews: LiveReview[];
}

const MAPS_PLACE_URL =
  'https://www.google.com/maps/place/Purify+Air+Duct+Cleaning+Fort+Lauderdale/@26.1078551,-80.1408599,707m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88d901f64ea5a12b:0x379362904a398a12!8m2!3d26.1078551!4d-80.1408599!16s%2Fg%2F11m6ymwvkw';

const MIN_REVIEWS = 5;

let cached: { expires: number; feed: LiveReviewFeed | null } | undefined;

const at = (node: unknown, index: number): unknown => (Array.isArray(node) ? node[index] : undefined);

function asReview(node: unknown): LiveReview | null {
  if (!Array.isArray(node)) return null;
  const head = node[0];
  const name = at(at(at(at(head, 1), 4), 5), 0);
  const meta = at(at(at(at(at(head, 1), 4), 5), 10), 0);
  const date = at(at(head, 1), 6);
  const rating = at(at(at(head, 2), 0), 0);
  const text = at(at(at(at(head, 2), 15), 0), 0);
  if (typeof name !== 'string' || typeof date !== 'string' || typeof text !== 'string' || typeof rating !== 'number') return null;
  if (!/\bago$/i.test(date.trim()) || !text.trim() || rating < 1 || rating > 5) return null;
  return {
    name,
    text: text.trim(),
    rating,
    date: date.trim(),
    meta: typeof meta === 'string' ? meta : undefined,
  };
}

function collectReviews(node: unknown, into: LiveReview[]) {
  const review = asReview(node);
  if (review) {
    into.push(review);
    return;
  }
  if (!Array.isArray(node)) return;
  for (const child of node) collectReviews(child, into);
}

function findSummary(node: unknown): { rating: number; reviewCount: number } | null {
  if (!Array.isArray(node)) return null;
  const listing = node.find(
    (item) => Array.isArray(item) && typeof item[0] === 'string' && item[0].includes('/local/reviews') && typeof item[1] === 'string',
  );
  if (listing) {
    const nums = node.filter((item): item is number => typeof item === 'number' && item > 0);
    const reviewCount = nums.at(-1);
    const rating = nums.at(-2);
    if (rating !== undefined && reviewCount !== undefined && rating <= 5 && reviewCount >= MIN_REVIEWS) {
      return { rating, reviewCount };
    }
  }
  for (const child of node) {
    const found = findSummary(child);
    if (found) return found;
  }
  return null;
}

async function loadLiveReviews(): Promise<LiveReviewFeed | null> {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
  };
  const page = await fetch(MAPS_PLACE_URL, { headers, signal: AbortSignal.timeout(12000) });
  if (!page.ok) return null;
  const html = await page.text();
  const match = html.match(/href="(\/maps\/preview\/place\?[^"]+)"/);
  if (!match) return null;

  const preview = new URL(match[1].replaceAll('&amp;', '&'), 'https://www.google.com');
  preview.searchParams.set('hl', 'en');
  preview.searchParams.set('gl', 'us');
  const response = await fetch(preview, { headers: { ...headers, Referer: MAPS_PLACE_URL }, signal: AbortSignal.timeout(12000) });
  if (!response.ok) return null;
  const body = await response.text();
  const payload = JSON.parse(body.slice(body.indexOf('\n') + 1)) as unknown;

  const found: LiveReview[] = [];
  collectReviews(payload, found);
  const seen = new Set<string>();
  const reviews = found.filter((review) => {
    const key = `${review.name}\n${review.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (reviews.length < MIN_REVIEWS) return null;

  const summary = findSummary(payload);
  return {
    rating: summary?.rating ?? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    reviewCount: summary?.reviewCount ?? reviews.length,
    reviews,
  };
}

/** Reviews Google shows on the Maps listing. Empty result until there are at least five. */
export async function getLiveReviews(): Promise<LiveReviewFeed | null> {
  if (cached && cached.expires > Date.now()) return cached.feed;
  try {
    const feed = await loadLiveReviews();
    cached = { expires: Date.now() + (feed ? 10 * 60 * 1000 : 60 * 1000), feed };
    return feed;
  } catch {
    cached = { expires: Date.now() + 60 * 1000, feed: null };
    return null;
  }
}
