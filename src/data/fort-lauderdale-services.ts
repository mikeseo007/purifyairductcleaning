import type { Service } from './services';
import { photos } from './photos';

// Dedicated Fort Lauderdale service pages. These Service objects are intentionally kept OUT
// of the global `services` array (services.ts), so they never appear in the main site's
// navigation, homepage services grid, related-service sections, or the main quote form.
// They are rendered by src/pages/air-duct-cleaning-fort-lauderdale/[service].astro through the
// shared ServicePage template (same approach proven on the test page), with the Fort Lauderdale
// header/footer variant and indexable production SEO. `related: []` because cross-linking is
// handled by the Fort Lauderdale "Services" nav dropdown and in-body internal links, keeping
// these pages separate from the main-site service data.
const base = '/air-duct-cleaning-fort-lauderdale';

export const fortLauderdaleServices: Service[] = [
  {
    slug: 'fl-ductwork-cleaning',
    path: `${base}/ductwork-cleaning/`,
    name: 'Ductwork Cleaning',
    group: 'duct',
    icon: 'duct',
    card: 'Source-removal cleaning of supply and return ductwork for Fort Lauderdale homes.',
    image: photos.ductVentCleaning.src,
    imageAlt: photos.ductVentCleaning.alt,
    secondImage: photos.ductwork.src,
    secondImageAlt: photos.ductwork.alt,
    metaTitle: 'Ductwork Cleaning in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Ductwork cleaning in Fort Lauderdale clears dust from supply ducts, return ducts, and accessible plenums for cleaner, stronger airflow. Request service today.',
    h1: 'Ductwork Cleaning in Fort Lauderdale, FL',
    heroSubtitle:
      'Ductwork cleaning in Fort Lauderdale that removes built-up dust from the supply and return ducts moving air through your home, not just a wipe of the vent cover.',
    introHeading: 'Clean the Full Duct System, Not Just the Vents',
    intro: [
      'Air ductwork cleaning in Fort Lauderdale clears the dust and debris that settle inside the supply and return ducts while the air conditioner runs most of the year. The register you see is only the opening; the buildup sits along the runs and in the plenums behind it.',
      'We clean the ductwork under negative pressure so debris is captured, not pushed back into the rooms. When the equipment itself is the problem, pair it with <a href="/air-duct-cleaning-fort-lauderdale/ac-vent-cleaning/">AC vent cleaning</a>; a damaged run is covered under <a href="/air-duct-cleaning-fort-lauderdale/ac-duct-replacement/">AC duct replacement</a>.',
    ],
    componentsHeading: 'What Ductwork Cleaning Covers',
    components: [
      { title: 'Supply ducts', text: 'The runs that carry cooled air to each room, including flex duct and accessible sheet-metal trunks.' },
      { title: 'Return ducts', text: 'The larger returns that pull room air back to the air handler, where dust tends to collect first.' },
      { title: 'Registers and grilles', text: 'The supply registers and return grilles are taken off, cleaned by hand, and reinstalled.' },
      { title: 'Accessible plenums', text: 'The supply and return boxes at the air handler are vacuumed when they can be reached safely.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale Ductwork Needs Cleaning',
    signs: [
      'Dust returns to surfaces soon after you clean',
      'Visible debris or gray film inside the supply vents',
      'It has been several years, or you do not know the last cleaning',
      'Recent renovation, drywall, or flooring work',
      'Pets, or someone in the home with allergies',
      'A musty smell when the system first starts on a humid morning',
    ],
    processHeading: 'How We Clean Ductwork',
    process: [
      { title: 'Walk the system', text: 'We count vents, find the air handler, and note access before any equipment is set up.' },
      { title: 'Protect the area', text: 'Floors and nearby furnishings are covered, and the registers come off so they can be cleaned.' },
      { title: 'Clean under negative air', text: 'A collection unit holds the system under negative pressure while brushes and air whips loosen debris.' },
      { title: 'Reset and review', text: 'Registers go back on, the filter is checked, and we walk you through what we found.' },
    ],
    benefitsHeading: 'Why Fort Lauderdale Homeowners Clean Their Ductwork',
    benefits: [
      { title: 'Less recirculated dust', text: 'Debris sitting in the ducts is removed instead of blown back into living space.' },
      { title: 'Clearer airflow', text: 'Open ducts and clean registers help the system move the air it was designed to move.' },
      { title: 'A look inside the system', text: 'Cleaning is a chance to spot crushed flex, loose connections, or a coil that needs its own service.' },
      { title: 'Homes and businesses', text: 'The same source-removal approach scales from a condo closet unit to a small commercial system.' },
    ],
    note: {
      heading: 'Ductwork cleaning is mechanical, not a fragrance',
      paragraphs: [
        'Cleaning physically removes debris from the duct surfaces. It is not a deodorizing spray into a dirty system. If an odor remains after the ducts are clean, the source is often a wet coil or drain pan rather than the ductwork itself.',
      ],
    },
    faqs: [
      { q: 'Is ductwork cleaning the same as cleaning the vents?', a: 'The vents are the visible openings; ductwork cleaning covers the supply and return runs and accessible plenums behind them, along with the registers and grilles.' },
      { q: 'How long does ductwork cleaning take in a Fort Lauderdale home?', a: 'Many condos and smaller homes are finished in a few hours. Larger houses with two air handlers take longer. We give you a time window when we schedule.' },
      { q: 'Will ductwork cleaning remove a musty smell on its own?', a: 'Sometimes the smell is in the ducts. Often it starts on a wet coil or drain pan, which is addressed by AC vent cleaning. We will tell you which is the right step.' },
      { q: 'Do you clean ductwork in condos and high-rises?', a: 'Yes. Closet air handlers and short runs are common in Fort Lauderdale buildings. We coordinate with building management when access rules require it.' },
      { q: 'Should I change the filter before you arrive?', a: 'Leave the current filter in place so we can see what the system has been collecting. We will tell you if it should be changed before we leave.' },
      { q: 'Do you use harsh chemicals during ductwork cleaning?', a: 'No. Cleaning is mechanical source removal. Any sanitizing is a separate, optional step applied only after the ducts are clean and when it is useful.' },
    ],
    related: [],
  },

  {
    slug: 'fl-ac-vent-cleaning',
    path: `${base}/ac-vent-cleaning/`,
    name: 'AC Vent Cleaning',
    group: 'hvac',
    icon: 'hvac',
    card: 'Cleaning for AC vents and the coil, blower, and air handler behind them.',
    image: photos.hvacFilter.src,
    imageAlt: photos.hvacFilter.alt,
    secondImage: photos.coilCleaning.src,
    secondImageAlt: photos.coilCleaning.alt,
    metaTitle: 'AC Vent Cleaning in Fort Lauderdale, FL | Purify',
    metaDescription:
      'AC vent cleaning in Fort Lauderdale clears the supply vents, evaporator coil, and blower behind weak airflow and musty startup odors. Request service today.',
    h1: 'AC Vent Cleaning in Fort Lauderdale, FL',
    heroSubtitle:
      'AC vent cleaning in Fort Lauderdale that addresses the vents and the equipment behind them, including the coil, blower, and air handler, where weak airflow and musty odors usually begin.',
    introHeading: 'Air Conditioning Cleaning for Fort Lauderdale Vents',
    intro: [
      'Vent cleaning in Fort Lauderdale often needs more than the grille. In this climate the evaporator coil and drain pan stay wet for months, so dust that reaches them sticks and the air coming through the vents turns stale.',
      'AC vent cleaning covers the vents plus the wet components that drive most airflow and odor complaints. If the runs themselves are dusty, add <a href="/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/">ductwork cleaning</a>; many Fort Lauderdale homes benefit from both.',
    ],
    componentsHeading: 'What AC Vent Cleaning Includes',
    components: [
      { title: 'Supply and return vents', text: 'The supply registers and return grilles are removed, cleaned, and reinstalled by hand.' },
      { title: 'Evaporator coil', text: 'The cold coil where humidity condenses and dust mats up is cleaned so air can cross it.' },
      { title: 'Blower and wheel', text: 'The fan that moves the air, including the curved blades that trap hidden dust, is cleaned.' },
      { title: 'Drain pan and cabinet', text: 'The pan and accessible drain area are cleared, and the air handler housing is wiped down.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale AC Vents Need Cleaning',
    signs: [
      'A musty smell for the first minutes of each cooling cycle',
      'Airflow that has slowly gotten weaker',
      'A clean-looking filter but rooms that still feel stale',
      'Water or staining around the air handler',
      'Visible dirt on the coil face or dust on the vents',
      'The system runs longer to reach the set temperature',
    ],
    processHeading: 'How AC Vent Cleaning Is Done',
    process: [
      { title: 'Shut the system down', text: 'Power is turned off at the breaker before the cabinet or any vents are opened.' },
      { title: 'Expose the parts', text: 'Registers and access panels come off so the coil and blower can be reached.' },
      { title: 'Clean and rinse', text: 'The vents, coil, blower, and pan are cleaned so air can cross them freely again.' },
      { title: 'Check the drain', text: 'We confirm condensate has a clear path out, then close up and restore power.' },
    ],
    benefitsHeading: 'What Clean AC Vents Change',
    benefits: [
      { title: 'Air can cross the coil', text: 'A matted coil is a common reason rooms feel weak even when the outdoor unit runs.' },
      { title: 'Less musty startup', text: 'Cleaning the wet surfaces often reduces the odor those surfaces were producing.' },
      { title: 'A real look inside', text: 'Opening the cabinet reveals leaks, a full pan, or a blower packed with dust.' },
      { title: 'Works with ductwork cleaning', text: 'Cleaning both the vents and the runs keeps debris from moving back and forth.' },
    ],
    note: {
      heading: 'AC vent cleaning is not a tune-up',
      paragraphs: [
        'This service cleans the air-side components: the vents, coil, blower, and pan. It is not a refrigerant tune-up, and we do not recharge refrigerant. If a mechanical repair is needed, we will say so.',
      ],
    },
    faqs: [
      { q: 'What is the difference between AC vent cleaning and ductwork cleaning?', a: 'AC vent cleaning focuses on the vents and the equipment behind them, such as the coil and blower. Ductwork cleaning covers the supply and return runs. Many homes need both.' },
      { q: 'Why do my Fort Lauderdale vents smell musty when the AC starts?', a: 'The smell usually begins on a damp coil or drain pan rather than the vent cover. Cleaning those wet components is what typically clears it.' },
      { q: 'Will AC vent cleaning lower my power bill?', a: 'A dirty coil makes the system work harder, so cleaning can help it move air as designed. We do not promise a specific dollar savings.' },
      { q: 'Do you clean the outdoor condenser too?', a: 'The indoor coil, blower, and cabinet are the focus. We can rinse a moderately dirty outdoor coil when it is part of the visit; badly damaged outdoor equipment needs an HVAC repair company.' },
      { q: 'How often should AC vents be cleaned here?', a: 'Many South Florida systems benefit every one to two years, sooner with pets, renovations, or a returning musty smell.' },
      { q: 'Can you clean vents in a condo without disturbing neighbors?', a: 'Yes. Closet air handlers and short runs are common in Fort Lauderdale condos, and we work within building access and quiet-hour rules.' },
    ],
    related: [],
  },

  {
    slug: 'fl-dryer-vent-cleaning',
    path: `${base}/dryer-vent-cleaning/`,
    name: 'Dryer Vent Cleaning',
    group: 'dryer',
    icon: 'dryer',
    card: 'Clothes dryer vent cleaning that clears lint from the full run for cleaner, safer drying.',
    image: photos.dryerVentExterior.src,
    imageAlt: photos.dryerVentExterior.alt,
    secondImage: photos.serviceVanCrew.src,
    secondImageAlt: photos.serviceVanCrew.alt,
    metaTitle: 'Dryer Vent Cleaning in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Dryer vent cleaning in Fort Lauderdale clears lint from the hose, vent run, and exterior cap to restore airflow and shorten dry times. Request service today.',
    h1: 'Dryer Vent Cleaning in Fort Lauderdale, FL',
    heroSubtitle:
      'Clothes dryer vent cleaning in Fort Lauderdale that clears lint from the full vent run, restoring airflow so your dryer dries in one cycle and runs safer.',
    introHeading: 'Clear the Full Vent Run, Not Just the Lint Screen',
    intro: [
      'The lint screen catches only part of the lint. The rest travels through the hose and the vent line to an exterior or roof cap, where it packs the elbows and slows the exhaust. In Fort Lauderdale condos that run can be long and vertical.',
      'We brush and vacuum the full run we can access and confirm the dryer exhausts properly. If the line is crushed, foil, or missing, see <a href="/air-duct-cleaning-fort-lauderdale/dryer-vent-installation/">dryer vent installation</a>; a damaged but repairable line is covered under <a href="/air-duct-cleaning-fort-lauderdale/dryer-vent-repair/">dryer vent repair</a>.',
    ],
    componentsHeading: 'What Dryer Vent Cleaning Covers',
    components: [
      { title: 'Transition hose', text: 'The connector behind the dryer, a common spot for crushed or lint-packed flex duct.' },
      { title: 'The vent run', text: 'The in-wall, ceiling, or attic duct that runs from the laundry room to the outside.' },
      { title: 'Exterior cap', text: 'The exterior hood or roof cap, cleared so its flapper can open fully again.' },
      { title: 'Airflow check', text: 'We confirm the dryer can exhaust properly before we reconnect it and leave.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale Dryer Vent Is Clogged',
    signs: [
      'Clothes need two cycles to dry',
      'The dryer, laundry room, or clothes feel very hot',
      'A burning or musty smell while drying',
      'The exterior flap barely opens',
      'Lint collecting around the dryer hookup',
      'It has been more than a year since the last cleaning',
    ],
    processHeading: 'How We Clean a Dryer Vent',
    process: [
      { title: 'Pull the dryer', text: 'We disconnect the transition hose and inspect the first foot of duct.' },
      { title: 'Brush the run', text: 'A rotary brush works through the line while a vacuum captures the lint.' },
      { title: 'Clear the cap', text: 'The exterior termination is opened and cleared so the damper moves freely.' },
      { title: 'Test a cycle', text: 'Airflow is checked and the dryer is reconnected before we finish.' },
    ],
    benefitsHeading: 'Why Dryer Vent Cleaning Matters',
    benefits: [
      { title: 'Lower fire risk', text: 'Lint in the vent is fuel. Clearing it out is basic dryer safety.' },
      { title: 'Shorter cycles', text: 'Air that can leave the dryer lets clothes dry in one cycle again.' },
      { title: 'Condo experience', text: 'Long vertical runs in Fort Lauderdale towers are a regular part of our work.' },
      { title: 'Less wear on the dryer', text: 'A dryer that is not fighting a clogged line does not have to run as hard.' },
    ],
    note: {
      heading: 'A safety note',
      paragraphs: [
        'The U.S. Fire Administration reports that failure to clean is the leading factor in home clothes dryer fires. If the dryer runs unusually hot or you notice a burning smell, stop using it and arrange an inspection before running it again.',
      ],
    },
    faqs: [
      { q: 'How often should a Fort Lauderdale dryer vent be cleaned?', a: 'About once a year for a typical household, sooner if you dry heavy loads daily or the run is long. Follow your dryer manufacturer’s guidance as well.' },
      { q: 'Why does my dryer take two cycles to dry clothes?', a: 'Usually restricted airflow from lint buildup, though a failing heating element or blower can cause the same symptom. Cleaning the vent is the first step.' },
      { q: 'Does dryer vent cleaning include the outside vent cap?', a: 'When it is safely accessible, yes. We clear the exterior hood or cap so the damper can open. Roof terminations depend on access and building rules.' },
      { q: 'Can you clean a long dryer run in a condo?', a: 'Yes. Long vertical runs to a roof or sidewall cap are common in Fort Lauderdale towers, and we clean the full accessible length.' },
      { q: 'Do you clean the dryer itself?', a: 'We clean the vent system, not the appliance. If the internal blower is failing, an appliance technician should look at the machine.' },
      { q: 'What should I do if the vent gets unusually hot?', a: 'Stop using the dryer and turn it off. Do not keep running it. Arrange an inspection of the vent and appliance before using it again.' },
    ],
    related: [],
  },

  {
    slug: 'fl-dryer-vent-installation',
    path: `${base}/dryer-vent-installation/`,
    name: 'Dryer Vent Installation',
    group: 'dryer',
    icon: 'dryer',
    card: 'New dryer vent runs when the line is crushed, too long, or made of foil or vinyl.',
    image: photos.dryerVentInstall.src,
    imageAlt: photos.dryerVentInstall.alt,
    secondImage: photos.dryerVentExterior.src,
    secondImageAlt: photos.dryerVentExterior.alt,
    metaTitle: 'Dryer Vent Installation in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Dryer vent installation in Fort Lauderdale replaces crushed, foil, or vinyl runs with rigid metal duct and a proper exterior cap. Request service today.',
    h1: 'Dryer Vent Installation in Fort Lauderdale, FL',
    heroSubtitle:
      'Dryer vent installation in Fort Lauderdale for a new or replacement run when cleaning cannot make a damaged, foil, or overly long line exhaust properly.',
    introHeading: 'New Dryer Vent Runs for Fort Lauderdale Homes',
    intro: [
      'Dryer vent installation and dryer vent replacement in Fort Lauderdale come up when the existing line cannot be cleaned into working condition: a crushed hose, a run that is too long, or vinyl and foil duct the manufacturer warns against.',
      'We install a proper rigid or semi-rigid metal run with a working exterior cap. If the current line is intact and only clogged, book <a href="/air-duct-cleaning-fort-lauderdale/dryer-vent-cleaning/">dryer vent cleaning</a> instead; a smaller fix is handled under <a href="/air-duct-cleaning-fort-lauderdale/dryer-vent-repair/">dryer vent repair</a>.',
    ],
    componentsHeading: 'What Installation Covers',
    components: [
      { title: 'Transition duct', text: 'The connector behind the dryer, replaced when it is foil, vinyl, kinked, or too long.' },
      { title: 'The vent run', text: 'A new route through the wall, ceiling, or attic when the old path is crushed or blocked.' },
      { title: 'Exterior termination', text: 'A new exterior hood or cap with a damper that opens whenever the dryer is running.' },
      { title: 'Airflow check', text: 'The dryer is reconnected and checked so exhaust actually leaves the building.' },
    ],
    signsHeading: 'When Installation Is the Right Call',
    signs: [
      'The hose behind the dryer is crushed flat',
      'The existing vent is foil or vinyl',
      'Lint returns immediately after a cleaning',
      'There is no exterior cap, or it is painted shut',
      'A remodel left the dryer vent disconnected',
      'The run is so long that clothes still will not dry after cleaning',
    ],
    processHeading: 'How a Dryer Vent Is Installed',
    process: [
      { title: 'Trace the current vent', text: 'We trace where the current vent runs and confirm why it is failing.' },
      { title: 'Choose the route', text: 'The shortest safe path to an exterior wall or an approved termination point.' },
      { title: 'Install the duct', text: 'Rigid or semi-rigid metal duct is connected, supported, and fitted with a cap.' },
      { title: 'Test the dryer', text: 'We run the machine and confirm the exterior damper opens as it should.' },
    ],
    benefitsHeading: 'Why a Proper Vent Run Matters',
    benefits: [
      { title: 'Exhaust can leave', text: 'A clear, intact run is what lets a dryer finish a load.' },
      { title: 'Less lint in the wall', text: 'Smooth metal duct holds less lint than foil or vinyl.' },
      { title: 'A safer laundry room', text: 'Lint that cannot escape is fuel; a working vent gives it a way out.' },
      { title: 'Right-sized for the space', text: 'The route is planned for your laundry location and building type.' },
    ],
    note: {
      heading: 'Installation is not appliance repair',
      paragraphs: [
        'We install and route the vent. We do not rebuild the dryer; appliance repair is a different trade. If the machine itself is failing, an appliance technician should inspect it.',
      ],
    },
    faqs: [
      { q: 'Is dryer vent installation the same as cleaning?', a: 'No. Cleaning clears lint from a usable vent. Installation replaces a vent that is damaged, missing, or the wrong material.' },
      { q: 'Do you install roof terminations in Fort Lauderdale?', a: 'When roof access is available and the building allows it. Many condo vents terminate on a sidewall or in a shaft we coordinate with management.' },
      { q: 'Why should foil or vinyl dryer duct be replaced?', a: 'Foil and vinyl kink easily and trap lint, which restricts airflow and adds fire risk. Smooth metal duct exhausts better and holds less lint.' },
      { q: 'Can installation be done the same day as other work?', a: 'Often, yes. Ask when you book and we will plan the vent installation alongside cleaning where it makes sense.' },
      { q: 'Will you replace the dryer during installation?', a: 'No. We install the vent run and termination. The appliance itself is handled by an appliance technician.' },
      { q: 'How do I know if I need installation or just a repair?', a: 'If most of the run is sound and only a section or the cap is damaged, a repair may be enough. If the line is the wrong material, too long, or badly damaged, installation is the better fix.' },
    ],
    related: [],
  },

  {
    slug: 'fl-dryer-vent-repair',
    path: `${base}/dryer-vent-repair/`,
    name: 'Dryer Vent Repair',
    group: 'dryer',
    icon: 'dryer',
    card: 'Repairs for disconnected, damaged, or poorly terminated dryer vent sections.',
    // Landing card uses dryerVentRepair1; the dedicated page's body image uses dryerVentRepair2.
    // The shared Hero does not render the `image` prop, so the body (intro) photo comes from `secondImage`.
    // schemaImage points the Service schema at the repair photo actually shown on the page (not the install filler).
    image: photos.dryerVentInstall.src,
    imageAlt: photos.dryerVentInstall.alt,
    schemaImage: photos.dryerVentRepair2.src,
    secondImage: photos.dryerVentRepair2.src,
    secondImageAlt: photos.dryerVentRepair2.alt,
    cardImage: photos.dryerVentRepair1.src,
    cardImageAlt: photos.dryerVentRepair1.alt,
    metaTitle: 'Dryer Vent Repair in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Dryer vent repair in Fort Lauderdale reconnects loose joints, replaces damaged sections, and fixes failing vent caps for safe airflow. Request service today.',
    h1: 'Dryer Vent Repair in Fort Lauderdale, FL',
    heroSubtitle:
      'Dryer vent repair in Fort Lauderdale for disconnected joints, damaged sections, and failing caps, so the run exhausts safely again without replacing the whole line.',
    introHeading: 'Fixing Damaged Dryer Vents in Fort Lauderdale',
    intro: [
      'Clothes dryer vent repair in Fort Lauderdale addresses the problems cleaning cannot solve on their own: a transition hose that has pulled off, a joint that leaks lint into the wall or attic, or an exterior cap whose damper no longer closes.',
      'We repair the section that failed rather than sell a full replacement when it is not needed. If most of the run is the wrong material or beyond repair, <a href="/air-duct-cleaning-fort-lauderdale/dryer-vent-installation/">dryer vent installation</a> is the better option, and a simple clog is handled by <a href="/air-duct-cleaning-fort-lauderdale/dryer-vent-cleaning/">dryer vent cleaning</a>.',
    ],
    componentsHeading: 'What Dryer Vent Repair Can Include',
    components: [
      { title: 'Reconnected joints', text: 'Transition hose or duct sections that have pulled apart are reconnected and secured.' },
      { title: 'Damaged sections', text: 'A crushed or torn length is replaced without redoing the entire run where possible.' },
      { title: 'Exterior cap repair', text: 'A hood or roof cap with a stuck or missing damper is repaired or replaced.' },
      { title: 'Airflow verification', text: 'We confirm the repaired run exhausts properly to the outside before finishing.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale Dryer Vent Needs Repair',
    signs: [
      'Lint appears in the wall cavity, attic, or behind the dryer',
      'The transition hose has slipped off the connection',
      'The exterior flap is broken, stuck open, or missing',
      'Airflow is weak even right after a cleaning',
      'A section of duct is visibly crushed or torn',
      'Humid or warm air escaping inside the laundry area',
    ],
    processHeading: 'How a Dryer Vent Repair Is Handled',
    process: [
      { title: 'Inspect the run', text: 'We trace the vent to find the disconnected, leaking, or damaged point.' },
      { title: 'Confirm the scope', text: 'We separate what can be repaired from what should be replaced and explain it.' },
      { title: 'Make the repair', text: 'The failed joint, section, or cap is reconnected, replaced, and secured.' },
      { title: 'Test the airflow', text: 'The dryer is run to confirm exhaust leaves the building, then reconnected.' },
    ],
    benefitsHeading: 'Why Repair Instead of Ignore It',
    benefits: [
      { title: 'Exhaust stays contained', text: 'A sealed run keeps hot, lint-filled air out of walls and attics.' },
      { title: 'Targeted and lower cost', text: 'Repairing the failed section avoids replacing a run that is otherwise sound.' },
      { title: 'Safer operation', text: 'A working cap and sealed joints reduce lint buildup where it should not be.' },
      { title: 'Honest scope', text: 'If the line truly needs replacement, we tell you instead of patching repeatedly.' },
    ],
    note: {
      heading: 'When repair is not enough',
      paragraphs: [
        'If the run is foil or vinyl, far too long, or damaged in several places, repeated patching will not fix the airflow. In those cases we recommend a full installation and explain why.',
      ],
    },
    faqs: [
      { q: 'What is the difference between dryer vent repair and installation?', a: 'Repair fixes a specific failed section, joint, or cap on an otherwise sound run. Installation replaces the full run when it is the wrong material or beyond repair.' },
      { q: 'My dryer vent disconnected inside the wall. Can you fix it?', a: 'Usually, where the disconnection is accessible. We reconnect and secure the joint and confirm the run exhausts properly. If it is sealed behind finished surfaces, we will explain the access needed.' },
      { q: 'The exterior flap on my vent is broken. Is that a repair?', a: 'Yes. A stuck or missing damper lets pests and outside air in and can trap lint. We repair or replace the cap so it opens and closes correctly.' },
      { q: 'Can a repair restore airflow as well as a new run?', a: 'If the rest of the run is sound and the right material, a proper repair restores airflow. If the whole line is undersized or damaged, installation is the better fix.' },
      { q: 'Do you repair dryer vents in condos?', a: 'Yes, where the damaged section is accessible and building rules allow. Long shared risers may require coordination with management.' },
      { q: 'Will you tell me if repair is not worth it?', a: 'Yes. If patching will not hold or the run needs replacement, we say so rather than making repeated short-term fixes.' },
    ],
    related: [],
  },

  {
    slug: 'fl-ac-duct-replacement',
    path: `${base}/ac-duct-replacement/`,
    name: 'AC Duct Replacement',
    group: 'duct',
    icon: 'duct',
    card: 'Replacement of crushed, torn, or disconnected AC ductwork that cleaning cannot fix.',
    image: photos.ductwork.src,
    imageAlt: photos.ductwork.alt,
    secondImage: photos.negativeAirLadder.src,
    secondImageAlt: photos.negativeAirLadder.alt,
    metaTitle: 'AC Duct Replacement in Fort Lauderdale, FL | Purify',
    metaDescription:
      'AC duct replacement in Fort Lauderdale replaces crushed flex duct, loose connections, and torn runs that leave one room warm. Request service today.',
    h1: 'AC Duct Replacement in Fort Lauderdale, FL',
    heroSubtitle:
      'AC duct replacement in Fort Lauderdale for ductwork that is crushed, torn, disconnected, or no longer moving air to the room, where cleaning alone cannot solve the problem.',
    introHeading: 'When Fort Lauderdale Ductwork Needs Replacing',
    intro: [
      'Air duct cleaning removes debris. It does not repair a flex run stepped on in the attic, a collar that pulled loose, or duct board that has come apart. Those problems leak cooled air and leave one room warm no matter how clean the vents look.',
      'We replace accessible AC ductwork after an inspection shows the run itself is the problem. If the ducts are intact and just dusty, <a href="/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/">ductwork cleaning</a> is the right job instead.',
    ],
    componentsHeading: 'What Replacement Can Include',
    components: [
      { title: 'Damaged flex duct', text: 'Crushed, torn, or sagging flex runs we can reach in an attic, soffit, or closet.' },
      { title: 'Loose connections', text: 'Collars and joints that have pulled off the register boot or the air handler.' },
      { title: 'Failed insulation', text: 'Duct wrap that has fallen apart and is sweating condensation onto the ceiling.' },
      { title: 'The room that never cools', text: 'A single supply run replaced when the rest of the duct system is otherwise fine.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale Ductwork Needs Replacement',
    signs: [
      'One room stays warm while the rest of the home cools',
      'You can see a crushed or disconnected run in the attic',
      'A ceiling stain lines up with a duct',
      'Airflow dropped after other attic work',
      'The duct insulation is hanging off',
      'Cleaning was already done and that room is still weak',
    ],
    processHeading: 'How AC Duct Replacement Is Handled',
    process: [
      { title: 'Inspect the run', text: 'We confirm the duct is truly damaged before recommending replacement.' },
      { title: 'Match the size', text: 'The new run is sized to the boot and the air handler, not guessed.' },
      { title: 'Replace and seal', text: 'The damaged section comes out and the new duct is connected and sealed.' },
      { title: 'Check the room', text: 'We confirm cooled air is reaching the register again before we leave.' },
    ],
    benefitsHeading: 'Why Replace Instead of Cleaning Again',
    benefits: [
      { title: 'Air reaches the room', text: 'A connected duct delivers cooled air that a torn run was dumping into the attic.' },
      { title: 'Less wasted cooling', text: 'Leaks above the ceiling make the system run longer than it should.' },
      { title: 'A clear scope', text: 'We replace the section that failed, not sell a whole-house replacement for one bad run.' },
      { title: 'Works with cleaning', text: 'The rest of the system can be cleaned on the same visit when it needs it.' },
    ],
    note: {
      heading: 'Replacement follows an inspection',
      paragraphs: [
        'We recommend air duct replacement only after confirming a run is crushed, torn, or disconnected. If the ductwork is intact, cleaning is the right call and we will say so.',
      ],
    },
    faqs: [
      { q: 'Will air duct cleaning fix a crushed duct?', a: 'No. Cleaning removes dust. A crushed, torn, or disconnected run has to be repaired or replaced to move air again.' },
      { q: 'Do you replace every duct in the house?', a: 'Only when the system is broadly failed. Most jobs are the specific runs we can see are damaged.' },
      { q: 'Can AC duct replacement be done in a Fort Lauderdale condo?', a: 'When the duct is accessible without opening finished ceilings we were not approved to open. We confirm access before any work starts.' },
      { q: 'How do I know replacement is needed and not just cleaning?', a: 'An inspection separates buildup from damage. Buildup can be cleaned; a crushed or disconnected run cannot, and that is when replacement applies.' },
      { q: 'Should attic insulation come out first?', a: 'Sometimes. If old insulation is covering the ducts, removing it first makes the replacement easier to do correctly.' },
      { q: 'Will replacing a run help a room that never cools?', a: 'If the room is weak because its run is torn or disconnected, a correctly sized new run restores the airflow that was leaking into the attic.' },
    ],
    related: [],
  },

  {
    slug: 'fl-air-duct-repair-sealing',
    path: `${base}/air-duct-repair-sealing/`,
    name: 'Air Duct Repair & Sealing',
    group: 'duct',
    icon: 'duct',
    card: 'Sealing leaky joints and reconnecting loose duct sections so cooled air stops escaping.',
    image: photos.negativeAirLadder.src,
    imageAlt: photos.negativeAirLadder.alt,
    secondImage: photos.airDuct.src,
    secondImageAlt: photos.airDuct.alt,
    metaTitle: 'Air Duct Repair & Sealing in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Air duct repair and sealing in Fort Lauderdale closes leaking joints and reconnects loose sections so cooled air reaches your rooms. Request service today.',
    h1: 'Air Duct Repair & Sealing in Fort Lauderdale, FL',
    heroSubtitle:
      'Air duct repair and sealing in Fort Lauderdale that closes leaking joints and reconnects loose sections, so cooled air reaches the room instead of escaping into the attic.',
    introHeading: 'Seal the Leaks That Keep Rooms Warm and Bills High',
    intro: [
      'Air duct repair and sealing in Fort Lauderdale fixes the gaps, loose joints, and small tears that let conditioned air leak out before it reaches your rooms. Because the air conditioner runs most of the year here, even a modest leak means the system works harder and some rooms never feel comfortable.',
      'Sealing is different from a full rebuild. We seal accessible joints and connections and repair minor damage; when a run is crushed, torn, or beyond sealing, <a href="/air-duct-cleaning-fort-lauderdale/ac-duct-replacement/">AC duct replacement</a> is the better fix, and dusty but intact ducts are handled by <a href="/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/">ductwork cleaning</a>.',
    ],
    componentsHeading: 'What Air Duct Repair & Sealing Covers',
    components: [
      { title: 'Leaking joints', text: 'Connections at collars, boots, and plenums are sealed with duct mastic or metal-backed tape.' },
      { title: 'Loose sections', text: 'Flex and sheet-metal sections that have slipped apart are reconnected and secured.' },
      { title: 'Small gaps and tears', text: 'Minor punctures and separated seams in accessible duct are patched where practical.' },
      { title: 'Airflow check', text: 'We confirm the sealed run is moving air to the register again before finishing.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale Ducts Need Repair or Sealing',
    signs: [
      'One or two rooms stay warm while the rest of the home cools',
      'High cooling bills from a system that otherwise runs fine',
      'A whistling or rushing sound near a duct connection',
      'Visible gaps or a disconnected joint in an accessible attic run',
      'Dust pulled in around leaky return ducts',
      'Uneven airflow after a renovation or other attic work',
    ],
    processHeading: 'How We Repair and Seal Ducts',
    process: [
      { title: 'Inspect the runs', text: 'We check accessible joints and connections for leaks, gaps, and loose sections.' },
      { title: 'Confirm the scope', text: 'We separate what can be sealed from what should be replaced and explain it.' },
      { title: 'Seal and secure', text: 'Joints are sealed with mastic or tape and loose sections are reconnected and fastened.' },
      { title: 'Verify airflow', text: 'We confirm air is reaching the room and the leak is closed before we leave.' },
    ],
    benefitsHeading: 'Why Sealing Leaky Ducts Pays Off',
    benefits: [
      { title: 'Air reaches the room', text: 'Sealed joints send cooled air to the register instead of leaking it into the attic.' },
      { title: 'Less wasted cooling', text: 'Closing leaks means the system does not run longer to make up for lost air.' },
      { title: 'Steadier comfort', text: 'Rooms that ran warm often even out once the leaks feeding them are sealed.' },
      { title: 'Targeted and lower cost', text: 'Sealing a sound run avoids the cost of replacing duct that is still serviceable.' },
    ],
    note: {
      heading: 'Sealing is not the same as replacement',
      paragraphs: [
        'Sealing closes leaks and reconnects joints on a run that is otherwise sound. If the duct is crushed, torn in several places, or the wrong size, sealing will not hold, and we will recommend replacing that section instead.',
      ],
    },
    faqs: [
      { q: 'What is the difference between duct sealing and duct replacement?', a: 'Sealing closes leaks and reconnects joints on a sound run. Replacement removes a run that is crushed, torn, or the wrong size. An inspection tells us which one your ducts need.' },
      { q: 'How do you seal air duct leaks?', a: 'We seal accessible joints and connections with duct mastic or metal-backed tape and reconnect sections that have come loose. Cloth tape is not used because it fails in attic heat.' },
      { q: 'Can sealing lower my cooling bills?', a: 'Closing leaks lets the system deliver the air it already makes, so it can help. We do not promise a specific percentage because every home and system is different.' },
      { q: 'Do you seal ducts inside walls or only in the attic?', a: 'We seal the connections and runs we can reach safely, which in Fort Lauderdale is usually the attic, closets, and the air handler. Sealed-in runs may need access we will explain first.' },
      { q: 'Is sealing done from inside the ducts?', a: 'This service seals joints and connections from the outside of the duct. Treating the inside surface of the duct is a separate service, air duct restoration and coating.' },
      { q: 'Will I still benefit from cleaning if my ducts leak?', a: 'Cleaning removes dust; sealing stops air loss. They solve different problems, and many homes do both. A dusty, leaky run can be cleaned and sealed on the same visit.' },
    ],
    related: [],
  },

  {
    slug: 'fl-air-duct-restoration-coating',
    path: `${base}/air-duct-restoration-coating/`,
    name: 'Air Duct Restoration & Coating',
    group: 'duct',
    icon: 'sparkle',
    card: 'Interior cleaning plus a coating that renews aging duct surfaces as an alternative to replacement.',
    image: photos.ductSanitizing.src,
    imageAlt: photos.ductSanitizing.alt,
    secondImage: photos.ductCleaning.src,
    secondImageAlt: photos.ductCleaning.alt,
    metaTitle: 'Air Duct Restoration & Coating in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Air duct restoration and coating in Fort Lauderdale cleans and coats worn duct interiors to renew aging ductwork instead of replacing it. Request service today.',
    h1: 'Air Duct Restoration & Coating in Fort Lauderdale, FL',
    heroSubtitle:
      'Air duct restoration and coating in Fort Lauderdale that cleans aging duct interiors and applies a protective coating to renew the surface, often instead of a full replacement.',
    introHeading: 'Renew Aging Ducts Instead of Tearing Them Out',
    intro: [
      'Air duct restoration and coating in Fort Lauderdale is for ducts that are structurally sound but worn on the inside: flaking fiberglass lining, crumbling duct board, or surfaces that stay rough and dust-grabbing even after a cleaning. Restoration cleans the interior and then applies a coating that seals and smooths it.',
      'This is different from sealing the outside joints. Restoration treats the inside surface of the duct. When a run is crushed or torn it needs <a href="/air-duct-cleaning-fort-lauderdale/ac-duct-replacement/">AC duct replacement</a>; leaking joints on a sound run are handled by <a href="/air-duct-cleaning-fort-lauderdale/air-duct-repair-sealing/">air duct repair and sealing</a>.',
    ],
    componentsHeading: 'What Restoration & Coating Involves',
    components: [
      { title: 'Interior cleaning first', text: 'The duct is cleaned under negative air so the coating bonds to a clean surface, not dust.' },
      { title: 'Surface assessment', text: 'We check whether the lining or duct board is sound enough to coat or needs replacing.' },
      { title: 'Protective coating', text: 'A coating is applied to the interior to seal it, smooth it, and help bind residual surface fibers.' },
      { title: 'Cure and verify', text: 'The coating is left to cure and the system is checked before it returns to normal use.' },
    ],
    signsHeading: 'When Fort Lauderdale Ducts May Need Restoration',
    signs: [
      'Older fiberglass-lined ducts shedding fibers into the airflow',
      'Duct board that looks worn, rough, or is starting to crumble',
      'Surfaces that stay dusty or stained soon after a cleaning',
      'An aging system you would rather renew than fully replace',
      'Stale surfaces that cleaning alone does not keep clear',
      'Interior duct wear that is cosmetic rather than structural',
    ],
    processHeading: 'How Duct Restoration & Coating Is Done',
    process: [
      { title: 'Inspect with a camera', text: 'We look inside the ducts to judge whether the surface can be restored or should be replaced.' },
      { title: 'Clean the interior', text: 'The runs are cleaned under negative pressure so the coating adheres to a clean surface.' },
      { title: 'Apply the coating', text: 'A coating made for duct interiors is applied to seal and smooth the surface.' },
      { title: 'Cure and test', text: 'The coating cures, then we confirm airflow and close the system up.' },
    ],
    benefitsHeading: 'Why Consider Restoration Over Replacement',
    benefits: [
      { title: 'Renews aging ducts', text: 'A coated interior can extend the useful life of ducts that are worn but structurally sound.' },
      { title: 'Smoother surface', text: 'A sealed, smoother interior resists holding dust the way rough old lining does.' },
      { title: 'Less disruption', text: 'Restoring accessible runs can avoid the larger job of tearing out and rebuilding ductwork.' },
      { title: 'Honest alternative', text: 'When a run is too far gone to coat, we say so and point you to replacement instead.' },
    ],
    note: {
      heading: 'Restoration suits sound ducts, not damaged ones',
      paragraphs: [
        'Coating works on ducts that are intact but worn. It is not a fix for crushed, collapsed, or badly torn runs, and it is not a substitute for replacing duct that has failed. We confirm with a camera inspection before recommending it.',
      ],
    },
    faqs: [
      { q: 'How is restoration and coating different from duct cleaning?', a: 'Cleaning removes dust from the duct. Restoration cleans first and then applies a coating to seal and smooth the interior surface, which cleaning alone does not do.' },
      { q: 'Is duct coating a substitute for replacing my ducts?', a: 'Sometimes. For ducts that are worn but structurally sound, coating can renew the interior. For crushed or torn runs, replacement is the right call, and we will tell you which applies.' },
      { q: 'Does coating help with shedding fiberglass lining?', a: 'A coating can seal a sound fiberglass-lined surface so it stops shedding into the airflow. If the lining is deteriorated past that point, that section is better replaced.' },
      { q: 'How do you decide if my ducts can be coated?', a: 'We inspect the interior with a camera. If the surface is intact and the run is sound, it is usually a candidate. Structural damage rules it out.' },
      { q: 'Is the coating safe for the air in my home?', a: 'We use products made for HVAC duct interiors and follow the manufacturer directions, including the cure time before the system returns to normal use. We do not make broader health claims.' },
      { q: 'Can restoration be combined with cleaning the rest of the system?', a: 'Yes. Cleaning is the first step of restoration anyway, and the rest of the system can be cleaned on the same visit when it needs it.' },
    ],
    related: [],
  },

  {
    slug: 'fl-ac-coil-cleaning',
    path: `${base}/ac-coil-cleaning/`,
    name: 'AC Coil Cleaning',
    group: 'hvac',
    icon: 'coil',
    card: 'Deep cleaning of the evaporator coil to restore cooling and airflow across the heat-exchange surface.',
    image: photos.coilCleaning.src,
    imageAlt: photos.coilCleaning.alt,
    secondImage: photos.coilAfter.src,
    secondImageAlt: photos.coilAfter.alt,
    metaTitle: 'AC Coil Cleaning in Fort Lauderdale, FL | Purify',
    metaDescription:
      'AC coil cleaning in Fort Lauderdale clears the matted evaporator coil and drain pan so your system cools and moves air again. Request service today.',
    h1: 'AC Coil Cleaning in Fort Lauderdale, FL',
    heroSubtitle:
      'AC coil cleaning in Fort Lauderdale that clears the matted dust and grime off the evaporator coil so the system can cool the air and move it the way it was designed to.',
    introHeading: 'Clear the Coil So Your AC Can Actually Cool',
    intro: [
      'AC coil cleaning in Fort Lauderdale focuses on the evaporator coil, the cold heat-exchange surface where your system removes heat and humidity from the air. In this climate the coil stays wet for months, so dust sticks to it and mats into a layer that blocks both airflow and cooling.',
      'Coil cleaning is not the same as air duct cleaning: one cleans the equipment, the other cleans the runs that carry the air. If the vents, blower, and pan also need attention, <a href="/air-duct-cleaning-fort-lauderdale/ac-vent-cleaning/">AC vent cleaning</a> covers the wider air path, and dusty runs are handled by <a href="/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/">ductwork cleaning</a>.',
    ],
    componentsHeading: 'What AC Coil Cleaning Covers',
    components: [
      { title: 'Evaporator coil', text: 'The indoor coil is cleaned so air can pass through the fins and shed heat again.' },
      { title: 'Coil access', text: 'Panels come off so the coil face and, where reachable, the back side can be cleaned.' },
      { title: 'Drain pan and line', text: 'The pan under the coil is cleared and we confirm condensate has a path out.' },
      { title: 'Outdoor coil rinse', text: 'A moderately dirty outdoor condenser coil can be rinsed when it is part of the visit.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale AC Coil Needs Cleaning',
    signs: [
      'The system runs and runs but rooms do not get cool enough',
      'Weak airflow from the vents even with a clean filter',
      'Ice or frost on the refrigerant line or the coil',
      'Water around the air handler from a backed-up pan',
      'Visible grime matted across the coil face',
      'Longer run times and rising cooling bills',
    ],
    processHeading: 'How AC Coil Cleaning Is Done',
    process: [
      { title: 'Power down', text: 'The system is switched off at the breaker before any panel is opened.' },
      { title: 'Open the cabinet', text: 'Access panels come off so the coil face and drain pan can be reached.' },
      { title: 'Clean the coil', text: 'The coil is cleaned so air can move through the fins without the matted layer.' },
      { title: 'Clear the drain', text: 'The pan and drain are cleared, then the cabinet is closed and power restored.' },
    ],
    benefitsHeading: 'What Clean Coils Change',
    benefits: [
      { title: 'Better cooling', text: 'A clean coil can shed heat again, so the system actually cools the air it moves.' },
      { title: 'Stronger airflow', text: 'Air crosses an open coil more easily than a matted one, so rooms feel it sooner.' },
      { title: 'Fewer drain backups', text: 'Clearing the pan and line reduces the water problems a dirty coil feeds.' },
      { title: 'Easier on the system', text: 'A coil that is not fighting a grime layer does not have to run as long.' },
    ],
    note: {
      heading: 'Coil cleaning is not a refrigerant service',
      paragraphs: [
        'This service cleans the coil and clears the pan and drain. It is not a refrigerant recharge, and we do not add or remove refrigerant. If the coil is iced from a refrigerant or airflow fault, that needs a separate diagnosis and we will say so.',
      ],
    },
    faqs: [
      { q: 'Is AC coil cleaning the same as air duct cleaning?', a: 'No. Coil cleaning cleans the evaporator coil inside the system. Air duct cleaning clears dust from the supply and return runs. They address different parts and are often done together.' },
      { q: 'How is coil cleaning different from AC vent cleaning?', a: 'Coil cleaning focuses on the coil itself. AC vent cleaning is broader and also covers the supply and return vents, the blower, and the drain pan. We can do just the coil or the wider job.' },
      { q: 'Why does a dirty coil make my AC cool poorly?', a: 'The coil is where heat leaves the air. When dust mats across it, air cannot pass and heat cannot transfer, so the system runs longer and rooms stay warm.' },
      { q: 'Do you clean the outdoor coil too?', a: 'We can rinse a moderately dirty outdoor condenser coil as part of the visit. Badly damaged or bent outdoor coils need an HVAC repair company.' },
      { q: 'My coil keeps icing up. Will cleaning fix it?', a: 'Sometimes icing is from a blocked, dirty coil and cleaning helps. It can also be a refrigerant or airflow fault, which needs a separate diagnosis. We will tell you what we see.' },
      { q: 'How often should the coil be cleaned in South Florida?', a: 'Many systems here benefit every one to two years because the coil stays wet and collects dust most of the year. Pets and renovations can make it sooner.' },
    ],
    related: [],
  },

  {
    slug: 'fl-hvac-mold-remediation',
    path: `${base}/hvac-mold-remediation/`,
    name: 'HVAC Mold Remediation',
    group: 'hvac',
    icon: 'droplet',
    card: 'Careful treatment of mold on accessible HVAC components, with an assessment of the moisture source.',
    image: photos.coilBefore.src,
    imageAlt: photos.coilBefore.alt,
    secondImage: photos.airHandler.src,
    secondImageAlt: photos.airHandler.alt,
    metaTitle: 'HVAC Mold Remediation in Fort Lauderdale, FL | Purify',
    metaDescription:
      'HVAC mold remediation in Fort Lauderdale treats mold on the coil, pan, and air handler and addresses the moisture feeding it. Request an assessment today.',
    h1: 'HVAC Mold Remediation in Fort Lauderdale, FL',
    heroSubtitle:
      'HVAC mold remediation in Fort Lauderdale that treats mold on the wet, accessible parts of your system and looks at the moisture keeping it there, after an assessment of what you are dealing with.',
    introHeading: 'Treat the Mold and the Moisture Behind It',
    intro: [
      'In Fort Lauderdale heat and humidity, the inside of an air conditioning system stays damp, and the coil, drain pan, and air handler are exactly the kind of cool, wet surfaces where mold can take hold. HVAC mold remediation treats the mold on the accessible components and the surfaces it has colonized.',
      'Mold is a moisture problem first. Routine <a href="/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/">ductwork cleaning</a> removes dust but does not, on its own, resolve active mold or the dampness feeding it. We start with an assessment, and when the wet components are the source, <a href="/air-duct-cleaning-fort-lauderdale/ac-vent-cleaning/">AC vent cleaning</a> of the coil, blower, and pan is often part of the work.',
    ],
    componentsHeading: 'What HVAC Mold Remediation Can Address',
    components: [
      { title: 'Coil and drain pan', text: 'The wet surfaces where condensation collects are treated and the pan and drain are cleared.' },
      { title: 'Air handler cabinet', text: 'Accessible interior surfaces of the cabinet are cleaned and treated where mold is present.' },
      { title: 'Affected duct surfaces', text: 'Accessible duct interiors with surface mold are treated; failed lining may need replacing.' },
      { title: 'Moisture source review', text: 'We look at what keeps the components wet, such as a clogged drain or a failing pan.' },
    ],
    signsHeading: 'Signs of Mold in a Fort Lauderdale HVAC System',
    signs: [
      'A musty, earthy smell that is strongest when the AC runs',
      'Visible dark growth on the vents, coil, or around the air handler',
      'Water or staining near the air handler or on the ceiling below it',
      'A drain line that clogs and backs up repeatedly',
      'Symptoms that ease when you are away and return with the AC running',
      'Indoor humidity that stays high even with the system on',
    ],
    processHeading: 'How We Approach HVAC Mold Remediation',
    process: [
      { title: 'Assess first', text: 'We inspect the coil, pan, cabinet, and accessible ducts to see what is affected and why.' },
      { title: 'Explain the scope', text: 'We tell you what we can treat, what needs replacing, and when other trades are needed.' },
      { title: 'Treat the components', text: 'Accessible affected surfaces are cleaned and treated, and the pan and drain are cleared.' },
      { title: 'Address the moisture', text: 'We correct accessible moisture causes we can, and flag any that need a specialist.' },
    ],
    benefitsHeading: 'Why an Assessment-First Approach Matters',
    benefits: [
      { title: 'Treats the source', text: 'Working on the wet components does more than masking the smell with a spray.' },
      { title: 'Honest about limits', text: 'If growth is behind finished surfaces or extensive, we refer you to a mold specialist.' },
      { title: 'Fewer repeat problems', text: 'Clearing the drain and pan removes the standing water that lets mold return.' },
      { title: 'Clear next steps', text: 'You get a straight account of what was treated and what still needs attention.' },
    ],
    note: {
      heading: 'What remediation can and cannot promise',
      paragraphs: [
        'We treat mold on the accessible components of the HVAC system and address the moisture we can reach. We do not guarantee a mold-free home, make health claims, or handle large-scale building mold, which belongs to a licensed mold assessor or remediator. When the problem is bigger than the system, we will tell you and point you in the right direction.',
      ],
    },
    faqs: [
      { q: 'Does regular duct cleaning get rid of mold?', a: 'Not on its own. Cleaning removes dust. Mold is a moisture problem, so it needs the wet components treated and the dampness addressed. We start with an assessment to see what is actually going on.' },
      { q: 'Where does mold usually grow in an AC system here?', a: 'On the cool, wet surfaces: the evaporator coil, the drain pan, and inside the air handler. A clogged drain that leaves standing water is a common cause in Fort Lauderdale.' },
      { q: 'Can you guarantee my home will be mold-free?', a: 'No. We treat the accessible parts of the HVAC system and the moisture we can reach, but a whole-home guarantee is not something an honest provider can make. Larger mold issues need a licensed mold specialist.' },
      { q: 'Do you make health claims about mold removal?', a: 'No. We describe what we clean and treat on the system. Questions about health effects should go to a medical professional, and building-wide testing to a licensed mold assessor.' },
      { q: 'Will I need a separate mold company?', a: 'Sometimes. If growth is extensive or behind walls and finished surfaces, that is beyond HVAC work and we will refer you to a licensed mold assessor or remediator.' },
      { q: 'What keeps mold from coming straight back?', a: 'Removing the moisture it needs. Clearing the drain and pan and fixing accessible leaks is what reduces the dampness, which matters more than any one-time treatment.' },
    ],
    related: [],
  },

  {
    slug: 'fl-attic-insulation',
    path: `${base}/attic-insulation/`,
    name: 'Attic Insulation',
    group: 'insulation',
    icon: 'layers',
    card: 'Removing old or contaminated attic insulation and installing new insulation above your ducts.',
    image: photos.blownInInsulation.src,
    imageAlt: photos.blownInInsulation.alt,
    secondImage: photos.atticInsulationRemoval.src,
    secondImageAlt: photos.atticInsulationRemoval.alt,
    metaTitle: 'Attic Insulation in Fort Lauderdale, FL | Purify',
    metaDescription:
      'Attic insulation in Fort Lauderdale, from removing old or contaminated insulation to installing new in the space above your ducts. Request service today.',
    h1: 'Attic Insulation in Fort Lauderdale, FL',
    heroSubtitle:
      'Attic insulation in Fort Lauderdale, from removing old, damaged, or contaminated insulation to installing new insulation in the space that sits right above your ducts and ceilings.',
    introHeading: 'Fresh Insulation for the Space Above Your Ducts',
    intro: [
      'Attic insulation in Fort Lauderdale matters because the attic is where your ductwork lives and where a large part of your home heat load comes from. When insulation is old, wet, flattened, or contaminated after a roof leak or a pest problem, it stops doing its job and can sit on top of the ducts you rely on.',
      'We remove old or soiled attic insulation and install new insulation, and because we also work on the ducts up there, we can coordinate the two. If your attic ducts are damaged, pair this with <a href="/air-duct-cleaning-fort-lauderdale/ac-duct-replacement/">AC duct replacement</a>; dusty runs are handled by <a href="/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/">ductwork cleaning</a>.',
    ],
    componentsHeading: 'What Attic Insulation Work Can Include',
    components: [
      { title: 'Insulation removal', text: 'Old, wet, flattened, or contaminated insulation is removed from the attic and bagged out.' },
      { title: 'Attic prep', text: 'The space is cleared so the ducts and any damage can be seen before new insulation goes in.' },
      { title: 'New insulation', text: 'New insulation is installed across the accessible attic floor to the planned coverage.' },
      { title: 'Duct coordination', text: 'Because we work on the ducts too, duct repairs can be handled before reinsulating.' },
    ],
    signsHeading: 'Signs Your Fort Lauderdale Attic Insulation Needs Attention',
    signs: [
      'Insulation that is matted, thin, or unevenly covering the attic floor',
      'Water-stained or wet insulation after a roof leak',
      'Signs of rodents or pests in the attic insulation',
      'Rooms under the attic that are hard to keep comfortable',
      'A musty attic smell drawn in near the air handler',
      'Old insulation piled on top of ducts you need to service',
    ],
    processHeading: 'How Attic Insulation Work Is Handled',
    process: [
      { title: 'Inspect the attic', text: 'We look at the current insulation, the ducts, and any moisture or pest damage.' },
      { title: 'Remove what is spent', text: 'Old, wet, or contaminated insulation is vacuumed or bagged and carried out.' },
      { title: 'Handle duct issues', text: 'With the attic clear, we address accessible duct repairs before reinsulating.' },
      { title: 'Install new insulation', text: 'New insulation is installed to the planned coverage across the accessible attic.' },
    ],
    benefitsHeading: 'Why Attic Insulation Is Worth Addressing',
    benefits: [
      { title: 'Supports the system', text: 'Insulation that is doing its job eases the load the attic puts on your cooling.' },
      { title: 'A clean slate', text: 'Removing soiled insulation clears out pest debris and moisture-damaged material.' },
      { title: 'Easier duct work', text: 'A cleared attic makes it possible to see and fix the ducts before reinsulating.' },
      { title: 'More even comfort', text: 'Proper coverage helps the rooms under the attic hold their temperature better.' },
    ],
    note: {
      heading: 'We describe coverage, not guesses',
      paragraphs: [
        'We plan new insulation to the coverage your attic needs and explain what we are installing before we start. We do not quote specific energy-savings percentages or performance figures we cannot stand behind; the right scope depends on your attic and what we find once it is cleared.',
      ],
    },
    faqs: [
      { q: 'Do you remove old insulation as well as install new?', a: 'Yes. We remove old, wet, flattened, or contaminated attic insulation and install new insulation. The two are often done together, especially after a leak or pest problem.' },
      { q: 'Why does attic insulation matter for my AC?', a: 'Your ducts run through the attic and a lot of heat enters there. Insulation that is spent lets more heat in and can sit on the ducts, which makes the system work harder.' },
      { q: 'Should the ducts be handled while the attic is open?', a: 'Often, yes. With old insulation removed the ducts are visible, so it is a good time to clean or repair them before new insulation covers them again.' },
      { q: 'What kind of insulation do you install?', a: 'We plan the material and coverage around your attic and explain it before we begin. We match the installation to what the space needs rather than a one-size answer.' },
      { q: 'Do you handle insulation after a roof leak or pest problem?', a: 'Yes. Wet or contaminated insulation is removed and bagged out, and we check the attic and ducts before new insulation is installed.' },
      { q: 'Can insulation be done the same visit as duct work?', a: 'When the scope allows, yes. Because we work on the ducts and the attic, we can coordinate removal, duct repairs, and reinsulating to limit trips.' },
    ],
    related: [],
  },
];

export const getFortLauderdaleService = (segment: string): Service | undefined =>
  fortLauderdaleServices.find((s) => s.path === `${base}/${segment}/`);

/** Nav links for the Fort Lauderdale "Services" dropdown. */
export const fortLauderdaleServiceLinks = fortLauderdaleServices.map((s) => ({
  href: s.path,
  label: s.name,
  icon: s.icon,
}));

/** Links for the "Breathe the difference" (HvacHighlight) section on Fort Lauderdale pages. */
export const fortLauderdaleHighlightPoints = [
  { href: '/air-duct-cleaning-fort-lauderdale/ductwork-cleaning/', title: 'Reduce allergens and dust' },
  { href: '/air-duct-cleaning-fort-lauderdale/ac-vent-cleaning/', title: 'Improve airflow and efficiency' },
  { href: '/air-duct-cleaning-fort-lauderdale/dryer-vent-cleaning/', title: 'Lower dryer lint and fire risk' },
];
