import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Bed, Wind, Tv, ChefHat, Wifi, KeyRound, Car, Briefcase,
  ShieldCheck, Coffee, Zap, ShowerHead, Flower2, WashingMachine, Shield, Star
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import StickyMobileBar from '@/components/ui/StickyMobileBar'
import BookingCTA from '@/components/home/BookingCTA'
import { SITE_URL } from '@/lib/properties'

export const metadata: Metadata = {
  title: 'Amenities',
  description:
    'Every Nektar home comes with fast WiFi, air conditioning, fully equipped kitchens, smart TV, self check-in and more. Premium stays in Bangalore.',
  alternates: { canonical: `${SITE_URL}/amenities` },
  openGraph: {
    url: `${SITE_URL}/amenities`,
    title: 'Amenities | Nektar Homes Bangalore',
    images: [{ url: '/images/property-2/hero.jpg', width: 1200, height: 630 }],
  },
}

const amenities = [
  {
    icon: Wifi,
    label: 'Fast WiFi',
    description:
      'High-speed internet in every home. Reliable for remote work, video calls, and streaming without interruption.',
  },
  {
    icon: ChefHat,
    label: 'Fully Equipped Kitchen',
    description:
      'Microwave, refrigerator, gas stove, crockery, cutlery, cooking oil and spices. Everything needed to cook a complete meal.',
  },
  {
    icon: Wind,
    label: 'Air Conditioning',
    description:
      'Individual AC units in all bedrooms and living areas, so every guest sleeps comfortably regardless of the weather.',
  },
  {
    icon: Bed,
    label: 'King-Sized Beds',
    description:
      'Premium king beds with quality bedding and fresh linens in all bedrooms. No compromise on sleep quality.',
  },
  {
    icon: Tv,
    label: 'Smart TV',
    description:
      'Large flat-screen TV in every living room, ready for a relaxed evening in.',
  },
  {
    icon: KeyRound,
    label: 'Self Check-In',
    description:
      'Smart lock entry gives you full flexibility over your arrival and departure. Check in at midnight if you need to.',
  },
  {
    icon: Car,
    label: 'Free Parking',
    description:
      'Dedicated parking available at Nektar Home Amruth and Nektar Home Advaith.',
  },
  {
    icon: Briefcase,
    label: 'Dedicated Workspace',
    description:
      'A proper desk and chair for remote workers and professionals. Designed for productivity, not just browsing.',
  },
  {
    icon: WashingMachine,
    label: 'Washing Machine',
    description:
      'Available at Nektar Home Amruth 2BHK, ideal for stays of a week or more.',
  },
  {
    icon: Flower2,
    label: 'Private Balcony / Patio',
    description:
      'Step outside into your own private space for morning coffee, evening air, or a quiet moment away from the city.',
  },
  {
    icon: ShowerHead,
    label: 'Premium Bathrooms',
    description:
      'Modern fixtures and premium finishes throughout. Every bedroom at Advaith has its own attached bathroom.',
  },
  {
    icon: Shield,
    label: 'CCTV Security',
    description:
      'Security cameras throughout the building at Amruth 2BHK for your peace of mind at all hours.',
  },
  {
    icon: Coffee,
    label: 'Dining Area',
    description:
      'A proper dining table that comfortably seats the whole group, with comfortable chairs for leisurely meals.',
  },
  {
    icon: Zap,
    label: 'Iron & Ironing Board',
    description:
      'Available at Amruth 2BHK for guests who need to keep their clothes guest-ready.',
  },
  {
    icon: ShieldCheck,
    label: 'Professionally Managed',
    description:
      'The Nektar Homes team is reachable directly on WhatsApp for anything you need before, during or after your stay.',
  },
  {
    icon: Star,
    label: 'Shower Essentials',
    description:
      'Basic shower amenities are provided so you can arrive and settle in immediately.',
  },
]

export default function AmenitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/property-1/img-01.jpg"
            alt="Nektar Homes bedroom"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-10">
          <p className="eyebrow text-white/40 mb-4">All Properties</p>
          <h1 className="heading-display text-display-lg text-white mb-5">
            Every detail,<br />thoughtfully curated.
          </h1>
          <p className="font-inter text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
            Each Nektar home is equipped to meet the needs of families, professionals and groups, without having to ask for anything extra.
          </p>
        </div>
      </section>

      {/* Amenity Cards */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-divider border border-divider">
            {amenities.map(({ icon: Icon, label, description }, i) => (
              <ScrollReveal key={label} delay={(i % 4) * 60}>
                <div className="bg-white p-7 md:p-8 hover:bg-cream transition-colors duration-300 group h-full">
                  <div className="mb-4 w-10 h-10 flex items-center justify-center border border-divider group-hover:border-brass transition-colors duration-300">
                    <Icon size={17} strokeWidth={1.5} className="text-charcoal group-hover:text-brass transition-colors duration-300" />
                  </div>
                  <h2 className="font-inter text-sm font-semibold text-charcoal mb-2">{label}</h2>
                  <p className="font-inter text-xs text-muted leading-relaxed">{description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
      <StickyMobileBar />
    </>
  )
}
