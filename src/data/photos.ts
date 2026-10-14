import type { ImageMetadata } from 'astro';
import acOutdoor from '../assets/images/ac-outdoor.webp';
import beachCity from '../assets/images/beach-city.webp';
import brightHome from '../assets/images/bright-home.webp';
import condoTowers from '../assets/images/condo-towers.webp';
import homeExterior from '../assets/images/home-exterior.webp';
import laundry from '../assets/images/laundry.webp';
import livingRoom from '../assets/images/living-room.webp';
import miamiSkyline from '../assets/images/miami-skyline.webp';
import office from '../assets/images/office.webp';
import plans from '../assets/images/plans.webp';
import techPanel from '../assets/images/tech-panel.webp';
import techWork from '../assets/images/tech-work.webp';

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
  condoTowers: { src: condoTowers, alt: 'High-rise condominium towers along the South Florida coast', family: 'towers' },
  miamiSkyline: { src: miamiSkyline, alt: 'Miami skyline and waterfront buildings', family: 'skyline' },
  beachCity: { src: beachCity, alt: 'Coastal South Florida street lined with palms and mid-rise buildings', family: 'coast' },
  office: { src: office, alt: 'Open commercial office with a ceiling air diffuser', family: 'office' },
  laundry: { src: laundry, alt: 'Home laundry room with a clothes dryer', family: 'laundry' },
  acOutdoor: { src: acOutdoor, alt: 'Outdoor air conditioning condenser beside a home', family: 'condenser' },
  plans: { src: plans, alt: 'Building plans spread out for a mechanical review', family: 'plans' },
  techPanel: { src: techPanel, alt: 'Technician working inside a building equipment panel', family: 'tech-panel' },
  techWork: { src: techWork, alt: 'Technician using tools on building mechanical equipment', family: 'tech-work' },
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
  const choice =
    candidates.find(good) ??
    vehicles.find(good) ??
    all.find(good) ??
    candidates.find(fresh) ??
    all.find(fresh) ??
    candidates.find(fits) ??
    candidates[0] ??
    all[0];
  used.add(choice.family);
  used.add(choice.src.src);
  return choice;
}

export const asPhoto = (src: ImageMetadata, alt: string): Photo => ({ src, alt, family: familyOf(src) });
