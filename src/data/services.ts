import type { ImageMetadata } from 'astro';
import { photos } from './photos';

export type GroupId = 'duct' | 'hvac' | 'dryer';

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
    image: photos.livingRoom.src,
    imageAlt: photos.livingRoom.alt,
  },
  {
    id: 'hvac',
    name: 'HVAC & Air Quality Services',
    intro: 'Cleaning for coils, air handlers and blower cabinets, plus mold remediation on HVAC components and UV air purification.',
    hub: '/hvac-cleaning/',
    image: photos.acOutdoor.src,
    imageAlt: photos.acOutdoor.alt,
  },
  {
    id: 'dryer',
    name: 'Dryer Vent Services',
    intro: 'Lint removal for home and commercial dryer vents, including long condo runs.',
    hub: '/dryer-vent-cleaning/',
    image: photos.laundry.src,
    imageAlt: photos.laundry.alt,
    secondary: true,
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
  | 'wind';

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
    card: 'Negative-air cleaning of supply and return ducts, registers and accessible plenums.',
    image: photos.livingRoom.src,
    imageAlt: photos.livingRoom.alt,
    secondImage: photos.techWork.src,
    secondImageAlt: photos.techWork.alt,
    metaTitle: 'Air Duct Cleaning Aventura, FL | Purify',
    metaDescription:
      'Professional air duct cleaning in Aventura and nearby South Florida cities. We remove dust and debris from supply and return ducts. Call (305) 330-1328.',
    h1: 'Air Duct Cleaning in Aventura, FL',
    heroSubtitle: 'Source-removal duct cleaning for homes, condos and businesses across northern Miami-Dade and Broward.',
    introHeading: 'A full-system duct cleaning, not a vent wipe',
    intro: [
      'South Florida air conditioners run most of the year. Every hour they run, supply and return ducts carry dust, dander, construction debris and lint past the filter. That buildup settles in the ductwork and can blow back into rooms when the system starts.',
      `Purify Air Duct Cleaning cleans the duct system under negative pressure from our Aventura office. Agitation loosens debris, and a collection unit pulls it out of the building. If the coil or air handler is part of the problem, see ${a('/hvac-cleaning/', 'HVAC cleaning')}.`,
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
    related: ['residential-air-duct-cleaning', 'commercial-air-duct-cleaning', 'air-duct-sanitizing', 'air-duct-inspection'],
  },
  {
    slug: 'residential-air-duct-cleaning',
    path: '/residential-air-duct-cleaning/',
    name: 'Residential Air Duct Cleaning',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'home',
    card: 'Duct cleaning for houses, townhomes and condos, including closet air handlers.',
    image: photos.brightHome.src,
    imageAlt: photos.brightHome.alt,
    secondImage: photos.homeExterior.src,
    secondImageAlt: photos.homeExterior.alt,
    metaTitle: 'Residential Air Duct Cleaning Aventura | Purify',
    metaDescription:
      'Home and condo air duct cleaning in Aventura, FL. We clean supply and return ducts in houses and high-rises. Call (305) 330-1328.',
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
    image: photos.office.src,
    imageAlt: photos.office.alt,
    secondImage: photos.plans.src,
    secondImageAlt: photos.plans.alt,
    metaTitle: 'Commercial Air Duct Cleaning Aventura, FL | Purify',
    metaDescription:
      'Commercial air duct cleaning for offices and businesses in Aventura, Hollywood and Fort Lauderdale. After-hours scheduling available. Call (305) 330-1328.',
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
    image: photos.techPanel.src,
    imageAlt: photos.techPanel.alt,
    secondImage: photos.livingRoom.src,
    secondImageAlt: photos.livingRoom.alt,
    metaTitle: 'Air Duct Sanitizing Aventura, FL | Purify',
    metaDescription:
      'Air duct sanitizing in Aventura after a full duct cleaning, for lingering odors in homes and businesses. Call (305) 330-1328.',
    h1: 'Air Duct Sanitizing',
    heroSubtitle: 'A treatment for duct surfaces after the dust and debris have already been removed.',
    introHeading: 'Sanitizing follows cleaning. It does not replace it.',
    intro: [
      'Spraying a fragrance into a dirty duct does not clean it. Sanitizing is useful after source removal, when the duct surfaces are clear and an odor is still hanging in the air path.',
      `We apply sanitizing products only after ${a('/air-duct-cleaning/', 'air duct cleaning')}. If the odor is coming from a wet coil or drain pan, ${a('/hvac-mold-cleaning/', 'HVAC mold cleaning')} is the service that addresses that source.`,
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
    related: ['air-duct-cleaning', 'hvac-mold-cleaning', 'uv-light-air-purification', 'air-duct-inspection'],
  },
  {
    slug: 'air-duct-inspection',
    path: '/air-duct-inspection/',
    name: 'Ductwork Inspection',
    group: 'duct',
    parent: 'air-duct-cleaning',
    icon: 'search',
    card: 'A look inside accessible ducts and at the air handler before you decide on cleaning or repairs.',
    image: photos.plans.src,
    imageAlt: photos.plans.alt,
    secondImage: photos.techWork.src,
    secondImageAlt: photos.techWork.alt,
    metaTitle: 'Air Duct Inspection Aventura, FL | Purify',
    metaDescription:
      'Air duct inspection in Aventura for weak rooms, dust and musty odors. We check accessible ducts and the air handler. Call (305) 330-1328.',
    h1: 'Ductwork Inspection and Maintenance',
    heroSubtitle: 'Find out whether you need cleaning, a repair, or both, before any work is sold.',
    introHeading: 'Start with what the system is actually doing',
    intro: [
      'Uneven rooms, whistling vents and dust at one register can come from buildup, or from a disconnected flex run in the attic. An inspection tells those apart.',
      `We check accessible ducts, connections and the air handler, then recommend a plan. That plan might be ${a('/air-duct-cleaning/', 'air duct cleaning')}, ${a('/ac-coil-cleaning/', 'coil cleaning')}, or a note that a damaged run needs a sheet-metal or flex contractor.`,
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
    related: ['air-duct-cleaning', 'hvac-cleaning', 'ac-coil-cleaning', 'residential-air-duct-cleaning'],
  },
  {
    slug: 'hvac-cleaning',
    path: '/hvac-cleaning/',
    name: 'HVAC System Cleaning',
    group: 'hvac',
    icon: 'hvac',
    card: 'Cleaning for the coil, blower, drain pan and air handler cabinet, not just the vents.',
    image: photos.acOutdoor.src,
    imageAlt: photos.acOutdoor.alt,
    secondImage: photos.techPanel.src,
    secondImageAlt: photos.techPanel.alt,
    metaTitle: 'HVAC Cleaning Aventura, FL | AC System Cleaning | Purify',
    metaDescription:
      'HVAC cleaning in Aventura for coils, blowers, drain pans and air handlers. Improve airflow and cut musty AC odors. Call (305) 330-1328.',
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
    related: ['ac-coil-cleaning', 'air-handler-cleaning', 'hvac-mold-cleaning', 'air-duct-cleaning'],
  },
  {
    slug: 'hvac-mold-cleaning',
    path: '/hvac-mold-cleaning/',
    name: 'Mold and Mildew Remediation',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'droplet',
    card: 'Cleaning of suspected microbial buildup on coils, drain pans and other wet HVAC parts.',
    image: photos.techWork.src,
    imageAlt: photos.techWork.alt,
    secondImage: photos.acOutdoor.src,
    secondImageAlt: photos.acOutdoor.alt,
    metaTitle: 'HVAC Mold Cleaning Aventura | Purify Air Duct',
    metaDescription:
      'Mold and mildew cleaning for HVAC coils, drain pans and air handlers in Aventura. We do not test for mold. Call (305) 330-1328.',
    h1: 'HVAC Mold and Mildew Cleaning',
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
      { q: 'Is UV light part of this?', a: 'UV installation is a separate service that keeps treating the air path after cleaning. Ask if you want both quoted.' },
      { q: 'Can you treat the whole condo?', a: 'We treat the HVAC system and accessible ducts. Walls, carpets and contents are not part of this service.' },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'air-duct-sanitizing', 'uv-light-air-purification'],
  },
  {
    slug: 'ac-coil-cleaning',
    path: '/ac-coil-cleaning/',
    name: 'AC Coil Cleaning',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'coil',
    card: 'Evaporator coil cleaning to clear the dust mat that restricts airflow.',
    image: photos.techPanel.src,
    imageAlt: photos.techPanel.alt,
    secondImage: photos.acOutdoor.src,
    secondImageAlt: photos.acOutdoor.alt,
    metaTitle: 'AC Coil Cleaning Aventura, FL | Purify',
    metaDescription:
      'Evaporator coil cleaning in Aventura and South Florida. Clear the dust that blocks airflow across the coil. Call (305) 330-1328.',
    h1: 'AC Coil Cleaning',
    heroSubtitle: 'Remove the blanket of dust on the evaporator coil so air can move across it again.',
    introHeading: 'A dirty coil makes a strong system feel weak',
    intro: [
      'The evaporator coil is cold and wet whenever the air conditioner runs. In Aventura that is most days. Dust sticks to it, airflow drops, and the system runs longer.',
      `Coil cleaning is part of ${a('/hvac-cleaning/', 'HVAC system cleaning')} and can be booked on its own when the coil is the problem we can see. If the blower is packed with dust too, cleaning both at once is the better job.`,
    ],
    componentsHeading: 'Coil work includes',
    components: [
      { title: 'Evaporator face', text: 'The surface air hits first, where the mat of dust forms.' },
      { title: 'Accessible fins', text: 'Cleaned carefully so the fins are not folded flat.' },
      { title: 'Drain side', text: 'Rinse water needs a clear pan and drain, so we check that path.' },
      { title: 'Filter check', text: 'A missing or overloaded filter is often why the coil got dirty.' },
    ],
    signsHeading: 'Signs the coil is dirty',
    signs: [
      'The system runs a long time and still feels weak',
      'You can see gray fuzz on the coil through the cabinet',
      'Ice has formed on the refrigerant line',
      'Rooms are humid even when the AC is on',
      'The filter is clean but airflow is poor',
      'A musty smell starts at the air handler',
    ],
    processHeading: 'How we clean a coil',
    process: [
      { title: 'Power down', text: 'The air handler is off before panels come off.' },
      { title: 'Protect the cabinet', text: 'Cleaner and rinse are controlled so they go to the drain, not into the duct.' },
      { title: 'Clean the coil', text: 'Coil cleaner and mechanical cleaning lift the dust without crushing the fins.' },
      { title: 'Confirm drainage', text: 'We make sure rinse water leaves through the condensate drain.' },
    ],
    benefitsHeading: 'Why coil cleaning matters here',
    benefits: [
      { title: 'Airflow across the coil', text: 'That is what lets the system cool and dehumidify.' },
      { title: 'Less strain', text: 'A blocked coil makes the blower and compressor work against a restriction.' },
      { title: 'Odor source removed', text: 'The wet, dusty coil is a frequent cause of musty startups.' },
      { title: 'A filter lesson', text: 'We show you the filter setup that allowed the coil to load up.' },
    ],
    faqs: [
      { q: 'Can a dirty coil freeze the system?', a: 'Restricted airflow is a common reason evaporator coils ice up. Cleaning the coil and confirming the filter and blower are clear addresses that cause. Low refrigerant is a repair, not a cleaning.' },
      { q: 'Do you use harsh acid on every coil?', a: 'We match the cleaner to the coil. The goal is to remove dirt without damaging fins.' },
      { q: 'Should ducts be cleaned the same day?', a: 'If the ducts are dusty, yes. Otherwise debris from the ducts can land on the clean coil again.' },
      { q: 'How long does coil cleaning take?', a: 'A single residential coil is often done within a standard service visit, once access is open.' },
    ],
    related: ['hvac-cleaning', 'air-handler-cleaning', 'hvac-mold-cleaning', 'air-duct-cleaning'],
  },
  {
    slug: 'air-handler-cleaning',
    path: '/air-handler-cleaning/',
    name: 'Air Handler Cleaning',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'box',
    card: 'Cabinet, blower and drain pan cleaning for closet and attic air handlers.',
    image: photos.techWork.src,
    imageAlt: photos.techWork.alt,
    secondImage: photos.brightHome.src,
    secondImageAlt: photos.brightHome.alt,
    metaTitle: 'Air Handler Cleaning Aventura, FL | Purify',
    metaDescription:
      'Air handler cleaning in Aventura condos and homes. We clean the cabinet, blower and drain pan. Call (305) 330-1328.',
    h1: 'Air Handler Cleaning',
    heroSubtitle: 'A full clean of the indoor unit: cabinet, blower wheel and drain pan.',
    introHeading: 'Closet units need more than a new filter',
    intro: [
      'Aventura and Sunny Isles are full of closet air handlers sitting a few feet from bedrooms. When the blower wheel is coated, the unit gets loud, airflow drops, and the closet smells when the door opens.',
      `Air handler cleaning covers the cabinet and blower. Add ${a('/ac-coil-cleaning/', 'coil cleaning')} when the coil face is matted, which it often is. The ducts leaving the unit are covered by ${a('/air-duct-cleaning/', 'air duct cleaning')}.`,
    ],
    componentsHeading: 'Inside the air handler',
    components: [
      { title: 'Blower wheel', text: 'Dust on the blades cuts the air the fan can move.' },
      { title: 'Cabinet walls', text: 'Film on the housing is wiped and vacuumed out.' },
      { title: 'Drain pan', text: 'Slime and standing water are cleaned so the pan can drain.' },
      { title: 'Filter rack', text: 'We check that the filter fits and is not being bypassed.' },
    ],
    signsHeading: 'When the air handler is the problem',
    signs: [
      'The closet smells when you open it',
      'The blower is louder than it used to be',
      'You see debris in the cabinet',
      'Water stains under the air handler',
      'A new filter did not improve airflow',
      'The unit sits in a humid laundry or hallway closet',
    ],
    processHeading: 'How we clean an air handler',
    process: [
      { title: 'Kill power', text: 'The disconnect or breaker is off before the panels come off.' },
      { title: 'Open the cabinet', text: 'We photograph or note conditions so you can see what we found.' },
      { title: 'Clean blower and pan', text: 'The wheel, housing and pan are cleaned. The coil is cleaned if it is in the scope.' },
      { title: 'Close and test', text: 'Panels go back on, power is restored, and we listen to the blower.' },
    ],
    benefitsHeading: 'Why this visit is specific',
    benefits: [
      { title: 'Made for closet units', text: 'High-rise mechanical closets are a normal job for us, not an exception.' },
      { title: 'Noise and airflow', text: 'A caked blower wheel is a direct cause of both.' },
      { title: 'Drain problems caught', text: 'A slow pan is how closet ceilings and floors get water damage.' },
      { title: 'Building coordination', text: 'We follow access rules in managed condominiums.' },
    ],
    faqs: [
      { q: 'Do you clean attic air handlers too?', a: 'Yes. Houses in North Miami, Pembroke Pines and Coral Springs often have attic or garage units, and we clean those as well.' },
      { q: 'Will you need to pull the blower?', a: 'When the wheel cannot be cleaned in place, we remove it. That is discussed before we start if it changes the time on site.' },
      { q: 'Can this stop a leaking pan?', a: 'Cleaning a clogged pan and line often stops overflows caused by slime. A cracked pan or a failed pump is a repair.' },
      { q: 'Is the outdoor unit included?', a: 'The indoor air handler is the service. Outdoor condenser rinsing can be added when access is safe.' },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'hvac-mold-cleaning', 'residential-air-duct-cleaning'],
  },
  {
    slug: 'uv-light-air-purification',
    path: '/uv-light-air-purification/',
    name: 'UV Light Air Purification',
    group: 'hvac',
    parent: 'hvac-cleaning',
    icon: 'sparkle',
    card: 'UV lamp installation in the air handler to keep treating the coil and airstream after cleaning.',
    image: photos.plans.src,
    imageAlt: photos.plans.alt,
    secondImage: photos.techPanel.src,
    secondImageAlt: photos.techPanel.alt,
    metaTitle: 'UV Light Air Purification Aventura | Purify',
    metaDescription:
      'UV light installation for air handlers in Aventura. A continuous option after coil and duct cleaning. Call (305) 330-1328.',
    h1: 'UV Light Air Purification Installation',
    heroSubtitle: 'A UV lamp inside the air handler to keep neutralizing growth on the coil after it is cleaned.',
    introHeading: 'Cleaning first, then a light that stays on the job',
    intro: [
      'UV is not a substitute for removing the dust already in the system. Installed after the coil and cabinet are clean, a UV lamp shines on the coil and airstream so new growth has a harder time taking hold in a humid climate.',
      `We install UV in air handlers that have a safe place for the lamp and the ballast. It pairs with ${a('/hvac-cleaning/', 'HVAC cleaning')} and ${a('/ac-coil-cleaning/', 'coil cleaning')}. It does not replace filters, and it is not a medical device.`,
    ],
    componentsHeading: 'What installation includes',
    components: [
      { title: 'Lamp placement', text: 'Mounted so the light reaches the coil without shining out of the cabinet.' },
      { title: 'Power', text: 'Wired to run with the system, with a way to shut it down for service.' },
      { title: 'Safety', text: 'The cabinet stays closed during operation. UV is not for open rooms.' },
      { title: 'Lamp life', text: 'We tell you when the bulb should be replaced so output does not quietly fade.' },
    ],
    signsHeading: 'When UV is a reasonable add-on',
    signs: [
      'The coil grows a film again within a season',
      'The home is humid and the AC runs nearly all year',
      'Musty startups returned after a previous cleaning',
      'You want a maintenance step between full cleanings',
      'A closet unit serves bedrooms',
      'You already booked coil and duct cleaning',
    ],
    processHeading: 'How we install UV',
    process: [
      { title: 'Clean the coil', text: 'The lamp should see a clean coil, not a mat of dust.' },
      { title: 'Choose the mount', text: 'We confirm clearance, wiring and that the light stays inside the cabinet.' },
      { title: 'Install and test', text: 'The lamp is mounted, powered and checked with the panels on.' },
      { title: 'Explain upkeep', text: 'You leave knowing the replacement interval and how to cut power.' },
    ],
    benefitsHeading: 'What UV adds after cleaning',
    benefits: [
      { title: 'Continuous treatment', text: 'The lamp works between visits, which a one-time spray cannot do.' },
      { title: 'Aimed at the coil', text: 'That is the wet surface that causes repeat odor in South Florida.' },
      { title: 'Optional', text: 'We quote it when the cabinet can take it, not as a required upsell.' },
      { title: 'Same crew', text: 'Installation happens with the cleaning visit when you want both.' },
    ],
    faqs: [
      { q: 'Will UV clean dirty ducts?', a: 'No. Ducts still need mechanical cleaning. UV treats the coil area and the air that passes the lamp.' },
      { q: 'Is it safe?', a: 'The lamp stays inside the closed air handler. You should not look at an exposed UV bulb.' },
      { q: 'Does it replace the filter?', a: 'No. Keep using the filter the system was designed for. UV does not catch dust.' },
      { q: 'How often is the bulb replaced?', a: 'Most HVAC UV lamps are replaced about once a year. We note the interval for the model we install.' },
    ],
    related: ['hvac-cleaning', 'ac-coil-cleaning', 'hvac-mold-cleaning', 'air-duct-sanitizing'],
  },
  {
    slug: 'dryer-vent-cleaning',
    path: '/dryer-vent-cleaning/',
    name: 'Dryer Vent Cleaning',
    group: 'dryer',
    icon: 'dryer',
    card: 'Lint removal from the full dryer vent run, including long condo lines and roof caps.',
    image: photos.laundry.src,
    imageAlt: photos.laundry.alt,
    secondImage: photos.homeExterior.src,
    secondImageAlt: photos.homeExterior.alt,
    metaTitle: 'Dryer Vent Cleaning Aventura, FL | Purify',
    metaDescription:
      'Dryer vent cleaning in Aventura, Sunny Isles and Hollywood. We clear lint from the full vent run. Call (305) 330-1328.',
    h1: 'Dryer Vent Cleaning in Aventura',
    heroSubtitle: 'Clear the lint that makes dryers run long and raises the risk of a dryer fire.',
    introHeading: 'The lint trap is not the whole vent',
    intro: [
      'The screen in the dryer door catches only part of the lint. The rest travels through the hose and the vent line to an exterior or roof cap. In high-rises that line can be long, and lint packs the elbows first.',
      'The U.S. Fire Administration reports that failure to clean is the leading factor in home clothes dryer fires. A clogged vent also means hot, long cycles and extra wear on the dryer. We brush and vacuum the full run we can access, from the dryer connection to the termination.',
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
      { q: 'How quickly can you come if the vent is clogged?', a: 'Call (305) 330-1328. We are open 24 hours and schedule clogged vents as soon as a crew is free, including same-day when the route allows.' },
      { q: 'How often should a dryer vent be cleaned?', a: 'About once a year for a typical household, sooner if you dry heavy loads every day or the run is long.' },
      { q: 'Do you clean the dryer itself?', a: 'We clean the vent system. We do not rebuild the dryer. If the internal blower is failing, an appliance tech should look at the machine.' },
      { q: 'What if the vent is crushed in the wall?', a: 'We will show you. A crushed or disconnected line needs repair or a new run, which we will describe rather than pretend brushing will fix it.' },
    ],
    related: ['commercial-dryer-vent-cleaning', 'residential-air-duct-cleaning', 'air-duct-cleaning', 'hvac-cleaning'],
  },
  {
    slug: 'commercial-dryer-vent-cleaning',
    path: '/commercial-dryer-vent-cleaning/',
    name: 'Commercial Dryer Vent Cleaning',
    group: 'dryer',
    parent: 'dryer-vent-cleaning',
    icon: 'wind',
    card: 'Scheduled lint removal for laundry rooms, multi-unit buildings and small commercial dryers.',
    image: photos.condoTowers.src,
    imageAlt: photos.condoTowers.alt,
    secondImage: photos.laundry.src,
    secondImageAlt: photos.laundry.alt,
    metaTitle: 'Commercial Dryer Vent Cleaning | Purify Aventura',
    metaDescription:
      'Commercial and multi-unit dryer vent cleaning for buildings in Aventura, Hollywood and Fort Lauderdale. Call (305) 330-1328.',
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
    related: ['dryer-vent-cleaning', 'commercial-air-duct-cleaning', 'air-duct-inspection', 'hvac-cleaning'],
  },
];

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};

export const servicesByGroup = (group: GroupId) => services.filter((s) => s.group === group);
