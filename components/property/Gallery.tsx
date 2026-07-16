'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Grid2x2 } from 'lucide-react'

interface Props {
  images: string[]
  propertyName: string
}

export default function Gallery({ images, propertyName }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = useCallback((i: number) => setLightboxIndex(i), [])
  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  )
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  )

  return (
    <>
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow mb-2">Photo Gallery</p>
                <h2 className="heading-display text-display-md text-charcoal">
                  Every corner of {propertyName}.
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-muted text-xs font-inter tracking-wide">
                <Grid2x2 size={14} />
                {images.length} photos
              </div>
            </div>
          </ScrollReveal>

          {/* Masonry grid */}
          <div className="masonry-grid">
            {images.map((src, i) => (
              <button
                key={src}
                className="masonry-item group cursor-zoom-in focus:outline-none"
                onClick={() => open(i)}
                aria-label={`View photo ${i + 1}`}
              >
                <div className="relative overflow-hidden bg-divider">
                  <Image
                    src={src}
                    alt={`${propertyName} — photo ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.03]"
                    loading={i < 6 ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 440px"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-9 h-9 bg-white/90 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
