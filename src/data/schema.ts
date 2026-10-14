import { SITE_URL, site, locations, type Location } from './site';
import type { Service } from './services';

const abs = (path: string) => new URL(path, SITE_URL).toString();

export const businessId = `${SITE_URL}/#business`;
export const websiteId = `${SITE_URL}/#website`;

export function businessSchema() {
  return {
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: site.name,
    url: SITE_URL,
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

export function webpageSchema(page: { url: string; name: string; description: string; image: string }) {
  return {
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': websiteId },
    about: { '@id': businessId },
    primaryImageOfPage: page.image,
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: site.name,
    publisher: { '@id': businessId },
    inLanguage: 'en-US',
  };
}

export function serviceSchema(service: Service) {
  return {
    '@type': 'Service',
    '@id': `${abs(service.path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: abs(service.path),
    provider: { '@id': businessId },
    areaServed: locations.map((l) => ({ '@type': 'City', name: `${l.city}, FL` })),
  };
}

export function serviceAreaSchema(loc: Location) {
  return {
    '@type': 'Service',
    '@id': `${abs(loc.path)}#service-area`,
    name: `Air duct & dryer vent cleaning in ${loc.city}, FL`,
    serviceType: 'Air duct and dryer vent cleaning',
    url: abs(loc.path),
    provider: { '@id': businessId },
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
