import { MapPin, ExternalLink } from 'lucide-react'
import type { Property } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  property: Property
}

export default function LocationSection({ property }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10">
            <p className="eyebrow mb-2">Location</p>
            <h2 className="heading-display text-display-md text-charcoal mb-4">
              Kammanahalli, Bangalore
            </h2>
            <p className="font-inter text-sm text-slate max-w-xl leading-relaxed">
              Situated in a quiet, safe residential neighbourhood. Walkable to daily conveniences and well-connected to the rest of Bangalore.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Map */}
          <ScrollReveal className="md:col-span-2">
            <div className="relative w-full overflow-hidden bg-divider" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={property.mapEmbed}
                className="absolute inset-0 w-full h-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${property.name} location`}
                allowFullScreen
              />
            </div>
            <a
              href={property.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs font-medium tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:border-brass hover:text-brass transition-colors duration-300"
            >
              Get Directions
              <ExternalLink size={11} />
            </a>
          </ScrollReveal>

          {/* Nearby */}
          <ScrollReveal delay={100}>
            <div>
              <p className="eyebrow mb-5">Nearby</p>
              <ul className="space-y-0">
                {property.nearbyPlaces.map(({ name, distance }) => (
                  <li
                    key={name}
                    className="flex items-start justify-between py-4 border-b border-divider last:border-b-0 gap-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <MapPin size={13} className="text-muted mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-sm text-slate">{name}</span>
                    </div>
                    <span className="font-inter text-xs text-muted whitespace-nowrap flex-shrink-0">{distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
