import { Receipt, Tag, UserCheck, Star, Shuffle, MapPin } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const TIE_UPS = [
  { icon: Receipt, label: 'Flexible Billing' },
  { icon: Tag, label: 'Corporate Rate Cards' },
  { icon: UserCheck, label: 'Dedicated Coordination' },
  { icon: Star, label: 'Priority Availability' },
  { icon: Shuffle, label: 'Mixed-Stay Flexibility' },
  { icon: MapPin, label: 'Local On-Ground Support' },
]

export default function EventCorporateTieUps() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10 md:mb-14 text-center max-w-lg mx-auto">
            <p className="eyebrow text-white/40 mb-3">Corporate Tie-Ups</p>
            <h2 className="heading-display text-display-md text-white">
              Working With Nektar Homes
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            {TIE_UPS.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 py-4 ${
                  i !== TIE_UPS.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brass-light">
                  <Icon size={18} />
                </span>
                <span className="font-inter text-[15px] text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
