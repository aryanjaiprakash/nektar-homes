'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import type { Property } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  faq: Property['faq']
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-cormorant text-xl font-light text-charcoal group-hover:text-brass transition-colors duration-300 pr-2">
          {q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-divider group-hover:border-brass transition-colors duration-300">
          {open ? <Minus size={13} className="text-charcoal" /> : <Plus size={13} className="text-charcoal" />}
        </span>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <p className="font-inter text-sm text-slate leading-relaxed pb-6 max-w-prose-lg">{a}</p>
      </div>
    </div>
  )
}

export default function PropertyFAQ({ faq }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10">
            <p className="eyebrow mb-2">FAQ</p>
            <h2 className="heading-display text-display-md text-charcoal">
              Common questions.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="max-w-3xl">
            {faq.map(({ question, answer }) => (
              <Item key={question} q={question} a={answer} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
