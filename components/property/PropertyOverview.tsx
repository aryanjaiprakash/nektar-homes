import { propertyEnquiryUrl } from '@/lib/whatsapp'
import type { Property } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  property: Property
}

function QuickStat({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="py-4 border-b border-divider last:border-b-0 flex items-center justify-between">
      <span className="font-inter text-sm text-muted">{label}</span>
      <span className="font-cormorant text-2xl font-medium text-charcoal">{value}</span>
    </div>
  )
}

export default function PropertyOverview({ property }: Props) {
  const paragraphs = property.description.trim().split('\n\n')

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">

          {/* Description */}
          <ScrollReveal className="md:col-span-2">
            <div>
              <p className="eyebrow mb-3">{property.type} · {property.location}</p>
              <h2 className="heading-display text-display-md text-charcoal mb-8">
                {property.tagline}
              </h2>
              <div className="space-y-5">
                {paragraphs.map((para, i) => (
                  <p key={i} className="font-inter text-base text-slate leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick stats card */}
          <ScrollReveal delay={150}>
            <aside className="bg-white p-7 md:p-8 border border-divider">
              <p className="eyebrow mb-4">At a glance</p>
              <QuickStat value={property.guests} label="Guests" />
              <QuickStat value={property.bedrooms} label="Bedrooms" />
              <QuickStat value={property.bathrooms} label="Bathrooms" />
              <QuickStat value={property.type} label="Property type" />
              <QuickStat value="Self check-in" label="Access" />

              <a
                href={propertyEnquiryUrl(property.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2.5 px-5 py-3.5 bg-charcoal text-white text-xs font-semibold tracking-widest uppercase hover:bg-slate transition-colors duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire via WhatsApp
              </a>

              {property.building && (
                <p className="mt-4 text-xs text-muted text-center leading-relaxed">
                  Part of {property.building}.<br />Ask about booking multiple units.
                </p>
              )}
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
