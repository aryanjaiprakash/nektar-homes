import type { Property } from '@/types'

export const SITE_URL = 'https://nektarhomes.com'
export const WHATSAPP_NUMBER = '919980357774'
export const CONTACT_EMAIL = 'stay@nektarhomes.com'
export const INSTAGRAM_HANDLE = 'nektarhomes_'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`

export const HOUSE_RULES = [
  'No parties or events.',
  'Please treat the home with respect and maintain cleanliness during your stay.',
  'Kindly wash used dishes before checkout.',
  'No smoking indoors. Balcony only.',
  'Quiet hours: 11 PM to 8 AM.',
]

export const properties: Property[] = [
  {
    id: 'property-1',
    slug: 'nektar-home-amruth',
    name: 'Nektar Home Amruth',
    shortName: 'Amruth',
    type: '3BHK',
    tagline: 'A generous 3-bedroom home with a private patio in the heart of Kammanahalli.',
    description: `Step into a home that balances comfort with character. The bright living room features a 3-seater sectional sofa, two armchairs, a coffee table, and a large flat-screen TV. Natural light streams through the private patio, creating an easy warmth throughout the day.

Each of the three air-conditioned bedrooms comes with a king-sized bed, premium wooden flooring, and a large wooden closet with shelves and drawers. Two bedrooms have private attached bathrooms; a third common bathroom serves the rest of the home, all finished with modern fixtures and premium fittings.

The fully equipped kitchen has everything you need: sleek countertops, a microwave, refrigerator, stove, and a complete set of crockery and cooking essentials. A dedicated workspace makes Amruth equally suited for remote work stays, and the private patio is ideal for morning coffee or quiet evening conversations.`,
    location: 'Kammanahalli, Bangalore',
    guests: 7,
    bedrooms: 3,
    bathrooms: 3,
    heroImage: '/images/property-1/hero.jpg',
    cardImage: '/images/property-1/hero.jpg',
    gallery: [
      '/images/property-1/img-09.jpg',
      '/images/property-1/img-12.jpg',
      '/images/property-1/img-01.jpg',
      '/images/property-1/img-11.jpg',
      '/images/property-1/img-06.jpg',
      '/images/property-1/img-03.jpg',
      '/images/property-1/img-22.jpg',
      '/images/property-1/img-07.jpg',
      '/images/property-1/img-04.jpg',
      '/images/property-1/img-02.jpg',
      '/images/property-1/img-21.jpg',
      '/images/property-1/img-13.jpg',
      '/images/property-1/img-08.jpg',
      '/images/property-1/img-14.jpg',
      '/images/property-1/img-15.jpg',
      '/images/property-1/img-16.jpg',
      '/images/property-1/img-17.jpg',
      '/images/property-1/img-18.jpg',
      '/images/property-1/img-19.jpg',
      '/images/property-1/img-20.jpg',
      '/images/property-1/img-23.jpg',
      '/images/property-1/img-24.jpg',
      '/images/property-1/img-25.jpg',
      '/images/property-1/img-26.jpg',
      '/images/property-1/img-05.jpg',
      '/images/property-1/img-10.jpg',
    ],
    amenityCategories: [
      {
        category: 'Bedrooms & Comfort',
        items: [
          { icon: 'Bed', label: 'King-Sized Beds', description: 'All three bedrooms feature king beds with premium bedding.' },
          { icon: 'Wind', label: 'Air Conditioning', description: 'Individual AC units in every bedroom and the living area.' },
          { icon: 'Armchair', label: 'Premium Furnishing', description: 'Wooden flooring, closets with shelves and drawers.' },
        ],
      },
      {
        category: 'Kitchen & Dining',
        items: [
          { icon: 'ChefHat', label: 'Fully Equipped Kitchen', description: 'Microwave, refrigerator, stove, crockery and cooking essentials.' },
          { icon: 'Coffee', label: 'Dining Area', description: 'Comfortable dining setup for the whole group.' },
        ],
      },
      {
        category: 'Technology',
        items: [
          { icon: 'Wifi', label: 'Fast WiFi', description: 'High-speed internet suitable for remote work and streaming.' },
          { icon: 'Tv', label: 'Smart TV', description: 'Large flat-screen TV in the living room.' },
        ],
      },
      {
        category: 'Access & Outdoor',
        items: [
          { icon: 'KeyRound', label: 'Self Check-In', description: 'Flexible, hassle-free arrival on your schedule.' },
          { icon: 'Car', label: 'Parking', description: 'Dedicated parking available.' },
          { icon: 'Flower2', label: 'Private Patio', description: 'A peaceful outdoor space for morning coffee or evening conversations.' },
          { icon: 'Briefcase', label: 'Dedicated Workspace', description: 'Comfortable desk setup for remote work or study.' },
        ],
      },
    ],
    mapLink: 'https://maps.app.goo.gl/H7TF3UJpVoxTs1jLA',
    mapEmbed: 'https://maps.google.com/maps?q=Kammanahalli,Bangalore,Karnataka&output=embed&z=15',
    nearbyPlaces: [
      { name: 'Cafés, restaurants & shops', distance: '500m walk' },
      { name: 'Manyata Tech Park', distance: '15 mins drive' },
      { name: 'Indiranagar', distance: '20 mins drive' },
      { name: 'Orion East Mall', distance: '10 mins drive' },
      { name: 'Bangalore International Airport', distance: '45 mins drive' },
    ],
    houseRules: HOUSE_RULES,
    faq: [
      { question: 'How do I book a stay?', answer: 'Simply tap the WhatsApp button and we will confirm your dates, share pricing, and guide you through the booking process directly.' },
      { question: 'What are the check-in and check-out times?', answer: 'Standard check-in is from 2 PM and check-out is by 11 AM. Flexible timings can be arranged on request.' },
      { question: 'Can I book Amruth and Amruth 2BHK together?', answer: 'Yes. Amruth 3BHK and Amruth 2BHK are in the same building. Booking both accommodates up to 12 guests, ideal for large families or group occasions.' },
      { question: 'Is parking available?', answer: 'Yes, dedicated parking is available at the property.' },
      { question: 'Is the kitchen truly fully equipped?', answer: 'Yes. You will find a microwave, refrigerator, gas stove, cooking oil, spices, crockery, cutlery, and cooking utensils. Everything you need to cook a full meal.' },
      { question: 'What is nearby?', answer: 'Cafés, restaurants and grocery shops are a 5-minute walk away. Manyata Tech Park is 15 minutes by car and Indiranagar is 20 minutes.' },
    ],
    building: 'Amruth Building, Kammanahalli',
  },
  {
    id: 'property-2',
    slug: 'nektar-home-advaith',
    name: 'Nektar Home Advaith',
    shortName: 'Advaith',
    type: '3BHK',
    tagline: 'A refined modern 3-bedroom home with private balcony, perfect for families and groups.',
    description: `Advaith is a beautifully appointed modern home designed for comfort and ease. The living room features a 3-seater sectional sofa, two armchairs, a coffee table, and a flat-screen TV on a wooden cabinet, a welcoming space to gather after a day in the city.

All three bedrooms come with a king-sized bed, a wooden wardrobe with drawers and shelves, air conditioning, and a smart lock for secure, flexible access. The master bedroom features premium wooden flooring; the other two have polished tile flooring. Each bedroom has a private attached bathroom with modern fixtures and premium finishes, a detail that makes a genuine difference for families and groups who value privacy.

The kitchen is equipped with a microwave, refrigerator, stove, and a full set of crockery and cooking essentials. Step out onto the private balcony for fresh air and quiet moments away from the city pace.`,
    location: 'Kammanahalli, Bangalore',
    guests: 7,
    bedrooms: 3,
    bathrooms: 3,
    heroImage: '/images/property-2/hero.jpg',
    cardImage: '/images/property-2/hero.jpg',
    gallery: [
      '/images/property-2/img-01.jpg',
      '/images/property-2/img-19.jpg',
      '/images/property-2/img-03.jpg',
      '/images/property-2/img-04.jpg',
      '/images/property-2/img-05.jpg',
      '/images/property-2/img-06.jpg',
      '/images/property-2/img-07.jpg',
      '/images/property-2/img-08.jpg',
      '/images/property-2/img-09.jpg',
      '/images/property-2/img-10.jpg',
      '/images/property-2/img-11.jpg',
      '/images/property-2/img-12.jpg',
      '/images/property-2/img-13.jpg',
      '/images/property-2/img-14.jpg',
      '/images/property-2/img-15.jpg',
      '/images/property-2/img-16.jpg',
      '/images/property-2/img-17.jpg',
      '/images/property-2/img-18.jpg',
      '/images/property-2/img-02.jpg',
      '/images/property-2/img-20.jpg',
    ],
    amenityCategories: [
      {
        category: 'Bedrooms & Comfort',
        items: [
          { icon: 'Bed', label: 'King-Sized Beds', description: 'All three bedrooms with king beds and premium bedding.' },
          { icon: 'Wind', label: 'Air Conditioning', description: 'Individual AC units in all bedrooms and living areas.' },
          { icon: 'Lock', label: 'Smart Locks', description: 'Secure keypad entry on all bedroom doors.' },
        ],
      },
      {
        category: 'Bathrooms',
        items: [
          { icon: 'ShowerHead', label: '3 Private Bathrooms', description: 'Each bedroom has its own attached bathroom with modern fixtures.' },
        ],
      },
      {
        category: 'Kitchen & Dining',
        items: [
          { icon: 'ChefHat', label: 'Fully Equipped Kitchen', description: 'Microwave, refrigerator, stove, crockery and cooking essentials.' },
          { icon: 'Coffee', label: 'Dining Area', description: 'Comfortable dining setup for the whole group.' },
        ],
      },
      {
        category: 'Technology',
        items: [
          { icon: 'Wifi', label: 'Fast WiFi', description: 'High-speed internet for remote work and streaming.' },
          { icon: 'Tv', label: 'Smart TV', description: 'Large flat-screen TV in the living room.' },
        ],
      },
      {
        category: 'Access & Outdoor',
        items: [
          { icon: 'KeyRound', label: 'Self Check-In', description: 'Smart lock entry for flexible, hassle-free arrival.' },
          { icon: 'Car', label: 'Parking', description: 'Dedicated parking available.' },
          { icon: 'Wind', label: 'Private Balcony', description: 'A private outdoor space to unwind and breathe.' },
        ],
      },
    ],
    mapLink: 'https://maps.app.goo.gl/odpJC7NYUT2Grjrx8',
    mapEmbed: 'https://maps.google.com/maps?q=Kammanahalli,Bangalore,Karnataka&output=embed&z=15',
    nearbyPlaces: [
      { name: 'Cafés, restaurants & shops', distance: '5 min walk' },
      { name: 'Manyata Tech Park', distance: '15 mins drive' },
      { name: 'Indiranagar', distance: '20 mins drive' },
      { name: 'Orion East Mall', distance: '10 mins drive' },
      { name: 'Bangalore International Airport', distance: '45 mins drive' },
    ],
    houseRules: HOUSE_RULES,
    faq: [
      { question: 'How do I book a stay?', answer: 'Tap the WhatsApp button and we will confirm your dates, share pricing, and complete the booking in one conversation.' },
      { question: 'What are the check-in and check-out times?', answer: 'Check-in from 2 PM, check-out by 11 AM. Early or late arrangements can be made on request.' },
      { question: 'Do all bedrooms have private bathrooms?', answer: 'Yes. Every bedroom at Advaith has its own attached bathroom, making it ideal for families and groups who value privacy.' },
      { question: 'Is parking available?', answer: 'Yes, dedicated parking is available.' },
      { question: 'Is the kitchen truly fully equipped?', answer: 'Absolutely. The kitchen includes a microwave, refrigerator, gas stove, crockery, cutlery, and cooking essentials.' },
      { question: 'What is nearby?', answer: 'Cafés, restaurants and grocery shops are a short walk away. Manyata Tech Park is 15 minutes and Indiranagar is 20 minutes by car.' },
    ],
  },
  {
    id: 'property-3',
    slug: 'nektar-home-amruth-2bhk',
    name: 'Nektar Home Amruth 2BHK',
    shortName: 'Amruth 2BHK',
    type: '2BHK',
    tagline: 'A warm, well-appointed 2-bedroom retreat, perfectly scaled for couples, small families and work trips.',
    description: `The Amruth 2BHK is a thoughtfully designed home that balances intimacy with practicality. Two air-conditioned bedrooms with quality bedding and fresh linens open onto a bright living area with a flat-screen TV. Step out through the private balcony doors to take in the neighbourhood at your own pace.

The fully equipped kitchen includes a microwave, kettle, and fridge with cooking basics provided. The dining area comfortably seats the whole group. Practical touches like a washing machine, iron and ironing board, and shower essentials are all ready when you arrive.

Smart lock entry means flexible, self-directed check-in, and CCTV security throughout the building ensures peace of mind. Situated in the same building as Nektar Home Amruth, both homes can be booked together to accommodate up to 12 guests for larger family visits or group occasions.`,
    location: 'Kammanahalli, Bangalore',
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    heroImage: '/images/property-3/hero.jpg',
    cardImage: '/images/property-3/hero.jpg',
    gallery: [
      '/images/property-3/img-04.jpg',
      '/images/property-3/img-03.jpg',
      '/images/property-3/img-06.jpg',
      '/images/property-3/img-01.jpg',
      '/images/property-3/img-05.jpg',
      '/images/property-3/img-07.jpg',
      '/images/property-3/img-08.jpg',
      '/images/property-3/img-09.jpg',
      '/images/property-3/img-10.jpg',
      '/images/property-3/img-11.jpg',
      '/images/property-3/img-02.jpg',
      '/images/property-3/img-12.jpg',
      '/images/property-3/img-13.jpg',
      '/images/property-3/img-14.jpg',
      '/images/property-3/img-15.jpg',
      '/images/property-3/img-16.jpg',
      '/images/property-3/img-17.jpg',
      '/images/property-3/img-18.jpg',
    ],
    amenityCategories: [
      {
        category: 'Bedrooms & Comfort',
        items: [
          { icon: 'Bed', label: 'Quality Bedrooms', description: 'Two bedrooms with quality bedding and fresh linens.' },
          { icon: 'Wind', label: 'Air Conditioning', description: 'AC in both bedrooms and the living area.' },
        ],
      },
      {
        category: 'Kitchen & Laundry',
        items: [
          { icon: 'ChefHat', label: 'Fully Equipped Kitchen', description: 'Microwave, kettle, refrigerator, and cooking basics included.' },
          { icon: 'Coffee', label: 'Dining Area', description: 'Comfortable dining for the whole group.' },
          { icon: 'WashingMachine', label: 'Washing Machine', description: 'In-home washer for longer stays.' },
          { icon: 'Zap', label: 'Iron & Ironing Board', description: 'Available for your use.' },
        ],
      },
      {
        category: 'Technology',
        items: [
          { icon: 'Wifi', label: 'Fast WiFi', description: 'High-speed internet for work and streaming.' },
          { icon: 'Tv', label: 'Smart TV', description: 'Flat-screen TV in the living room.' },
        ],
      },
      {
        category: 'Access & Security',
        items: [
          { icon: 'KeyRound', label: 'Self Check-In', description: 'Smart lock entry for flexible, hassle-free arrival.' },
          { icon: 'Shield', label: 'CCTV Security', description: 'CCTV throughout the building for your peace of mind.' },
          { icon: 'Wind', label: 'Private Balcony', description: 'Step outside for fresh air and quiet moments.' },
        ],
      },
    ],
    mapLink: 'https://maps.app.goo.gl/H7TF3UJpVoxTs1jLA',
    mapEmbed: 'https://maps.google.com/maps?q=Kammanahalli,Bangalore,Karnataka&output=embed&z=15',
    nearbyPlaces: [
      { name: 'Cafés, restaurants & shops', distance: '5 min walk' },
      { name: 'Manyata Tech Park', distance: '20 mins drive' },
      { name: 'Indiranagar', distance: '25 mins drive' },
      { name: 'Orion East Mall', distance: '10 mins drive' },
      { name: 'Bangalore International Airport', distance: '45 mins drive' },
    ],
    houseRules: HOUSE_RULES,
    faq: [
      { question: 'How do I book a stay?', answer: 'Tap the WhatsApp button and we will confirm dates, share pricing, and complete everything in one conversation.' },
      { question: 'What are the check-in and check-out times?', answer: 'Check-in from 2 PM, check-out by 11 AM. Flexible arrangements on request.' },
      { question: 'Can I book this alongside Nektar Home Amruth?', answer: 'Yes. Both homes are in the same building. Together they accommodate up to 12 guests, ideal for larger family visits or group occasions.' },
      { question: 'Is a washing machine available?', answer: 'Yes, the 2BHK includes a washing machine, iron, and ironing board. Ideal for longer stays.' },
      { question: 'Is the kitchen truly fully equipped?', answer: 'Yes. Microwave, kettle, refrigerator, crockery, and cooking basics are all provided.' },
      { question: 'What is nearby?', answer: 'Cafés and shops are a 5-minute walk. Manyata Tech Park is 20 minutes and Indiranagar is 25 minutes away by car.' },
    ],
    building: 'Amruth Building, Kammanahalli',
  },
]

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function getRelatedProperties(slug: string): Property[] {
  return properties.filter((p) => p.slug !== slug)
}
