import Image from 'next/image'

export default function EventHero() {
  return (
    <section className="relative min-h-[100svh] max-h-[1000px] flex flex-col items-center justify-center overflow-hidden bg-charcoal">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-kenburns will-change-transform">
          <Image
            src="/images/property-2/hero.jpg"
            alt="A Nektar Homes living room in Bangalore"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center flex flex-col items-center">
        <div className="relative h-10 w-36 mb-9">
          <Image
            src="/logo.jpg"
            alt="Nektar Homes"
            fill
            className="object-contain"
            sizes="144px"
            priority
            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)' }}
          />
        </div>
        <h1 className="heading-display text-white text-display-lg mb-4">
          Nektar Homes
        </h1>
        <p className="font-inter text-brass-light text-base md:text-lg leading-relaxed max-w-xs">
          Corporate stays, designed around your workforce.
        </p>
      </div>

      {/* Scroll CTA */}
      <a
        href="#homes"
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <span className="font-inter text-xs tracking-wide">Explore our homes</span>
        <span className="text-sm leading-none">↓</span>
      </a>
    </section>
  )
}
