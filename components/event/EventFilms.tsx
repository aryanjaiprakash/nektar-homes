'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

// Labels intentionally stay as "Nektar Homes 001/201/401" — the mapping to a
// specific physical property has not been confirmed yet. No property imagery
// is used for the posters below so nothing implies a match that isn't confirmed.
const FILMS = [
  { label: 'Nektar Homes 001', number: '001', src: '/videos/nektar-homes-001.mp4' },
  { label: 'Nektar Homes 201', number: '201', src: '/videos/nektar-homes-201.mp4' },
  { label: 'Nektar Homes 401', number: '401', src: '/videos/nektar-homes-401.mp4' },
]

export default function EventFilms() {
  const [active, setActive] = useState<(typeof FILMS)[number] | null>(null)

  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10 md:mb-14 text-center max-w-lg mx-auto">
            <p className="eyebrow text-white/40 mb-3">The Digital Experience</p>
            <h2 className="heading-display text-display-md text-white mb-3">
              Take a Look Inside
            </h2>
            <p className="font-inter text-white/50 text-sm leading-relaxed">
              A closer, more immersive look at our homes — beyond the brochure.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {FILMS.map((film, i) => (
            <ScrollReveal key={film.label} delay={i * 100}>
              <button
                type="button"
                onClick={() => setActive(film)}
                className="group relative block w-full aspect-video rounded-2xl overflow-hidden text-left bg-[#232220] border border-white/5"
              >
                {/* Editorial poster — no property photo, so no property is implied */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(216,180,90,0.22),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="heading-display text-white/[0.08] text-[5.5rem] md:text-[6rem] leading-none select-none">
                    {film.number}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Play size={20} className="text-charcoal ml-0.5" fill="currentColor" />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/20">
                  <p className="font-inter text-white text-sm font-medium">{film.label}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Video modal — the <video> element only mounts (and only then starts
          fetching bytes) once a card is tapped, so the 3 films never load
          on page visit. */}
      {active &&
        typeof window !== 'undefined' &&
        createPortal(
          <div
            className="lightbox-overlay fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center px-4"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors rounded-full"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div
              className="lightbox-image w-full h-full max-w-3xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={active.src}
                src={active.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="max-w-full max-h-full rounded-xl bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
