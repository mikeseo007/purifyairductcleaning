import { SITE_URL, site, locations, type Location } from './site';
import type { Service } from './services';
import { fortLauderdale, fortLauderdaleLocationSlugs } from './fort-lauderdale';
import { fortLauderdaleServices } from './fort-lauderdale-services';

const abs = (path: string) => new URL(path, SITE_URL).toString();

/** Fort Lauderdale service area: the landing city plus the 12 approved FL locations. */
const flCityAreas = () => [
  { '@type': 'City', name: 'Fort Lauderdale, FL' },
  ...locations
    .filter((l) => fortLauderdaleLocationSlugs.includes(l.slug))
    .map((l) => ({ '@type': 'City', name: `${l.city}, FL` })),
];

// Sitewide brand entity. One consistent Organization across every page; the per-location
// LocalBusiness entities (Aventura #business, Fort Lauderdale #localbusiness) link back to it
// via parentOrganization, and WebSite.publisher points to it. Keep this @id stable sitewide.
export const organizationId = `${SITE_URL}/#organization`;
export const businessId = `${SITE_URL}/#business`;
export const websiteId = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: site.name,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: abs('/favicon.png'),
      contentUrl: abs('/favicon.png'),
      width: 512,
      height: 512,
      caption: site.name,
    },
    image: abs('/og-image1.png'),
    description:
      'Purify Air Duct Cleaning provides professional air duct, HVAC, and dryer vent cleaning for homes and businesses across Aventura, Fort Lauderdale, and South Florida.',
    email: site.email,
    sameAs: [site.google.reviewsUrl, ...Object.values(site.social).filter(Boolean)],
    knowsAbout: [
      'Air duct cleaning',
      'Ductwork cleaning',
      'HVAC system cleaning',
      'AC coil cleaning',
      'Air handler cleaning',
      'Dryer vent cleaning',
      'Dryer vent installation',
      'Dryer vent repair',
      'AC duct replacement',
      'Air duct sanitizing',
      'Air duct inspection',
      'Attic insulation',
    ],
  };
}

export function businessSchema() {
  return {
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: site.name,
    url: SITE_URL,
    parentOrganization: { '@id': organizationId },
    logo: abs('/favicon.png'),
    telephone: site.phoneE164,
    email: site.email,
    image: abs('/og-image.jpg'),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.google.rating,
      reviewCount: site.google.reviewCount,
      bestRating: 5,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneE164,
      email: site.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    hasMap: site.google.profileUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: site.hours.days,
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: locations.map((l) => ({ '@type': 'City', name: `${l.city}, FL` })),
    knowsAbout: [
      'Air duct cleaning',
      'HVAC cleaning',
      'AC coil cleaning',
      'Air handler cleaning',
      'Dryer vent cleaning',
      'UV air purification',
    ],
    sameAs: [site.google.profileUrl, ...Object.values(site.social).filter(Boolean)],
  };
}

// Fort Lauderdale landing-page business identity — a LocalBusiness emitted ONLY on the FL
// landing page (never on the six FL service pages or the 12 FL location pages). Distinct,
// stable @id, linked to the sitewide Organization via parentOrganization. No geo coordinates
// or aggregateRating are emitted (business-level coordinates are not verified in the project,
// and ratings are not fabricated). 24/7 hours per the confirmed FL configuration.
export const fortLauderdaleLocalBusinessId = `${SITE_URL}/air-duct-cleaning-fort-lauderdale/#localbusiness`;

export function fortLauderdaleLocalBusinessSchema() {
  return {
    '@type': 'LocalBusiness',
    '@id': fortLauderdaleLocalBusinessId,
    name: fortLauderdale.name,
    url: `${SITE_URL}/air-duct-cleaning-fort-lauderdale/`,
    parentOrganization: { '@id': organizationId },
    description:
      'Purify Air Duct Cleaning Fort Lauderdale provides air duct, AC vent, and dryer vent cleaning, installation, and repair for homes and businesses in Fort Lauderdale and nearby Broward communities.',
    logo: abs('/favicon.png'),
    image: abs('/og-image1.png'),
    telephone: fortLauderdale.phoneE164,
    email: fortLauderdale.email,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: fortLauderdale.phoneE164,
      email: fortLauderdale.email,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: fortLauderdale.address.street,
      addressLocality: fortLauderdale.address.city,
      addressRegion: fortLauderdale.address.region,
      postalCode: fortLauderdale.address.zip,
      addressCountry: 'US',
    },
    hasMap: fortLauderdale.mapLink,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: flCityAreas(),
    knowsAbout: [
      'Air duct cleaning',
      'Ductwork cleaning',
      'AC vent cleaning',
      'Dryer vent cleaning',
      'Dryer vent installation',
      'Dryer vent repair',
      'AC duct replacement',
    ],
    makesOffer: fortLauderdaleServices.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: abs(s.path) },
    })),
    sameAs: [fortLauderdale.mapLink, fortLauderdale.reviewsUrl],
  };
}

export function webpageSchema(page: { url: string; name: string; description: string; image: string }, aboutId: string = businessId) {
  return {
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': websiteId },
    about: { '@id': aboutId },
    primaryImageOfPage: page.image,
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: site.name,
    publisher: { '@id': organizationId },
    inLanguage: 'en-US',
  };
}

export function serviceSchema(service: Service, providerId: string = businessId) {
  const isFortLauderdale = providerId === fortLauderdaleLocalBusinessId;
  return {
    '@type': 'Service',
    '@id': `${abs(service.path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: abs(service.path),
    image: abs((service.schemaImage ?? service.image).src),
    provider: { '@id': providerId },
    areaServed: isFortLauderdale ? flCityAreas() : locations.map((l) => ({ '@type': 'City', name: `${l.city}, FL` })),
  };
}

export function serviceAreaSchema(loc: Location, providerId: string = businessId) {
  return {
    '@type': 'Service',
    '@id': `${abs(loc.path)}#service-area`,
    name: `Air duct & dryer vent cleaning in ${loc.city}, FL`,
    serviceType: 'Air duct and dryer vent cleaning',
    url: abs(loc.path),
    provider: { '@id': providerId },
    areaServed: { '@type': 'City', name: `${loc.city}, FL` },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function articleSchema(a: { title: string; description: string; path: string; datePublished: string; image: string }) {
  return {
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.description,
    url: abs(a.path),
    mainEntityOfPage: abs(a.path),
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    image: a.image,
    author: { '@id': businessId },
    publisher: { '@id': businessId },
  };
}
