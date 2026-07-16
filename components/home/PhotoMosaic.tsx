import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

const mosaicImages = [
  {
    src: '/images/property-2/hero.jpg',
    alt: 'Nektar Home Advaith — bright, airy living room',
    className: 'col-span-1 md:col-span-1 row-span-2',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    src: '/images/property-3/hero.jpg',
    alt: 'Nektar Home Amruth 2BHK — warm, inviting living room',
    className: 'col-span-1 row-span-1',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    src: '/images/property-1/img-01.jpg',
    alt: 'Nektar Home Amruth — serene bedroom',
    className: 'col-span-1 row-span-1',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    src: '/images/property-3/img-01.jpg',
    alt: 'Nektar Homes entrance with brand sign',
    className: 'col-span-1 row-span-1',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    src: '/images/property-2/img-01.jpg',
    alt: 'Nektar Home Advaith — editorial bedroom',
    className: 'col-span-1 row-span-1',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    src: '/images/property-3/img-04.jpg',
    alt: 'Nektar Home Amruth 2BHK — bedroom',
    className: 'col-span-1 row-span-1',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
]

export default function PhotoMosaic() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-10">

        <ScrollReveal>
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">The Spaces</p>
              <h2 className="heading-display text-display-lg text-charcoal max-w-md">
                Homes that make an impression.
              </h2>
            </div>
            <Link
              href="/properties"
              className="self-start md:self-auto text-xs font-medium tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:border-brass hover:text-brass transition-colors duration-300"
            >
              See All Homes →
            </Link>
          </div>
        </ScrollReveal>

        {/* Bento Grid — CSS grid with spans */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 grid-rows-[240px_240px] md:grid-rows-[290px_290px]">
          {mosaicImages.map(({ src, alt, className, sizes }, i) => (
            <div
              key={src}
              className={`img-hover relative overflow-hidden ${className}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 ease-luxury"
                sizes={sizes}
                loading={i < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
