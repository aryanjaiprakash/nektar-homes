import Image from 'next/image'

export default function EventFooter() {
  return (
    <footer className="bg-charcoal py-8">
      <div className="max-w-container mx-auto px-6 md:px-10 flex flex-col items-center gap-3 text-center">
        <div className="relative h-8 w-28">
          <Image
            src="/logo.jpg"
            alt="Nektar Homes"
            fill
            className="object-contain"
            sizes="112px"
            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)' }}
          />
        </div>
        <p className="font-inter text-white/30 text-xs">
          © {new Date().getFullYear()} Nektar Homes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
