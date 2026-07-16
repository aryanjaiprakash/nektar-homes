import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { properties, SITE_URL } from '@/lib/properties'
import { propertyEnquiryUrl, generalEnquiryUrl } from '@/lib/whatsapp'
import ScrollReveal from '@/components/ui/ScrollReveal'
import StickyMobileBar from '@/components/ui/StickyMobileBar'

export const metadata: Metadata = {
  title: 'Our Properties',
  description:
    'Explore our curated collection of 2BHK and 3BHK furnished stays in Kammanahalli, Bangalore. Up to 7 guests. Direct WhatsApp booking.',
  alternates: { canonical: `${SITE_URL}/properties` },
  openGraph: {
    url: `${SITE_URL}/properties`,
    title: 'Our Properties | Nektar Homes Bangalore',
    images: [{ url: '/images/property-2/hero.jpg', width: 1200, height: 630 }],
  },
}

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/property-3/hero.jpg"
            alt="Nektar Homes collection"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-10">
          <p className="eyebrow text-white/40 mb-4">Kammanahalli, Bangalore</p>
          <h1 className="heading-display text-display-lg text-white mb-5">
            Our Collection
          </h1>
          <p className="font-inter text-white/60 text-base md:text-lg max-w-xl leading-relaxed">
            Three thoughtfully curated homes, each designed to make your stay in Bangalore feel genuinely comfortable.
          </p>
        </div>
      </section>

      {/* Properties — editorial alternating layout */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-container mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          {properties.map((property, i) => (
            <ScrollReveal key={property.slug}>
              <article className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>

                {/* Image */}
                <div className={`img-hover relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[500px] ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <Image
                    src={property.heroImage}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className={`bg-white flex flex-col justify-center p-8 md:p-12 lg:p-16 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <p className="eyebrow mb-3">{property.type} · {property.location}</p>
                  <h2 className="heading-display text-display-md text-charcoal mb-4">
                    {property.name}
                  </h2>

                  {/* Stats */}
                  <div className="flex items-center gap-6 py-4 border-y border-divider mb-5">
                    <div className="text-center">
                      <p className="font-cormorant text-3xl font-medium text-charcoal">{property.guests}</p>
                      <p className="font-inter text-xs text-muted">guests</p>
                    </div>
                    <div className="text-center">
                      <p className="font-cormorant text-3xl font-medium text-charcoal">{property.bedrooms}</p>
                      <p className="font-inter text-xs text-muted">bedrooms</p>
                    </div>
                    <div className="text-center">
                      <p className="font-cormorant text-3xl font-medium text-charcoal">{property.bathrooms}</p>
                      <p className="font-inter text-xs text-muted">bathrooms</p>
                    </div>
                  </div>

                  <p className="font-inter text-sm text-slate leading-relaxed mb-7 line-clamp-4">
                    {property.tagline}
                  </p>

                  {property.building && (
                    <div className="mb-6 px-4 py-3 bg-cream border border-divider">
                      <p className="font-inter text-xs text-slate leading-relaxed">
                        <span className="font-semibold text-charcoal">Same building as Amruth 3BHK.</span>{' '}
                        Book both for up to 12 guests.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Link
                      href={`/properties/${property.slug}`}
                      className="flex-1 text-center py-3 border border-charcoal text-charcoal text-xs font-medium tracking-widest uppercase hover:bg-charcoal hover:text-white transition-colors duration-300"
                    >
                      View Home
                    </Link>
                    <a
                      href={propertyEnquiryUrl(property.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-3 bg-charcoal text-white text-xs font-medium tracking-widest uppercase hover:bg-slate transition-colors duration-300"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-16 md:py-20 text-center">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="eyebrow mb-3">Not Sure Which Home?</p>
            <h2 className="heading-display text-display-md text-charcoal mb-4 max-w-lg mx-auto">
              We&apos;ll help you choose.
            </h2>
            <p className="font-inter text-sm text-muted mb-8 max-w-md mx-auto leading-relaxed">
              Tell us your dates, group size and what matters most. We will find the perfect fit.
            </p>
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-charcoal text-white text-xs font-semibold tracking-widest uppercase hover:bg-slate transition-colors duration-300"
            >
              Chat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      <StickyMobileBar />
    </>
  )
}
