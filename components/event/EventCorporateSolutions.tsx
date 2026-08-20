import { Briefcase, Building2, GraduationCap, Handshake, Home, Clock, CalendarDays } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const SOLUTIONS = [
  { icon: Briefcase, label: 'Project Deployments' },
  { icon: Building2, label: 'GCC Ramp-Ups' },
  { icon: GraduationCap, label: 'Training Cohorts' },
  { icon: Handshake, label: 'Client-Site Assignments' },
  { icon: Home, label: 'Relocations' },
  { icon: Clock, label: 'Short Stays' },
  { icon: CalendarDays, label: 'Long Stays' },
]

export default function EventCorporateSolutions() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-10 md:mb-14 text-center max-w-lg mx-auto">
            <p className="eyebrow mb-3">Built For Your Workforce</p>
            <h2 className="heading-display text-display-md text-charcoal">
              Corporate Stay Solutions
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            {SOLUTIONS.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-4 py-4 ${
                  i !== SOLUTIONS.length - 1 ? 'border-b border-divider' : ''
                }`}
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-brass-dark">
                  <Icon size={18} />
                </span>
                <span className="font-inter text-[15px] text-charcoal">{label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
