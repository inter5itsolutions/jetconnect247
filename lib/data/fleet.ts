import type { Aircraft } from '@/types';

export const AIRCRAFT_DATA: Aircraft[] = [
  {
    id: '1',
    slug: 'global-7500',
    name: 'Bombardier Global 7500',
    category: 'Ultra Long Range',
    passengers: 19,
    range: '7,700 nm',
    speed: 'Mach 0.925',
    description: 'The world\'s largest and longest range business jet.',
    longDescription: 'The Global 7500 aircraft stands alone as the world\'s largest and longest range business jet. Within its luxurious interior are four true living spaces, a full-size kitchen and a dedicated crew suite.',
    amenities: ['Private Suite', 'Full Galley', 'Shower', 'High-speed Ka-band Wi-Fi', 'Circadian Lighting'],
    heroImage: '/assets/IMG-20251114-WA0010.jpg',
    gallery: ['/assets/IMG-20251114-WA0004.jpg', '/assets/IMG-20251114-WA0003.jpg'],
    featured: true,
    pricePerHour: 15000
  },
  {
    id: '2',
    slug: 'gulfstream-g650er',
    name: 'Gulfstream G650ER',
    category: 'Ultra Long Range',
    passengers: 16,
    range: '7,500 nm',
    speed: 'Mach 0.925',
    description: 'The gold standard in business aviation.',
    longDescription: 'The G650ER holds the record for the farthest, fastest flight in business aviation history. Its spacious interior is a refined getaway above the clouds where every detail is designed for comfort and productivity.',
    amenities: ['Convection Oven', 'Dishwasher', 'Surround Sound', '100% Fresh Air', 'Touchscreen CMS'],
    heroImage: '/assets/IMG-20251114-WA0009.jpg',
    gallery: ['/assets/IMG-20251114-WA0012.jpg', '/assets/IMG-20251114-WA0011.jpg'],
    featured: true,
    pricePerHour: 14000
  },
  {
    id: '3',
    slug: 'challenger-350',
    name: 'Challenger 350',
    category: 'Super Midsize',
    passengers: 9,
    range: '3,200 nm',
    speed: 'Mach 0.83',
    description: 'The best-selling business jet of the last decade.',
    longDescription: 'The Challenger 350 aircraft is the top-selling business jet among top corporations and charter operators worldwide. It offers a smooth ride from takeoff to touchdown.',
    amenities: ['Direct Access Baggage', 'In-flight Entertainment', 'Ergonomic Seats', 'Sound-proof Cabin'],
    heroImage: '/assets/IMG-20251114-WA0008.jpg',
    gallery: ['/assets/IMG-20251114-WA0013.jpg', '/assets/IMG-20251114-WA0014.jpg'],
    featured: false,
    pricePerHour: 8000
  },
  {
    id: '4',
    slug: 'phenom-300e',
    name: 'Embraer Phenom 300E',
    category: 'Light Jet',
    passengers: 7,
    range: '1,971 nm',
    speed: 'Mach 0.80',
    description: 'The world\'s fastest and longest-ranged single-pilot jet.',
    longDescription: 'The Phenom 300E continues the legacy of being the most-delivered light jet for the 11th consecutive year, featuring a new interior design and the first touch-screen flight deck in light jets.',
    amenities: ['Largest Windows', 'Recessed Floor', 'Smart Cabin', 'Climate Control'],
    heroImage: '/assets/IMG-20251114-WA0015.jpg',
    gallery: ['/assets/IMG-20251114-WA0005.jpg', '/assets/IMG-20251114-WA0006.jpg'],
    featured: false,
    pricePerHour: 5500
  }
];
