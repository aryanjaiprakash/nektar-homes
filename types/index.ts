export interface AmenityItem {
  icon: string
  label: string
  description?: string
}

export interface AmenityCategory {
  category: string
  items: AmenityItem[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface NearbyPlace {
  name: string
  distance: string
}

export interface Property {
  id: string
  slug: string
  name: string
  shortName: string
  type: '2BHK' | '3BHK'
  tagline: string
  description: string
  location: string
  guests: number
  bedrooms: number
  bathrooms: number
  heroImage: string
  cardImage: string
  gallery: string[]
  amenityCategories: AmenityCategory[]
  mapLink: string
  mapEmbed: string
  nearbyPlaces: NearbyPlace[]
  houseRules: string[]
  faq: FAQItem[]
  building?: string
}

export type PropertySlug =
  | 'nektar-home-amruth'
  | 'nektar-home-advaith'
  | 'nektar-home-amruth-2bhk'
