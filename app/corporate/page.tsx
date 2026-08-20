import type { Metadata } from 'next'
import EventHero from '@/components/event/EventHero'
import EventHomes from '@/components/event/EventHomes'
import EventFilms from '@/components/event/EventFilms'
import EventCorporateSolutions from '@/components/event/EventCorporateSolutions'
import EventCorporateTieUps from '@/components/event/EventCorporateTieUps'
import EventConnect from '@/components/event/EventConnect'
import EventContactCTA from '@/components/event/EventContactCTA'
import EventFooter from '@/components/event/EventFooter'
import StickyMobileBar from '@/components/ui/StickyMobileBar'
import { SITE_URL } from '@/lib/properties'

export const metadata: Metadata = {
  title: 'Corporate Stays in Bangalore',
  description:
    'Nektar Homes — premium corporate accommodation in Kammanahalli, Bangalore. Explore our homes, take a look inside, and talk to us on WhatsApp.',
  alternates: { canonical: `${SITE_URL}/corporate` },
  openGraph: {
    url: `${SITE_URL}/corporate`,
    title: 'Nektar Homes — Corporate Stays in Bangalore',
    description:
      'Premium corporate accommodation in Kammanahalli, Bangalore. Explore our homes and talk to us directly on WhatsApp.',
    images: [{ url: '/images/property-2/hero.jpg', width: 1200, height: 630 }],
  },
  // Single-purpose QR/event landing page, not meant to compete in search —
  // keep it out of the index so it doesn't dilute the main site's SEO.
  robots: {
    index: false,
    follow: true,
  },
}

export default function CorporatePage() {
  return (
    <>
      <EventHero />
      <EventHomes />
      <EventFilms />
      <EventCorporateSolutions />
      <EventCorporateTieUps />
      <EventConnect />
      <EventContactCTA />
      <EventFooter />
      <StickyMobileBar />
    </>
  )
}
