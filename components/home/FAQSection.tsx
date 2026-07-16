'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'

const faqs = [
  {
    q: 'How do I book a stay?',
    a: 'Simply tap the WhatsApp button on any page. We will confirm your dates, share pricing, and complete the booking directly in conversation. No third-party platforms, no booking fees.',
  },
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is from 2 PM and check-out is by 11 AM. We are flexible and happy to arrange early or late timings where possible. Just ask us on WhatsApp.',
  },
  {
    q: 'Are the kitchens fully equipped?',
    a: 'Yes. Each kitchen comes with a microwave, refrigerator, gas stove, crockery, cutlery, cooking oil, and spices. Everything you need to cook a proper meal is provided.',
  },
  {
    q: 'Can a large group book multiple properties together?',
    a: 'Absolutely. Nektar Home Amruth 3BHK and Amruth 2BHK are in the same building and can be booked together, accommodating up to 12 guests. Contact us to arrange a combined booking.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, dedicated parking is available at Nektar Home Amruth and Nektar Home Advaith.',
  },
  {
    q: 'What is nearby in Kammanahalli?',
    a: 'Cafés, restaurants, and grocery shops are a 5-minute walk from all three properties. Manyata Tech Park is 15–20 minutes by car, and Indiranagar is around 20–25 minutes away.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-cormorant text-xl md:text-2xl font-light text-charcoal group-hover:text-brass transition-colors duration-300 pr-4">
          {q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-divider group-hover:border-brass transition-colors duration-300">
          {open ? (
            <Minus size={14} className="text-charcoal" />
          ) : (
            <Plus size={14} className="text-charcoal" />
          )}
        </span>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <p className="font-inter text-sm md:text-base text-slate leading-relaxed pb-6 md:pb-7 max-w-prose-lg">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Left */}
          <ScrollReveal>
            <div className="md:col-span-1 md:sticky md:top-28">
              <p className="eyebrow mb-3">FAQ</p>
              <h2 className="heading-display text-display-md text-charcoal mb-5">
                Common questions.
              </h2>
              <p className="font-inter text-sm text-muted leading-relaxed mb-6">
                Can&apos;t find what you&apos;re looking for? Reach us directly.
              </p>
              <Link
                href="/contact"
                className="text-xs font-medium tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:border-brass hover:text-brass transition-colors duration-300"
              >
                Get in touch →
              </Link>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal className="md:col-span-2">
            <div>
              {faqs.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
