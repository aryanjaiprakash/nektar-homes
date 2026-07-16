import Image from 'next/image'
import Link from 'next/link'
import { generalEnquiryUrl } from '@/lib/whatsapp'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-end overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 animate-kenburns will-change-transform">
          <Image
            src="/images/property-2/hero.jpg"
            alt="Nektar Home Advaith — living room"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-container mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <p className="eyebrow text-white/60 mb-4 md:mb-5">
            Nektar Homes · Kammanahalli, Bangalore
          </p>
          <h1 className="heading-display text-white text-display-xl mb-5 md:mb-6">
            Stay<br />Beautifully.
          </h1>
          <p className="font-inter text-white/75 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg">
            Thoughtfully curated 2 &amp; 3BHK homes in the heart of Bangalore.
            Self check-in, fully equipped kitchens, king beds.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brass text-charcoal text-xs font-semibold tracking-widest uppercase hover:opacity-85 transition-opacity"
            >
              Enquire via WhatsApp
            </a>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-xs font-medium tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Explore Homes
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-2 z-10">
        <div className="w-px h-14 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-white/60 scroll-line-anim" />
        </div>
      </div>
    </section>
  )
}
