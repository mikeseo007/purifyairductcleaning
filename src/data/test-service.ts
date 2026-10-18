import type { Service } from './services';
import { photos } from './photos';

// ⚠ ISOLATED TEST / TEMPLATE PAGE — rendered only by src/pages/zz-test-service-template.astro,
// which marks it noindex, nofollow and is excluded from the sitemap. This object is kept OUT of
// the `services` array in services.ts, so it never appears in routing, navigation, footer, the
// services listing, the quote-form dropdown, related-service links, or the sitemap.
//
// It now holds real, non-fabricated content targeting "Dryer Vent Cleaning in Fort Lauderdale"
// so the service page template can be finalized before the approach is applied elsewhere. No
// prices, guarantees, response times, certifications, customer stories, or invented coverage.
// Neighborhoods referenced (Las Olas, Victoria Park, Coral Ridge) are the verified Fort
// Lauderdale neighborhoods already listed in src/data/site.ts. The Fort Lauderdale map shown on
// the page comes from the existing global embed via the shared LocationsSection/GoogleMap — no
// map data is defined or changed here.
export const testService: Service = {
  slug: 'zz-test-service-template',
  path: '/zz-test-service-template/',
  name: 'Dryer Vent Cleaning',
  group: 'dryer',
  parent: 'dryer-vent-cleaning',
  icon: 'dryer',
  card: 'Dryer vent cleaning that clears lint from the full vent run for Fort Lauderdale homes and condos.',
  image: photos.dryerVentExterior.src,
  imageAlt: photos.dryerVentExterior.alt,
  secondImage: photos.dryerVentInstall.src,
  secondImageAlt: photos.dryerVentInstall.alt,
  metaTitle: 'Dryer Vent Cleaning in Fort Lauderdale, FL | Purify',
  metaDescription:
    'Professional dryer vent cleaning in Fort Lauderdale, FL. We clear lint buildup to restore airflow and dryer performance for homes and condos.',
  h1: 'Dryer Vent Cleaning in Fort Lauderdale, FL',
  heroSubtitle:
    'Professional dryer vent cleaning in Fort Lauderdale that clears lint from the full vent run, restoring airflow so your dryer dries clothes in one cycle.',

  introHeading: 'Professional Dryer Vent Cleaning in Fort Lauderdale',
  intro: [
    'Dryer vent cleaning in Fort Lauderdale clears the lint that builds up between the dryer and the exterior vent. The lint screen catches only part of it; the rest collects along the duct, in the elbows, and at the outside cap, where it slows airflow and makes the dryer work harder.',
    'From houses in Victoria Park and Coral Ridge to condos near Las Olas, the vent run is different in every home. We clean the full accessible run and confirm the dryer can exhaust. If the line is crushed, foil, or too long to clean into working condition, that is a <a href="/dryer-vent-installation/">dryer vent installation</a> job, and buildings with several machines are covered under <a href="/commercial-dryer-vent-cleaning/">commercial dryer vent cleaning</a>.',
  ],

  componentsHeading: 'What Our Dryer Vent Cleaning Service Includes',
  components: [
    { title: 'Transition hose', text: 'The flexible connector behind the dryer, a common spot for crushed or lint-packed sections, is disconnected and cleaned.' },
    { title: 'The vent run', text: 'The in-wall, ceiling, or attic duct from the laundry area to the outside is brushed and vacuumed along its length.' },
    { title: 'Exterior cap', text: 'The outside hood or roof termination is cleared so the damper can open freely when the dryer runs.' },
    { title: 'Airflow check', text: 'We confirm the dryer can exhaust properly before we finish, and point out anything cleaning cannot fix.' },
  ],

  signsHeading: 'Signs Your Fort Lauderdale Home Needs Dryer Vent Cleaning',
  signs: [
    'Clothes still feel damp after a full drying cycle',
    'The dryer or the laundry room gets unusually hot',
    'A burning or musty smell while the dryer runs',
    'Lint collecting around the dryer or the outside vent',
    'The exterior flap barely opens when the dryer is running',
    'It has been more than a year since the vent was last cleaned',
  ],

  processHeading: 'How Our Dryer Vent Cleaning Works',
  process: [
    { title: 'Pull and inspect', text: 'We move the dryer, disconnect the transition hose, and look at the first section of duct.' },
    { title: 'Brush the run', text: 'A rotary brush works through the line while a vacuum captures the loosened lint.' },
    { title: 'Clear the cap', text: 'The exterior or roof termination is opened and cleaned so the flap moves freely.' },
    { title: 'Test and reconnect', text: 'We run the dryer to confirm airflow, then reconnect everything and tidy the area.' },
  ],

  benefitsHeading: 'Dryer Vent Problems in Condos, Apartments, and Houses',
  benefits: [
    { title: 'Condos', text: 'High-rise condos often route a long vertical run to a roof or sidewall cap. Lint packs the elbows first, and the length makes buildup easy to miss.' },
    { title: 'Apartments', text: 'Stacked or shared laundry setups can run through tight chases. Access and building rules shape how the run is reached and cleaned.' },
    { title: 'Single-family houses', text: 'Houses may route the duct through an attic or crawl space to a sidewall or roof. Longer or bent runs collect more lint over time.' },
    { title: 'Transition duct material', text: 'Foil or vinyl transition hose kinks and traps lint. Smooth metal duct holds less and lets the dryer exhaust better.' },
  ],

  note: {
    heading: 'How Often Should You Schedule Dryer Vent Cleaning?',
    paragraphs: [
      'Many households do well with a yearly dryer vent cleaning. Homes that run heavy loads often, have a long or winding vent run, or own pets may benefit sooner. Follow your dryer manufacturer’s maintenance guidance as well.',
      'The U.S. Fire Administration reports that failure to clean is the leading factor in home clothes dryer fires, so keeping the vent clear is basic maintenance. If the dryer ever runs unusually hot or you notice a burning smell, stop using it and arrange an inspection before running it again.',
    ],
  },

  faqs: [
    {
      q: 'Why does my dryer take multiple cycles to dry clothes?',
      a: 'Long dry times usually point to restricted airflow from lint buildup in the vent, but a failing heating element or blower can cause the same symptom. Cleaning the vent is the first step; if the problem continues, have the appliance checked.',
    },
    {
      q: 'Can a long or bent dryer vent in a condo restrict airflow?',
      a: 'Yes. Long vertical runs and multiple elbows, common in Fort Lauderdale condos, add resistance and collect lint at the bends, which slows exhaust and lengthens dry times.',
    },
    {
      q: 'Does dryer vent cleaning include the exterior vent outlet?',
      a: 'When it is safely accessible, yes. We clear the outside hood or cap so the damper can open. Roof terminations and sealed chases depend on access and building rules.',
    },
    {
      q: 'What if the dryer vent exits through the roof or is hard to reach?',
      a: 'We clean what we can safely access and coordinate roof or building access where needed. If a section cannot be reached, we will tell you rather than guess.',
    },
    {
      q: 'How can I tell whether lint buildup or a faulty dryer part is causing the problem?',
      a: 'Cleaning the vent rules out the most common cause, restricted airflow. If long dry times, excess heat, or error codes continue afterward, an appliance technician should inspect the dryer itself.',
    },
    {
      q: 'How often should a Fort Lauderdale household have its dryer vent cleaned?',
      a: 'About once a year for a typical household, and sooner with heavy use, pets, or a long run. Always follow your dryer manufacturer’s maintenance guidance.',
    },
    {
      q: 'What should I do if the dryer or vent becomes unusually hot or smells like burning?',
      a: 'Stop using the dryer and turn it off. Do not keep running it. Arrange an inspection of both the vent and the appliance before using it again, since overheating can be a fire risk.',
    },
  ],

  related: ['dryer-vent-cleaning', 'dryer-vent-installation', 'commercial-dryer-vent-cleaning', 'air-duct-cleaning'],
};
