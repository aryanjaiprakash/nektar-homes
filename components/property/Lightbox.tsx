'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { createPortal } from 'react-dom'

interface Props {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (typeof window === 'undefined') return null

  return createPortal(
    <div
      className="lightbox-overlay fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 font-inter text-xs tracking-widest">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 z-10 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div
        className="lightbox-image relative w-full h-full flex items-center justify-center px-16 md:px-24 py-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            key={images[index]}
            src={images[index]}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 z-10 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>,
    document.body
  )
}
