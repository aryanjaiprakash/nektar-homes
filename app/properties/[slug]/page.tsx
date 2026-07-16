import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { properties, getPropertyBySlug, getRelatedProperties, SITE_URL } from '@/lib/properties'
import PropertyHero from '@/components/property/PropertyHero'
import PropertyOverview from '@/components/property/PropertyOverview'
import Gallery from '@/components/property/Gallery'
import AmenitiesSection from '@/components/property/AmenitiesSection'
import LocationSection from '@/components/property/LocationSection'
import HouseRules from '@/components/property/HouseRules'
import PropertyFAQ from '@/components/property/PropertyFAQ'
import RelatedProperties from '@/components/property/RelatedProperties'
import BookingCTA from '@/components/home/BookingCTA'
import StickyMobileBar from '@/components/ui/StickyMobileBar'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) return {}

  const descriptions: Record<string, string> = {
    'nektar-home-amruth':
      `Spacious 3BHK for up to 7 guests in Kammanahalli, Bangalore. King beds, private patio, fully equipped kitchen. 15 mins to Manyata Tech Park. Book on WhatsApp.`,
    'nektar-home-advaith':
      `Modern 3BHK home in Kammanahalli for families and groups. Private balcony, smart locks, 3 attached bathrooms. Fully equipped kitchen. Enquire on WhatsApp.`,
    'nektar-home-amruth-2bhk':
      `Comfortable 2BHK for up to 5 guests. Private balcony, smart entry, washing machine included. Walking distance to cafés and shops in Bangalore.`,
  }

  const url = `${SITE_URL}/properties/${slug}`

  return {
    title: property.name,
    description: descriptions[slug],
    alternates: { canonical: url },
    openGraph: {
      url,
      title: `${property.name} – ${property.type} Stay in Kammanahalli`,
      description: descriptions[slug],
      images: [{ url: property.heroImage, width: 1200, height: 630, alt: property.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.name} – ${property.type} Stay in Kammanahalli`,
      images: [property.heroImage],
    },
  }
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  const related = getRelatedProperties(slug)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: property.name,
    description: property.tagline,
    url: `${SITE_URL}/properties/${slug}`,
    image: `${SITE_URL}${property.heroImage}`,
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
    numberOfRooms: property.bedrooms,
    amenityFeature: property.amenityCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'LocationFeatureSpecification',
        name: item.label,
        value: true,
      }))
    ),
    hasMap: property.mapLink,
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: property.faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: `${SITE_URL}/properties` },
      { '@type': 'ListItem', position: 3, name: property.name, item: `${SITE_URL}/properties/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <PropertyHero property={property} />
      <PropertyOverview property={property} />
      <Gallery images={property.gallery} propertyName={property.shortName} />
      <AmenitiesSection property={property} />
      <LocationSection property={property} />
      <HouseRules houseRules={property.houseRules} />
      <PropertyFAQ faq={property.faq} />
      <RelatedProperties properties={related} />
      <BookingCTA />
      <StickyMobileBar propertyName={property.name} />
    </>
  )
}
