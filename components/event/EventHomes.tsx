import Image from 'next/image'
import Link from 'next/link'
import { properties } from '@/lib/properties'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function EventHomes() {
  return (
    <section id="homes" className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10 md:mb-14 text-center max-w-lg mx-auto">
            <p className="eyebrow mb-3">Our Collection</p>
            <h2 className="heading-display text-display-md text-charcoal">
              Explore Our Homes
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, i) => (
            <ScrollReveal key={property.slug} delay={i * 100}>
              <article className="group flex flex-col h-full rounded-2xl overflow-hidden border border-divider bg-cream">
                {/* Image */}
                <div className="img-hover relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.cardImage}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-charcoal text-[11px] font-semibold tracking-widest uppercase">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="heading-serif text-xl text-charcoal mb-1.5">
                    {property.name}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed mb-3 line-clamp-2">
                    {property.tagline}
                  </p>
                  <p className="font-inter text-xs text-muted mb-5">
                    Up to {property.guests} guests · {property.bedrooms} bedrooms
                  </p>
                  <Link
                    href={`/properties/${property.slug}`}
                    className="mt-auto inline-flex items-center justify-center w-full px-5 py-3.5 bg-charcoal text-white text-xs font-semibold tracking-widest uppercase rounded-full active:scale-[0.98] transition-transform hover:bg-slate"
                  >
                    Explore Home
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
