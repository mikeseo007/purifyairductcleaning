import type { ImageMetadata } from 'astro';
import { photos } from './photos';

// Per-city content for the location pages rendered by src/components/LocationPage.astro.
// Each record is written to be genuinely specific to its city: unique H1 description,
// four SEO sections, local points of interest, and five location-specific FAQs.
// Local references (neighborhoods, roads, parks) are real and used sparingly for context,
// not as keyword lists. No customer stories, prices, credentials, or availability are invented.

export interface SolutionCard {
  icon: string;
  title: string;
  text: string;
}

export interface Poi {
  name: string;
  text: string;
}

export interface LocationContent {
  /** Supplied meta title, used verbatim. */
  metaTitle: string;
  /** Supplied meta description, used verbatim. */
  metaDescription: string;
  /** Hero subtitle: 25-30 words, includes the exact-match keyword and the business name. */
  h1Description: string;
  /** Section 1 "Residential Air Duct Cleaning in {City} for Healthier Living" - image + text. */
  healthier: string[];
  /** Section 2 "Air Duct Cleaning Solutions for Dusty and Contaminated HVAC Systems" - cards. */
  solutionsIntro: string;
  solutions: SolutionCard[];
  /** Section 3 "Signs Your {City} Home May Need Air Duct Cleaning Service" - icon list. */
  signsIntro: string;
  signs: string[];
  /** Section 4 "Expert Air Duct Cleaning in {City} for Homes with Allergy and Dust Concerns" - image + text. */
  allergy: string[];
  /** Points of interest: real local areas with a line on why they matter for duct cleaning. */
  pois: Poi[];
  /** Five location-specific FAQs. */
  faqs: { q: string; a: string }[];
}

// Residential-focused photos. Images are assigned by position so a page shows a varied set;
// content, not imagery, is what makes each page unique.
const imgPool = [
  photos.ductVentCleaning,
  photos.livingRoomCleaning,
  photos.ceilingVentAccess,
  photos.hvacFilter,
  photos.ductInspection,
  photos.coilCleaning,
  photos.airHandler,
  photos.ductCleaning,
  photos.ductwork,
  photos.airDuct,
];

export interface LocationImages {
  hero: ImageMetadata;
  heroAlt: string;
  healthier: ImageMetadata;
  healthierAlt: string;
  allergy: ImageMetadata;
  allergyAlt: string;
}

export const locationImages = (index: number): LocationImages => {
  const n = imgPool.length;
  const hero = imgPool[index % n];
  const healthier = imgPool[(index + 4) % n];
  const allergy = imgPool[(index + 7) % n];
  return {
    hero: hero.src,
    heroAlt: hero.alt,
    healthier: healthier.src,
    healthierAlt: healthier.alt,
    allergy: allergy.src,
    allergyAlt: allergy.alt,
  };
};

// Aventura renders as the homepage (/), not a /slug page. Only its meta title and
// description are updated per instructions; its FAQs are preserved unchanged because the
// homepage still reads them. The remaining fields exist only to satisfy the type and are
// not rendered anywhere.
const aventura: LocationContent = {
  metaTitle: 'Air Duct Cleaning in Aventura - Purify Air Duct Cleaning',
  metaDescription:
    'Need Air Duct Cleaning in Aventura? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
  h1Description:
    'Air Duct Cleaning in Aventura from Purify Air Duct Cleaning Fort Lauderdale clears built-up dust and debris from home HVAC systems so households breathe cleaner, fresher indoor air.',
  healthier: [],
  solutionsIntro: '',
  solutions: [],
  signsIntro: '',
  signs: [],
  allergy: [],
  pois: [],
  // Preserved verbatim - the homepage still renders these.
  faqs: [
    { q: 'Where is Purify Air Duct Cleaning located?', a: 'Our office is at 20533 Biscayne Blvd #8, Aventura, FL 33180. Call 954-945-9428 or email office@purifyairductcleaning.com.' },
    { q: 'Do you clean ducts in Aventura high-rises?', a: 'Yes. Williams Island, Turnberry and other condominium air handlers are a regular part of our air duct cleaning work. We coordinate with building management when a property requires it.' },
    { q: 'What does air duct cleaning include?', a: 'Supply and return ducts, registers, grilles and accessible plenums. That is the vent cleaning and ductwork cleaning most Aventura homes are asking for when they call.' },
    { q: 'Do you also clean dryer vents and the air conditioner?', a: 'Yes. Clothes dryer vent cleaning, dryer vent installation, air conditioning cleaning, HVAC mold treatment, AC duct replacement and attic insulation are available with the duct cleaning.' },
    { q: 'How often should Aventura ducts be cleaned?', a: 'Every 3 to 5 years for most homes, sooner after renovations, with pets, or when dust and musty air show up at the vents.' },
  ],
};

export const locationContent: Record<string, LocationContent> = {
  aventura,

  'air-duct-cleaning-fort-lauderdale': {
    metaTitle: 'Air Duct Cleaning in Fort Lauderdale - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Fort Lauderdale? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Fort Lauderdale from Purify Air Duct Cleaning Fort Lauderdale clears dust and debris from home ductwork, helping Las Olas families breathe cleaner, fresher indoor air.',
    healthier: [
      'Fort Lauderdale homes run their air conditioning almost every day of the year, and the supply and return ducts collect the dust, pet hair and fine grit that circulate with it. Residential air duct cleaning removes that buildup at the source rather than wiping the register you can see.',
      'From the older bungalows of Victoria Park and Rio Vista to the waterfront houses near Las Olas, the duct layout changes house to house. We clean each accessible run, register and plenum, and pair it with <a href="/hvac-cleaning/">air conditioning cleaning</a> when the coil is part of the problem.',
    ],
    solutionsIntro:
      'Coastal air, afternoon humidity and busy Las Olas traffic all push particles into a Fort Lauderdale HVAC system. These are the sources our cleaning targets.',
    solutions: [
      { icon: 'duct', title: 'Dust and settled debris', text: 'Years of fine dust in supply and return runs is loosened under negative air and captured, not pushed back into the rooms.' },
      { icon: 'droplet', title: 'Humidity on the coil', text: 'Near the beach the evaporator coil stays damp. We clean the wet components where musty odors and biological film tend to start.' },
      { icon: 'home', title: 'Pet dander and allergens', text: 'Homes with pets near Coral Ridge see dander collect in the returns. Source removal takes it out of the air path.' },
      { icon: 'wind', title: 'Renovation and salt grit', text: 'Remodels and open-window coastal living leave drywall dust and salt grit in the ducts that filters alone do not catch.' },
    ],
    signsIntro:
      'If you notice any of these in a Fort Lauderdale home, the ductwork is worth a look before the next cooling season.',
    signs: [
      'Dust returns to furniture within a day or two of cleaning',
      'A musty smell when the AC first starts on a humid morning',
      'Uneven cooling between a Victoria Park front room and the back bedrooms',
      'Visible debris or gray film around the supply registers',
      'It has been several years, or you never knew the last cleaning date',
      'Allergy or sinus symptoms that ease when you leave the house',
    ],
    allergy: [
      'For households managing allergies, the ducts decide how much dust and pollen gets recirculated. In Fort Lauderdale, sea-grape and oak pollen plus year-round humidity keep the load high, so a clean system makes a noticeable difference indoors.',
      'We focus on source removal so allergens leave the home instead of settling back into the returns. If odors linger after the ducts are clean, <a href="/air-duct-sanitizing/">air duct sanitizing</a> is an optional follow-up, and a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is easy to add on the same visit.',
    ],
    pois: [
      { name: 'Las Olas Boulevard', text: 'Downtown condos and shops near Las Olas run compact closet air handlers that benefit from regular duct cleaning.' },
      { name: 'Coral Ridge & Galt Ocean Mile', text: 'Beachside homes and towers here deal with salt air and humidity that load the coil and returns.' },
      { name: 'Victoria Park & Rio Vista', text: 'Older single-family homes often have original ductwork that has gone years between cleanings.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in older Victoria Park and Rio Vista homes?', a: 'Yes. Older Fort Lauderdale homes often have original sheet-metal trunks and added flex runs. We clean the accessible sections and point out any run that is damaged rather than just dirty.' },
      { q: 'Does living near the beach change how often I should clean my ducts?', a: 'Coastal humidity keeps the coil and returns damp, so homes near Galt Ocean Mile or the beach often benefit a little sooner than the typical three-to-five-year window.' },
      { q: 'Can you work around a downtown condo building schedule?', a: 'Yes. For Las Olas and downtown buildings we coordinate with management on elevator and loading access before the crew arrives.' },
      { q: 'Will duct cleaning help the musty smell in my Fort Lauderdale home?', a: 'Sometimes the odor is in the ducts, but it often starts on a wet coil or drain pan. We will tell you whether duct cleaning or air conditioning cleaning is the right fix after we look.' },
      { q: 'Do you serve the whole Fort Lauderdale area?', a: 'We clean air ducts across Fort Lauderdale and nearby cities including Oakland Park, Plantation and Davie. Call 954-945-9428 to confirm scheduling for your neighborhood.' },
    ],
  },

  'air-duct-cleaning-hollywood': {
    metaTitle: 'Air Duct Cleaning in Hollywood, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Hollywood, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Hollywood from Purify Air Duct Cleaning Fort Lauderdale removes built-up dust and debris from home HVAC systems, helping families enjoy cleaner, fresher indoor air year-round.',
    healthier: [
      'Hollywood homes sit between the beach and the inland lakes, and both ends of town run the air conditioner hard. Residential air duct cleaning clears the dust and debris that settle in the supply and return ducts so the air reaching each room is cleaner.',
      'A Hollywood Lakes bungalow and an Emerald Hills ranch do not share the same duct layout, so we plan the visit around the system we find. When the coil or blower is matted, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the whole air path is addressed.',
    ],
    solutionsIntro:
      'Between beach humidity near the Broadwalk and older housing stock downtown, Hollywood systems collect contaminants from several directions. Our cleaning targets each source.',
    solutions: [
      { icon: 'duct', title: 'Built-up duct dust', text: 'Supply and return runs are agitated and vacuumed under negative pressure so settled debris leaves the system.' },
      { icon: 'droplet', title: 'Damp-coil odors', text: 'Near Hollywood Beach the coil stays humid. Cleaning the wet components addresses the musty smell many residents notice.' },
      { icon: 'home', title: 'Allergens and pet dander', text: 'Dander and dust collect first in the returns. Source removal keeps them from recirculating through the home.' },
      { icon: 'sparkle', title: 'Registers and grilles', text: 'Supply registers and return grilles are removed, cleaned and reinstalled so the parts you see match the ducts behind them.' },
    ],
    signsIntro:
      'These are the things Hollywood homeowners tend to notice when the ductwork is overdue for cleaning.',
    signs: [
      'Clothes and surfaces feel dusty again soon after cleaning',
      'A musty smell on humid mornings near the beach',
      'One Hollywood Hills bedroom never cools like the rest of the house',
      'Gray film or debris visible inside the vents',
      'Recent remodeling left drywall dust in the system',
      'Someone in the home has allergy or asthma symptoms indoors',
    ],
    allergy: [
      'Allergy-prone households in Hollywood feel the difference a clean duct system makes, especially during pollen-heavy spring and the humid summer. The ducts are what move particles from room to room, so cleaning them lowers what the family breathes.',
      'We take the dust out at the source instead of masking it. If you want an added step, <a href="/air-duct-sanitizing/">air duct sanitizing</a> treats the duct surfaces after cleaning, and we can check the <a href="/dryer-vent-cleaning/">dryer vent</a> while we are there.',
    ],
    pois: [
      { name: 'Hollywood Beach & the Broadwalk', text: 'Oceanfront condos here run closet air handlers in salt air that keeps the coil damp.' },
      { name: 'Hollywood Lakes', text: 'Historic homes near Young Circle often have original ductwork due for a thorough cleaning.' },
      { name: 'Emerald Hills', text: 'Larger ranch homes with longer attic runs collect dust that a vent wipe will not reach.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Hollywood Beach condos?', a: 'Yes. Oceanfront buildings usually have a closet air handler and short runs. We work within building access rules and clean the cabinet as well as the ducts when the coil needs it.' },
      { q: 'My Hollywood Lakes home is historic. Is duct cleaning safe for older systems?', a: 'We clean the accessible runs carefully and tell you if any original duct is too brittle or damaged to clean, rather than forcing a brush through a run that needs repair.' },
      { q: 'Why does my Hollywood home smell musty when the AC turns on?', a: 'In this climate the smell usually starts on a damp coil or drain pan. We will look and recommend air conditioning cleaning if the ducts alone are not the source.' },
      { q: 'Can allergy symptoms improve after cleaning?', a: 'Many households notice less dust in the air once the ducts are cleaned at the source. We focus on removal, not fragrance, so results are about what leaves the system.' },
      { q: 'Which nearby areas do you also serve?', a: 'Along with Hollywood we clean ducts in Hallandale Beach, Fort Lauderdale and Pembroke Pines. Call 954-945-9428 and we will confirm a time for your area.' },
    ],
  },

  'air-duct-cleaning-hallandale-beach': {
    metaTitle: 'Air Duct Cleaning in Hallandale Beach - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Hallandale Beach? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Hallandale Beach from Purify Air Duct Cleaning Fort Lauderdale clears dust and humidity-driven buildup from condo and home HVAC systems for cleaner, fresher indoor air.',
    healthier: [
      'Hallandale Beach is dense with high-rise living, and the towers around Three Islands and Golden Isles rely on compact closet air handlers with short duct runs. Residential air duct cleaning clears the dust and debris those systems collect so the air in each unit is cleaner.',
      'Condo living brings its own access rules, and we plan each visit around them. When a damp coil is driving a musty smell, we pair the duct work with <a href="/hvac-cleaning/">air conditioning cleaning</a> so the cabinet is addressed too.',
    ],
    solutionsIntro:
      'Oceanfront humidity and high-rise living shape what collects in a Hallandale Beach system. Our cleaning targets each of these sources.',
    solutions: [
      { icon: 'droplet', title: 'Coastal humidity', text: 'Salt air near the Gulfstream corridor keeps coils damp, where musty odors and film start. We clean those wet components.' },
      { icon: 'duct', title: 'Closet-unit dust', text: 'Short condo runs still load with dust. We clean the supply and return ducts and the registers in the living space.' },
      { icon: 'wind', title: 'Shared-building particles', text: 'Dense buildings move a lot of air. Source removal keeps settled debris from recirculating through the unit.' },
      { icon: 'home', title: 'Pet and household allergens', text: 'Dander and dust collect in the returns first. Cleaning them at the source lowers what residents breathe.' },
    ],
    signsIntro:
      'In a Hallandale Beach condo or home, these are the usual signs the ducts are due for cleaning.',
    signs: [
      'A musty smell when the AC starts in a closed-up unit',
      'Dust settling quickly on surfaces after cleaning',
      'Weak airflow from a bedroom supply register',
      'Debris visible at the return grille',
      'The unit sat empty for a season between residents',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'In a beachside building, windows stay closed and the same air cycles through the ducts, so anything in the system keeps circulating. For allergy-prone residents of Hallandale Beach, clean ducts mean less dust and dander moving through the unit.',
      'We remove the buildup at the source rather than spraying over it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow the cleaning, and we can inspect the <a href="/dryer-vent-cleaning/">dryer vent</a> run, which is often long in a tower.',
    ],
    pois: [
      { name: 'Three Islands', text: 'Residential towers here use closet air handlers that benefit from regular duct and coil cleaning.' },
      { name: 'Golden Isles', text: 'Waterfront homes near the Intracoastal deal with humidity that loads the coil and returns.' },
      { name: 'Gulfstream & Hallandale Beach Boulevard', text: 'Busy mixed-use blocks move dust and road grit into nearby HVAC systems.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Hallandale Beach high-rises?', a: 'Yes. Closet air handlers and short runs in towers around Three Islands and Golden Isles are a regular part of our work. We coordinate elevator and loading access with management.' },
      { q: 'My oceanfront unit smells musty. Is that the ducts?', a: 'Near the beach the smell usually begins on a damp coil or drain pan. We will check and recommend air conditioning cleaning if the ducts alone are not the cause.' },
      { q: 'The unit was a seasonal rental. Should I clean the ducts before moving in?', a: 'It is a good idea. A system that sat closed up often holds stale air and dust. Cleaning at the source gives you a fresh starting point.' },
      { q: 'Can you clean a long dryer vent in my building?', a: 'We clean the full run we can safely access, including long vertical runs in towers, and tell you if any section is blocked or damaged.' },
      { q: 'What other areas do you serve near Hallandale Beach?', a: 'We also clean ducts in Aventura, Hollywood and North Miami Beach. Call 954-945-9428 to confirm scheduling for your building or home.' },
    ],
  },

  'air-duct-cleaning-pembroke-pines': {
    metaTitle: 'Air Duct Cleaning in Pembroke Pines - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Pembroke Pines? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Pembroke Pines from Purify Air Duct Cleaning Fort Lauderdale removes attic-duct dust and debris from family homes for cleaner, healthier indoor air across the city.',
    healthier: [
      'Pembroke Pines is a family town of single-family homes, and neighborhoods like Silver Lakes, Pembroke Falls and Chapel Trail typically run long flex duct through a hot attic. Residential air duct cleaning clears the dust that collects in those runs so each room gets cleaner air.',
      'Long attic runs mean more duct and more vents than a condo, so we set up the job for the house in front of us. When a weak room is more than dust, an <a href="/air-duct-inspection/">air duct inspection</a> tells us whether a run is crushed or disconnected.',
    ],
    solutionsIntro:
      'Attic heat, family-home dust loads and 55-plus community systems all shape what builds up in a Pembroke Pines HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Long attic-run dust', text: 'Flex duct in a hot attic collects dust along its full length. We clean the accessible supply and return runs, not just the registers.' },
      { icon: 'home', title: 'Household and pet debris', text: 'Family homes with kids and pets load the returns quickly. Source removal keeps dander and dust out of the air path.' },
      { icon: 'wind', title: 'Second-system zones', text: 'Two-story homes often run two air handlers. We clean each system and the runs it serves so no zone is missed.' },
      { icon: 'sanitize', title: 'Lingering odors', text: 'When a smell remains after cleaning, optional sanitizing treats the duct surfaces once the debris is gone.' },
    ],
    signsIntro:
      'If your Pembroke Pines home shows any of these, the attic ductwork is worth checking.',
    signs: [
      'Dust reappears on furniture within a day of cleaning',
      'An upstairs bedroom never cools like the downstairs',
      'Airflow dropped after other attic or roofing work',
      'Return grilles are coated with gray debris',
      'The home has not had the ducts cleaned in several years',
      'Allergy symptoms are worse indoors than outside',
    ],
    allergy: [
      'Allergy-prone families in Pembroke Pines deal with year-round cooling and seasonal pollen, and the attic duct runs carry whatever is in the system to every room. Cleaning the ducts lowers the dust and allergens the household recirculates.',
      'We take the buildup out at the source rather than covering it. A <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is simple to add on the same visit, which matters in homes where laundry rooms share the hot attic chase.',
    ],
    pois: [
      { name: 'Silver Lakes & Pembroke Falls', text: 'Gated single-family communities with attic flex duct that benefits from full-run cleaning.' },
      { name: 'Chapel Trail', text: 'Homes near the nature preserve collect outdoor pollen and dust that reach the ducts.' },
      { name: 'Century Village', text: 'A large 55-plus community where long-time owners often have systems overdue for cleaning.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in two-story Pembroke Pines homes?', a: 'Yes. We clean each air handler and the runs it serves, including upstairs and downstairs zones, so a warm upper room is not left out.' },
      { q: 'My home is in Century Village. Do you work in 55-plus communities?', a: 'Yes. We clean ducts in Century Village and similar communities and coordinate with any building or association access rules before arriving.' },
      { q: 'A back bedroom never cools. Will cleaning fix it?', a: 'If the cause is buildup, cleaning helps. If a run is crushed or disconnected in the attic, we will show you and explain that a repair, not a cleaning, is what that room needs.' },
      { q: 'How long does a typical Pembroke Pines house take?', a: 'Many single-system homes are finished in a few hours. Larger homes with two air handlers take longer, and we give you a window when we schedule.' },
      { q: 'What areas near Pembroke Pines do you cover?', a: 'We also serve Miramar, Hollywood and Weston. Call 954-945-9428 to confirm a time for your neighborhood.' },
    ],
  },

  'air-duct-cleaning-miramar': {
    metaTitle: 'Air Duct Cleaning in Miramar, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Miramar, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Miramar from Purify Air Duct Cleaning Fort Lauderdale removes attic-duct dust and allergens from single-family homes, delivering cleaner and healthier indoor air.',
    healthier: [
      'Miramar is largely single-family housing, and communities like Sunset Lakes and Monarch Lakes run attic ductwork that stays hot through the long cooling season. Residential air duct cleaning clears the dust those runs collect so the air moving into each room is cleaner.',
      'We plan the visit around your system, cleaning the accessible supply and return runs and the registers in each room. When laundry cycles have stretched out, a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is an easy add-on through the same hot attic.',
    ],
    solutionsIntro:
      'Attic heat and family-home living drive most of what collects in a Miramar HVAC system. Our cleaning targets these sources.',
    solutions: [
      { icon: 'duct', title: 'Hot-attic flex dust', text: 'Long flex runs collect dust over their full length. We clean the accessible runs under negative air, not just the grilles.' },
      { icon: 'home', title: 'Family and pet load', text: 'Busy homes with kids and pets fill the returns quickly. Source removal keeps dander and dust out of circulation.' },
      { icon: 'droplet', title: 'Summer humidity', text: 'Afternoon humidity keeps the coil damp. We clean the wet components when a musty smell points to the equipment.' },
      { icon: 'wind', title: 'Zoned systems', text: 'Larger Miramar homes with two air handlers get each system and its runs cleaned so no area is skipped.' },
    ],
    signsIntro:
      'These are the signs a Miramar home is due for duct cleaning.',
    signs: [
      'Dust builds up quickly after you clean',
      'A room on the far end of the house stays warm',
      'The return grille is visibly dirty',
      'A musty odor on the first minutes of a cooling cycle',
      'Renovation or new flooring left dust in the system',
      'Allergy symptoms that improve when you leave home',
    ],
    allergy: [
      'For allergy-sensitive households in Miramar, the attic ducts carry dust and pollen to every room, so cleaning them reduces what the family breathes day to day. It matters most through pollen season and the humid summer stretch.',
      'We remove buildup at the source instead of masking it. If odors remain after the ducts are clean, optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> treats the duct surfaces as a follow-up step.',
    ],
    pois: [
      { name: 'Sunset Lakes', text: 'Larger single-family homes with attic flex duct that benefits from full-run cleaning.' },
      { name: 'Monarch Lakes & Silver Shores', text: 'Family neighborhoods where returns load quickly with household and pet dust.' },
      { name: 'Miramar Parkway corridor', text: 'Homes along this busy road take in road dust that reaches the HVAC system.' },
    ],
    faqs: [
      { q: 'Do you clean the full attic duct run in Miramar homes?', a: 'Yes. We clean the accessible supply and return runs, not just the registers, so dust sitting deeper in the flex duct is removed.' },
      { q: 'My Sunset Lakes home has two AC systems. Do you clean both?', a: 'Yes. We clean each air handler and the runs it serves so a two-story or zoned home has every area addressed.' },
      { q: 'Will cleaning help a warm room at the end of the house?', a: 'If buildup is the cause, it helps. If the run is crushed or disconnected in the attic, we will tell you and explain the repair that room actually needs.' },
      { q: 'Can you clean the dryer vent on the same visit?', a: 'Often, yes. Many Miramar homes run the dryer vent through the same attic. Ask when you book and we will plan both services together.' },
      { q: 'Which nearby cities do you serve?', a: 'We also clean ducts in Pembroke Pines, Miami Gardens and Hollywood. Call 954-945-9428 to confirm scheduling.' },
    ],
  },

  'air-duct-cleaning-davie': {
    metaTitle: 'Air Duct Cleaning in Davie - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Davie? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Davie from Purify Air Duct Cleaning Fort Lauderdale clears dust, dander and attic-duct debris from homes for cleaner, healthier indoor air.',
    healthier: [
      'Davie keeps a wide mix of properties, from Pine Island Ridge homes to the larger lots and ranch-style houses in its western and equestrian areas. Residential air duct cleaning clears the dust and debris that collect in those attic and closet systems so each room gets cleaner air.',
      'Properties near pastures and open land pull in more outdoor dust than a tight subdivision, so returns load faster. We clean the accessible runs and registers, and add <a href="/hvac-cleaning/">air conditioning cleaning</a> when the coil is part of the issue.',
    ],
    solutionsIntro:
      'Open land, horse country and family homes all put particles into a Davie HVAC system. Our cleaning targets each source.',
    solutions: [
      { icon: 'wind', title: 'Outdoor dust and grit', text: 'Homes near open lots and pastures take in more airborne dust. Source removal clears it from the supply and return runs.' },
      { icon: 'home', title: 'Pet and animal dander', text: 'Davie households often have pets. Dander collects in the returns first, and cleaning them lowers what recirculates.' },
      { icon: 'duct', title: 'Attic-run buildup', text: 'Longer attic flex in larger homes holds dust along its length. We clean the accessible runs, not just the grilles.' },
      { icon: 'search', title: 'Hidden duct problems', text: 'While cleaning we spot crushed or disconnected runs and recommend an inspection rather than promising a cleaning will fix them.' },
    ],
    signsIntro:
      'If your Davie home shows these signs, the ductwork is worth a look.',
    signs: [
      'Dust settles again quickly after cleaning',
      'More outdoor dust indoors if you live near open land',
      'A room or wing that never cools evenly',
      'Debris or gray film at the return grille',
      'Pets shed and dander builds up fast',
      'Allergy symptoms that ease when you are away',
    ],
    allergy: [
      'In Davie, homes near pastures and open space take in extra dust and pollen, which the ducts then carry room to room. For allergy-prone households, cleaning the ducts at the source makes a real difference in what settles indoors.',
      'We focus on removal, not fragrance. If a weak room suggests a damaged run, an <a href="/air-duct-inspection/">air duct inspection</a> separates a cleaning job from a repair before anything is sold.',
    ],
    pois: [
      { name: 'Pine Island Ridge', text: 'Established homes and villas with attic and closet systems due for cleaning.' },
      { name: 'Old Davie & equestrian areas', text: 'Larger lots near open land pull extra outdoor dust into the HVAC system.' },
      { name: 'Nova Southeastern University area', text: 'Rentals and homes near campus turn over often and benefit from a fresh-start cleaning.' },
    ],
    faqs: [
      { q: 'I live near open land in Davie. Does that affect my ducts?', a: 'It can. Homes near pastures and open lots take in more outdoor dust, so the returns and runs often load faster and benefit from cleaning a little sooner.' },
      { q: 'Do you handle larger homes with long attic runs?', a: 'Yes. We clean the accessible supply and return runs through the attic, and each air handler in homes that have more than one.' },
      { q: 'We have several pets. Will cleaning help with dander?', a: 'Dander collects in the returns first. Cleaning the ducts at the source removes it from the air path instead of recirculating it.' },
      { q: 'A room never cools right. Is that a cleaning issue?', a: 'If it is buildup, cleaning helps. If a run is crushed or disconnected, we will show you and recommend an inspection or repair instead.' },
      { q: 'What areas near Davie do you serve?', a: 'We also clean ducts in Plantation, Fort Lauderdale and Weston. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-plantation': {
    metaTitle: 'Air Duct Cleaning in Plantation - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Plantation? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Plantation from Purify Air Duct Cleaning Fort Lauderdale removes dust and debris from home ductwork, giving Plantation Acres and Jacaranda families cleaner indoor air.',
    healthier: [
      'Plantation ranges from the larger lots of Plantation Acres to the established homes of Jacaranda, and many run more than one air handler with long attic duct. Residential air duct cleaning clears the dust those runs collect so each room receives cleaner air.',
      'Larger homes mean more duct and more vents, so we size the job accordingly and clean each accessible run and register. When a room stays weak after cleaning, an <a href="/air-duct-inspection/">air duct inspection</a> checks for a crushed or disconnected run.',
    ],
    solutionsIntro:
      'Larger Plantation homes, mature tree cover and multiple systems all shape what collects in the ductwork.',
    solutions: [
      { icon: 'duct', title: 'Multi-run dust', text: 'Bigger homes have more duct to collect dust. We clean the accessible supply and return runs across each system.' },
      { icon: 'wind', title: 'Tree pollen and debris', text: 'Mature canopy in Jacaranda and Plantation Acres drops pollen that reaches the returns. Source removal clears it.' },
      { icon: 'home', title: 'Everyday household dust', text: 'Family living loads the returns steadily. Cleaning them keeps dander and fine dust out of the air path.' },
      { icon: 'search', title: 'Damaged-run checks', text: 'We flag crushed or disconnected runs during cleaning so a weak room gets the repair it needs, not a repeat cleaning.' },
    ],
    signsIntro:
      'These are the signs a Plantation home is ready for duct cleaning.',
    signs: [
      'Dust comes back fast after you clean',
      'One zone or wing cools worse than the rest',
      'Airflow weakened after attic or roof work',
      'Visible debris at the supply registers',
      'The larger home has multiple systems overdue for cleaning',
      'Indoor allergy symptoms through pollen season',
    ],
    allergy: [
      'Plantation neighborhoods with heavy tree cover see a lot of pollen, and the duct system spreads whatever it carries through the house. For allergy-prone families, cleaning the ducts lowers the dust and pollen that recirculate indoors.',
      'We remove the buildup at the source and keep the scope honest. A <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> can be added on the same visit for homes where the laundry run has gone years without service.',
    ],
    pois: [
      { name: 'Plantation Acres', text: 'Larger-lot homes with multiple air handlers and long attic runs that benefit from full cleaning.' },
      { name: 'Jacaranda', text: 'Established neighborhoods under mature canopy that drops pollen into the returns.' },
      { name: 'Plantation Midtown', text: 'Condos and townhomes near Broward Mall with compact closet systems.' },
    ],
    faqs: [
      { q: 'My Plantation Acres home has two or three systems. Do you clean all of them?', a: 'Yes. We quote and clean by the number of air handlers and the runs each one serves so a large home has every zone addressed.' },
      { q: 'There are big trees around my Jacaranda home. Does that matter?', a: 'Mature canopy drops a lot of pollen that reaches the returns, so homes under heavy tree cover often benefit from cleaning on a shorter interval.' },
      { q: 'A wing of the house cools poorly. Is that a duct issue?', a: 'It can be buildup, or a crushed or disconnected run. We clean what we can and recommend an inspection if a run looks damaged rather than just dirty.' },
      { q: 'How is a larger home priced?', a: 'By the number of systems and vents and the access involved. We give you the scope in writing before any work starts.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Sunrise, Davie and Fort Lauderdale. Call 954-945-9428 to confirm scheduling.' },
    ],
  },

  'air-duct-cleaning-sunrise': {
    metaTitle: 'Air Duct Cleaning in Sunrise, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Sunrise, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Sunrise from Purify Air Duct Cleaning Fort Lauderdale clears attic-duct dust and allergens from townhomes and houses for cleaner, healthier indoor air.',
    healthier: [
      'Sunrise mixes townhomes and single-family houses, from Welleby and Springtree to the newer homes near Sawgrass. Residential air duct cleaning clears the dust that collects in the attic runs and closet systems these homes rely on so each room gets cleaner air.',
      'We plan the visit around the home, cleaning the accessible supply and return runs and the registers. Where a laundry room shares the hot garage or attic chase, a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is a natural add-on.',
    ],
    solutionsIntro:
      'Attic heat, townhome layouts and everyday living drive what builds up in a Sunrise system. Our cleaning targets each source.',
    solutions: [
      { icon: 'duct', title: 'Attic-run dust', text: 'Flex duct in a hot attic collects dust along its length. We clean the accessible runs under negative air, not just the grilles.' },
      { icon: 'home', title: 'Townhome and pet dust', text: 'Compact townhome returns load quickly. Source removal keeps dander and dust from recirculating through the unit.' },
      { icon: 'wind', title: 'Garage-chase lint', text: 'Lint builds in dryer runs that pass through the garage. We can clear that run on the same visit.' },
      { icon: 'droplet', title: 'Humidity on the coil', text: 'Summer humidity keeps the coil damp. We clean the wet components when a musty smell points to the equipment.' },
    ],
    signsIntro:
      'If a Sunrise home shows these, the ductwork is worth checking.',
    signs: [
      'Dust reappears quickly after cleaning',
      'A back room or upstairs space never cools evenly',
      'Lint builds up around the dryer hookup',
      'A musty odor when the AC first runs',
      'Debris visible inside the supply vents',
      'Allergy symptoms worse indoors than outside',
    ],
    allergy: [
      'For allergy-prone households in Sunrise, the duct system is what carries dust and pollen from room to room. Cleaning the ducts at the source reduces the load the family recirculates through pollen season and the humid summer.',
      'We take the buildup out rather than covering it, and keep the scope honest. If odors linger after cleaning, optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> treats the duct surfaces as a follow-up.',
    ],
    pois: [
      { name: 'Welleby & Springtree', text: 'Established homes with attic flex duct due for a thorough cleaning.' },
      { name: 'Sawgrass area', text: 'Newer homes and townhomes near the expressway that take in road and construction dust.' },
      { name: 'Sunrise Golf Village', text: 'Long-held homes where systems have often gone years between cleanings.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Sunrise townhomes?', a: 'Yes. Townhomes usually have a compact closet air handler and short runs. We clean the ducts and registers and the cabinet when the coil needs it.' },
      { q: 'My dryer run goes through the garage. Can you clean it too?', a: 'Yes. We can clear the dryer vent run on the same visit, which is common in Sunrise homes where the run passes through the garage.' },
      { q: 'An upstairs room stays warm. Will cleaning help?', a: 'If buildup is the cause, it helps. If a run is crushed or disconnected, we will show you and recommend the repair that room needs instead.' },
      { q: 'How often should Sunrise ducts be cleaned?', a: 'Most homes do well every three to five years, sooner with pets, renovations, or dust showing up at the vents.' },
      { q: 'Which nearby cities do you serve?', a: 'We also clean ducts in Plantation, Lauderhill and Tamarac. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-lauderhill': {
    metaTitle: 'Air Duct Cleaning in Lauderhill - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Lauderhill? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Lauderhill from Purify Air Duct Cleaning Fort Lauderdale clears dust and debris from condo and home HVAC systems for cleaner, fresher indoor air.',
    healthier: [
      'Lauderhill blends the condos of Inverrary with single-family homes west of University Drive, and the two need different access and setup. Residential air duct cleaning clears the dust and debris that collect in both kinds of system so the air in each room is cleaner.',
      'For condo buildings we confirm management rules before the visit, and for houses we clean the accessible attic runs and registers. When a damp coil drives a musty smell, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the cabinet is handled too.',
    ],
    solutionsIntro:
      'Condo living, older housing stock and summer humidity all shape what collects in a Lauderhill system.',
    solutions: [
      { icon: 'duct', title: 'Settled duct dust', text: 'Supply and return runs are cleaned under negative air so years of fine dust leave the system.' },
      { icon: 'droplet', title: 'Humidity and odors', text: 'Summer humidity keeps the coil damp, where musty smells start. We clean the wet components when they are the source.' },
      { icon: 'home', title: 'Allergens in the returns', text: 'Dust and dander collect in the returns first. Source removal keeps them from recirculating.' },
      { icon: 'wind', title: 'Condo closet units', text: 'Inverrary buildings run compact closet handlers. We clean the short runs and registers inside the unit.' },
    ],
    signsIntro:
      'These are the signs a Lauderhill home or condo is due for duct cleaning.',
    signs: [
      'Dust returns soon after you clean',
      'A musty smell when the AC starts',
      'Weak airflow from a bedroom register',
      'Debris visible at the return grille',
      'The home or unit has not been cleaned in years',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'For allergy-prone residents of Lauderhill, the ducts move dust and dander through the home, so cleaning them at the source lowers what the household breathes. It matters most through the humid months when windows stay closed.',
      'We remove the buildup rather than masking it, and keep the scope honest. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow when an odor remains after the ducts are clean.',
    ],
    pois: [
      { name: 'Inverrary', text: 'Condo and villa communities with closet air handlers that benefit from regular cleaning.' },
      { name: 'West Ken Lark & St. George', text: 'Single-family homes with attic runs that collect dust over the long cooling season.' },
      { name: 'Central Broward Regional Park area', text: 'Homes near the park take in outdoor dust and pollen that reach the returns.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Inverrary condos?', a: 'Yes. Closet air handlers and short runs in Inverrary buildings are a regular part of our work. We coordinate access with building management first.' },
      { q: 'My Lauderhill home is older. Is cleaning safe for the ducts?', a: 'We clean the accessible runs carefully and tell you if any older duct is too damaged to clean, rather than forcing a brush through a run that needs repair.' },
      { q: 'Why does my unit smell musty when the AC turns on?', a: 'In this climate the smell usually starts on a damp coil or drain pan. We will check and recommend air conditioning cleaning if the ducts alone are not the cause.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most homes do well every three to five years, sooner with pets, renovations, or dust and odors at the vents.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Fort Lauderdale, Sunrise and Tamarac. Call 954-945-9428 to confirm scheduling.' },
    ],
  },

  'air-duct-cleaning-oakland-park': {
    metaTitle: 'Air Duct Cleaning in Oakland Park - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Oakland Park? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Oakland Park from Purify Air Duct Cleaning Fort Lauderdale clears dust from older home ductwork, improving airflow and indoor air quality.',
    healthier: [
      'Oakland Park keeps a lot of its older housing, and homes in Coral Ridge Isles and off Oakland Park Boulevard often have original duct trunks that have gone years between cleanings. Residential air duct cleaning clears that long-settled dust so each room gets cleaner air.',
      'Older systems reward a careful approach, and we clean the accessible runs and registers while noting anything that needs repair. When a dryer vent has gone unserved for years, a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is a sensible add-on.',
    ],
    solutionsIntro:
      'Older ductwork, a walkable urban core and humidity all shape what collects in an Oakland Park HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Long-settled dust', text: 'Original trunks hold years of fine dust. We clean the accessible runs under negative air so it leaves the system.' },
      { icon: 'search', title: 'Aging-duct checks', text: 'We flag brittle or disconnected sections during cleaning so an old run gets repaired rather than forced.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Summer humidity keeps the coil damp, where musty odors start. We clean those wet components when needed.' },
      { icon: 'home', title: 'Everyday allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
    ],
    signsIntro:
      'If your Oakland Park home shows these, the ductwork is worth a look.',
    signs: [
      'Dust reappears quickly after cleaning',
      'The home still has original or very old ductwork',
      'A musty smell when the AC first runs',
      'Debris visible inside the supply vents',
      'Airflow feels weaker than it used to',
      'Allergy symptoms worse indoors than outside',
    ],
    allergy: [
      'In older Oakland Park homes, decades of dust can sit in the duct trunks and recirculate every time the system runs. For allergy-prone households, cleaning the ducts at the source clears that load and makes the indoor air noticeably fresher.',
      'We focus on removal and are straight about what cleaning can and cannot fix. If a run is too damaged to clean, an <a href="/air-duct-inspection/">air duct inspection</a> helps separate a cleaning from a needed repair.',
    ],
    pois: [
      { name: 'Coral Ridge Isles', text: 'Established waterfront-adjacent homes with older duct trunks due for cleaning.' },
      { name: 'Oakland Park Culinary Arts District', text: 'Homes near the downtown core take in urban dust that reaches the returns.' },
      { name: 'Royal Palm', text: 'Long-held single-family homes where systems have often gone years without service.' },
    ],
    faqs: [
      { q: 'My Oakland Park home has old ductwork. Can you still clean it?', a: 'Usually yes. We clean the accessible runs carefully and tell you if any section is too brittle or damaged to clean rather than risking the run.' },
      { q: 'How do I know if the ducts have ever been cleaned?', a: 'If you never knew the date and the home is older, it is worth a look. We can inspect the accessible runs and describe what we find before you decide.' },
      { q: 'Will cleaning improve weak airflow?', a: 'If buildup is restricting the runs, cleaning helps. If a trunk is crushed or disconnected, we will show you and recommend the repair instead.' },
      { q: 'Can you clean a long-neglected dryer vent too?', a: 'Yes. A dryer vent that has gone years without service is a common add-on. We clear the run we can access and check airflow.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Fort Lauderdale, Pompano Beach and North Lauderdale. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-pompano-beach': {
    metaTitle: 'Air Duct Cleaning in Pompano Beach - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Pompano Beach? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Pompano Beach from Purify Air Duct Cleaning Fort Lauderdale removes dust and humidity-driven buildup from beachside and inland homes for cleaner indoor air.',
    healthier: [
      'Pompano Beach runs from beachfront condos to the inland homes of Palm Aire and Cresthaven, so the systems vary from closet handlers to longer attic runs. Residential air duct cleaning clears the dust and debris both collect so each room gets cleaner air.',
      'Near the water the coil stays damp, and inland the attic runs load with dust, so we plan the visit for the home we find. When a musty smell points to the equipment, we add <a href="/hvac-cleaning/">air conditioning cleaning</a>.',
    ],
    solutionsIntro:
      'Salt air near the pier and attic heat inland both shape what collects in a Pompano Beach system.',
    solutions: [
      { icon: 'droplet', title: 'Coastal humidity', text: 'Beachside coils stay damp, where musty odors and film start. We clean the wet components when they are the source.' },
      { icon: 'duct', title: 'Attic-run dust', text: 'Inland homes have longer flex runs. We clean the accessible supply and return ducts under negative air.' },
      { icon: 'home', title: 'Allergens and dander', text: 'Dust and dander collect in the returns first. Source removal keeps them from recirculating.' },
      { icon: 'wind', title: 'Salt grit and road dust', text: 'Open coastal living and busy Atlantic Boulevard push grit into the ducts that filters do not catch.' },
    ],
    signsIntro:
      'These are the signs a Pompano Beach home is ready for duct cleaning.',
    signs: [
      'A musty smell on humid coastal mornings',
      'Dust settles again soon after cleaning',
      'An inland back room that never cools evenly',
      'Debris or film at the return grille',
      'The condo sat closed up for a season',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'For allergy-prone households in Pompano Beach, the ducts carry dust, salt grit and pollen through the home. Cleaning them at the source lowers what the family breathes, whether the home is a beachside condo or an inland house.',
      'We take the buildup out rather than spraying over it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow when an odor remains, and we can check the <a href="/dryer-vent-cleaning/">dryer vent</a> on the same visit.',
    ],
    pois: [
      { name: 'Pompano Beach Pier & beachfront', text: 'Oceanfront condos run closet handlers in salt air that keeps the coil damp.' },
      { name: 'Palm Aire', text: 'Golf-community homes and villas with longer runs that collect dust.' },
      { name: 'Old Pompano & Cresthaven', text: 'Established neighborhoods with older systems due for a thorough cleaning.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in beachfront Pompano condos?', a: 'Yes. Oceanfront buildings use closet air handlers and short runs. We clean the ducts and the cabinet when salt-air humidity has loaded the coil.' },
      { q: 'My Palm Aire home has long attic runs. Do you clean all of them?', a: 'Yes. We clean the accessible supply and return runs through the attic, not just the registers, so deeper dust is removed.' },
      { q: 'Does living near the beach change the cleaning interval?', a: 'Coastal humidity keeps the coil and returns damp, so beachside homes often benefit a little sooner than inland ones.' },
      { q: 'The condo was a seasonal rental. Should I clean before moving in?', a: 'It is worth it. A unit that sat closed up holds stale air and dust, and cleaning at the source gives a fresh start.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Deerfield Beach, Fort Lauderdale and Coconut Creek. Call 954-945-9428 to confirm scheduling.' },
    ],
  },

  'air-duct-cleaning-deerfield-beach': {
    metaTitle: 'Air Duct Cleaning in Deerfield Beach, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Deerfield Beach, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Deerfield Beach from Purify Air Duct Cleaning Fort Lauderdale clears dust and humidity-driven buildup from homes and condos for cleaner, fresher indoor air.',
    healthier: [
      'Deerfield Beach spans beachside buildings near the pier, inland homes in The Cove, and the large Century Village community. Residential air duct cleaning clears the dust and debris these different systems collect so the air in each room is cleaner.',
      'Beach condos often run a closet handler with a long dryer riser, while inland homes have attic flex. We plan the visit for the home we find and add <a href="/hvac-cleaning/">air conditioning cleaning</a> when the coil is matted.',
    ],
    solutionsIntro:
      'Coastal humidity, 55-plus community systems and inland attic heat all shape what collects in a Deerfield Beach HVAC system.',
    solutions: [
      { icon: 'droplet', title: 'Beachside coil humidity', text: 'Near the pier the coil stays damp, where musty smells start. We clean the wet components when they are the source.' },
      { icon: 'duct', title: 'Attic and condo dust', text: 'Inland flex runs and condo closet units both collect dust. We clean the accessible ducts under negative air.' },
      { icon: 'home', title: 'Long-time owner buildup', text: 'In communities like Century Village, systems often go years between cleanings. Source removal clears that load.' },
      { icon: 'wind', title: 'Long dryer risers', text: 'Beach buildings route long dryer runs. We can clear the accessible run on the same visit.' },
    ],
    signsIntro:
      'If a Deerfield Beach home or condo shows these, the ductwork is worth checking.',
    signs: [
      'A musty smell when the AC starts in a humid unit',
      'Dust returns quickly after cleaning',
      'Weak airflow from a bedroom supply',
      'Debris at the return grille',
      'A long-held home with ducts never cleaned',
      'Allergy symptoms worse indoors',
    ],
    allergy: [
      'For allergy-prone residents of Deerfield Beach, closed-up coastal living means the same air cycles through the ducts, carrying dust and dander room to room. Cleaning the ducts at the source lowers that load noticeably.',
      'We remove buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow a cleaning, and we can inspect a long <a href="/dryer-vent-cleaning/">dryer vent</a> run while we are there.',
    ],
    pois: [
      { name: 'Deerfield Beach Pier area', text: 'Oceanfront condos run closet handlers in salt air that loads the coil.' },
      { name: 'The Cove', text: 'Waterfront single-family homes with attic runs that collect dust.' },
      { name: 'Century Village', text: 'A large 55-plus community where long-time owners often have systems overdue for cleaning.' },
    ],
    faqs: [
      { q: 'Do you work in Deerfield Beach Century Village?', a: 'Yes. We clean ducts in Century Village condos and coordinate with the community and building access rules before we arrive.' },
      { q: 'My beachfront unit smells musty. Is that the ducts?', a: 'Near the beach the smell usually begins on a damp coil or drain pan. We will check and recommend air conditioning cleaning if the ducts alone are not the source.' },
      { q: 'Can you clean a long dryer vent in a beach building?', a: 'Yes. We clear the accessible run, including long risers in towers, and tell you if a section is blocked or damaged.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most homes do well every three to five years, and coastal units often benefit sooner because humidity keeps the system damp.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Pompano Beach, Boca Raton and Coconut Creek. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-coconut-creek': {
    metaTitle: 'Air Duct Cleaning in Coconut Creek - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Coconut Creek? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Coconut Creek from Purify Air Duct Cleaning Fort Lauderdale clears dust and allergens from villas and family homes for cleaner, healthier indoor air.',
    healthier: [
      'Coconut Creek mixes villa communities like Wynmoor and Township with single-family homes along Lyons Road, so systems range from compact closet handlers to longer attic runs. Residential air duct cleaning clears the dust these systems collect so each room gets cleaner air.',
      'We plan the visit around the property, cleaning the accessible runs and registers. In green, tree-lined Coconut Creek the returns pull in pollen quickly, so pairing with <a href="/hvac-cleaning/">air conditioning cleaning</a> helps when the coil is loaded.',
    ],
    solutionsIntro:
      'Tree-lined streets, 55-plus villa communities and family homes all shape what collects in a Coconut Creek system.',
    solutions: [
      { icon: 'wind', title: 'Pollen and tree debris', text: 'The city canopy drops pollen that reaches the returns. Source removal clears it from the supply and return runs.' },
      { icon: 'duct', title: 'Villa closet units', text: 'Wynmoor and Township villas run compact handlers. We clean the short runs and registers inside the unit.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Cleaning them keeps the air path clearer.' },
      { icon: 'search', title: 'Duct condition checks', text: 'We flag crushed or disconnected runs during cleaning so a weak room gets the repair it needs.' },
    ],
    signsIntro:
      'These are the signs a Coconut Creek home or villa is due for duct cleaning.',
    signs: [
      'Dust returns quickly after you clean',
      'More pollen indoors during spring',
      'A room that never cools evenly',
      'Debris visible at the return grille',
      'A villa that has not been cleaned in years',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'Coconut Creek is one of Broward County’s greener cities, which means plenty of pollen for allergy-prone households. The duct system carries that pollen and household dust room to room, so cleaning at the source lowers what the family breathes.',
      'We remove the buildup instead of masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow a cleaning when an odor remains in the ductwork.',
    ],
    pois: [
      { name: 'Wynmoor', text: 'A large 55-plus villa community where closet systems often go years between cleanings.' },
      { name: 'Township & Tradewinds', text: 'Villa and townhome communities with compact handlers that benefit from regular cleaning.' },
      { name: 'Butterfly World area', text: 'Tree-lined neighborhoods near the park where pollen reaches the returns.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Wynmoor villas?', a: 'Yes. Wynmoor and similar 55-plus communities run closet air handlers and short runs. We coordinate with the community access rules before arriving.' },
      { q: 'My Coconut Creek home has a lot of trees around it. Does that matter?', a: 'The city canopy drops a lot of pollen that reaches the returns, so homes under heavy tree cover often benefit from cleaning on a shorter interval.' },
      { q: 'A room never cools right. Is cleaning the fix?', a: 'If it is buildup, cleaning helps. If a run is crushed or disconnected, we will show you and recommend an inspection or repair instead.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most homes do well every three to five years, sooner with pets, renovations, or heavy pollen at the vents.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Pompano Beach, Margate and Coral Springs. Call 954-945-9428 to confirm scheduling.' },
    ],
  },

  'air-duct-cleaning-margate': {
    metaTitle: 'Air Duct Cleaning in Margate - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Margate? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Margate from Purify Air Duct Cleaning Fort Lauderdale clears years of settled dust from established-home ductwork for cleaner, healthier indoor air.',
    healthier: [
      'Margate is an established Broward city, and neighborhoods like Coral Gate and Oriole have attic systems that have been collecting dust for years between cleanings. Residential air duct cleaning clears that long-settled buildup so each room gets cleaner air.',
      'Older homes reward a careful approach, so we clean the accessible attic runs and registers while noting anything that needs repair. A <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is a sensible add-on where the run has gone unserved.',
    ],
    solutionsIntro:
      'Established housing, attic heat and summer humidity shape what collects in a Margate HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Years of settled dust', text: 'Attic runs in long-held homes hold a lot of fine dust. We clean the accessible runs under negative air.' },
      { icon: 'home', title: 'Everyday allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Summer humidity keeps the coil damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'search', title: 'Aging-duct checks', text: 'We flag brittle or disconnected runs during cleaning so an old system gets repaired, not forced.' },
    ],
    signsIntro:
      'If your Margate home shows these, the ductwork is worth a look.',
    signs: [
      'Dust reappears quickly after cleaning',
      'The home still has older attic ductwork',
      'A musty smell when the AC first runs',
      'Debris visible inside the supply vents',
      'Airflow weaker than it used to be',
      'Allergy symptoms worse indoors',
    ],
    allergy: [
      'In established Margate homes, years of dust can sit in the attic runs and recirculate every time the system cycles. For allergy-prone households, cleaning the ducts at the source clears that load and freshens the indoor air.',
      'We focus on removal and keep the scope honest. If a run is too damaged to clean, an <a href="/air-duct-inspection/">air duct inspection</a> separates a cleaning from a repair.',
    ],
    pois: [
      { name: 'Coral Gate & Oriole', text: 'Established neighborhoods with older attic systems due for a thorough cleaning.' },
      { name: 'Winfield', text: 'Single-family homes where long-time owners often have ducts never cleaned.' },
      { name: 'Margate Boulevard corridor', text: 'Homes along the busy road take in road dust that reaches the returns.' },
    ],
    faqs: [
      { q: 'My Margate home is older. Can you still clean the ducts?', a: 'Usually yes. We clean the accessible runs carefully and tell you if any section is too brittle or damaged to clean rather than risking the run.' },
      { q: 'How do I know if my ducts have ever been cleaned?', a: 'If you never knew the date and the home is older, it is worth a look. We inspect the accessible runs and describe what we find before you decide.' },
      { q: 'Will cleaning improve weak airflow?', a: 'If buildup is restricting the runs, cleaning helps. If a run is crushed or disconnected, we will show you and recommend a repair instead.' },
      { q: 'Can you clean a neglected dryer vent too?', a: 'Yes. A dryer vent that has gone years without service is a common add-on. We clear the accessible run and check airflow.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Coconut Creek, North Lauderdale and Coral Springs. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-tamarac': {
    metaTitle: 'Air Duct Cleaning in Tamarac - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in Tamarac? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in Tamarac from Purify Air Duct Cleaning Fort Lauderdale clears dust from villa and single-family HVAC systems for cleaner, healthier indoor air.',
    healthier: [
      'Tamarac pairs the villas of Kings Point and Woodmont with larger single-family homes toward Commercial Boulevard. Residential air duct cleaning clears the dust these compact and longer systems collect so each room gets cleaner air.',
      'Villa closet units and house-length attic runs call for different setups, and we plan the visit for the one you have. When a damp coil drives a musty smell, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the cabinet is addressed.',
    ],
    solutionsIntro:
      'A large 55-plus community, single-family homes and summer humidity shape what collects in a Tamarac system.',
    solutions: [
      { icon: 'duct', title: 'Villa and house dust', text: 'Closet units and longer attic runs both load with dust. We clean the accessible ducts under negative air.' },
      { icon: 'home', title: 'Long-time owner buildup', text: 'In Kings Point and Woodmont, systems often go years between cleanings. Source removal clears that load.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Summer humidity keeps the coil damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'sparkle', title: 'Registers and grilles', text: 'Supply registers and return grilles are removed, cleaned and reinstalled along with the runs.' },
    ],
    signsIntro:
      'These are the signs a Tamarac home or villa is due for duct cleaning.',
    signs: [
      'Dust returns soon after you clean',
      'A musty smell when the AC starts',
      'Weak airflow from a bedroom register',
      'Debris at the return grille',
      'A villa that has not been cleaned in years',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'For allergy-prone residents of Tamarac, the ducts move dust and dander through the home, so cleaning them at the source lowers what the household breathes. It matters most through the humid months when windows stay shut.',
      'We remove the buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow when an odor remains after the ducts are clean.',
    ],
    pois: [
      { name: 'Kings Point', text: 'A large 55-plus villa community where closet systems often go years between cleanings.' },
      { name: 'Woodmont', text: 'Golf-community villas and homes with compact handlers that benefit from regular cleaning.' },
      { name: 'Commercial Boulevard corridor', text: 'Larger homes with longer supply runs that collect dust over the cooling season.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Tamarac Kings Point?', a: 'Yes. Kings Point and similar 55-plus communities run closet air handlers and short runs. We coordinate with the community access rules before arriving.' },
      { q: 'My Woodmont villa is compact. Is cleaning worth it?', a: 'Yes. Even short runs load with dust over time. We clean the ducts and registers and the cabinet when the coil needs it.' },
      { q: 'Why does my home smell musty when the AC turns on?', a: 'In Tamarac the smell usually starts on a damp coil or drain pan rather than the ducts. We open the air handler and recommend air conditioning cleaning when the equipment is the source.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most Tamarac homes, including the Kings Point villas, do well every three to five years, with pets, a remodel, or dust at the vents a reason to book sooner.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Sunrise, Lauderhill and North Lauderdale. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-north-lauderdale': {
    metaTitle: 'Air Duct Cleaning in North Lauderdale - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in North Lauderdale? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in North Lauderdale from Purify Air Duct Cleaning Fort Lauderdale clears attic-duct dust and allergens from single-family homes for cleaner indoor air.',
    healthier: [
      'North Lauderdale is mostly single-family housing, and neighborhoods like Kimberly, Southgate and Hampton Pines run attic ductwork that stays hot through the cooling season. Residential air duct cleaning clears the dust those runs collect so each room gets cleaner air.',
      'We plan the visit around your home, cleaning the accessible supply and return runs and the registers. Where the dryer run has gone years without service, a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is an easy add-on.',
    ],
    solutionsIntro:
      'Attic heat, family-home dust and summer humidity shape what collects in a North Lauderdale HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Hot-attic flex dust', text: 'Flex runs collect dust over their full length. We clean the accessible runs under negative air, not just the grilles.' },
      { icon: 'home', title: 'Household and pet load', text: 'Family homes fill the returns quickly. Source removal keeps dander and dust from recirculating.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Summer humidity keeps the coil damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'wind', title: 'Dryer-run lint', text: 'Lint builds in dryer runs through the attic or garage. We can clear that run on the same visit.' },
    ],
    signsIntro:
      'If your North Lauderdale home shows these, the ductwork is worth checking.',
    signs: [
      'Dust reappears quickly after cleaning',
      'A back room never cools like the rest',
      'Lint builds up around the dryer hookup',
      'A musty odor when the AC first runs',
      'Debris visible inside the vents',
      'Allergy symptoms worse indoors than outside',
    ],
    allergy: [
      'For allergy-prone families in North Lauderdale, the attic ducts carry dust and pollen to every room, so cleaning them at the source reduces the load the household recirculates. It matters most through pollen season and the humid summer.',
      'We take the buildup out rather than covering it. If odors remain after cleaning, optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> treats the duct surfaces as a follow-up step.',
    ],
    pois: [
      { name: 'Hampton Pines', text: 'Homes near the park take in outdoor dust and pollen that reach the returns.' },
      { name: 'Kimberly & Southgate', text: 'Single-family neighborhoods with attic flex duct due for cleaning.' },
      { name: 'McNab Road corridor', text: 'Homes along the busy road take in road dust that reaches the HVAC system.' },
    ],
    faqs: [
      { q: 'Do you clean the full attic run in North Lauderdale homes?', a: 'Yes. In Kimberly and Southgate homes we clean each accessible supply and return run through the attic, so dust that settles deep in the flex duct comes out, not only the grilles you can see.' },
      { q: 'A back bedroom never cools right. Will cleaning help?', a: 'If that room is only collecting dust, cleaning the runs feeding it usually helps. If a North Lauderdale attic run is crushed or disconnected, we point it out so you can plan a repair instead.' },
      { q: 'Can you clean the dryer vent on the same visit?', a: 'Often, yes. Many North Lauderdale homes route the dryer run through the attic or garage, and we can clear it while we are there.' },
      { q: 'How often should ducts be cleaned here?', a: 'North Lauderdale systems run most of the year, so every three to five years suits most homes, with pets, remodeling, or dust at the Hampton Pines-area vents a reason to book sooner.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Tamarac, Margate and Oakland Park. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-coral-springs': {
    metaTitle: 'Air Duct Cleaning in Coral Springs, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Coral Springs, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Coral Springs from Purify Air Duct Cleaning Fort Lauderdale clears dust from larger family homes, often with two systems, for cleaner indoor air.',
    healthier: [
      'Coral Springs is a master-planned city of larger family homes, and communities like Heron Bay, Eagle Trace and The Brooks often run two air handlers with long attic flex. Residential air duct cleaning clears the dust those runs collect so every room gets cleaner air.',
      'With more duct and more vents than a smaller home, the job should be sized correctly. We clean each accessible run and register, and when a room stays weak we recommend an <a href="/air-duct-inspection/">air duct inspection</a> before promising a cleaning will fix it.',
    ],
    solutionsIntro:
      'Larger homes, two-system layouts and mature landscaping shape what collects in a Coral Springs HVAC system.',
    solutions: [
      { icon: 'wind', title: 'Second-system zones', text: 'Many homes run two air handlers. We clean each system and the runs it serves so no zone is skipped.' },
      { icon: 'duct', title: 'Long attic-run dust', text: 'Long flex runs hold dust along their length. We clean the accessible runs under negative air.' },
      { icon: 'home', title: 'Family and pet load', text: 'Busy homes fill the returns quickly. Source removal keeps dander and dust from recirculating.' },
      { icon: 'search', title: 'Weak-room diagnosis', text: 'We separate buildup from a crushed or disconnected run so a warm room gets the right fix.' },
    ],
    signsIntro:
      'These are the signs a Coral Springs home is ready for duct cleaning.',
    signs: [
      'Dust comes back fast after you clean',
      'One zone cools worse than the other',
      'An upstairs bedroom never cools evenly',
      'Debris visible at the supply registers',
      'Two systems that have both gone years uncleaned',
      'Allergy symptoms worse indoors',
    ],
    allergy: [
      'In Coral Springs, mature landscaping means plenty of pollen, and larger homes move a lot of air through long duct runs. For allergy-prone families, cleaning the ducts at the source lowers the dust and pollen that recirculate through the house.',
      'We remove the buildup rather than masking it and keep the scope honest across both systems. A <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is easy to add on the same visit.',
    ],
    pois: [
      { name: 'Heron Bay', text: 'Larger gated homes with two systems and long attic runs that benefit from full cleaning.' },
      { name: 'Eagle Trace & The Brooks', text: 'Golf-community homes with mature landscaping that drops pollen into the returns.' },
      { name: 'Coral Springs Country Club', text: 'Established neighborhoods where systems have often gone years between cleanings.' },
    ],
    faqs: [
      { q: 'My Coral Springs home has two AC systems. Do you clean both?', a: 'Yes. We clean each air handler and the runs it serves so a two-system home has every zone addressed. Pricing reflects the number of systems and vents.' },
      { q: 'A room upstairs never cools right. Is that a cleaning issue?', a: 'It can be buildup, or a crushed run in a two-system Heron Bay or Eagle Trace home. We clean what we can reach and recommend an inspection when a run looks damaged rather than dirty.' },
      { q: 'There is a lot of landscaping around my home. Does that matter?', a: 'Mature landscaping drops pollen that reaches the returns, so homes with heavy tree cover often benefit from cleaning on a shorter interval.' },
      { q: 'How is a larger home priced?', a: 'By the number of systems and vents and the access involved. We give you the scope in writing before any work starts.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Coconut Creek, Margate and Tamarac. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-weston': {
    metaTitle: 'Air Duct Cleaning in Weston, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Weston, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Weston from Purify Air Duct Cleaning Fort Lauderdale clears dust and debris from larger family homes near the Everglades edge for cleaner indoor air.',
    healthier: [
      'Weston is a planned community of larger homes, and neighborhoods like Weston Hills, Savanna and Bonaventure often run attic ductwork and more than one air handler. Residential air duct cleaning clears the dust those runs collect so each room receives cleaner air.',
      'Sitting at the western edge near the Everglades, Weston homes can see a weak room that is really a disconnected run rather than dust. We clean the accessible ducts and recommend an <a href="/air-duct-inspection/">air duct inspection</a> when the airflow problem is not buildup.',
    ],
    solutionsIntro:
      'Larger homes, two-system layouts and the western edge environment shape what collects in a Weston HVAC system.',
    solutions: [
      { icon: 'wind', title: 'Multi-system zones', text: 'Larger homes run more than one air handler. We clean each system and its runs so no area is missed.' },
      { icon: 'duct', title: 'Long attic-run dust', text: 'Long flex runs hold dust along their length. We clean the accessible runs under negative air.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
      { icon: 'search', title: 'Weak-room diagnosis', text: 'We separate buildup from a crushed or disconnected run so a warm room gets the right fix.' },
    ],
    signsIntro:
      'If your Weston home shows these, the ductwork is worth a look.',
    signs: [
      'Dust returns quickly after you clean',
      'A room or wing that never cools evenly',
      'Airflow dropped after attic work',
      'Debris visible at the supply registers',
      'Multiple systems overdue for cleaning',
      'Indoor allergy symptoms through pollen season',
    ],
    allergy: [
      'At the Everglades edge, Weston homes can take in extra outdoor pollen, which the duct system spreads room to room. For allergy-prone families, cleaning the ducts at the source lowers the dust and pollen that recirculate indoors.',
      'We remove the buildup rather than masking it, and keep the scope honest across each system. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow when an odor lingers in the ductwork.',
    ],
    pois: [
      { name: 'Weston Hills', text: 'Larger gated homes with multiple systems and long attic runs that benefit from full cleaning.' },
      { name: 'Savanna & Bonaventure', text: 'Family neighborhoods where returns load steadily with household dust.' },
      { name: 'Indian Trace corridor', text: 'Homes near open western land take in extra outdoor dust and pollen.' },
    ],
    faqs: [
      { q: 'My Weston home has more than one AC system. Do you clean all of them?', a: 'Yes. We clean each air handler and the runs it serves so a large home has every zone addressed. Pricing reflects the number of systems and vents.' },
      { q: 'A wing of the house cools poorly. Is that a duct issue?', a: 'It can be buildup, or a crushed or disconnected run near the western edge. We clean what we can and recommend an inspection if a run looks damaged.' },
      { q: 'We are near open land. Does that affect the ducts?', a: 'Homes near open western land can take in more outdoor dust and pollen, so the returns often load faster and benefit from cleaning a little sooner.' },
      { q: 'How is a larger home priced?', a: 'By the number of systems and vents and the access involved. We provide the scope in writing before any work starts.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Davie, Pembroke Pines and Sunrise. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-north-miami-beach': {
    metaTitle: 'Air Duct Cleaning in North Miami Beach - Purify Air Duct Cleaning',
    metaDescription:
      'Need Air Duct Cleaning in North Miami Beach? Purify Air Duct Cleaning offers deep duct cleaning, dust removal, and cleaner indoor air. Call today!',
    h1Description:
      'Air Duct Cleaning in North Miami Beach from Purify Air Duct Cleaning Fort Lauderdale clears dust from homes and low-rise condos for cleaner, fresher indoor air.',
    healthier: [
      'North Miami Beach mixes single-family homes in Eastern Shores and Fulford-by-the-Sea with low-rise condos, so closet air handlers and attic flex both turn up on the same street. Residential air duct cleaning clears the dust those systems collect so each room gets cleaner air.',
      'We plan the visit around the system we find, cleaning the accessible runs and registers. When a damp coil drives a musty smell, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the cabinet is addressed too.',
    ],
    solutionsIntro:
      'A mix of homes and condos, waterways nearby and summer humidity shape what collects in a North Miami Beach system.',
    solutions: [
      { icon: 'duct', title: 'Mixed-system dust', text: 'Closet units and attic flex both load with dust. We clean the accessible supply and return runs under negative air.' },
      { icon: 'droplet', title: 'Waterside humidity', text: 'Near Eastern Shores the coil stays damp, where musty odors start. We clean those wet components when needed.' },
      { icon: 'home', title: 'Allergens in the returns', text: 'Dust and dander collect in the returns first. Source removal keeps them from recirculating.' },
      { icon: 'sparkle', title: 'Registers and grilles', text: 'Supply registers and return grilles are removed, cleaned and reinstalled along with the runs.' },
    ],
    signsIntro:
      'These are the signs a North Miami Beach home or condo is due for duct cleaning.',
    signs: [
      'Dust settles quickly after you clean',
      'A musty smell when the AC first runs',
      'Weak airflow from a bedroom register',
      'Debris at the return grille',
      'The home or unit has not been cleaned in years',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'For allergy-prone households in North Miami Beach, the ducts carry dust and dander through the home, so cleaning them at the source lowers what the family breathes. Waterside humidity makes a clean system matter more through the summer.',
      'We remove the buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow a cleaning, and we can inspect the <a href="/dryer-vent-cleaning/">dryer vent</a> run on the same visit.',
    ],
    pois: [
      { name: 'Eastern Shores', text: 'Waterfront homes near the Intracoastal where humidity loads the coil and returns.' },
      { name: 'Fulford-by-the-Sea', text: 'Established single-family homes with a mix of closet and attic systems.' },
      { name: 'Greynolds Park area', text: 'Tree-lined neighborhoods where pollen reaches the HVAC returns.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in North Miami Beach condos?', a: 'Yes. Low-rise buildings usually have a closet air handler and short runs. We clean the ducts and the cabinet when the coil needs it, coordinating access with management.' },
      { q: 'My Eastern Shores home is on the water. Does that affect the ducts?', a: 'Waterside humidity keeps the coil and returns damp, so homes near the Intracoastal often benefit from cleaning a little sooner.' },
      { q: 'Why does my home smell musty when the AC turns on?', a: 'In this climate the smell usually begins on a damp coil or drain pan. We will check and recommend air conditioning cleaning if the ducts alone are not the source.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most North Miami Beach homes do well every three to five years, and waterside humidity in Eastern Shores can make a shorter interval worthwhile.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Aventura, North Miami and Miami Gardens. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-north-miami': {
    metaTitle: 'Air Duct Cleaning in North Miami, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in North Miami, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in North Miami from Purify Air Duct Cleaning Fort Lauderdale clears attic-duct dust and allergens from homes and condos for cleaner indoor air.',
    healthier: [
      'North Miami pairs Keystone and Sans Souci houses, which usually have attic flex duct, with condos closer to Biscayne that run compact closet systems. Residential air duct cleaning clears the dust both collect so each room gets cleaner air.',
      'We plan the visit for the home or unit we find, cleaning the accessible runs and registers. Condos near Biscayne often have long dryer vent runs, so a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is a natural add-on.',
    ],
    solutionsIntro:
      'A mix of houses and condos, bayside humidity and summer heat shape what collects in a North Miami system.',
    solutions: [
      { icon: 'duct', title: 'Attic and closet dust', text: 'House flex runs and condo closet units both load with dust. We clean the accessible ducts under negative air.' },
      { icon: 'droplet', title: 'Bayside humidity', text: 'Near Biscayne the coil stays damp, where musty smells start. We clean the wet components when they are the source.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
      { icon: 'wind', title: 'Long dryer runs', text: 'Condos near Biscayne route long dryer runs. We can clear the accessible run on the same visit.' },
    ],
    signsIntro:
      'If a North Miami home or condo shows these, the ductwork is worth checking.',
    signs: [
      'Dust returns quickly after you clean',
      'A musty smell when the AC starts',
      'A back room that never cools evenly',
      'Debris at the return grille',
      'The home or unit has not been cleaned in years',
      'Allergy symptoms worse indoors',
    ],
    allergy: [
      'For allergy-prone households in North Miami, the ducts move dust and dander through the home, so cleaning them at the source lowers what the family breathes. Bayside humidity makes a clean system matter more through the summer.',
      'We remove the buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow a cleaning when an odor remains in the ductwork.',
    ],
    pois: [
      { name: 'Keystone & Sans Souci', text: 'Single-family homes with attic flex duct that benefits from full-run cleaning.' },
      { name: 'Biscayne corridor condos', text: 'Compact closet systems with long dryer runs near the bay.' },
      { name: 'Enchanted Forest & Oleta area', text: 'Tree-lined and waterside neighborhoods where pollen and humidity reach the system.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in both North Miami houses and condos?', a: 'Yes. Keystone and Sans Souci houses usually have attic flex, and Biscayne-corridor condos run closet units. We clean the accessible runs for either.' },
      { q: 'My condo is near the bay. Does humidity affect the ducts?', a: 'Bayside humidity keeps the coil and returns damp, so units near Biscayne often benefit from cleaning a little sooner.' },
      { q: 'Can you clean a long dryer vent in my building?', a: 'Yes. We clear the accessible run, including long runs near Biscayne, and tell you if a section is blocked or damaged.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most homes do well every three to five years, sooner with pets, renovations, or dust and odors at the vents.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in North Miami Beach, Miami Gardens and Aventura. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-miami-gardens': {
    metaTitle: 'Air Duct Cleaning in Miami Gardens, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Miami Gardens, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Miami Gardens from Purify Air Duct Cleaning Fort Lauderdale clears attic-duct dust and allergens from single-family homes for cleaner indoor air.',
    healthier: [
      'Miami Gardens is mostly single-family housing, and Carol City, Andover and Norwood run attic ductwork that stays hot and dusty through a long cooling season. Residential air duct cleaning clears that buildup so each room gets cleaner air.',
      'We plan the visit around the home, cleaning the accessible supply and return runs and the registers. When the coil is matted and airflow is weak, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the equipment is addressed too.',
    ],
    solutionsIntro:
      'Attic heat, family-home living and summer humidity shape what collects in a Miami Gardens HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Hot-attic flex dust', text: 'Flex runs collect dust over their full length. We clean the accessible runs under negative air, not just the grilles.' },
      { icon: 'home', title: 'Household and pet load', text: 'Busy homes fill the returns quickly. Source removal keeps dander and dust from recirculating.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Afternoon humidity keeps the coil damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'wind', title: 'Weak-airflow checks', text: 'We look for a crushed or disconnected run while cleaning so a warm room gets the right fix.' },
    ],
    signsIntro:
      'These are the signs a Miami Gardens home is ready for duct cleaning.',
    signs: [
      'Dust reappears quickly after you clean',
      'A back room never cools like the rest',
      'A musty odor when the AC first runs',
      'Debris visible inside the supply vents',
      'The home has not had the ducts cleaned in years',
      'Allergy symptoms worse indoors than outside',
    ],
    allergy: [
      'For allergy-prone families in Miami Gardens, the attic ducts carry dust and pollen to every room, so cleaning them at the source reduces the load the household recirculates. It matters most through pollen season and the humid summer.',
      'We take the buildup out rather than covering it. A <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is simple to add on the same visit for homes where laundry shares the hot attic chase.',
    ],
    pois: [
      { name: 'Carol City', text: 'Single-family neighborhoods with attic flex duct due for a thorough cleaning.' },
      { name: 'Andover & Norwood', text: 'Family areas where returns load quickly with household and pet dust.' },
      { name: 'Hard Rock Stadium area', text: 'Homes near the stadium corridor take in road dust that reaches the returns.' },
    ],
    faqs: [
      { q: 'Do you clean the full attic run in Miami Gardens homes?', a: 'Yes. In Carol City and Norwood homes we clean the full accessible attic runs, so dust deep in the flex duct is removed rather than only the registers in each room.' },
      { q: 'A back bedroom never cools right. Will cleaning help?', a: 'If buildup is the cause, cleaning the runs feeding that room helps. If an Andover-area attic run is crushed or disconnected, we show you so a repair can be planned instead.' },
      { q: 'Why does my home smell musty when the AC turns on?', a: 'In Miami Gardens the smell usually begins on a damp coil or drain pan rather than the ducts. We open the system and recommend air conditioning cleaning when the equipment is the source.' },
      { q: 'How often should ducts be cleaned here?', a: 'With the AC running nearly year-round here, every three to five years fits most homes, and dust near the Hard Rock Stadium corridor or a remodel can be a reason to book sooner.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in North Miami Beach, Miramar and Miami Lakes. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-sunny-isles-beach': {
    metaTitle: 'Air Duct Cleaning in Sunny Isles Beach, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Sunny Isles Beach, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Sunny Isles Beach from Purify Air Duct Cleaning Fort Lauderdale clears dust and humidity-driven buildup from oceanfront condo HVAC systems for cleaner indoor air.',
    healthier: [
      'Sunny Isles Beach is a wall of oceanfront towers along Collins Avenue, where units rely on compact closet air handlers with short runs and long dryer risers. Residential air duct cleaning clears the dust those systems collect so the air in each unit is cleaner.',
      'High-rise living brings strict building access, and we plan each visit around it. With salt air keeping the coil damp, we often pair the duct work with <a href="/hvac-cleaning/">air conditioning cleaning</a> so the cabinet is handled too.',
    ],
    solutionsIntro:
      'Oceanfront humidity, high-rise living and closed-up units shape what collects in a Sunny Isles Beach system.',
    solutions: [
      { icon: 'droplet', title: 'Salt-air coil humidity', text: 'Oceanfront coils stay damp, where musty odors and film start. We clean the wet components when they are the source.' },
      { icon: 'duct', title: 'Closet-unit dust', text: 'Short condo runs still load with dust. We clean the supply and return ducts and the registers in the unit.' },
      { icon: 'wind', title: 'Long dryer risers', text: 'Towers route long vertical dryer runs. We clear the accessible run and check airflow on the same visit.' },
      { icon: 'home', title: 'Recirculated allergens', text: 'With windows closed, the same air cycles through the ducts. Source removal keeps dust and dander out of it.' },
    ],
    signsIntro:
      'These are the signs a Sunny Isles Beach unit is due for duct cleaning.',
    signs: [
      'A musty smell when the AC starts in a closed-up unit',
      'Dust settles quickly on surfaces after cleaning',
      'Weak airflow from a bedroom supply register',
      'Debris visible at the return grille',
      'The unit sat empty for a season',
      'Allergy symptoms that ease away from the unit',
    ],
    allergy: [
      'In an oceanfront tower, windows stay closed and the same air cycles through the ducts, so anything in the system keeps circulating. For allergy-prone residents of Sunny Isles Beach, clean ducts mean less dust and dander moving through the unit.',
      'We remove the buildup at the source rather than spraying over it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow, and we can inspect the long <a href="/dryer-vent-cleaning/">dryer vent</a> riser while we are there.',
    ],
    pois: [
      { name: 'Collins Avenue towers', text: 'Oceanfront high-rises with closet air handlers in constant salt-air humidity.' },
      { name: 'Winston Towers', text: 'Large residential buildings where units benefit from regular duct and coil cleaning.' },
      { name: 'Atlantic Isle & the Intracoastal side', text: 'Waterfront residences where humidity loads the coil and returns.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in Sunny Isles Beach oceanfront towers?', a: 'Yes. Closet air handlers and short runs in Collins Avenue towers are a regular part of our work. We coordinate elevator and loading access with building management.' },
      { q: 'My unit smells musty when the AC runs. Is that the ducts?', a: 'Near the ocean the smell usually begins on a damp coil or drain pan. We will check and recommend air conditioning cleaning if the ducts alone are not the source.' },
      { q: 'Can you clean the long dryer riser in my building?', a: 'We clear the accessible run, including long vertical risers in towers, and tell you if a section is blocked or damaged.' },
      { q: 'The unit was a seasonal rental. Should I clean before moving in?', a: 'It is a good idea. A unit that sat closed up holds stale air and dust, and cleaning at the source gives a fresh start.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Aventura, North Miami Beach and Hallandale Beach. Call 954-945-9428 to confirm scheduling.' },
    ],
  },

  'air-duct-cleaning-miami-lakes': {
    metaTitle: 'Air Duct Cleaning in Miami Lakes, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Miami Lakes, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Miami Lakes from Purify Air Duct Cleaning Fort Lauderdale clears attic-duct dust from single-family homes in Loch Lomond and Royal Oaks for cleaner, healthier indoor air.',
    healthier: [
      'Miami Lakes is mostly single-family homes, and Loch Lomond and Royal Oaks run attic flex duct that stays hot through the long cooling season. Residential air duct cleaning clears the dust those runs collect so each room gets cleaner air.',
      'We plan the visit around the home, cleaning the accessible supply and return runs and the registers. When a room stays weak after cleaning, an <a href="/air-duct-inspection/">air duct inspection</a> checks whether a run is crushed or disconnected.',
    ],
    solutionsIntro:
      'Attic heat, a planned-community layout and summer humidity shape what collects in a Miami Lakes HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Hot-attic flex dust', text: 'Flex runs collect dust over their length. We clean the accessible runs under negative air, not just the grilles.' },
      { icon: 'home', title: 'Family and pet load', text: 'Busy homes fill the returns quickly. Source removal keeps dander and dust from recirculating.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Summer humidity keeps the coil damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'sparkle', title: 'Registers and grilles', text: 'Supply registers and return grilles are removed, cleaned and reinstalled along with the runs.' },
    ],
    signsIntro:
      'If your Miami Lakes home shows these, the ductwork is worth a look.',
    signs: [
      'Dust reappears quickly after you clean',
      'A room on the far end stays warm',
      'A musty odor when the AC first runs',
      'Debris visible at the return grille',
      'The home has not had the ducts cleaned in years',
      'Allergy symptoms worse indoors than outside',
    ],
    allergy: [
      'For allergy-prone families in Miami Lakes, the attic ducts carry dust and pollen to every room, so cleaning them at the source reduces the load the household recirculates through pollen season and the humid summer.',
      'We take the buildup out rather than covering it. If odors remain after cleaning, optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> treats the duct surfaces as a follow-up step.',
    ],
    pois: [
      { name: 'Loch Lomond & Royal Oaks', text: 'Single-family neighborhoods with attic flex duct due for a thorough cleaning.' },
      { name: 'Main Street Miami Lakes', text: 'Townhomes and condos near the town center with compact closet systems.' },
      { name: 'Lake Patricia area', text: 'Waterside homes where humidity reaches the coil and returns.' },
    ],
    faqs: [
      { q: 'Do you clean the full attic run in Miami Lakes homes?', a: 'Yes. In Loch Lomond and Royal Oaks homes we clean the accessible supply and return runs through the attic so deeper flex-duct dust is removed, not just the registers.' },
      { q: 'A room at the end of the house stays warm. Will cleaning help?', a: 'If the far room is only collecting dust, cleaning the runs that serve it helps. If a Miami Lakes attic run is crushed or disconnected, we show you and explain the repair that room really needs.' },
      { q: 'Why does my home smell musty when the AC turns on?', a: 'Near Lake Patricia and across Miami Lakes the musty smell usually starts on a damp coil or drain pan. We check the equipment and recommend air conditioning cleaning when that is the source, not the ducts.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most Miami Lakes homes do well every three to five years. Pets, a remodel, or dust showing up at the vents near Main Street are reasons to clean sooner.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Miami Gardens, Hialeah and Miramar. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-hialeah': {
    metaTitle: 'Air Duct Cleaning in Hialeah, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Hialeah, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Hialeah from Purify Air Duct Cleaning Fort Lauderdale clears dust from houses and small multi-family HVAC systems for cleaner, fresher indoor air.',
    healthier: [
      'Hialeah mixes single-family houses with small multi-family buildings, so Palm Springs and Southeast Hialeah show both attic ducts and closet air handlers on the same block. Residential air duct cleaning clears the dust those systems collect so each room gets cleaner air.',
      'We plan the visit for the system we find, cleaning the accessible runs and registers. When the coil is matted and the smell is musty, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the cabinet is handled too.',
    ],
    solutionsIntro:
      'Dense housing, busy roads like Okeechobee and summer humidity shape what collects in a Hialeah HVAC system.',
    solutions: [
      { icon: 'duct', title: 'Attic and closet dust', text: 'House flex runs and closet units both load with dust. We clean the accessible ducts under negative air.' },
      { icon: 'wind', title: 'Road and urban grit', text: 'Busy corridors like Okeechobee Road push grit into the returns. Source removal clears it from the runs.' },
      { icon: 'droplet', title: 'Coil humidity', text: 'Summer humidity keeps the coil damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Cleaning them keeps the air path clearer.' },
    ],
    signsIntro:
      'These are the signs a Hialeah home is ready for duct cleaning.',
    signs: [
      'Dust settles quickly after you clean',
      'A musty smell when the AC first runs',
      'Weak airflow from a bedroom register',
      'Debris visible at the return grille',
      'The home or unit has not been cleaned in years',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'In dense, busy Hialeah, road grit and household dust both end up in the ducts, which then carry them room to room. For allergy-prone households, cleaning the ducts at the source lowers what the family breathes.',
      'We remove the buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow a cleaning, and we can check the <a href="/dryer-vent-cleaning/">dryer vent</a> run on the same visit.',
    ],
    pois: [
      { name: 'Palm Springs', text: 'Established single-family homes with attic runs due for cleaning.' },
      { name: 'Southeast Hialeah', text: 'A mix of houses and small multi-family buildings with closet and attic systems.' },
      { name: 'Okeechobee Road corridor', text: 'Homes along the busy route take in road grit that reaches the returns.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in both Hialeah houses and small apartment buildings?', a: 'Yes. Palm Springs houses usually have attic flex and small multi-family buildings run closet units. We clean the accessible runs for either.' },
      { q: 'I live near a busy road. Does that affect my ducts?', a: 'Busy corridors push extra grit into the returns, so homes along routes like Okeechobee Road often benefit from cleaning a little sooner.' },
      { q: 'Why does my home smell musty when the AC turns on?', a: 'In Hialeah the smell usually starts on a damp coil or drain pan, not the ducts. We open the air handler and recommend air conditioning cleaning when the equipment is the source.' },
      { q: 'How often should ducts be cleaned here?', a: 'Most homes do well every three to five years, sooner with pets, renovations, or dust at the vents.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Miami Lakes, Miami Gardens and Miramar. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-boca-raton': {
    metaTitle: 'Air Duct Cleaning in Boca Raton, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Boca Raton, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Boca Raton from Purify Air Duct Cleaning Fort Lauderdale clears dust from condos and homes near Mizner Park and Town Center for cleaner indoor air.',
    healthier: [
      'Boca Raton spans East Boca condos near Mizner Park and the larger homes around Town Center and Camino Gardens, so closet air handlers and longer attic runs both turn up. Residential air duct cleaning clears the dust those systems collect so each room gets cleaner air.',
      'We plan the visit around the property, cleaning the accessible runs and registers. When a damp coil drives a musty smell, we add <a href="/hvac-cleaning/">air conditioning cleaning</a> so the equipment is addressed too.',
    ],
    solutionsIntro:
      'Coastal humidity, upscale condos and larger inland homes shape what collects in a Boca Raton HVAC system.',
    solutions: [
      { icon: 'droplet', title: 'Coil humidity', text: 'Near the coast the coil stays damp, where musty odors start. We clean the wet components when they are the source.' },
      { icon: 'duct', title: 'Condo and attic dust', text: 'East Boca closet units and inland attic runs both load with dust. We clean the accessible ducts under negative air.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
      { icon: 'search', title: 'Weak-room diagnosis', text: 'We separate buildup from a crushed or disconnected run so a warm room gets the right fix.' },
    ],
    signsIntro:
      'If a Boca Raton home or condo shows these, the ductwork is worth checking.',
    signs: [
      'Dust returns quickly after you clean',
      'A musty smell when the AC first runs',
      'A room that never cools evenly',
      'Debris at the return grille',
      'The home or unit has not been cleaned in years',
      'Allergy symptoms worse indoors',
    ],
    allergy: [
      'For allergy-prone households in Boca Raton, the ducts carry dust and pollen through the home, so cleaning them at the source lowers what the family breathes. Coastal humidity makes a clean system matter more through the summer.',
      'We remove the buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow a cleaning, and a <a href="/dryer-vent-cleaning/">dryer vent cleaning</a> is easy to add on the same visit.',
    ],
    pois: [
      { name: 'East Boca & Mizner Park', text: 'Upscale condos with closet air handlers in coastal humidity.' },
      { name: 'Camino Gardens', text: 'Established single-family homes with longer runs that collect dust.' },
      { name: 'Town Center & Boca West', text: 'Larger homes and communities where systems benefit from regular cleaning.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in East Boca condos?', a: 'Yes. Condos near Mizner Park run closet air handlers and short runs. We clean the ducts and the cabinet when coastal humidity has loaded the coil, coordinating access with management.' },
      { q: 'My Camino Gardens home has longer attic runs. Do you clean all of them?', a: 'Yes. In Camino Gardens and the homes west of Town Center we clean the accessible attic runs, so dust deeper in the flex duct is removed, not just the registers.' },
      { q: 'Does living near the coast change the cleaning interval?', a: 'Coastal humidity keeps the coil and returns damp, so homes near the water often benefit from cleaning a little sooner.' },
      { q: 'A room never cools right. Is that a cleaning issue?', a: 'It can be buildup, or a crushed or disconnected run. We clean what we can and recommend an inspection if a run looks damaged rather than just dirty.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Deerfield Beach, Delray Beach and Coconut Creek. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-delray-beach': {
    metaTitle: 'Air Duct Cleaning in Delray Beach, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Delray Beach, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Delray Beach from Purify Air Duct Cleaning Fort Lauderdale clears dust from downtown condos and Lake Ida homes for cleaner, fresher indoor air.',
    healthier: [
      'Delray Beach pairs downtown condos near Atlantic Avenue with single-family homes around Lake Ida and Tropic Isle, so the systems range from closet handlers to longer attic runs. Residential air duct cleaning clears the dust they collect so each room gets cleaner air.',
      'Beach buildings often route a long dryer riser alongside the closet handler, and inland homes have attic flex. We plan the visit for the property and add <a href="/hvac-cleaning/">air conditioning cleaning</a> when the coil is matted.',
    ],
    solutionsIntro:
      'Coastal humidity, a walkable downtown and inland homes shape what collects in a Delray Beach HVAC system.',
    solutions: [
      { icon: 'droplet', title: 'Beachside coil humidity', text: 'Near Atlantic Avenue and the beach the coil stays damp, where musty odors start. We clean the wet components when needed.' },
      { icon: 'duct', title: 'Condo and attic dust', text: 'Downtown closet units and inland attic runs both load with dust. We clean the accessible ducts under negative air.' },
      { icon: 'wind', title: 'Long dryer risers', text: 'Beach buildings route long dryer runs. We can clear the accessible run and check airflow.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
    ],
    signsIntro:
      'These are the signs a Delray Beach home or condo is due for duct cleaning.',
    signs: [
      'A musty smell when the AC starts in a humid unit',
      'Dust returns quickly after cleaning',
      'A back room that never cools evenly',
      'Debris at the return grille',
      'The unit sat closed up for a season',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'For allergy-prone residents of Delray Beach, closed-up coastal living means the same air cycles through the ducts, carrying dust and dander room to room. Cleaning the ducts at the source lowers that load noticeably.',
      'We remove the buildup rather than masking it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow, and we can inspect a long <a href="/dryer-vent-cleaning/">dryer vent</a> run while we are there.',
    ],
    pois: [
      { name: 'Downtown & Atlantic Avenue', text: 'Walkable condos with closet air handlers in coastal humidity.' },
      { name: 'Lake Ida', text: 'Single-family homes with attic runs that collect dust over the cooling season.' },
      { name: 'Tropic Isle', text: 'Waterfront homes near the Intracoastal where humidity loads the coil and returns.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in downtown Delray condos?', a: 'Yes. Condos near Atlantic Avenue run closet air handlers and short runs. We clean the ducts and the cabinet when the coil needs it, coordinating access with management.' },
      { q: 'My Lake Ida home has attic runs. Do you clean all of them?', a: 'Yes. Around Lake Ida we clean the accessible supply and return runs through the attic, so deeper flex-duct dust comes out, not only the registers.' },
      { q: 'Does living near the beach change the cleaning interval?', a: 'Coastal humidity keeps the coil and returns damp, so homes near the water often benefit from cleaning a little sooner.' },
      { q: 'Can you clean a long dryer vent in a beach building?', a: 'Yes. We clear the accessible run, including long risers, and tell you if a section is blocked or damaged.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Boca Raton, Boynton Beach and Deerfield Beach. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-boynton-beach': {
    metaTitle: 'Air Duct Cleaning in Boynton Beach, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Boynton Beach, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Boynton Beach from Purify Air Duct Cleaning Fort Lauderdale clears dust from homes and oceanfront condos for cleaner, healthier indoor air.',
    healthier: [
      'Boynton Beach runs from oceanfront buildings to inland homes off Boynton Beach Boulevard and around Quantum Park, so systems vary from closet handlers to longer attic runs. Residential air duct cleaning clears the dust they collect so each room gets cleaner air.',
      'Oceanfront units keep the coil damp while inland homes load the attic runs with dust, so we plan the visit for the property. When a musty smell points to the equipment, we add <a href="/hvac-cleaning/">air conditioning cleaning</a>.',
    ],
    solutionsIntro:
      'Coastal humidity, inland family homes and summer heat shape what collects in a Boynton Beach HVAC system.',
    solutions: [
      { icon: 'droplet', title: 'Oceanfront coil humidity', text: 'Beachside coils stay damp, where musty odors start. We clean the wet components when they are the source.' },
      { icon: 'duct', title: 'Attic-run dust', text: 'Inland homes have longer flex runs. We clean the accessible supply and return ducts under negative air.' },
      { icon: 'home', title: 'Household allergens', text: 'Dust and dander collect in the returns first. Source removal keeps them out of the air path.' },
      { icon: 'sparkle', title: 'Registers and grilles', text: 'Supply registers and return grilles are removed, cleaned and reinstalled along with the runs.' },
    ],
    signsIntro:
      'If a Boynton Beach home or condo shows these, the ductwork is worth checking.',
    signs: [
      'A musty smell on humid coastal mornings',
      'Dust settles again soon after cleaning',
      'An inland room that never cools evenly',
      'Debris at the return grille',
      'The home or unit has not been cleaned in years',
      'Allergy symptoms that ease away from home',
    ],
    allergy: [
      'For allergy-prone households in Boynton Beach, the ducts carry dust, salt grit and pollen through the home. Cleaning them at the source lowers what the family breathes, whether the home is an oceanfront condo or an inland house.',
      'We take the buildup out rather than spraying over it. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow, and we can check the <a href="/dryer-vent-cleaning/">dryer vent</a> on the same visit.',
    ],
    pois: [
      { name: 'Oceanfront & Boynton Harbor Marina', text: 'Beachside condos run closet handlers in salt air that keeps the coil damp.' },
      { name: 'Quantum Park area', text: 'Newer homes and communities that take in road and construction dust.' },
      { name: 'Boynton Beach Boulevard corridor', text: 'Inland homes with attic runs that collect dust over the cooling season.' },
    ],
    faqs: [
      { q: 'Do you clean ducts in oceanfront Boynton condos?', a: 'Yes. Beachside buildings use closet air handlers and short runs. We clean the ducts and the cabinet when salt-air humidity has loaded the coil.' },
      { q: 'My inland home has long attic runs. Do you clean all of them?', a: 'Yes. We clean the accessible supply and return runs through the attic, not just the registers, so deeper dust is removed.' },
      { q: 'Does living near the beach change the cleaning interval?', a: 'Coastal humidity keeps the coil and returns damp, so beachside homes often benefit from cleaning a little sooner than inland ones.' },
      { q: 'Why does my home smell musty when the AC turns on?', a: 'In this climate the smell usually starts on a damp coil or drain pan. We will check and recommend air conditioning cleaning if the ducts alone are not the source.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Delray Beach, Boca Raton and Wellington. Call 954-945-9428 to confirm a time.' },
    ],
  },

  'air-duct-cleaning-wellington': {
    metaTitle: 'Air Duct Cleaning in Wellington, FL | Purify',
    metaDescription:
      'Air Duct Cleaning in Wellington, FL from Purify. We remove dust and allergens from home ducts for cleaner indoor air. Call 954-945-9428.',
    h1Description:
      'Air Duct Cleaning in Wellington from Purify Air Duct Cleaning Fort Lauderdale clears dust from larger family homes in this equestrian community for cleaner indoor air.',
    healthier: [
      'Wellington is a spread-out equestrian community of larger homes, and neighborhoods like Olympia and Binks Forest often run attic ductwork with more than one air handler. Residential air duct cleaning clears the dust those runs collect so each room gets cleaner air.',
      'Properties near open land and the equestrian areas pull in extra outdoor dust, so returns load faster. We clean each accessible run and register, and recommend an <a href="/air-duct-inspection/">air duct inspection</a> when a weak room is more than buildup.',
    ],
    solutionsIntro:
      'Larger homes, open equestrian land and two-system layouts shape what collects in a Wellington HVAC system.',
    solutions: [
      { icon: 'wind', title: 'Outdoor dust and pollen', text: 'Homes near open land and the equestrian areas take in more airborne dust. Source removal clears it from the runs.' },
      { icon: 'duct', title: 'Long attic-run dust', text: 'Long flex runs hold dust along their length. We clean the accessible runs under negative air.' },
      { icon: 'home', title: 'Multi-system zones', text: 'Larger homes run more than one air handler. We clean each system and its runs so no area is missed.' },
      { icon: 'search', title: 'Weak-room diagnosis', text: 'We separate buildup from a crushed or disconnected run so a warm room gets the right fix.' },
    ],
    signsIntro:
      'If your Wellington home shows these, the ductwork is worth a look.',
    signs: [
      'Dust returns quickly after you clean',
      'More outdoor dust indoors near open land',
      'A room or wing that never cools evenly',
      'Debris visible at the supply registers',
      'Multiple systems overdue for cleaning',
      'Indoor allergy symptoms through pollen season',
    ],
    allergy: [
      'In Wellington, homes near pastures and open equestrian land take in extra dust and pollen, which the duct system then spreads room to room. For allergy-prone families, cleaning the ducts at the source makes a real difference in what settles indoors.',
      'We remove the buildup rather than masking it, and keep the scope honest across each system. An optional <a href="/air-duct-sanitizing/">air duct sanitizing</a> step can follow when an odor lingers in the ductwork.',
    ],
    pois: [
      { name: 'Olympia', text: 'Larger family homes with attic runs that benefit from full cleaning.' },
      { name: 'Binks Forest', text: 'Established homes under mature canopy that drops pollen into the returns.' },
      { name: 'Equestrian areas near open land', text: 'Properties that take in extra outdoor dust reaching the HVAC system.' },
    ],
    faqs: [
      { q: 'My Wellington home has more than one AC system. Do you clean all of them?', a: 'Yes. We clean each air handler and the runs it serves so a larger home has every zone addressed. Pricing reflects the number of systems and vents.' },
      { q: 'We are near the equestrian areas and open land. Does that affect the ducts?', a: 'Homes near pastures and open land take in more outdoor dust and pollen, so the returns often load faster and benefit from cleaning a little sooner.' },
      { q: 'A wing of the house cools poorly. Is that a duct issue?', a: 'It can be buildup, or a disconnected run near the open western edge. We clean what we can reach and recommend an inspection when a Wellington run looks damaged rather than dirty.' },
      { q: 'How is a larger home priced?', a: 'By the number of systems and vents and the access involved. We provide the scope in writing before any work starts.' },
      { q: 'What nearby areas do you serve?', a: 'We also clean ducts in Boynton Beach, Delray Beach and Boca Raton. Call 954-945-9428 to confirm a time.' },
    ],
  },
};
