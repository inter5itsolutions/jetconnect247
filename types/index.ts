export type AircraftCategory = 'Ultra Long Range' | 'Heavy Jet' | 'Super Midsize' | 'Midsize' | 'Light Jet';

export interface Aircraft {
  id: string;
  slug: string;
  name: string;
  category: AircraftCategory;
  passengers: number;
  range: string;
  speed: string;
  description: string;
  longDescription: string;
  amenities: string[];
  heroImage: string;
  gallery: string[];
  featured: boolean;
  pricePerHour?: number;
}

export interface QuoteRequest {
  flightType: 'one-way' | 'round-trip' | 'multi-leg';
  departure: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  aircraftPreference?: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
