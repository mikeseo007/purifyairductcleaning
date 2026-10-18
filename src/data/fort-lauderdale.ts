import { site, locations } from './site';

// Fort Lauderdale landing-page business configuration.
// Supervisor-confirmed NAP. The phone/email are SHARED with the main site (one number
// throughout). The map embed reuses the existing, already-embedded Fort Lauderdale map
// (site.google.mapEmbed); the map link is the confirmed Google Maps short link.
// This data is used ONLY on the Fort Lauderdale landing page and the approved FL-associated
// location/service pages — it must not leak into the main site's global header, footer,
// homepage, or business schema.
export const fortLauderdale = {
  name: 'Purify Air Duct Cleaning Fort Lauderdale',
  // Shared phone (unchanged, same as the main site).
  phone: site.phone,
  phoneHref: site.phoneHref,
  phoneE164: site.phoneE164,
  email: site.email,
  address: {
    street: '201 SE 12th St #203',
    city: 'Fort Lauderdale',
    region: 'FL',
    zip: '33316',
  },
  fullAddress: '201 SE 12th St #203, Fort Lauderdale, FL 33316, United States',
  // Reuse the existing Fort Lauderdale map embed already in the project (confirmed).
  mapEmbed: site.google.mapEmbed,
  mapLink: 'https://maps.app.goo.gl/pYTBm6V9w15w8DDV6',
  reviewsUrl: site.google.reviewsUrl,
  hours: {
    short: 'Open 24 hours, 7 days',
    long: 'Open 24 hours, every day of the week.',
  },
};

export const fortLauderdaleFullAddress = fortLauderdale.fullAddress;

// The FL landing page itself.
export const fortLauderdaleLandingSlug = 'air-duct-cleaning-fort-lauderdale';

// The 12 approved location pages assigned to the Fort Lauderdale map/NAP/navigation
// (within ~20-mile driving radius of the FL address; excludes Sunny Isles Beach, Hollywood,
// Sunrise, and Coral Springs per the supervisor). Existing URLs are preserved.
export const fortLauderdaleLocationSlugs = [
  'air-duct-cleaning-oakland-park',
  'air-duct-cleaning-lauderhill',
  'air-duct-cleaning-plantation',
  'air-duct-cleaning-davie',
  'air-duct-cleaning-hallandale-beach',
  'air-duct-cleaning-pompano-beach',
  'air-duct-cleaning-north-lauderdale',
  'air-duct-cleaning-tamarac',
  'air-duct-cleaning-coconut-creek',
  'air-duct-cleaning-margate',
  'air-duct-cleaning-pembroke-pines',
  'air-duct-cleaning-north-miami-beach',
];

/** True for the FL landing page and the approved FL-associated location pages. */
export const isFortLauderdaleLocation = (slug: string) =>
  slug === fortLauderdaleLandingSlug || fortLauderdaleLocationSlugs.includes(slug);

/** { slug, path, city } for the 12 approved FL locations — the single source for FL service-area lists. */
export const fortLauderdaleServiceAreas = fortLauderdaleLocationSlugs
  .map((slug) => {
    const l = locations.find((x) => x.slug === slug);
    return l ? { slug: l.slug, path: l.path, city: l.city } : null;
  })
  .filter((x): x is { slug: string; path: string; city: string } => x !== null);
