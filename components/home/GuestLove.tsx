import ScrollReveal from '@/components/ui/ScrollReveal'

const testimonials = [
  {
    quote:
      'The apartment is very spacious, with clean bedrooms and bathrooms. The living area was beautifully maintained and provided a comfortable space for all of us to relax and spend quality time together.',
    name: 'Jibin',
    detail: 'Group stay, 6 friends',
    rating: 5,
  },
  {
    quote:
      'It was a wonderful stay, very near to my workplace and the amenities provided suited my requirements perfectly. The place was kept very clean and neat.',
    name: 'Sarath',
    detail: 'Work stay, Kammanahalli',
    rating: 5,
  },
  {
    quote:
      'The location is great — in a quiet neighbourhood but only a block away from a main street with lots of stores and restaurants. Very walkable and safe. The house itself was excellent.',
    name: 'Srini',
    detail: '3-week stay',
    rating: 5,
  },
  {
    quote:
      'Great place to stay with friends and family for a vacation in this bustling city. Highly recommend Nektar Homes.',
    name: 'Neralla',
    detail: 'Family vacation, Bengaluru',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#D8B45A" className="flex-shrink-0">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function GuestLove() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-container mx-auto px-6 md:px-10">

        <ScrollReveal>
          <div className="mb-14 md:mb-18 text-center max-w-xl mx-auto">
            <p className="eyebrow mb-3">Guest Experiences</p>
            <h2 className="heading-display text-display-lg text-charcoal">
              Why guests love staying here.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map(({ quote, name, detail, rating }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className="bg-white p-8 md:p-9 flex flex-col h-full">
                <Stars count={rating} />
                <blockquote className="font-cormorant text-xl font-light text-charcoal leading-relaxed mb-6 flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="pt-5 border-t border-divider">
                  <p className="font-inter text-sm font-medium text-charcoal">{name}</p>
                  <p className="font-inter text-xs text-muted mt-0.5">{detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
