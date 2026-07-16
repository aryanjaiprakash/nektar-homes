import { Wifi, Wind, Tv, ChefHat, KeyRound, ShieldCheck, Car, Briefcase } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const features = [
  {
    icon: ChefHat,
    label: 'Fully Equipped Homes',
    desc: 'Every kitchen is stocked with appliances, crockery and cooking essentials.',
  },
  {
    icon: KeyRound,
    label: 'Self Check-In',
    desc: 'Smart locks for flexible, hassle-free arrival on your schedule.',
  },
  {
    icon: Wifi,
    label: 'Fast WiFi',
    desc: 'High-speed internet suited to remote work, calls and streaming.',
  },
  {
    icon: Wind,
    label: 'Air Conditioned',
    desc: 'Individual AC units in every bedroom and living area.',
  },
  {
    icon: Tv,
    label: 'Smart TV',
    desc: 'Large flat-screen TV in every living room.',
  },
  {
    icon: Car,
    label: 'Parking',
    desc: 'Dedicated parking at Amruth and Advaith.',
  },
  {
    icon: Briefcase,
    label: 'Workspace Ready',
    desc: 'Dedicated workspaces for professionals and remote workers.',
  },
  {
    icon: ShieldCheck,
    label: 'Professionally Managed',
    desc: 'Responsive host support available directly via WhatsApp.',
  },
]

export default function WhyNektar() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 md:px-10">

        <ScrollReveal>
          <div className="mb-14 md:mb-18">
            <p className="eyebrow mb-3">Why Nektar Homes</p>
            <h2 className="heading-display text-display-lg text-charcoal max-w-lg">
              Every detail, thoughtfully curated.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-14">
          {features.map(({ icon: Icon, label, desc }, i) => (
            <ScrollReveal key={label} delay={i * 60}>
              <div className="group">
                <div className="mb-4 w-10 h-10 flex items-center justify-center border border-divider group-hover:border-brass transition-colors duration-300">
                  <Icon size={18} className="text-charcoal group-hover:text-brass transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-inter text-sm font-semibold text-charcoal mb-1.5 tracking-wide">
                  {label}
                </h3>
                <p className="font-inter text-xs text-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
