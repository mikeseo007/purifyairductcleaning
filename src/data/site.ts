export const SITE_URL = 'https://purifyairductcleaning.com';

export const site = {
  name: 'Purify Air Duct Cleaning',
  shortName: 'Purify',
  tagline: 'Air Duct, HVAC & Dryer Vent Cleaning',
  url: SITE_URL,
  phone: '954-945-9428',
  phoneHref: 'tel:+19549459428',
  phoneE164: '+1-954-945-9428',
  email: 'office@purifyairductcleaning.com',
  address: {
    street: '20533 Biscayne Blvd #8',
    city: 'Aventura',
    region: 'FL',
    zip: '33180',
    lat: 25.9651899,
    lng: -80.1436485,
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Purify+Air+Duct+Cleaning+20533+Biscayne+Blvd+8+Aventura+FL+33180',
  google: {
    profileUrl:
      'https://www.google.com/maps/search/?api=1&query=Purify+Air+Duct+Cleaning+20533+Biscayne+Blvd+8+Aventura+FL+33180',
    reviewsUrl: 'https://maps.app.goo.gl/vyvFzWWJt3DdBPoe7',
    mapEmbed:
      'https://maps.google.com/maps?q=Purify+Air+Duct+Cleaning+Fort+Lauderdale&hl=en&z=11&output=embed',
    rating: 5.0,
    reviewCount: 105,
  },
  hours: {
    short: 'Open 24 hours, 7 days',
    long: 'Open 24 hours, every day of the week.',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  social: {} as Record<string, string>,
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;

export type RegionId = 'miami-dade' | 'broward' | 'palm-beach';

export const regions: { id: RegionId; name: string; short: string }[] = [
  { id: 'miami-dade', name: 'Miami-Dade County', short: 'Miami-Dade' },
  { id: 'broward', name: 'Broward County', short: 'Broward' },
  { id: 'palm-beach', name: 'Palm Beach County', short: 'Palm Beach' },
];

export interface Location {
  slug: string;
  path: string;
  city: string;
  county: string;
  region: RegionId;
  lat: number;
  lng: number;
  neighborhoods: string[];
  nearby: string[];
}

const office = { lat: site.address.lat, lng: site.address.lng };

/** City landing pages use /air-duct-cleaning-{city}/. Aventura stays at / as the main location. */
const cityPage = (citySlug: string) => ({
  slug: `air-duct-cleaning-${citySlug}`,
  path: `/air-duct-cleaning-${citySlug}/`,
});

export const locations: Location[] = [
  {
    slug: 'aventura',
    path: '/',
    city: 'Aventura',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9565,
    lng: -80.1392,
    neighborhoods: ['Williams Island', 'Turnberry', 'Country Club Drive', 'Waterways', 'The Point', 'Yacht Club'],
    nearby: ['Hallandale Beach', 'North Miami Beach', 'Hollywood'],
  },
  {
    ...cityPage('north-miami-beach'),
    city: 'North Miami Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9331,
    lng: -80.1625,
    neighborhoods: ['Eastern Shores', 'Fulford-by-the-Sea', 'Uleta', 'Ojus', 'Highland Village'],
    nearby: ['Aventura', 'North Miami', 'Miami Gardens'],
  },
  {
    ...cityPage('north-miami'),
    city: 'North Miami',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8901,
    lng: -80.1867,
    neighborhoods: ['Keystone', 'Sans Souci', 'Sunkist Grove', 'Central North Miami'],
    nearby: ['North Miami Beach', 'Miami Gardens', 'Aventura'],
  },
  {
    ...cityPage('miami-gardens'),
    city: 'Miami Gardens',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.942,
    lng: -80.2456,
    neighborhoods: ['Carol City', 'Andover', 'Norwood', 'Rolling Oaks', 'Lake Lucerne'],
    nearby: ['North Miami Beach', 'Miramar', 'Miami Lakes'],
  },
  {
    ...cityPage('sunny-isles-beach'),
    city: 'Sunny Isles Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9429,
    lng: -80.1234,
    neighborhoods: ['Collins Avenue', 'Atlantic Isle', 'Winston Towers', 'Golden Beach border'],
    nearby: ['Aventura', 'North Miami Beach', 'Hallandale Beach'],
  },
  {
    ...cityPage('miami-lakes'),
    city: 'Miami Lakes',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9087,
    lng: -80.3086,
    neighborhoods: ['Loch Lomond', 'Royal Oaks', 'Lake Patricia', 'Miami Lakes Drive'],
    nearby: ['Miami Gardens', 'Hialeah', 'Miramar'],
  },
  {
    ...cityPage('hialeah'),
    city: 'Hialeah',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8576,
    lng: -80.2781,
    neighborhoods: ['Palm Springs', 'Amelia', 'Southeast Hialeah', 'Okeechobee Road'],
    nearby: ['Miami Lakes', 'Miami Gardens', 'Miramar'],
  },
  {
    ...cityPage('fort-lauderdale'),
    city: 'Fort Lauderdale',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1224,
    lng: -80.1373,
    neighborhoods: ['Las Olas', 'Victoria Park', 'Coral Ridge', 'Galt Ocean Mile', 'Flagler Village', 'Rio Vista'],
    nearby: ['Oakland Park', 'Plantation', 'Hollywood', 'Davie'],
  },
  {
    ...cityPage('hollywood'),
    city: 'Hollywood',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0112,
    lng: -80.1495,
    neighborhoods: ['Hollywood Beach', 'Downtown Hollywood', 'Hollywood Lakes', 'Emerald Hills', 'Hollywood Hills'],
    nearby: ['Hallandale Beach', 'Fort Lauderdale', 'Pembroke Pines'],
  },
  {
    ...cityPage('hallandale-beach'),
    city: 'Hallandale Beach',
    county: 'Broward County',
    region: 'broward',
    lat: 25.9812,
    lng: -80.1484,
    neighborhoods: ['Three Islands', 'Gulfstream', 'Hallandale Beach Boulevard', 'Golden Isles'],
    nearby: ['Aventura', 'Hollywood', 'North Miami Beach'],
  },
  {
    ...cityPage('pembroke-pines'),
    city: 'Pembroke Pines',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0128,
    lng: -80.2964,
    neighborhoods: ['Silver Lakes', 'Pembroke Falls', 'Chapel Trail', 'Grand Palms', 'Century Village'],
    nearby: ['Miramar', 'Hollywood', 'Weston'],
  },
  {
    ...cityPage('miramar'),
    city: 'Miramar',
    county: 'Broward County',
    region: 'broward',
    lat: 25.986,
    lng: -80.3323,
    neighborhoods: ['Sunset Lakes', 'Miramar Parkway', 'Monarch Lakes', 'Silver Shores'],
    nearby: ['Pembroke Pines', 'Miami Gardens', 'Hollywood'],
  },
  {
    ...cityPage('davie'),
    city: 'Davie',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0765,
    lng: -80.2521,
    neighborhoods: ['Davie', 'Rolling Hills', 'Pine Island Ridge', 'Shenandoah'],
    nearby: ['Plantation', 'Fort Lauderdale', 'Weston'],
  },
  {
    ...cityPage('plantation'),
    city: 'Plantation',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1276,
    lng: -80.2331,
    neighborhoods: ['Plantation Acres', 'Jacaranda', 'Plantation Isles', 'Plantation Midtown'],
    nearby: ['Sunrise', 'Davie', 'Fort Lauderdale'],
  },
  {
    ...cityPage('sunrise'),
    city: 'Sunrise',
    county: 'Broward County',
    region: 'broward',
    lat: 26.166,
    lng: -80.2566,
    neighborhoods: ['Sawgrass', 'Sunrise Golf Village', 'Welleby', 'Springtree'],
    nearby: ['Plantation', 'Lauderhill', 'Tamarac'],
  },
  {
    ...cityPage('lauderhill'),
    city: 'Lauderhill',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1404,
    lng: -80.2134,
    neighborhoods: ['Inverrary', 'St. George', 'Lauderhill Mall area', 'West Ken Lark'],
    nearby: ['Fort Lauderdale', 'Sunrise', 'Tamarac'],
  },
  {
    ...cityPage('oakland-park'),
    city: 'Oakland Park',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1723,
    lng: -80.1318,
    neighborhoods: ['Coral Ridge Isles', 'Royal Palm', 'Oakland Park Boulevard', 'East Oakland Park'],
    nearby: ['Fort Lauderdale', 'Pompano Beach', 'North Lauderdale'],
  },
  {
    ...cityPage('pompano-beach'),
    city: 'Pompano Beach',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2379,
    lng: -80.1248,
    neighborhoods: ['Pompano Beach Highlands', 'Cresthaven', 'Old Pompano', 'Palm Aire'],
    nearby: ['Deerfield Beach', 'Fort Lauderdale', 'Coconut Creek'],
  },
  {
    ...cityPage('deerfield-beach'),
    city: 'Deerfield Beach',
    county: 'Broward County',
    region: 'broward',
    lat: 26.3184,
    lng: -80.0998,
    neighborhoods: ['The Cove', 'Deerfield Beach Island', 'Century Village', 'Quiet Waters'],
    nearby: ['Pompano Beach', 'Boca Raton', 'Coconut Creek'],
  },
  {
    ...cityPage('coconut-creek'),
    city: 'Coconut Creek',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2517,
    lng: -80.1789,
    neighborhoods: ['Wynmoor', 'Township', 'Tradewinds', 'Lyons Road'],
    nearby: ['Pompano Beach', 'Margate', 'Coral Springs'],
  },
  {
    ...cityPage('margate'),
    city: 'Margate',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2445,
    lng: -80.2064,
    neighborhoods: ['Coral Gate', 'Oriole', 'Winfield', 'Margate Boulevard'],
    nearby: ['Coconut Creek', 'North Lauderdale', 'Coral Springs'],
  },
  {
    ...cityPage('tamarac'),
    city: 'Tamarac',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2129,
    lng: -80.2498,
    neighborhoods: ['Kings Point', 'Woodmont', 'Mainlands', 'Commercial Boulevard'],
    nearby: ['Sunrise', 'Lauderhill', 'North Lauderdale'],
  },
  {
    ...cityPage('north-lauderdale'),
    city: 'North Lauderdale',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2173,
    lng: -80.2259,
    neighborhoods: ['Kimberly', 'Southgate', 'Hampton Pines', 'Southwest Ranches border'],
    nearby: ['Tamarac', 'Margate', 'Oakland Park'],
  },
  {
    ...cityPage('coral-springs'),
    city: 'Coral Springs',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2712,
    lng: -80.2706,
    neighborhoods: ['Eagle Trace', 'Heron Bay', 'The Brooks', 'Maplewood', 'Coral Springs Country Club'],
    nearby: ['Coconut Creek', 'Margate', 'Tamarac'],
  },
  {
    ...cityPage('weston'),
    city: 'Weston',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1004,
    lng: -80.3998,
    neighborhoods: ['Weston Hills', 'Savanna', 'Bonaventure', 'Indian Trace'],
    nearby: ['Davie', 'Pembroke Pines', 'Sunrise'],
  },
  {
    ...cityPage('boca-raton'),
    city: 'Boca Raton',
    county: 'Palm Beach County',
    region: 'palm-beach',
    lat: 26.3683,
    lng: -80.1289,
    neighborhoods: ['East Boca', 'Downtown Boca', 'Camino Gardens', 'Boca West', 'Town Center'],
    nearby: ['Deerfield Beach', 'Delray Beach', 'Coconut Creek'],
  },
  {
    ...cityPage('delray-beach'),
    city: 'Delray Beach',
    county: 'Palm Beach County',
    region: 'palm-beach',
    lat: 26.4615,
    lng: -80.0728,
    neighborhoods: ['Downtown Delray', 'Atlantic Avenue', 'Tropic Isle', 'Lake Ida'],
    nearby: ['Boca Raton', 'Boynton Beach', 'Deerfield Beach'],
  },
  {
    ...cityPage('boynton-beach'),
    city: 'Boynton Beach',
    county: 'Palm Beach County',
    region: 'palm-beach',
    lat: 26.5253,
    lng: -80.0664,
    neighborhoods: ['Downtown Boynton', 'Quantum Park', 'Boynton Beach Boulevard', 'Oceanfront'],
    nearby: ['Delray Beach', 'Boca Raton', 'Wellington'],
  },
  {
    ...cityPage('wellington'),
    city: 'Wellington',
    county: 'Palm Beach County',
    region: 'palm-beach',
    lat: 26.6618,
    lng: -80.2684,
    neighborhoods: ['Olympia', 'Binks Forest', 'Greenview Shores', 'Wellington'],
    nearby: ['Boynton Beach', 'Delray Beach', 'Boca Raton'],
  },
];

export const mainLocation = locations[0];

export const locationsByRegion = (region: RegionId) => locations.filter((l) => l.region === region);

regions.sort((a, b) => locationsByRegion(b.id).length - locationsByRegion(a.id).length);

export const milesFromOffice = (loc: Location) => {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(loc.lat - office.lat);
  const dLng = toRad(loc.lng - office.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(office.lat)) * Math.cos(toRad(loc.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(3958.8 * 2 * Math.asin(Math.sqrt(h)));
};

export const getLocation = (slug: string) => {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) throw new Error(`Unknown location: ${slug}`);
  return loc;
};

export interface Review {
  name: string;
  meta?: string;
  rating: number;
  date: string;
  text: string;
  services?: string;
  ownerReply?: string;
}

/** Verbatim text from the Google listing at reviewsUrl. Do not paraphrase or invent review text. */
export const reviews: Review[] = [
  {
    name: 'Jess Boggs',
    meta: 'Local Guide · 15 reviews · 9 photos',
    rating: 5,
    date: '3 months ago',
    text: 'Zach was great, straight to the point & got our vents back to a good starting point until we can finish with the deep cleaning & duct coating! Thanks so much',
  },
  {
    name: 'Nan',
    meta: '3 reviews · 4 photos',
    rating: 5,
    date: '3 months ago',
    text: 'Zach did an amazing job explaining and cleaning. I would highly recommend.... 5 stars!',
  },
  {
    name: 'christian gavidia',
    meta: 'Local Guide · 16 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'felt like they treated my home like their own — Purify Air Duct Cleaning Fort Lauderdale sent over Ben, who performed an in-depth inspection followed by top-tier AC deep cleaning and mold removal, leaving the place noticeably fresher and healthier.',
  },
  {
    name: 'adrian rodriguez',
    meta: '5 reviews · 1 photo',
    rating: 5,
    date: 'a year ago',
    text: 'The crew didn’t just show up for Mold removal, they arrived like specialists restoring balance — respectful, methodical, and more professional than any contractor I’ve worked with in Fort Lauderdale.',
  },
  {
    name: 'Lisandra Mtnez Chavez',
    meta: '7 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'The air duct cleaning  we received in Fort Lauderdale apartment was incredibly thorough  Roy’s inspection found bacteria hidden deep inside the system.',
  },
];
