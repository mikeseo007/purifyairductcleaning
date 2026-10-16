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
  redirects: {
    '/hvac-mold-cleaning': '/hvac-mold-treatment/',
    '/ac-coil-cleaning': '/hvac-cleaning/',
    '/air-handler-cleaning': '/hvac-cleaning/',
    '/uv-light-air-purification': '/hvac-cleaning/',
    '/sunny-isles-beach': '/',
    '/golden-beach': '/',
    '/bal-harbour': '/air-duct-cleaning-north-miami-beach/',
    '/miami-beach': '/air-duct-cleaning-north-miami/',
    '/miami': '/service-areas/',
    '/north-miami-beach': '/air-duct-cleaning-north-miami-beach/',
    '/north-miami': '/air-duct-cleaning-north-miami/',
    '/miami-gardens': '/air-duct-cleaning-miami-gardens/',
    '/hallandale-beach': '/air-duct-cleaning-hallandale-beach/',
    '/hollywood': '/air-duct-cleaning-hollywood/',
    '/fort-lauderdale': '/air-duct-cleaning-fort-lauderdale/',
    '/sunrise': '/air-duct-cleaning-sunrise/',
    '/coral-springs': '/air-duct-cleaning-coral-springs/',
    '/pembroke-pines': '/air-duct-cleaning-pembroke-pines/',
    '/plantation': '/air-duct-cleaning-plantation/',
    '/pompano-beach': '/air-duct-cleaning-pompano-beach/',
    '/deerfield-beach': '/air-duct-cleaning-deerfield-beach/',
    '/boca-raton': '/air-duct-cleaning-boca-raton/',
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
