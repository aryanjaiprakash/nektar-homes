import Image from 'next/image'
import Link from 'next/link'
import { propertyEnquiryUrl } from '@/lib/whatsapp'
import type { Property } from '@/types'

interface Props {
  property: Property
}

export default function PropertyHero({ property }: Props) {
  return (
    <section className="relative h-[85vh] min-h-[520px] max-h-[900px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={property.heroImage}
          alt={`${property.name} — interior`}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      </div>

      {/* Breadcrumb — positioned relative to section, clears the fixed navbar */}
      <nav className="absolute top-20 md:top-24 left-6 md:left-10 z-10 flex items-center gap-2 text-white/50 text-xs font-medium tracking-widest uppercase">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/properties" className="hover:text-white transition-colors">Properties</Link>
        <span>/</span>
        <span className="text-white/80">{property.shortName}</span>
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full max-w-container mx-auto px-6 md:px-10 pb-14 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block mb-3 px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase">
              {property.type} · Kammanahalli
            </span>
            <h1 className="heading-display text-white text-display-lg mb-4">
              {property.name}
            </h1>
            {/* Stats row */}
            <div className="flex items-center gap-6 text-white/70 font-inter text-sm">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                {property.guests} guests
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
                {property.bedrooms} bedrooms
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4 3 4 5 4 5"/><path d="M3 13h18"/><path d="M3 6h18v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6z"/><path d="M10 20v2"/><path d="M14 20v2"/></svg>
                {property.bathrooms} bathrooms
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={propertyEnquiryUrl(property.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2.5 px-7 py-3.5 bg-brass text-charcoal text-xs font-semibold tracking-widest uppercase hover:opacity-85 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
