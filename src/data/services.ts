import type { ImageMetadata } from 'astro';
import { photos } from './photos';

export type GroupId = 'duct' | 'hvac' | 'dryer' | 'insulation';

export interface ServiceGroup {
  id: GroupId;
  name: string;
  intro: string;
  hub: string;
  image: ImageMetadata;
  imageAlt: string;
  secondary?: boolean;
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'duct',
    name: 'Air Duct Cleaning Services',
    intro: 'Source removal cleaning, inspection and sanitizing for the supply and return ducts that move air through homes and businesses.',
    hub: '/air-duct-cleaning/',
    image: photos.ductVentCleaning.src,
    imageAlt: photos.ductVentCleaning.alt,
  },
  {
    id: 'hvac',
    name: 'HVAC & Air Conditioning Cleaning',
    intro: 'Air conditioning cleaning for coils, blowers and air handler cabinets, plus HVAC mold treatment on the wet parts of the system.',
    hub: '/hvac-cleaning/',
    image: photos.hvacFilter.src,
    imageAlt: photos.hvacFilter.alt,
  },
  {
    id: 'dryer',
    name: 'Dryer Vent Services',
    intro: 'Clothes dryer vent cleaning, dryer vent installation and commercial dryer vent cleaning, including long condo runs.',
    hub: '/dryer-vent-cleaning/',
    image: photos.dryerVentExterior.src,
    imageAlt: photos.dryerVentExterior.alt,
  },
  {
    id: 'insulation',
    name: 'Attic Insulation',
    intro: 'Attic insulation removal and blown-in attic insulation for South Florida homes.',
    hub: '/attic-insulation-removal/',
    image: photos.blowerWheel.src,
    imageAlt: photos.blowerWheel.alt,
  },
];

export const primaryGroups = serviceGroups.filter((g) => !g.secondary);
export const secondaryGroups = serviceGroups.filter((g) => g.secondary);

export type IconName =
  | 'duct'
  | 'home'
  | 'building'
  | 'sanitize'
  | 'search'
  | 'hvac'
  | 'droplet'
  | 'coil'
  | 'box'
  | 'sparkle'
  | 'dryer'
  | 'wind'
  | 'layers'
  | 'trash';

export interface Service {
  slug: string;
  path: string;
  name: string;
  group: GroupId;
  parent?: string;
  icon: IconName;
  card: string;
  image: ImageMetadata;
  imageAlt: string;
  secondImage: ImageMetadata;
  secondImageAlt: string;
  /** Optional distinct image for the service card (e.g. a Fort Lauderdale landing card). Falls back to `image`. */
  cardImage?: ImageMetadata;
  cardImageAlt?: string;
  /** Optional image for this service's Service schema when it should match the photo shown on the page rather than `image`. Falls back to `image`. */
  schemaImage?: ImageMetadata;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  introHeading: string;
  intro: string[];
  componentsHeading: string;
  components: { title: string; text: string }[];
  signsHeading: string;
  signs: string[];
  processHeading: string;
  process: { title: string; text: string }[];
  benefitsHeading: string;
  benefits: { title: string; text: string }[];
  note?: { heading: string; paragraphs: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
}

const a = (href: string, label: string) => `<a href="${href}">${label}</a>`;

export const services: Service[] = [
  {
    slug: 'air-duct-cleaning',
    path: '/air-duct-cleaning/',
    name: 'Air Duct Cleaning',
    group: 'duct',
    icon: 'duct',
    card: 'Air duct cleaning for supply and return ducts, registers and accessible plenums.',
    image: photos.ductVentCleaning.src,
    imageAlt: photos.ductVentCleaning.alt,
    secondImage: photos.livingRoomCleaning.src,
    secondImageAlt: photos.livingRoomCleaning.alt,
    metaTitle: 'Air Duct Cleaning Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning provides air duct cleaning, vent cleaning, and ductwork cleaning for dusty vents and weak airflow. Book your service today.',
    h1: 'Air Duct Cleaning in Aventura, FL',
    heroSubtitle: 'Air duct cleaning, vent cleaning and ductwork cleaning for homes, condos and businesses in Aventura and nearby cities.',
    introHeading: 'A full-system duct cleaning, not a vent wipe',
    intro: [
      'Air duct cleaning in Aventura removes the dust that collects in supply and return ducts while the air conditioner runs most of the year. People also call this vent cleaning or ductwork cleaning. It is the ducts and registers, not a wipe of the grille.',
      `Purify Air Duct Cleaning does that work under negative pressure from our Aventura office. If the coil or air handler is the source of weak airflow or a musty smell, add ${a('/hvac-cleaning/', 'air conditioning cleaning')}. Clothes that take two cycles to dry are a ${a('/dryer-vent-cleaning/', 'clothes dryer vent cleaning')} job, not a duct job.`,
    ],
    componentsHeading: 'What a duct cleaning includes',
    components: [
      { title: 'Supply ducts', text: 'The runs that deliver cooled air to each room, including flex duct and accessible sheet-metal trunks.' },
      { title: 'Return ducts', text: 'The larger returns that pull room air back to the air handler, where dust often collects first.' },
      { title: 'Registers and grilles', text: 'Supply registers and return grilles are removed, cleaned and reinstalled.' },
      { title: 'Accessible plenums', text: 'The supply and return boxes at the air handler are vacuumed when they can be reached safely.' },
    ],
    signsHeading: 'Signs your ducts may need cleaning',
    signs: [
      'Dust collecting on furniture soon after you clean',
      'Visible debris or gray film inside supply vents',
      'It has been several years since the last cleaning',
      'Recent renovation, drywall or flooring work',
      'Pets, or someone in the home with allergies',
      'Musty air when the system first turns on',
    ],
    processHeading: 'How we clean air ducts',
    process: [
      { title: 'Walk the system', text: 'We count vents, find the air handler and note access before any equipment is set up.' },
      { title: 'Protect the work area', text: 'Floors and nearby furnishings are covered, and registers come off for cleaning.' },
      { title: 'Clean under negative air', text: 'A collection unit holds the system under negative pressure while brushes and air whips loosen debris.' },
      { title: 'Reset and review', text: 'Registers go back on, the filter is checked, and we walk you through what we found.' },
    ],
    benefitsHeading: 'Why homeowners book a duct cleaning',
    benefits: [
      { title: 'Less dust in the air path', text: 'Debris that was sitting in the ducts is removed instead of recirculated.' },
      { title: 'Clearer airflow', text: 'Open ducts and clean registers help the system move the air it was designed to move.' },
      { title: 'A look at the system', text: 'Cleaning is a chance to spot crushed flex, loose connections or a coil that needs its own service.' },
      { title: 'Homes and businesses', text: 'The same source-removal approach scales from a condo closet unit to a small commercial system.' },
    ],
    faqs: [
      { q: 'How often should air ducts be cleaned in Aventura?', a: 'Most homes do well every 3 to 5 years. Because air conditioners here run nearly year-round, homes with pets, renovations or heavy dust at the vents often benefit sooner.' },
      { q: 'Do you clean condo ductwork?', a: 'Yes. Closet air handlers and short condo runs are common in Aventura, Sunny Isles Beach and Hallandale Beach. We coordinate with building management when access rules require it.' },
      { q: 'Will duct cleaning fix a musty smell by itself?', a: 'Sometimes the smell is in the ducts. Often it starts on a wet coil or drain pan. We will tell you if HVAC cleaning is the better next step.' },
      { q: 'Do you use chemicals as the cleaning?', a: 'No. Cleaning is mechanical source removal. Sanitizing is a separate treatment after the ducts are clean, and only when it is useful.' },
    ],
    related: ['residential-air-duct-cleaning', 'commercial-air-duct-cleaning', 'dryer-vent-cleaning', 'hvac-cleaning'],
  },
  {
    slug: 'residential-air-duct-cleaning',
    path: '/residential-air-duct-cleaning/',
    name: 'Residential Air Duct Cleaning',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'home',
    card: 'Duct cleaning for houses, townhomes and condos, including closet air handlers.',
    image: photos.ceilingVentAccess.src,
    imageAlt: photos.ceilingVentAccess.alt,
    secondImage: photos.ductVentCleaning.src,
    secondImageAlt: photos.ductVentCleaning.alt,
    metaTitle: 'Residential Air Duct Cleaning - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning offers residential air duct cleaning for homes and condos with dusty vents, allergens, and weak airflow. Book today.',
    h1: 'Residential Air Duct Cleaning',
    heroSubtitle: 'Duct cleaning planned around the system in your house, townhome or condominium.',
    introHeading: 'Built for South Florida homes',
    intro: [
      'A Williams Island condo and a single-family home in North Miami Beach do not share the same duct layout. Condos often have a closet air handler and short runs. Houses often have long flex duct in a hot attic. We set up the job for the system you actually have.',
      `Residential cleaning covers the supply and return ducts that serve the living space. Pair it with ${a('/dryer-vent-cleaning/', 'dryer vent cleaning')} when laundry cycles have gotten longer, or with ${a('/hvac-cleaning/', 'HVAC cleaning')} when the coil is matted with dust.`,
    ],
    componentsHeading: 'Home systems we clean',
    components: [
      { title: 'Closet air handlers', text: 'Common in Aventura and Sunny Isles towers, with compact ductwork next to living space.' },
      { title: 'Attic flex duct', text: 'Longer runs in houses across North Miami, Miami Gardens and western Broward.' },
      { title: 'Multiple zones', text: 'Two-story homes and larger condos with more than one air handler.' },
      { title: 'Returns and supplies', text: 'Both sides of the air path, plus the registers you see in each room.' },
    ],
    signsHeading: 'When a home cleaning helps',
    signs: [
      'You just moved in and do not know the last time ducts were cleaned',
      'Renovation dust is still showing up at the vents',
      'A pet sheds, and dust builds up quickly',
      'Bedrooms feel stuffy compared with the rest of the home',
      'The return grille is coated with debris',
      'Allergy symptoms seem worse indoors',
    ],
    processHeading: 'What to expect at your home',
    process: [
      { title: 'Confirm access', text: 'We check parking, elevator rules and air-handler location before the crew arrives.' },
      { title: 'Protect floors', text: 'Drop cloths go down along the work path, especially in finished condos.' },
      { title: 'Clean the duct runs', text: 'Each accessible supply and return is agitated and vacuumed into the collection unit.' },
      { title: 'Show the result', text: 'We reinstall registers and point out anything that cleaning will not fix, such as a crushed run.' },
    ],
    benefitsHeading: 'Why residents call Purify',
    benefits: [
      { title: 'Condo-aware crews', text: 'We work within building hours and loading rules when a property requires it.' },
      { title: 'House and high-rise', text: 'The same company handles a Golden Beach home and a Collins Avenue tower.' },
      { title: 'Honest scope', text: 'We recommend only the services the system needs after we look at it.' },
      { title: 'Open around the clock', text: 'You can call any day to book a time that fits the household.' },
    ],
    faqs: [
      { q: 'Can you clean ducts in a two-story home?', a: 'Yes. We clean each air handler and the runs it serves, including upstairs and downstairs zones.' },
      { q: 'How long does a typical home take?', a: 'Many condos and smaller homes are finished in a few hours. Larger houses with two systems take longer. We give you a time window when we schedule.' },
      { q: 'Should I replace the filter first?', a: 'Leave the current filter in place so we can see what the system has been collecting. We will tell you if it should be changed before we leave.' },
      { q: 'Do you clean dryer vents on the same visit?', a: 'Often, yes. Ask when you book and we will plan both services together.' },
    ],
    related: ['air-duct-cleaning', 'air-duct-inspection', 'hvac-cleaning', 'dryer-vent-cleaning'],
  },
  {
    slug: 'commercial-air-duct-cleaning',
    path: '/commercial-air-duct-cleaning/',
    name: 'Commercial Air Duct Cleaning',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'building',
    card: 'Duct cleaning for offices, retail and other small commercial buildings, scheduled around your hours.',
    image: photos.negativeAirHose.src,
    imageAlt: photos.negativeAirHose.alt,
    secondImage: photos.ductVentCleaning.src,
    secondImageAlt: photos.ductVentCleaning.alt,
    metaTitle: 'Commercial Air Duct Cleaning - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning handles commercial air duct cleaning for offices and retail with dusty diffusers and stale air. Get a free quote today.',
    h1: 'Commercial Air Duct Cleaning',
    heroSubtitle: 'Duct cleaning for offices, retail and other workplaces, planned around the way your business operates.',
    introHeading: 'Cleaner air paths for the workday',
    intro: [
      'Offices and shops along Biscayne Boulevard, in Hollywood and in Fort Lauderdale move a lot of air through shared systems. Dust at the diffusers, stale rooms and filters that load up quickly are common reasons managers call.',
      `We clean commercial ductwork with collection equipment sized for the system, and we schedule around customers and staff. For the equipment itself, add ${a('/hvac-cleaning/', 'HVAC cleaning')}. Multi-unit laundry rooms are covered under ${a('/commercial-dryer-vent-cleaning/', 'commercial dryer vent cleaning')}.`,
    ],
    componentsHeading: 'Commercial systems we service',
    components: [
      { title: 'Office diffusers', text: 'Supply diffusers and return grilles in open offices and private suites.' },
      { title: 'Retail and salons', text: 'Systems that collect hair, dust and outdoor air near busy storefronts.' },
      { title: 'Accessible trunks', text: 'Main supply and return trunks we can reach without opening finished ceilings unnecessarily.' },
      { title: 'Package units', text: 'Rooftop and closet package units serving a single tenant space.' },
    ],
    signsHeading: 'When a business should book',
    signs: [
      'Dust rings around ceiling diffusers',
      'Employees mention stale or dusty air',
      'A build-out or remodel just finished',
      'Filters clog faster than the maintenance schedule expects',
      'You are preparing for a lease turnover',
      'It has been years since the ducts were cleaned',
    ],
    processHeading: 'How commercial jobs are scheduled',
    process: [
      { title: 'Review the space', text: 'We confirm system count, access and any building rules before quoting.' },
      { title: 'Pick a window', text: 'Early mornings, evenings or closed days keep the work out of the customer path.' },
      { title: 'Clean and contain', text: 'Debris goes into the collection unit, not onto desks or sales floors.' },
      { title: 'Leave the space ready', text: 'Diffusers are reset and the work area is cleared before we leave.' },
    ],
    benefitsHeading: 'Why businesses choose Purify',
    benefits: [
      { title: 'Scheduling that respects hours', text: 'We work when the space can be opened without interrupting customers.' },
      { title: 'Local crews', text: 'The office is on Biscayne Boulevard in Aventura, close to Hallandale, Hollywood and Sunny Isles.' },
      { title: 'Clear scope', text: 'The quote lists the systems and what cleaning does not include.' },
      { title: 'Indoor air focus', text: 'Duct cleaning is one part of keeping a workplace comfortable, alongside filter changes and coil care.' },
    ],
    faqs: [
      { q: 'Can you work after we close?', a: 'Yes. After-hours and early-morning appointments are a normal part of commercial scheduling.' },
      { q: 'Do you clean restaurants?', a: 'We clean accessible HVAC ductwork in restaurants and other businesses. Grease exhaust hoods are a different trade and are not part of this service.' },
      { q: 'Will you need to open the ceiling?', a: 'Only if that is the only way to reach a section we agreed to clean. We discuss access before work starts.' },
      { q: 'Do you service more than one suite?', a: 'Yes. Multi-suite jobs are quoted per system so each tenant space is accounted for.' },
    ],
    related: ['air-duct-cleaning', 'hvac-cleaning', 'air-duct-inspection', 'commercial-dryer-vent-cleaning'],
  },
  {
    slug: 'air-duct-sanitizing',
    path: '/air-duct-sanitizing/',
    name: 'Air Duct Sanitizing',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'sanitize',
    card: 'An antimicrobial treatment applied after duct cleaning when odors remain in the air path.',
    image: photos.livingRoomCleaning.src,
    imageAlt: photos.livingRoomCleaning.alt,
    secondImage: photos.hvacFilter.src,
    secondImageAlt: photos.hvacFilter.alt,
    metaTitle: 'Air Duct Sanitizing Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning offers air duct sanitizing to treat lingering odors and freshen duct surfaces for cleaner indoor air. Add it to your visit today.',
    h1: 'Air Duct Sanitizing',
    heroSubtitle: 'A treatment for duct surfaces after the dust and debris have already been removed.',
    introHeading: 'Sanitizing follows cleaning. It does not replace it.',
    intro: [
      'Spraying a fragrance into a dirty duct does not clean it. Sanitizing is useful after source removal, when the duct surfaces are clear and an odor is still hanging in the air path.',
      `We apply sanitizing products only after ${a('/air-duct-cleaning/', 'air duct cleaning')}. If the odor is coming from a wet coil or drain pan, ${a('/hvac-mold-treatment/', 'HVAC mold treatment')} is the service that addresses that source.`,
    ],
    componentsHeading: 'Where sanitizing is applied',
    components: [
      { title: 'Clean duct interiors', text: 'Supply and return surfaces that were just mechanically cleaned.' },
      { title: 'Registers', text: 'Grilles that sit in the living space and can hold odor after cleaning.' },
      { title: 'Accessible plenums', text: 'The boxes at the air handler, when they are part of the cleaning scope.' },
      { title: 'Not a cover-up', text: 'We do not fog a dirty system and call it sanitized.' },
    ],
    signsHeading: 'When sanitizing is worth adding',
    signs: [
      'A stale odor remains after the ducts are cleaned',
      'The home sat closed up for a long stretch',
      'You want an extra step after a renovation cleanup',
      'A previous company only wiped the vents',
      'Return air still smells dusty after cleaning',
      'You are preparing a rental between tenants',
    ],
    processHeading: 'How sanitizing is done',
    process: [
      { title: 'Clean first', text: 'Debris is removed so the treatment reaches the duct surface.' },
      { title: 'Apply the product', text: 'A sanitizer labeled for HVAC use is applied to the cleaned surfaces.' },
      { title: 'Ventilate', text: 'The system is run so the space airs out before you settle back in.' },
      { title: 'Explain the limits', text: 'Sanitizing is not mold testing and it is not a medical treatment.' },
    ],
    benefitsHeading: 'What sanitizing adds',
    benefits: [
      { title: 'Treats the surface', text: 'It addresses what is left on clean metal and duct board, not the pile of dust that was removed.' },
      { title: 'Paired with cleaning', text: 'You are not paying for a spray on top of a dirty system.' },
      { title: 'Optional, not automatic', text: 'We recommend it when there is a reason, not on every job.' },
      { title: 'Same visit', text: 'It can be added at the end of a duct cleaning without a second trip.' },
    ],
    note: {
      heading: 'What sanitizing is not',
      paragraphs: [
        'Sanitizing does not test for mold and it does not treat mold on walls, ceilings or insulation. If growth is outside the HVAC system, a qualified remediation contractor should look at the building materials.',
      ],
    },
    faqs: [
      { q: 'Is sanitizing the same as duct cleaning?', a: 'No. Cleaning physically removes debris. Sanitizing is a treatment applied after that debris is gone.' },
      { q: 'Will it leave a strong smell?', a: 'Products vary. We use HVAC-appropriate sanitizers and let the system air out. We do not use perfume to mask odors.' },
      { q: 'Can I book sanitizing alone?', a: 'Only if the ducts were recently cleaned and are still clear. On a dirty system we clean first.' },
      { q: 'Does this remove mold?', a: 'It is not a mold test and not a guarantee that mold is gone. Suspected growth on the coil or drain pan is handled as HVAC mold cleaning.' },
    ],
    related: ['air-duct-cleaning', 'hvac-mold-treatment', 'hvac-cleaning', 'air-duct-inspection'],
  },
  {
    slug: 'air-duct-inspection',
    path: '/air-duct-inspection/',
    name: 'Ductwork Inspection',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'search',
    card: 'A look inside accessible ducts and at the air handler before you decide on cleaning or repairs.',
    image: photos.ductInspection.src,
    imageAlt: photos.ductInspection.alt,
    secondImage: photos.techBlueprint.src,
    secondImageAlt: photos.techBlueprint.alt,
    metaTitle: 'Air Duct Inspection Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning provides air duct inspection to check ducts, weak airflow, and uneven rooms before work. Book an inspection today.',
    h1: 'Ductwork Inspection and Maintenance',
    heroSubtitle: 'Find out whether you need cleaning, a repair, or both, before any work is sold.',
    introHeading: 'Start with what the system is actually doing',
    intro: [
      'Uneven rooms, whistling vents and dust at one register can come from buildup, or from a disconnected flex run in the attic. An inspection tells those apart.',
      `We check accessible ducts, connections and the air handler, then recommend a plan. That plan might be ${a('/air-duct-cleaning/', 'air duct cleaning')}, ${a('/hvac-cleaning/', 'air conditioning cleaning')}, or ${a('/ac-duct-replacement/', 'AC duct replacement')} when a run is crushed or disconnected.`,
    ],
    componentsHeading: 'What we look at',
    components: [
      { title: 'Supply and return openings', text: 'Registers, grilles and the first few feet of duct behind them.' },
      { title: 'Accessible runs', text: 'Attic or closet duct we can reach without destructive opening.' },
      { title: 'Connections', text: 'Collars and joints that have pulled loose or been crushed.' },
      { title: 'Air handler area', text: 'Filter, coil face and drain pan, where many odor and airflow problems start.' },
    ],
    signsHeading: 'Good reasons to book an inspection',
    signs: [
      'One room never cools with the rest of the house',
      'You hear whistling or rattling at a vent',
      'A ceiling stain appeared under a duct',
      'You are buying a home and want the ducts checked',
      'Airflow dropped after other attic work',
      'You want a maintenance interval instead of guessing',
    ],
    processHeading: 'How an inspection works',
    process: [
      { title: 'Listen to the complaint', text: 'We start with the rooms and symptoms you have already noticed.' },
      { title: 'Open accessible points', text: 'Registers and the air handler are checked, and a camera is used where it helps.' },
      { title: 'Separate cleaning from repair', text: 'Buildup can be cleaned. Torn or disconnected duct cannot.' },
      { title: 'Leave a recommendation', text: 'You get a clear next step and a quote only for work that matches the finding.' },
    ],
    benefitsHeading: 'Why inspect before you clean',
    benefits: [
      { title: 'No guessed scope', text: 'The recommendation follows what we can see.' },
      { title: 'Repairs are named honestly', text: 'If a run is crushed, we say so instead of promising cleaning will fix the room.' },
      { title: 'A maintenance rhythm', text: 'After the first visit you know when to check the system again.' },
      { title: 'Useful before a purchase', text: 'Buyers can see the condition of accessible ductwork before closing.' },
    ],
    faqs: [
      { q: 'Is an inspection required before cleaning?', a: 'We look at the system at the start of every cleaning. A standalone inspection is for people who want findings before they approve a larger job.' },
      { q: 'Can you see the entire duct system?', a: 'We inspect what is accessible. Finished ceilings and buried runs are described as unseen rather than guessed.' },
      { q: 'Do you repair ducts?', a: 'Our work is cleaning, sanitizing and HVAC component cleaning. If a run needs replacement, we tell you and you can hire a duct contractor for that repair.' },
      { q: 'How long does an inspection take?', a: 'Most homes take under an hour once we are on site, depending on access and the number of systems.' },
    ],
    related: ['air-duct-cleaning', 'ac-duct-replacement', 'hvac-cleaning', 'residential-air-duct-cleaning'],
  },
  {
    slug: 'hvac-cleaning',
    path: '/hvac-cleaning/',
    name: 'HVAC System Cleaning',
    group: 'hvac',
    icon: 'hvac',
    card: 'Cleaning for the coil, blower, drain pan and air handler cabinet, not just the vents.',
    image: photos.hvacFilter.src,
    imageAlt: photos.hvacFilter.alt,
    secondImage: photos.blowerWheel.src,
    secondImageAlt: photos.blowerWheel.alt,
    metaTitle: 'HVAC Cleaning Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning offers HVAC cleaning for dirty coils, blowers, and air handlers with weak airflow and musty odors. Book your service today.',
    h1: 'HVAC System Cleaning in Aventura',
    heroSubtitle: 'Deep cleaning of the equipment that cools the air, including coils, fans and the air handler cabinet.',
    introHeading: 'The ducts are only half of the air path',
    intro: [
      'In this climate the evaporator coil and drain pan stay wet for months. Dust that reaches those surfaces sticks. The result is weaker airflow and the musty smell many residents notice when the AC starts.',
      `HVAC cleaning covers the equipment. ${a('/air-duct-cleaning/', 'Air duct cleaning')} covers the runs that carry air to the rooms. Many homes need both, and we will say so after we open the cabinet.`,
    ],
    componentsHeading: 'Equipment we clean',
    components: [
      { title: 'Evaporator coil', text: 'The cold coil where humidity condenses and dust mats up.' },
      { title: 'Blower and wheel', text: 'The fan that moves air, including the blades that hide dust.' },
      { title: 'Drain pan', text: 'The pan and accessible drain line area that should carry condensate away.' },
      { title: 'Cabinet interior', text: 'The air handler housing around those parts.' },
    ],
    signsHeading: 'Signs the equipment needs cleaning',
    signs: [
      'Musty odor for the first few minutes of each cycle',
      'Airflow that has slowly gotten weaker',
      'A filter that looks clean but rooms still feel stale',
      'Water around the air handler',
      'Visible dirt on the coil face',
      'The system runs longer to reach the set temperature',
    ],
    processHeading: 'How HVAC cleaning is done',
    process: [
      { title: 'Shut the system down', text: 'Power is off before the cabinet is opened.' },
      { title: 'Expose the coil and blower', text: 'Panels come off so we can see the parts that actually need cleaning.' },
      { title: 'Clean and rinse', text: 'Coil cleaner and mechanical cleaning remove the mat of dust. The blower and pan are cleaned too.' },
      { title: 'Check the drain', text: 'We confirm condensate has a path out, then close the cabinet and restore power.' },
    ],
    benefitsHeading: 'What a clean system changes',
    benefits: [
      { title: 'Air can cross the coil', text: 'A matted coil is a common reason rooms feel weak even when the outdoor unit runs.' },
      { title: 'Less musty startup', text: 'Cleaning the wet surfaces often reduces the odor those surfaces were producing.' },
      { title: 'A real look inside', text: 'Opening the cabinet shows leaks, a full pan or a blower that is packed with dust.' },
      { title: 'Works with duct cleaning', text: 'Cleaning both sides of the system keeps debris from moving back and forth.' },
    ],
    faqs: [
      { q: 'Is HVAC cleaning the same as a tune-up?', a: 'No. A tune-up checks refrigerant, electrical parts and operation. This service cleans the air-side components. We do not recharge refrigerant.' },
      { q: 'Will this lower my power bill?', a: 'A dirty coil makes the system work harder. Cleaning can help it move air as designed. We do not promise a specific dollar savings.' },
      { q: 'Do you clean the outdoor condenser?', a: 'The indoor coil, blower and cabinet are the focus. We can rinse a moderately dirty outdoor coil when it is part of the visit. Badly damaged outdoor equipment needs an HVAC repair company.' },
      { q: 'How often should this be done?', a: 'Many South Florida systems benefit every 1 to 2 years, sooner if pets, renovations or a musty smell show up.' },
    ],
    related: ['hvac-mold-treatment', 'air-duct-cleaning', 'air-duct-sanitizing', 'ac-duct-replacement'],
  },
  {
    slug: 'hvac-mold-treatment',
    path: '/hvac-mold-treatment/',
    name: 'HVAC Mold Treatment',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'droplet',
    card: 'Cleaning of suspected microbial buildup on coils, drain pans and other wet HVAC parts.',
    image: photos.blowerWheel.src,
    imageAlt: photos.blowerWheel.alt,
    secondImage: photos.coilCleaning.src,
    secondImageAlt: photos.coilCleaning.alt,
    metaTitle: 'HVAC Mold Treatment Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning provides HVAC mold treatment for musty coils, drain pans, and blowers behind stale AC odors. Book your treatment today.',
    h1: 'HVAC Mold Treatment in Aventura, FL',
    heroSubtitle: 'Cleaning for musty systems and suspected growth on the wet parts of the air conditioner.',
    introHeading: 'Humidity makes the coil a likely source',
    intro: [
      'A musty smell from the vents is one of the most common calls we get from Aventura condos and Broward homes. The usual place to look is the evaporator coil, drain pan and blower, where moisture and dust sit together.',
      `This is a cleaning service, not a lab test. We do not sample for mold. If you need confirmation, a qualified indoor-air professional should test before or after cleaning. Widespread growth on drywall or insulation is outside this scope. See also ${a('/air-duct-sanitizing/', 'air duct sanitizing')} when the odor is in the ducts after the equipment is clean.`,
    ],
    componentsHeading: 'Where we clean suspected buildup',
    components: [
      { title: 'Evaporator coil', text: 'The wet coil face and accessible fins.' },
      { title: 'Drain pan', text: 'Standing water and slime in the pan are cleaned and the drain path is checked.' },
      { title: 'Blower housing', text: 'The cabinet walls around the fan, where film collects.' },
      { title: 'Nearby duct openings', text: 'The first sections of duct at the air handler, when they show the same film.' },
    ],
    signsHeading: 'When to ask about mold cleaning',
    signs: [
      'A sour or musty smell every time the AC starts',
      'Visible dark film on the coil or in the pan',
      'The drain pan overflows or the line clogs often',
      'A closet air handler smells when the door is opened',
      'Symptoms improve when you leave the building',
      'A prior cleaning only wiped the room vents',
    ],
    processHeading: 'How the cleaning is handled',
    process: [
      { title: 'Confirm the source', text: 'We open the air handler and look for wet, dirty components rather than guessing from the smell alone.' },
      { title: 'Contain the work', text: 'The cabinet is cleaned so debris is captured, not blown through the home.' },
      { title: 'Clean the wet parts', text: 'Coil, pan and blower housing are cleaned. A sanitizing step is included when the surfaces need it.' },
      { title: 'Tell you what remains', text: 'If the pan will not drain or growth is on building materials, we say so.' },
    ],
    benefitsHeading: 'What this service is for',
    benefits: [
      { title: 'Targets the wet zone', text: 'That is where musty odors usually start in this climate.' },
      { title: 'Straight about testing', text: 'We clean. We do not pretend a visual check is a mold test.' },
      { title: 'Pairs with duct cleaning', text: 'Once the source is cleaned, the ducts can be cleaned so they are not redistributing debris.' },
      { title: 'Local and available daily', text: 'Call any day, including weekends, to book an inspection.' },
    ],
    note: {
      heading: 'A clear limit',
      paragraphs: [
        'Not every dirty vent is mold. Most buildup is ordinary dust. Mold cannot be confirmed by sight. If you suspect growth on walls, ceilings or insulation, contact a qualified mold professional for those materials.',
      ],
    },
    faqs: [
      { q: 'Do you test for mold?', a: 'No. We clean HVAC components and accessible ductwork. Testing requires sampling and a lab.' },
      { q: 'Will the smell be gone the same day?', a: 'Many customers notice a difference once the coil and pan are clean. If moisture keeps returning, the drain or a building leak has to be fixed or the odor can come back.' },
      { q: 'Is this the same as air duct sanitizing?', a: 'No. HVAC mold treatment focuses on the wet equipment: the coil, drain pan and blower housing. Air duct sanitizing is a treatment for duct surfaces after they have been cleaned.' },
      { q: 'Can you treat the whole condo?', a: 'We treat the HVAC system and accessible ducts. Walls, carpets and contents are not part of this service.' },
    ],
    related: ['hvac-cleaning', 'air-duct-sanitizing', 'air-duct-cleaning', 'air-duct-inspection'],
  },
  {
    slug: 'dryer-vent-cleaning',
    path: '/dryer-vent-cleaning/',
    name: 'Dryer Vent Cleaning',
    group: 'dryer',
    icon: 'dryer',
    card: 'Clothes dryer vent cleaning for the full vent run, including long condo lines and roof caps.',
    image: photos.dryerVentExterior.src,
    imageAlt: photos.dryerVentExterior.alt,
    secondImage: photos.serviceVanCrew.src,
    secondImageAlt: photos.serviceVanCrew.alt,
    metaTitle: 'Dryer Vent Cleaning Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning offers dryer vent cleaning to clear lint, shorten long dry times, and reduce fire risk at home. Schedule your service today.',
    h1: 'Dryer Vent Cleaning in Aventura, FL',
    heroSubtitle: 'Clothes dryer vent cleaning that clears the lint making dryers run long and raising fire risk.',
    introHeading: 'The lint trap is not the whole vent',
    intro: [
      'The screen in the dryer door catches only part of the lint. The rest travels through the hose and the vent line to an exterior or roof cap. In high-rises that line can be long, and lint packs the elbows first.',
      `The U.S. Fire Administration reports that failure to clean is the leading factor in home clothes dryer fires. A clogged vent also means hot, long cycles and extra wear on the dryer. We brush and vacuum the full run we can access. If the line is crushed, foil, or missing, see ${a('/dryer-vent-installation/', 'dryer vent installation')}.`,
    ],
    componentsHeading: 'What dryer vent cleaning covers',
    components: [
      { title: 'Transition hose', text: 'The connector behind the dryer, a common place for crushed or lint-filled flex.' },
      { title: 'The vent run', text: 'In-wall or ceiling duct from the laundry room to the outside.' },
      { title: 'Exterior cap', text: 'The hood or roof cap, cleared so the flapper can open.' },
      { title: 'Airflow check', text: 'We confirm the dryer can exhaust before we leave.' },
    ],
    signsHeading: 'Signs the dryer vent is clogged',
    signs: [
      'Clothes need two cycles to dry',
      'The dryer, laundry room or clothes feel very hot',
      'A burning or musty smell while drying',
      'The exterior flap barely opens',
      'Lint around the dryer hookup',
      'It has been more than a year since the last cleaning',
    ],
    processHeading: 'How we clean a dryer vent',
    process: [
      { title: 'Pull the dryer', text: 'We disconnect the transition and inspect the first foot of duct.' },
      { title: 'Brush the run', text: 'A rotary brush works through the line while vacuum captures the lint.' },
      { title: 'Clear the cap', text: 'The outside termination is opened and cleaned.' },
      { title: 'Test a cycle', text: 'Airflow is checked and the dryer is reconnected.' },
    ],
    benefitsHeading: 'Why this is a separate service',
    benefits: [
      { title: 'Fire risk', text: 'Lint in the vent is fuel. Cleaning it out is basic dryer safety.' },
      { title: 'Shorter cycles', text: 'Air that can leave the dryer lets clothes dry in one cycle again.' },
      { title: 'Condo experience', text: 'Long vertical runs in towers are a regular part of our work.' },
      { title: 'Same-day options', text: 'Call any day if the dryer is already overheating or barely drying.' },
    ],
    faqs: [
      { q: 'How quickly can you come if the vent is clogged?', a: 'Call 954-945-9428. We are open 24 hours and schedule clogged vents as soon as a crew is free, including same-day when the route allows.' },
      { q: 'How often should a dryer vent be cleaned?', a: 'About once a year for a typical household, sooner if you dry heavy loads every day or the run is long.' },
      { q: 'Do you clean the dryer itself?', a: 'We clean the vent system. We do not rebuild the dryer. If the internal blower is failing, an appliance tech should look at the machine.' },
      { q: 'What if the vent is crushed in the wall?', a: 'We will show you. A crushed or disconnected line needs repair or a new run, which we will describe rather than pretend brushing will fix it.' },
    ],
    related: ['dryer-vent-installation', 'commercial-dryer-vent-cleaning', 'air-duct-cleaning', 'hvac-cleaning'],
  },
  {
    slug: 'commercial-dryer-vent-cleaning',
    path: '/commercial-dryer-vent-cleaning/',
    name: 'Commercial Dryer Vent Cleaning',
    group: 'dryer',
    parent: 'dryer-vent-cleaning',
    icon: 'wind',
    card: 'Scheduled lint removal for laundry rooms, multi-unit buildings and small commercial dryers.',
    image: photos.dryerVentExterior.src,
    imageAlt: photos.dryerVentExterior.alt,
    secondImage: photos.serviceVanCrew.src,
    secondImageAlt: photos.serviceVanCrew.alt,
    metaTitle: 'Commercial Dryer Vent Cleaning - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning handles commercial dryer vent cleaning for shared laundry rooms and multi-unit buildings. Request service today.',
    h1: 'Commercial Dryer Vent Cleaning',
    heroSubtitle: 'Lint removal for shared laundry rooms and buildings with more than one dryer.',
    introHeading: 'Shared vents collect lint faster',
    intro: [
      'Condo laundry rooms and small commercial dryers move more loads through the same chase. Lint builds at the elbows and at the roof cap, and one neglected run can affect every machine on the line.',
      `We clean commercial and multi-unit dryer vents on a schedule the building can live with. HVAC ductwork in the same property is quoted separately as ${a('/commercial-air-duct-cleaning/', 'commercial air duct cleaning')}.`,
    ],
    componentsHeading: 'Buildings we service',
    components: [
      { title: 'Condo laundry rooms', text: 'Stacked or side-by-side machines with a shared or individual riser.' },
      { title: 'Salon and hotel laundry', text: 'Higher daily volume and longer run times.' },
      { title: 'Roof and sidewall caps', text: 'Terminations that lint seals shut.' },
      { title: 'Accessible risers', text: 'Vertical lines we can brush without opening finished shafts we were not approved to enter.' },
    ],
    signsHeading: 'When a building should schedule service',
    signs: [
      'Residents report long dry times',
      'Lint is packed at the cleanout or roof cap',
      'The laundry room runs hot',
      'It has been over a year since the last vent service',
      'A machine was just replaced and the vent was not checked',
      'The association wants a recurring schedule',
    ],
    processHeading: 'How building jobs run',
    process: [
      { title: 'Map the runs', text: 'We confirm how many machines and where they terminate.' },
      { title: 'Coordinate access', text: 'Roof, laundry room and machine shutdowns are planned with management.' },
      { title: 'Clean each line', text: 'Brushing and vacuuming remove lint from the runs we can access.' },
      { title: 'Report what we could not reach', text: 'Blocked chases or damaged risers are written up instead of ignored.' },
    ],
    benefitsHeading: 'Why properties use a schedule',
    benefits: [
      { title: 'Less fire load', text: 'Lint is removed before it packs a riser.' },
      { title: 'Fewer resident complaints', text: 'Dryers that exhaust properly finish loads.' },
      { title: 'Documented visits', text: 'Management gets a record of what was cleaned.' },
      { title: 'Local response', text: 'Aventura, Hallandale and Hollywood buildings are close to our office.' },
    ],
    faqs: [
      { q: 'Can you service a whole condo laundry room?', a: 'Yes. We quote by the number of vents and the access we will have.' },
      { q: 'Do you need the roof?', a: 'If the vents terminate on the roof, yes. We work with building access rules and weather.' },
      { q: 'How often should a laundry room be cleaned?', a: 'High-use rooms are often cleaned every 6 to 12 months. We recommend an interval after we see how fast lint returns.' },
      { q: 'Is this the same as air duct cleaning?', a: 'No. Dryer vents move hot lint-filled air from the machines. HVAC ducts move conditioned air. They are separate systems.' },
    ],
    related: ['dryer-vent-cleaning', 'dryer-vent-installation', 'commercial-air-duct-cleaning', 'air-duct-cleaning'],
  },
  {
    slug: 'ac-duct-replacement',
    path: '/ac-duct-replacement/',
    name: 'AC Duct Replacement',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'duct',
    card: 'Replacement of crushed, disconnected or deteriorated AC ductwork that cleaning cannot repair.',
    image: photos.negativeAirLadder.src,
    imageAlt: photos.negativeAirLadder.alt,
    secondImage: photos.techBlueprint.src,
    secondImageAlt: photos.techBlueprint.alt,
    metaTitle: 'AC Duct Replacement Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning provides AC duct replacement for crushed, torn, or disconnected runs leaving a room warm. Request your replacement quote today.',
    h1: 'AC Duct Replacement in Aventura, FL',
    heroSubtitle: 'New ductwork where the existing run is crushed, torn, disconnected or no longer moving air to the room.',
    introHeading: 'Some ductwork needs to be replaced, not cleaned',
    intro: [
      'Air duct cleaning removes debris. It does not repair a flex run that was stepped on in the attic, a collar that pulled loose, or duct board that has come apart. Those problems leak cooled air and leave one room weak no matter how clean the vents look.',
      `We replace accessible AC ductwork in Aventura homes and condos after an ${a('/air-duct-inspection/', 'air duct inspection')} shows the run itself is the problem. If the ducts are intact and just dusty, ${a('/air-duct-cleaning/', 'air duct cleaning')} is the right job.`,
    ],
    componentsHeading: 'What replacement can include',
    components: [
      { title: 'Damaged flex duct', text: 'Crushed, torn or sagging flex runs we can reach in an attic, soffit or closet.' },
      { title: 'Loose connections', text: 'Collars and joints that have pulled off the boot or the air handler.' },
      { title: 'Failed insulation', text: 'Duct wrap that has fallen apart and is sweating onto the ceiling.' },
      { title: 'The room that never cools', text: 'A single supply run when the rest of the system is fine.' },
    ],
    signsHeading: 'Signs the ductwork needs replacement',
    signs: [
      'One room stays warm while the rest of the home cools',
      'You can see a crushed or disconnected run in the attic',
      'A ceiling stain lines up with a duct',
      'Airflow dropped after other attic work',
      'The duct insulation is hanging off',
      'Cleaning was already done and that room is still weak',
    ],
    processHeading: 'How AC duct replacement is handled',
    process: [
      { title: 'Inspect the run', text: 'We confirm the duct is damaged before recommending replacement.' },
      { title: 'Match the size', text: 'The new run is sized to the boot and the air handler, not guessed.' },
      { title: 'Replace and seal', text: 'The damaged section comes out and the new duct is connected and sealed.' },
      { title: 'Check the room', text: 'We confirm air is reaching the register before we leave.' },
    ],
    benefitsHeading: 'Why replace instead of cleaning again',
    benefits: [
      { title: 'Air reaches the room', text: 'A connected duct delivers cooled air that a torn run was dumping into the attic.' },
      { title: 'Less wasted cooling', text: 'Leaks above the ceiling make the system run longer.' },
      { title: 'A clear scope', text: 'We replace the section that failed. We do not sell a whole-house replacement for one bad run.' },
      { title: 'Works with cleaning', text: 'The rest of the system can be cleaned on the same visit when it needs it.' },
    ],
    faqs: [
      { q: 'Will air duct cleaning fix a crushed duct?', a: 'No. Cleaning removes dust. A crushed, torn or disconnected run has to be repaired or replaced.' },
      { q: 'Do you replace every duct in the house?', a: 'Only when the system is broadly failed. Most jobs are the runs we can see are damaged.' },
      { q: 'Can this be done in a condo?', a: 'When the duct is accessible without opening finished ceilings we were not approved to open. We say so before work starts.' },
      { q: 'Should the attic insulation come out first?', a: 'Sometimes. If old insulation is covering the ducts, attic insulation removal makes the replacement easier to do correctly.' },
    ],
    related: ['air-duct-inspection', 'air-duct-cleaning', 'attic-insulation-removal', 'hvac-cleaning'],
  },
  {
    slug: 'dryer-vent-installation',
    path: '/dryer-vent-installation/',
    name: 'Dryer Vent Installation',
    group: 'dryer',
    parent: 'dryer-vent-cleaning',
    icon: 'dryer',
    card: 'New clothes dryer vent runs when the line is crushed, too long, or made of foil or vinyl.',
    image: photos.dryerVentExterior.src,
    imageAlt: photos.dryerVentExterior.alt,
    secondImage: photos.serviceTrucks.src,
    secondImageAlt: photos.serviceTrucks.alt,
    metaTitle: 'Dryer Vent Installation Services - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning offers dryer vent installation to replace crushed, foil, or unsafe lines with a proper vent run. Request your installation today.',
    h1: 'Dryer Vent Installation in Aventura, FL',
    heroSubtitle: 'A new dryer vent when cleaning cannot make a damaged or unsafe line exhaust properly.',
    introHeading: 'Cleaning will not fix a vent that was never right',
    intro: [
      'Clothes dryer vent cleaning clears lint. It does not straighten a crushed hose, shorten a run that is too long, or replace vinyl or foil transition duct that the manufacturer tells you not to use.',
      `We install dryer vents for Aventura houses and condos when the existing line cannot be cleaned into working condition. If the vent is intact and only clogged, book ${a('/dryer-vent-cleaning/', 'dryer vent cleaning')} instead.`,
    ],
    componentsHeading: 'What installation covers',
    components: [
      { title: 'Transition duct', text: 'The connector behind the dryer, replaced when it is foil, vinyl, kinked or too long.' },
      { title: 'The vent run', text: 'A new route through the wall, ceiling or attic when the old path is crushed or disconnected.' },
      { title: 'Exterior termination', text: 'A hood or cap with a damper that can open when the dryer runs.' },
      { title: 'Airflow check', text: 'The dryer is reconnected and checked so exhaust actually leaves the building.' },
    ],
    signsHeading: 'When installation is the right call',
    signs: [
      'The hose behind the dryer is crushed flat',
      'The vent is foil or vinyl',
      'Lint comes back immediately after a cleaning',
      'There is no exterior cap, or the cap is painted shut',
      'A remodel left the dryer vent disconnected',
      'The run is so long that clothes still will not dry after cleaning',
    ],
    processHeading: 'How a dryer vent is installed',
    process: [
      { title: 'Trace the current vent', text: 'We find where it goes and why it is failing.' },
      { title: 'Choose the route', text: 'The shortest safe path to an exterior wall or approved termination.' },
      { title: 'Install the duct', text: 'Rigid or semi-rigid metal duct, connected and supported, with a proper cap.' },
      { title: 'Test the dryer', text: 'We run the machine and confirm the damper opens.' },
    ],
    benefitsHeading: 'Why a new vent matters',
    benefits: [
      { title: 'Exhaust can leave', text: 'A clear, intact run is what lets a dryer finish a load.' },
      { title: 'Less lint packed in the wall', text: 'Smooth metal duct holds less lint than foil or vinyl.' },
      { title: 'A safer laundry room', text: 'Lint that cannot escape is fuel. A working vent gives it a way out.' },
      { title: 'Paired with cleaning', text: 'An old clogged line is cleaned or removed as part of the new installation.' },
    ],
    faqs: [
      { q: 'Is dryer vent installation the same as cleaning?', a: 'No. Cleaning removes lint from a vent that is still usable. Installation replaces a vent that is damaged, missing or the wrong material.' },
      { q: 'Do you install roof terminations?', a: 'When roof access is available and the building allows it. Many condo vents terminate on a sidewall or in a shaft we have to coordinate with management.' },
      { q: 'Can you do this the same day as air duct cleaning?', a: 'Often, yes. Ask when you book and we will plan both.' },
      { q: 'Will you replace the dryer itself?', a: 'No. We install the vent. Appliance repair is a different trade.' },
    ],
    related: ['dryer-vent-cleaning', 'commercial-dryer-vent-cleaning', 'air-duct-cleaning', 'ac-duct-replacement'],
  },
  {
    slug: 'attic-insulation-removal',
    path: '/attic-insulation-removal/',
    name: 'Attic Insulation Removal',
    group: 'insulation',
    icon: 'trash',
    card: 'Vacuum removal of old, wet, compressed or contaminated attic insulation.',
    image: photos.blowerWheel.src,
    imageAlt: photos.blowerWheel.alt,
    secondImage: photos.airDuct.src,
    secondImageAlt: photos.airDuct.alt,
    metaTitle: 'Attic Insulation Removal - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning provides attic insulation removal to clear old, wet, or contaminated insulation from your attic. Schedule your removal today.',
    h1: 'Attic Insulation Removal in Aventura, FL',
    heroSubtitle: 'Old attic insulation vacuumed out, bagged and hauled away, without dragging it through the living space.',
    introHeading: 'Take the bad insulation out before you add more',
    intro: [
      'South Florida attics stay hot and often get wet. Insulation that is soaked, flattened, or contaminated should come out. Blowing new material on top of that does not fix it.',
      `We vacuum old attic insulation out through a hose and collect it outside the home. When the attic is clear, ${a('/blown-in-attic-insulation/', 'blown-in attic insulation')} can go back in. It is also the right time to look at attic ductwork and book ${a('/ac-duct-replacement/', 'AC duct replacement')} if a run is damaged.`,
    ],
    componentsHeading: 'What removal includes',
    components: [
      { title: 'Blown-in insulation', text: 'Loose-fill fiberglass or cellulose across the attic floor.' },
      { title: 'Wet or compressed material', text: 'Insulation that has settled, soaked up a leak, or packed down to almost nothing.' },
      { title: 'Contaminated areas', text: 'Material fouled by pests or standing moisture, bagged and removed.' },
      { title: 'Attic cleanup', text: 'Debris left on the attic floor once the insulation is out.' },
    ],
    signsHeading: 'Signs the attic insulation should come out',
    signs: [
      'The attic smells, or the ceiling below has stains',
      'Insulation is wet, matted or only an inch or two deep',
      'You can see pest droppings in the insulation',
      'Rooms under the attic are much hotter than the rest of the house',
      'Ductwork in the attic needs repair and the insulation is in the way',
      'A previous leak was fixed but the wet insulation is still up there',
    ],
    processHeading: 'How attic insulation removal works',
    process: [
      { title: 'Look at the attic', text: 'We check access, depth and whether the material is wet or just thin.' },
      { title: 'Protect the access', text: 'The opening and the path below it are covered before removal starts.' },
      { title: 'Vacuum it out', text: 'Insulation is pulled through a hose and bagged outside.' },
      { title: 'Leave a clear attic', text: 'You can see the ceiling, wiring and ducts, and we point out what should happen next.' },
    ],
    benefitsHeading: 'Why remove it instead of covering it',
    benefits: [
      { title: 'Wet material is gone', text: 'New insulation on top of wet insulation stays a moisture problem.' },
      { title: 'The ducts are visible', text: 'Attic air duct cleaning and duct replacement are easier on a clear floor.' },
      { title: 'Less mess inside', text: 'The material leaves through a hose, not through the hallway.' },
      { title: 'A clean start', text: 'Blown-in insulation can be installed to a consistent depth afterward.' },
    ],
    faqs: [
      { q: 'Do I have to replace the insulation after removal?', a: 'An empty attic lets a lot of heat into the house. Most customers add blown-in attic insulation on the same project or right after.' },
      { q: 'Will this make a mess in the house?', a: 'It should not. We protect the attic access and collect the insulation outside.' },
      { q: 'How long does removal take?', a: 'Many homes are done in a day. A large or heavily contaminated attic takes longer.' },
      { q: 'Is this the same as air duct cleaning?', a: 'No. Attic insulation removal takes out the material on the attic floor. Air duct cleaning cleans the ducts that run through that attic.' },
    ],
    related: ['blown-in-attic-insulation', 'ac-duct-replacement', 'air-duct-inspection', 'air-duct-cleaning'],
  },
  {
    slug: 'blown-in-attic-insulation',
    path: '/blown-in-attic-insulation/',
    name: 'Blown-In Attic Insulation',
    group: 'insulation',
    parent: 'attic-insulation-removal',
    icon: 'layers',
    card: 'Loose-fill insulation blown across the attic to the depth a South Florida home should have.',
    image: photos.airHandler.src,
    imageAlt: photos.airHandler.alt,
    secondImage: photos.blowerWheel.src,
    secondImageAlt: photos.blowerWheel.alt,
    metaTitle: 'Blown-In Attic Insulation - Purify Air Duct Cleaning',
    metaDescription:
      'Purify Air Duct Cleaning offers blown-in attic insulation to add even coverage where your attic is thin or empty. Request your free quote today.',
    h1: 'Blown-In Attic Insulation in Aventura, FL',
    heroSubtitle: 'Loose-fill insulation blown evenly across the attic so heat from the roof has a harder time reaching the rooms.',
    introHeading: 'Add insulation where the attic is thin or empty',
    intro: [
      'A South Florida attic gets far hotter than the rooms under it. Insulation on the attic floor slows that heat. Many homes have less than they should, or insulation that has settled over the years.',
      `Blown-in attic insulation is installed with a machine that spreads loose-fill across the attic, including around wiring and framing. If the old insulation is wet or contaminated, ${a('/attic-insulation-removal/', 'attic insulation removal')} comes first. We do not blow new material onto material that should have been taken out.`,
    ],
    componentsHeading: 'What the installation includes',
    components: [
      { title: 'Loose-fill insulation', text: 'Fiberglass or cellulose blown to an even depth across the attic floor.' },
      { title: 'Coverage at the edges', text: 'The eaves and the gaps around pipes and framing, where batts often miss.' },
      { title: 'Depth markers', text: 'Markers so you can see how much was installed.' },
      { title: 'A look at the ducts', text: 'While we are in the attic we note crushed or disconnected ductwork.' },
    ],
    signsHeading: 'Signs the attic needs more insulation',
    signs: [
      'Upstairs rooms are much warmer than downstairs',
      'You can see the ceiling joists through the insulation',
      'The attic was cleaned out and never reinsulated',
      'The air conditioner runs constantly on summer afternoons',
      'Insulation is only a thin, settled layer',
      'You are replacing attic ductwork and the attic is open',
    ],
    processHeading: 'How blown-in insulation is installed',
    process: [
      { title: 'Measure what is there', text: 'We check depth and whether the existing material can stay.' },
      { title: 'Set markers', text: 'Depth markers go in before any insulation is blown.' },
      { title: 'Blow it in', text: 'Loose-fill is spread evenly to the depth we agreed on.' },
      { title: 'Walk the result', text: 'We show you the coverage and anything we noticed about the ducts.' },
    ],
    benefitsHeading: 'What added insulation changes',
    benefits: [
      { title: 'Less heat through the ceiling', text: 'The attic stays hot. The rooms under it do not have to.' },
      { title: 'Even coverage', text: 'Blown-in fill reaches spots batts leave open.' },
      { title: 'A measured depth', text: 'You are not guessing how much went in.' },
      { title: 'Paired with duct work', text: 'Attic air duct cleaning or duct replacement can be planned while the attic is open.' },
    ],
    faqs: [
      { q: 'Can you blow insulation over what I already have?', a: 'Yes, when the existing insulation is dry and clean. Wet, matted or contaminated insulation should be removed first.' },
      { q: 'What material do you use?', a: 'Loose-fill fiberglass or cellulose. The quote names the material and the depth.' },
      { q: 'How long does it take?', a: 'Most homes take a few hours, depending on attic size and how much is being added.' },
      { q: 'Will this lower my power bill by a set amount?', a: 'More insulation often means the air conditioner runs less to hold the temperature. We do not promise a specific dollar savings.' },
    ],
    related: ['attic-insulation-removal', 'ac-duct-replacement', 'air-duct-cleaning', 'air-duct-inspection'],
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};

export const servicesByGroup = (group: GroupId) => services.filter((s) => s.group === group);
