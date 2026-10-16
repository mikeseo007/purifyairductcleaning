import type { ImageMetadata } from 'astro';
import { locations, type Location } from './site';
import { photos } from './photos';

export interface LocationContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  heroImage: ImageMetadata;
  heroImageAlt: string;
  introHeading: string;
  intro: string[];
  introImage: ImageMetadata;
  introImageAlt: string;
  localHeading: string;
  local: string[];
  localImage: ImageMetadata;
  localImageAlt: string;
  faqs: { q: string; a: string }[];
}

const phone = '954-945-9428';

const jobPhotos = [
  photos.ductVentCleaning,
  photos.livingRoomCleaning,
  photos.hvacFilter,
  photos.dryerVentExterior,
  photos.ductInspection,
  photos.ceilingVentAccess,
  photos.negativeAirLadder,
  photos.serviceVanCrew,
];

const housing: Record<string, string> = {
  aventura: 'Williams Island and Turnberry towers use closet air handlers and short duct runs. Houses along Country Club Drive and in Waterways often have longer flex duct in a hot attic.',
  'north-miami-beach': 'Eastern Shores and Fulford homes mix single-family ductwork with low-rise condos. Closet air handlers and attic flex both show up on the same street.',
  'north-miami': 'Keystone and Sans Souci houses usually have attic flex duct. Condos closer to Biscayne have compact closet systems and long dryer vent runs.',
  'miami-gardens': 'Carol City, Andover and Norwood are mostly single-family homes with attic ductwork that stays hot and dusty through a long cooling season.',
  'fort-lauderdale': 'Las Olas and Victoria Park homes sit near downtown high-rises and Coral Ridge houses. Closet units, attic flex and older sheet-metal trunks all need a different setup.',
  hollywood: 'Hollywood Beach condos, Hollywood Lakes houses and Emerald Hills ranches do not share a duct layout. We plan the visit around the air handler we actually find.',
  'hallandale-beach': 'Three Islands and Gulfstream towers have closet air handlers and dryer vents that travel a long way to a roof or sidewall cap.',
  'pembroke-pines': 'Silver Lakes, Pembroke Falls and Chapel Trail are house-heavy, with flex duct in the attic and dryer vents that terminate on the roof or a side wall.',
  miramar: 'Sunset Lakes and the communities along Miramar Parkway are mostly single-family homes. Attic ductwork and clothes dryer vents are the usual scope.',
  davie: 'Davie and Pine Island Ridge homes often have attic systems. Western Davie houses can have long dryer vent runs to the exterior.',
  plantation: 'Plantation Acres and Jacaranda include larger homes with more than one air handler. Midtown condos are closer to a single closet unit.',
  sunrise: 'Sawgrass and Welleby mix townhomes and single-family houses. Attic heat loads the ducts, and lint builds in dryer vents that run through the garage.',
  lauderhill: 'Inverrary condos and the houses west of University Drive need different access. We confirm building rules before a tower visit.',
  'oakland-park': 'Coral Ridge Isles houses and the homes off Oakland Park Boulevard often have older duct trunks plus a clothes dryer vent that has not been cleaned in years.',
  'pompano-beach': 'Old Pompano cottages and Palm Aire homes sit in the same service area. Some have short sidewall dryer vents. Others have attic runs.',
  'deerfield-beach': 'The Cove and the houses west of Federal Highway use attic ductwork. Beach condos are more often a closet air handler and a long dryer riser.',
  'coconut-creek': 'Wynmoor and the Lyons Road communities include villas and single-family homes. Attic insulation and flex duct are often part of the same visit.',
  margate: 'Coral Gate and Oriole are established neighborhoods with attic systems that have been collecting dust for years between cleanings.',
  tamarac: 'Kings Point and Woodmont villas have compact air handlers. Larger houses toward Commercial Boulevard have longer supply runs.',
  'north-lauderdale': 'Most of North Lauderdale is single-family housing with attic ductwork. Dryer vents and supply runs are both common reasons for a call.',
  'coral-springs': 'Heron Bay, Eagle Trace and The Brooks are larger homes, often with two systems and attic flex that should be inspected before anyone promises a cleaning will fix a weak room.',
  weston: 'Weston Hills, Savanna and Bonaventure homes are larger houses with attic ductwork. A weak room is as likely to be a disconnected run as a dirty vent.',
  'boca-raton': 'East Boca condos and the houses around Town Center and Camino Gardens are at the north end of our area. Attic ductwork and closet air handlers both need vent cleaning planned for that building.',
  'sunny-isles-beach': 'Collins Avenue towers and Atlantic Isle buildings use closet air handlers and dryer vents that rise a long way to a roof cap.',
  'miami-lakes': 'Loch Lomond and Royal Oaks are mostly single-family homes with attic flex duct that stays hot through the cooling season.',
  hialeah: 'Palm Springs and Southeast Hialeah mix houses and small multi-family buildings. Attic ducts and closet air handlers both show up on the same block.',
  'delray-beach': 'Downtown Delray condos and the houses around Lake Ida do not share a duct layout. Beach buildings often have a long dryer riser.',
  'boynton-beach': 'Quantum Park and the houses off Boynton Beach Boulevard usually have attic flex. Oceanfront buildings are more often a closet air handler.',
  wellington: 'Olympia and Binks Forest are larger homes, often with attic ductwork and more than one air handler.',
};

const nearbyLinks = (loc: Location) =>
  loc.nearby
    .map((city) => {
      const match = locations.find((l) => l.city === city);
      return match ? `<a href="${match.path}">${match.city}</a>` : city;
    })
    .join(', ');

const build = (loc: Location, index: number): LocationContent => {
  const hero = jobPhotos[index % jobPhotos.length];
  const intro = jobPhotos[(index + 2) % jobPhotos.length];
  const local = jobPhotos[(index + 3) % jobPhotos.length];
  const places = loc.neighborhoods.slice(0, 3).join(', ');
  return {
    metaTitle: `Air Duct Cleaning in ${loc.city}, FL | Purify`,
    metaDescription: `Air duct cleaning in ${loc.city}, FL, plus vent cleaning, ductwork cleaning, air conditioning cleaning and clothes dryer vent cleaning. Call ${phone}.`,
    h1: `Air Duct Cleaning in ${loc.city}, FL`,
    heroSubtitle: `Air duct cleaning, AC vent cleaning and clothes dryer vent cleaning for homes and businesses in ${loc.city}.`,
    heroImage: hero.src,
    heroImageAlt: hero.alt,
    introHeading: `Air duct cleaning for ${loc.city} homes and businesses`,
    intro: [
      `Air duct cleaning in ${loc.city} removes the dust and debris sitting in the supply and return ducts that feed each room. Vent cleaning and ductwork cleaning are part of that same visit when the registers, trunks and accessible plenums need it. If the coil or air handler is matted, air conditioning cleaning belongs in the quote too.`,
      `${housing[loc.slug.replace('air-duct-cleaning-', '')] ?? housing[loc.city.toLowerCase()] ?? ''} We are based in Aventura and also serve ${nearbyLinks(loc)}.`,
    ],
    introImage: intro.src,
    introImageAlt: intro.alt,
    localHeading: `What we see in ${places}`,
    local: [
      housing[loc.slug.replace('air-duct-cleaning-', '')] ?? `Homes in ${loc.city} keep the air conditioner running most of the year, so dust collects in the ducts and lint collects in the dryer vent.`,
      `Clothes dryer vent cleaning is booked on its own or with air duct cleaning. A dryer that needs two cycles, or a vent cap that barely opens, is the usual sign the line is packed.`,
      `If a room never cools, start with an air duct inspection. Cleaning will not fix a crushed or disconnected run. AC duct replacement is the next step when the ductwork itself is damaged.`,
    ],
    localImage: local.src === hero.src ? intro.src : local.src,
    localImageAlt: local.src === hero.src ? intro.alt : local.alt,
    faqs: [
      {
        q: `Do you offer air duct cleaning in ${loc.city}?`,
        a: `Yes. Air duct cleaning in ${loc.city} covers supply and return ducts, registers and accessible plenums. Call ${phone} to schedule.`,
      },
      {
        q: 'Is vent cleaning the same as air duct cleaning?',
        a: 'Vent cleaning usually means the registers and the ducts behind them. Our air duct cleaning includes those vents plus the supply and return runs and the accessible plenums.',
      },
      {
        q: 'Do you clean clothes dryer vents in this city?',
        a: `Yes. Clothes dryer vent cleaning and dryer vent installation are available in ${loc.city}, including long condo runs when we can reach the termination.`,
      },
      {
        q: 'Do you clean the air conditioner, or only the ducts?',
        a: 'Air conditioning cleaning covers the evaporator coil, blower and air handler cabinet. Ductwork cleaning covers the runs. Many homes need both, and we will say so after we open the system.',
      },
      {
        q: 'How often should ducts be cleaned here?',
        a: 'Most homes do well every 3 to 5 years. South Florida systems run nearly year-round, so pets, renovations or dust at the vents are reasons to book sooner.',
      },
    ],
  };
};

const aventura: LocationContent = {
  metaTitle: 'Air Duct Cleaning in Aventura, FL | Purify',
  metaDescription: `Air duct cleaning in Aventura, FL. Vent cleaning, ductwork cleaning, air conditioning cleaning and clothes dryer vent cleaning for homes and businesses. Call ${phone}.`,
  h1: 'Air Duct Cleaning in Aventura, FL',
  heroSubtitle: 'Air duct cleaning, AC vent cleaning and clothes dryer vent cleaning for Aventura condos, houses and businesses.',
  heroImage: photos.ductVentCleaning.src,
  heroImageAlt: photos.ductVentCleaning.alt,
  introHeading: 'Aventura’s air duct cleaning company',
  intro: [
    'Air duct cleaning in Aventura starts with the supply and return ducts that run all year in this climate. Towers on Williams Island and Turnberry, houses along Country Club Drive, and offices on Biscayne Boulevard all push humid air through the same kind of buildup: dust in the ducts, lint in the dryer vent, and a wet coil inside the air handler.',
    `Purify Air Duct Cleaning is based at 20533 Biscayne Blvd #8. Vent cleaning, ductwork cleaning, air conditioning cleaning and clothes dryer vent cleaning are scheduled from that office for Aventura and nearby cities, including ${nearbyLinks(locations[0])}.`,
  ],
  introImage: photos.hvacFilter.src,
  introImageAlt: photos.hvacFilter.alt,
  localHeading: 'High-rises, houses and Biscayne storefronts',
  local: [
    'Most Aventura condos use a closet air handler with short duct runs beside the living space. We protect finished floors, follow building access rules, and clean the cabinet as well as the ducts when the coil is part of the problem.',
    'Houses in Waterways and along Country Club Drive often have longer flex runs. An inspection tells us whether a weak room is buildup or a disconnected duct that needs AC duct replacement.',
    'Clothes dryer vent cleaning is a separate visit we take seriously in towers. Long vertical runs pack with lint, and clothes that need two cycles are the usual warning.',
  ],
  localImage: photos.dryerVentExterior.src,
  localImageAlt: photos.dryerVentExterior.alt,
  faqs: [
    { q: 'Where is Purify Air Duct Cleaning located?', a: `Our office is at 20533 Biscayne Blvd #8, Aventura, FL 33180. Call ${phone} or email office@purifyairductcleaning.com.` },
    { q: 'Do you clean ducts in Aventura high-rises?', a: 'Yes. Williams Island, Turnberry and other condominium air handlers are a regular part of our air duct cleaning work. We coordinate with building management when a property requires it.' },
    { q: 'What does air duct cleaning include?', a: 'Supply and return ducts, registers, grilles and accessible plenums. That is the vent cleaning and ductwork cleaning most Aventura homes are asking for when they call.' },
    { q: 'Do you also clean dryer vents and the air conditioner?', a: 'Yes. Clothes dryer vent cleaning, dryer vent installation, air conditioning cleaning, HVAC mold treatment, AC duct replacement and attic insulation are available with the duct cleaning.' },
    { q: 'How often should Aventura ducts be cleaned?', a: 'Every 3 to 5 years for most homes, sooner after renovations, with pets, or when dust and musty air show up at the vents.' },
  ],
};

export const locationContent: Record<string, LocationContent> = Object.fromEntries(
  locations.map((loc, index) => [loc.slug, loc.slug === 'aventura' ? aventura : build(loc, index)]),
);
