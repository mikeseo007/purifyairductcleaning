export const SITE_URL = 'https://purifyairductcleaning.com';

export const site = {
  name: 'Purify Air Duct Cleaning',
  shortName: 'Purify',
  tagline: 'Air Duct, HVAC & Dryer Vent Cleaning',
  url: SITE_URL,
  phone: '(305) 330-1328',
  phoneHref: 'tel:+13053301328',
  phoneE164: '+1-305-330-1328',
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
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Purify+Air+Duct+Cleaning+Aventura+FL+reviews',
    mapEmbed:
      'https://maps.google.com/maps?q=20533+Biscayne+Blvd+%238,+Aventura,+FL+33180&hl=en&z=16&output=embed',
    // Public listings report a 5.0 rating from about 79 reviews. Paste verbatim Google reviews into `reviews` when you have them.
    rating: 5.0,
    reviewCount: 79,
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

export const locations: Location[] = [
  {
    slug: 'aventura',
    path: '/',
    city: 'Aventura',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9565,
    lng: -80.1392,
    neighborhoods: ['Williams Island', 'Turnberry', 'Country Club Drive', 'Waterways', 'The Point', 'Yacht Club', 'Golden Shores'],
    nearby: ['Sunny Isles Beach', 'Hallandale Beach', 'North Miami Beach', 'Golden Beach'],
  },
  {
    slug: 'sunny-isles-beach',
    path: '/sunny-isles-beach/',
    city: 'Sunny Isles Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9429,
    lng: -80.1234,
    neighborhoods: ['Collins Avenue', 'Atlantic Isles', 'Golden Shores', 'Winston Towers'],
    nearby: ['Aventura', 'Golden Beach', 'Bal Harbour'],
  },
  {
    slug: 'north-miami-beach',
    path: '/north-miami-beach/',
    city: 'North Miami Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9331,
    lng: -80.1625,
    neighborhoods: ['Eastern Shores', 'Fulford-by-the-Sea', 'Uleta', 'Ojus', 'Highland Village'],
    nearby: ['Aventura', 'North Miami', 'Miami Gardens'],
  },
  {
    slug: 'north-miami',
    path: '/north-miami/',
    city: 'North Miami',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8901,
    lng: -80.1867,
    neighborhoods: ['Keystone', 'Sans Souci', 'Sunkist Grove', 'Central North Miami'],
    nearby: ['North Miami Beach', 'Biscayne Park', 'Miami Shores'],
  },
  {
    slug: 'golden-beach',
    path: '/golden-beach/',
    city: 'Golden Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.9651,
    lng: -80.122,
    neighborhoods: ['Ocean Boulevard', 'The Strand', 'Golden Beach estates'],
    nearby: ['Sunny Isles Beach', 'Aventura', 'Hallandale Beach'],
  },
  {
    slug: 'bal-harbour',
    path: '/bal-harbour/',
    city: 'Bal Harbour',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8918,
    lng: -80.1253,
    neighborhoods: ['Bal Harbour Village', 'Collins Avenue', 'Harbour House'],
    nearby: ['Surfside', 'Bay Harbor Islands', 'Sunny Isles Beach'],
  },
  {
    slug: 'miami-beach',
    path: '/miami-beach/',
    city: 'Miami Beach',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.8103,
    lng: -80.13,
    neighborhoods: ['North Beach', 'Mid-Beach', 'Normandy Isles', 'La Gorce', 'Sunset Islands'],
    nearby: ['Surfside', 'Bal Harbour', 'North Bay Village'],
  },
  {
    slug: 'miami',
    path: '/miami/',
    city: 'Miami',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.7617,
    lng: -80.1918,
    neighborhoods: ['Brickell', 'Edgewater', 'Midtown', 'Upper East Side', 'Coconut Grove', 'Little River'],
    nearby: ['Miami Beach', 'North Miami', 'Miami Shores'],
  },
  {
    slug: 'miami-gardens',
    path: '/miami-gardens/',
    city: 'Miami Gardens',
    county: 'Miami-Dade County',
    region: 'miami-dade',
    lat: 25.942,
    lng: -80.2456,
    neighborhoods: ['Carol City', 'Andover', 'Norwood', 'Rolling Oaks', 'Lake Lucerne'],
    nearby: ['North Miami Beach', 'Opa-locka', 'Miramar'],
  },
  {
    slug: 'hallandale-beach',
    path: '/hallandale-beach/',
    city: 'Hallandale Beach',
    county: 'Broward County',
    region: 'broward',
    lat: 25.9812,
    lng: -80.1484,
    neighborhoods: ['Three Islands', 'Gulfstream', 'Hallandale Beach Boulevard', 'Golden Isles'],
    nearby: ['Aventura', 'Hollywood', 'Golden Beach'],
  },
  {
    slug: 'hollywood',
    path: '/hollywood/',
    city: 'Hollywood',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0112,
    lng: -80.1495,
    neighborhoods: ['Hollywood Beach', 'Downtown Hollywood', 'Hollywood Lakes', 'Emerald Hills', 'Hollywood Hills'],
    nearby: ['Hallandale Beach', 'Dania Beach', 'Fort Lauderdale'],
  },
  {
    slug: 'fort-lauderdale',
    path: '/fort-lauderdale/',
    city: 'Fort Lauderdale',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1224,
    lng: -80.1373,
    neighborhoods: ['Las Olas', 'Victoria Park', 'Coral Ridge', 'Galt Ocean Mile', 'Flagler Village', 'Rio Vista'],
    nearby: ['Hollywood', 'Wilton Manors', 'Oakland Park'],
  },
  {
    slug: 'sunrise',
    path: '/sunrise/',
    city: 'Sunrise',
    county: 'Broward County',
    region: 'broward',
    lat: 26.166,
    lng: -80.2566,
    neighborhoods: ['Sawgrass', 'Sunrise Golf Village', 'Welleby', 'Springtree'],
    nearby: ['Plantation', 'Lauderhill', 'Tamarac'],
  },
  {
    slug: 'coral-springs',
    path: '/coral-springs/',
    city: 'Coral Springs',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2712,
    lng: -80.2706,
    neighborhoods: ['Eagle Trace', 'Heron Bay', 'The Brooks', 'Maplewood', 'Coral Springs Country Club'],
    nearby: ['Parkland', 'Coconut Creek', 'Margate'],
  },
  {
    slug: 'pembroke-pines',
    path: '/pembroke-pines/',
    city: 'Pembroke Pines',
    county: 'Broward County',
    region: 'broward',
    lat: 26.0128,
    lng: -80.2964,
    neighborhoods: ['Silver Lakes', 'Pembroke Falls', 'Chapel Trail', 'Grand Palms', 'Century Village'],
    nearby: ['Hollywood', 'Miramar', 'Cooper City'],
  },
  {
    slug: 'plantation',
    path: '/plantation/',
    city: 'Plantation',
    county: 'Broward County',
    region: 'broward',
    lat: 26.1276,
    lng: -80.2331,
    neighborhoods: ['Plantation Acres', 'Jacaranda', 'Plantation Isles', 'Plantation Midtown'],
    nearby: ['Sunrise', 'Davie', 'Fort Lauderdale'],
  },
  {
    slug: 'pompano-beach',
    path: '/pompano-beach/',
    city: 'Pompano Beach',
    county: 'Broward County',
    region: 'broward',
    lat: 26.2379,
    lng: -80.1248,
    neighborhoods: ['Pompano Beach Highlands', 'Cresthaven', 'Old Pompano', 'Palm Aire'],
    nearby: ['Lighthouse Point', 'Deerfield Beach', 'Fort Lauderdale'],
  },
  {
    slug: 'deerfield-beach',
    path: '/deerfield-beach/',
    city: 'Deerfield Beach',
    county: 'Broward County',
    region: 'broward',
    lat: 26.3184,
    lng: -80.0998,
    neighborhoods: ['The Cove', 'Deerfield Beach Island', 'Century Village', 'Quiet Waters'],
    nearby: ['Pompano Beach', 'Boca Raton', 'Lighthouse Point'],
  },
  {
    slug: 'boca-raton',
    path: '/boca-raton/',
    city: 'Boca Raton',
    county: 'Palm Beach County',
    region: 'palm-beach',
    lat: 26.3683,
    lng: -80.1289,
    neighborhoods: ['East Boca', 'Downtown Boca', 'Camino Gardens', 'Boca West', 'Town Center'],
    nearby: ['Deerfield Beach', 'Delray Beach', 'Highland Beach'],
  },
];

export const mainLocation = locations[0];

export const locationsByRegion = (region: RegionId) => locations.filter((l) => l.region === region);

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

/** Add verbatim Google reviews here. Do not paraphrase or invent review text. */
export const reviews: Review[] = [];
