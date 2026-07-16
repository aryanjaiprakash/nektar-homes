import Image from 'next/image'
import Link from 'next/link'
import type { Property } from '@/types'
import { propertyEnquiryUrl } from '@/lib/whatsapp'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  properties: Property[]
}

export default function RelatedProperties({ properties }: Props) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10">
            <p className="eyebrow mb-2">More From Nektar</p>
            <h2 className="heading-display text-display-md text-charcoal">
              Explore other homes.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {properties.map((property, i) => (
            <ScrollReveal key={property.slug} delay={i * 100}>
              <article className="group bg-white overflow-hidden flex flex-col md:flex-row">
                {/* Image */}
                <div className="img-hover relative w-full md:w-48 h-56 md:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={property.cardImage}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="eyebrow block mb-2">{property.type} · {property.location}</span>
                    <h3 className="heading-serif text-xl text-charcoal mb-2 group-hover:text-brass transition-colors duration-300">
                      {property.name}
                    </h3>
                    <div className="flex gap-4 text-xs text-muted mb-4">
                      <span>{property.guests} guests</span>
                      <span>{property.bedrooms} bedrooms</span>
                      <span>{property.bathrooms} bathrooms</span>
                    </div>
                    <p className="font-inter text-xs text-slate leading-relaxed line-clamp-2">
                      {property.tagline}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <Link
                      href={`/properties/${property.slug}`}
                      className="flex-1 text-center py-2.5 border border-charcoal text-charcoal text-xs font-medium tracking-widest uppercase hover:bg-charcoal hover:text-white transition-colors duration-300"
                    >
                      View Home
                    </Link>
                    <a
                      href={propertyEnquiryUrl(property.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-charcoal text-white text-xs font-medium tracking-widest uppercase hover:bg-slate transition-colors duration-300"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
