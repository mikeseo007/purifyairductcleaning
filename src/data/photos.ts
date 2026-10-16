import type { ImageMetadata } from 'astro';
import acOutdoor from '../assets/images/ac-outdoor.webp';
import beachCity from '../assets/images/beach-city.webp';
import brightHome from '../assets/images/bright-home.webp';
import condoTowers from '../assets/images/condo-towers.webp';
import homeExterior from '../assets/images/home-exterior.webp';
import laundry from '../assets/images/laundry.webp';
import livingRoom from '../assets/images/living-room.webp';
import heroLiving from '../assets/images/hero-living.webp';
import miamiSkyline from '../assets/images/miami-skyline.webp';
import office from '../assets/images/office.webp';
import plans from '../assets/images/plans.webp';
import techPanel from '../assets/images/tech-panel.webp';
import techWork from '../assets/images/tech-work.webp';
import airDuct from '../assets/images/air-duct.webp';
import ductCleaning from '../assets/images/duct-cleaning.webp';
import ductwork from '../assets/images/ductwork.webp';
import coilCleaning from '../assets/images/coil-cleaning.webp';
import coilBefore from '../assets/images/coil-before.webp';
import coilAfter from '../assets/images/coil-after.webp';
import airHandler from '../assets/images/air-handler.webp';
import blowerWheel from '../assets/images/blower-wheel.webp';
import serviceVan from '../assets/images/service-van.webp';
import techBlueprint from '../assets/images/tech-blueprint.webp';
import ductVentCleaning from '../assets/images/duct-vent-cleaning.webp';
import hvacFilter from '../assets/images/hvac-filter.webp';
import ductInspection from '../assets/images/duct-inspection.webp';
import serviceTrucks from '../assets/images/service-trucks.webp';
import negativeAirLadder from '../assets/images/negative-air-ladder.webp';
import negativeAirHose from '../assets/images/negative-air-hose.webp';
import dryerVentExterior from '../assets/images/dryer-vent-exterior.webp';
import serviceVanCrew from '../assets/images/service-van-crew.webp';
import ceilingVentAccess from '../assets/images/ceiling-vent-access.webp';
import livingRoomCleaning from '../assets/images/living-room-cleaning.webp';
import garageCrew from '../assets/images/garage-crew.webp';
import exteriorVentHose from '../assets/images/exterior-vent-hose.webp';
import ductSanitizing from '../assets/images/duct-sanitizing.webp';
import commercialDryerVent from '../assets/images/commercial-dryer-vent.webp';
import dryerVentInstall from '../assets/images/dryer-vent-install.webp';
import atticInsulationRemoval from '../assets/images/attic-insulation-removal.webp';
import blownInInsulation from '../assets/images/blown-in-insulation.webp';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  /** Photos in the same family look alike, so a page shows at most one of them. */
  family: string;
}

export const photos = {
  homeExterior: { src: homeExterior, alt: 'Single-family home with a landscaped front yard in South Florida', family: 'home' },
  brightHome: { src: brightHome, alt: 'Bright modern living space with large windows', family: 'interior' },
  livingRoom: { src: livingRoom, alt: 'Furnished living room with a ceiling air vent', family: 'living' },
  heroLiving: { src: heroLiving, alt: 'Bright living room with floor-to-ceiling windows in Aventura', family: 'hero-living' },
  condoTowers: { src: condoTowers, alt: 'High-rise condominium towers along the South Florida coast', family: 'towers' },
  miamiSkyline: { src: miamiSkyline, alt: 'Miami skyline and waterfront buildings', family: 'skyline' },
  beachCity: { src: beachCity, alt: 'Coastal South Florida street lined with palms and mid-rise buildings', family: 'coast' },
  office: { src: office, alt: 'Open commercial office with a ceiling air diffuser', family: 'office' },
  laundry: { src: laundry, alt: 'Home laundry room with a clothes dryer', family: 'laundry' },
  acOutdoor: { src: acOutdoor, alt: 'Outdoor air conditioning condenser beside a home', family: 'condenser' },
  plans: { src: plans, alt: 'Building plans spread out for a mechanical review', family: 'plans' },
  techPanel: { src: techPanel, alt: 'Technician working inside a building equipment panel', family: 'tech-panel' },
  techWork: { src: techWork, alt: 'Technician using tools on building mechanical equipment', family: 'tech-work' },
  airDuct: { src: airDuct, alt: 'Looking down a clean metal air duct', family: 'air-duct' },
  ductCleaning: { src: ductCleaning, alt: 'Technician cleaning a residential air duct', family: 'duct-cleaning' },
  ductwork: { src: ductwork, alt: 'Insulated air ducts and a ceiling supply vent', family: 'ductwork' },
  coilCleaning: { src: coilCleaning, alt: 'Gloved hand brushing lint off a dirty evaporator coil', family: 'coil-cleaning' },
  coilBefore: { src: coilBefore, alt: 'Evaporator coil packed with dust before cleaning', family: 'coil-before' },
  coilAfter: { src: coilAfter, alt: 'Clean evaporator coil with open aluminum fins after cleaning', family: 'coil-after' },
  airHandler: { src: airHandler, alt: 'Technician wiping an evaporator coil inside a garage air handler', family: 'air-handler' },
  blowerWheel: { src: blowerWheel, alt: 'Technician brushing dust off an HVAC blower wheel in a laundry closet', family: 'blower-wheel' },
  serviceVan: { src: serviceVan, alt: 'White Purify Air Duct Cleaning van parked on a palm-lined South Florida street', family: 'service-van' },
  techBlueprint: { src: techBlueprint, alt: 'Purify technician reviewing building plans before a duct cleaning', family: 'tech-blueprint' },
  ductVentCleaning: { src: ductVentCleaning, alt: 'Purify technician cleaning a ceiling air vent with a brush and inspection camera', family: 'duct-vent-cleaning' },
  hvacFilter: { src: hvacFilter, alt: 'Purify technician removing a dusty filter from an air handler', family: 'hvac-filter' },
  ductInspection: { src: ductInspection, alt: 'Purify technician inspecting an air duct with a camera', family: 'duct-inspection' },
  serviceTrucks: { src: serviceTrucks, alt: 'Purify Air Duct Cleaning trucks and technicians at a South Florida home', family: 'service-trucks' },
  negativeAirLadder: { src: negativeAirLadder, alt: 'Purify technician connecting a negative-air duct at a ceiling opening', family: 'negative-air-ladder' },
  negativeAirHose: { src: negativeAirHose, alt: 'Purify technician guiding an orange negative-air hose up to the ceiling', family: 'negative-air-hose' },
  dryerVentExterior: { src: dryerVentExterior, alt: 'Purify technician cleaning a clothes dryer vent from outside the laundry room', family: 'dryer-vent' },
  serviceVanCrew: { src: serviceVanCrew, alt: 'Purify Air Duct Cleaning van and crew with dryer vent equipment', family: 'service-van-crew' },
  ceilingVentAccess: { src: ceilingVentAccess, alt: 'Purify technician on a ladder at an open ceiling vent', family: 'ceiling-vent-access' },
  livingRoomCleaning: { src: livingRoomCleaning, alt: 'Purify technician vacuuming a living room ceiling vent', family: 'living-room-cleaning' },
  garageCrew: { src: garageCrew, alt: 'Purify crew working inside a home', family: 'garage-crew' },
  exteriorVentHose: { src: exteriorVentHose, alt: 'Purify technician connecting a negative-air hose to an exterior wall vent', family: 'exterior-vent-hose' },
  ductSanitizing: { src: ductSanitizing, alt: 'Fogger spraying sanitizer mist inside a metal air duct', family: 'duct-sanitizing' },
  commercialDryerVent: { src: commercialDryerVent, alt: 'Orange vacuum hose cleaning a commercial laundry dryer vent', family: 'commercial-dryer-vent' },
  dryerVentInstall: { src: dryerVentInstall, alt: 'Gloved hands fitting a new metal dryer vent beside a clothes dryer', family: 'dryer-vent-install' },
  atticInsulationRemoval: { src: atticInsulationRemoval, alt: 'Vacuum hose removing old insulation from between attic joists', family: 'attic-insulation-removal' },
  blownInInsulation: { src: blownInInsulation, alt: 'Hose blowing fresh loose-fill insulation between attic joists', family: 'blown-in-insulation' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

const all: Photo[] = Object.values(photos);

export const vehicles: Photo[] = [photos.homeExterior, photos.brightHome, photos.miamiSkyline, photos.beachCity, photos.acOutdoor];

export const familyOf = (img: ImageMetadata) => all.find((p) => p.src.src === img.src)?.family ?? img.src;

export const usedKeys = (images: ImageMetadata[]) => images.flatMap((img) => [familyOf(img), img.src]);

export function pickPhoto(candidates: Photo[], used: Set<string>, fit: { minWidth?: number; landscape?: boolean } = {}): Photo {
  const fits = (p: Photo) => p.src.width >= (fit.minWidth ?? 0) && (!fit.landscape || p.src.width / p.src.height >= 1.2);
  const fresh = (p: Photo) => !used.has(p.family) && !used.has(p.src.src);
  const good = (p: Photo) => fresh(p) && fits(p);
  const pool = candidates.length ? candidates : all;
  const choice = pool.find(good) ?? pool.find(fresh) ?? pool.find(fits) ?? pool[0];
  used.add(choice.family);
  used.add(choice.src.src);
  return choice;
}

export const asPhoto = (src: ImageMetadata, alt: string): Photo => ({ src, alt, family: familyOf(src) });

/** Each card shows the job itself. Position crops keep the work in frame. */
const serviceCardPhotos: Record<string, { key: PhotoKey; position: string }> = {
  'air-duct-cleaning': { key: 'ductVentCleaning', position: 'object-[74%_12%]' },
  'residential-air-duct-cleaning': { key: 'ceilingVentAccess', position: 'object-top' },
  'commercial-air-duct-cleaning': { key: 'negativeAirHose', position: 'object-[18%_center]' },
  'air-duct-sanitizing': { key: 'ductSanitizing', position: 'object-center' },
  'air-duct-inspection': { key: 'ductInspection', position: 'object-right' },
  'hvac-cleaning': { key: 'coilCleaning', position: 'object-center' },
  'hvac-mold-treatment': { key: 'coilBefore', position: 'object-center' },
  'dryer-vent-cleaning': { key: 'dryerVentExterior', position: 'object-right' },
  'commercial-dryer-vent-cleaning': { key: 'commercialDryerVent', position: 'object-center' },
  'ac-duct-replacement': { key: 'ductwork', position: 'object-center' },
  'dryer-vent-installation': { key: 'dryerVentInstall', position: 'object-center' },
  'attic-insulation-removal': { key: 'atticInsulationRemoval', position: 'object-center' },
  'blown-in-attic-insulation': { key: 'blownInInsulation', position: 'object-center' },
};

export const cardPhotoFor = (slug: string): Photo & { position: string } => {
  const entry = serviceCardPhotos[slug];
  const photo = entry ? photos[entry.key] : photos.ductVentCleaning;
  return { ...photo, position: entry?.position ?? 'object-center' };
};
