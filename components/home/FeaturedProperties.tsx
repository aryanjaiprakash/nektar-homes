import Image from 'next/image'
import Link from 'next/link'
import { properties } from '@/lib/properties'
import { propertyEnquiryUrl } from '@/lib/whatsapp'
import ScrollReveal from '@/components/ui/ScrollReveal'

function StatPill({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-slate">
      <span className="font-cormorant text-lg font-medium text-charcoal">{value}</span>
      <span className="text-xs text-muted">{label}</span>
    </div>
  )
}

export default function FeaturedProperties() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 md:px-10">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 md:mb-18 max-w-xl">
            <p className="eyebrow mb-3">Our Collection</p>
            <h2 className="heading-display text-display-lg text-charcoal">
              Three homes, one neighbourhood.
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, i) => (
            <ScrollReveal key={property.slug} delay={i * 100}>
              <article className="group flex flex-col h-full">
                {/* Image */}
                <div className="img-hover relative aspect-[4/5] overflow-hidden mb-5">
                  <Image
                    src={property.cardImage}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                  />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-charcoal text-xs font-semibold tracking-widest uppercase">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <p className="eyebrow mb-2">{property.location}</p>
                  <h3 className="heading-serif text-display-sm text-charcoal mb-2 group-hover:text-brass transition-colors duration-300">
                    {property.name}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed mb-4 line-clamp-2">
                    {property.tagline}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-5 mb-5 py-4 border-y border-divider">
                    <StatPill value={property.guests} label="guests" />
                    <StatPill value={property.bedrooms} label="bedrooms" />
                    <StatPill value={property.bathrooms} label="bathrooms" />
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      href={`/properties/${property.slug}`}
                      className="flex-1 text-center px-4 py-2.5 border border-charcoal text-charcoal text-xs font-medium tracking-widest uppercase hover:bg-charcoal hover:text-white transition-colors duration-300"
                    >
                      View Home
                    </Link>
                    <a
                      href={propertyEnquiryUrl(property.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2.5 bg-charcoal text-white text-xs font-medium tracking-widest uppercase hover:bg-slate transition-colors duration-300"
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
