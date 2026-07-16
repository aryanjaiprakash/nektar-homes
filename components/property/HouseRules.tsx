import { ShieldCheck } from 'lucide-react'
import type { Property } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface Props {
  houseRules: Property['houseRules']
}

export default function HouseRules({ houseRules }: Props) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          <ScrollReveal>
            <div>
              <p className="eyebrow mb-2">House Rules</p>
              <h2 className="heading-display text-display-md text-charcoal mb-4">
                A home worth caring for.
              </h2>
              <p className="font-inter text-sm text-muted leading-relaxed">
                We appreciate guests who treat the space as their own, with care, respect, and consideration for the neighbourhood.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="md:col-span-2">
            <ul className="space-y-0">
              {houseRules.map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-5 border-b border-divider last:border-b-0"
                >
                  <span className="flex-shrink-0 w-6 h-6 border border-divider flex items-center justify-center mt-0.5">
                    <ShieldCheck size={13} className="text-muted" strokeWidth={1.5} />
                  </span>
                  <p className="font-inter text-sm text-slate leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
