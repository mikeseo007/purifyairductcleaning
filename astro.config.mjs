// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = 'https://purifyairductcleaning.com';

// Trailing slashes match the URLs already indexed from the previous WordPress site.
export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
      serialize(item) {
        const path = item.url.replace(site, '');
        item.lastmod = new Date().toISOString();

        item.changefreq = 'monthly';
        if (path === '/') {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.6;
        } else if (['/our-services/', '/service-areas/'].includes(path)) {
          item.priority = 0.8;
        } else if (['/about-us/', '/contact-us/', '/privacy-policy/'].includes(path)) {
          item.priority = path === '/privacy-policy/' ? 0.3 : 0.7;
        } else {
          // Service and location pages.
          item.priority = 0.9;
        }
        return item;
      },
    }),
  ],
});
