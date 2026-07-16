import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import WhyNektar from '@/components/home/WhyNektar'
import PhotoMosaic from '@/components/home/PhotoMosaic'
import GuestLove from '@/components/home/GuestLove'
import FAQSection from '@/components/home/FAQSection'
import BookingCTA from '@/components/home/BookingCTA'
import StickyMobileBar from '@/components/ui/StickyMobileBar'
import { SITE_URL } from '@/lib/properties'

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Nektar Homes',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.jpg` },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8123203622',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Nektar Homes',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'LodgingBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Nektar Homes',
      description:
        'Thoughtfully curated 2 & 3BHK furnished homes in Kammanahalli, Bangalore. Self check-in, fully equipped kitchens, king beds.',
      url: SITE_URL,
      telephone: '+91-8123203622',
      email: 'stay@nektarhomes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kammanahalli',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560084',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0167,
        longitude: 77.642,
      },
      priceRange: '₹₹',
      image: `${SITE_URL}/images/property-2/hero.jpg`,
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <FeaturedProperties />
      <WhyNektar />
      <PhotoMosaic />
      <GuestLove />
      <FAQSection />
      <BookingCTA />
      <StickyMobileBar />
    </>
  )
}
