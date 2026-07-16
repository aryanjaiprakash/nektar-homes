import {
  Bed, Wind, Tv, ChefHat, Wifi, KeyRound, Car, Briefcase,
  ShieldCheck, Lock, Coffee, Zap, ShowerHead, Flower2,
  WashingMachine, Shield
} from 'lucide-react'
import type { Property } from '@/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Bed, Wind, Tv, ChefHat, Wifi, KeyRound, Car, Briefcase,
  ShieldCheck, Lock, Coffee, Zap, ShowerHead, Flower2,
  WashingMachine, Shield,
}

interface Props {
  property: Property
}

export default function AmenitiesSection({ property }: Props) {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-12">
            <p className="eyebrow mb-2">What&apos;s Included</p>
            <h2 className="heading-display text-display-md text-charcoal">
              Amenities
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {property.amenityCategories.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 80}>
              <div>
                <h3 className="font-inter text-xs font-semibold tracking-widest uppercase text-muted mb-5 border-b border-divider pb-3">
                  {cat.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {cat.items.map(({ icon, label, description }) => {
                    const Icon = iconMap[icon] ?? ShieldCheck
                    return (
                      <div key={label} className="flex gap-3.5 group">
                        <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-divider group-hover:border-brass transition-colors duration-300 mt-0.5">
                          <Icon size={16} strokeWidth={1.5} className="text-charcoal group-hover:text-brass transition-colors duration-300" />
                        </div>
                        <div>
                          <p className="font-inter text-sm font-medium text-charcoal leading-snug">{label}</p>
                          {description && (
                            <p className="font-inter text-xs text-muted leading-relaxed mt-0.5">{description}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
