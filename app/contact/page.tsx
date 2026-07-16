import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/contact/ContactForm'
import StickyMobileBar from '@/components/ui/StickyMobileBar'
import { SITE_URL } from '@/lib/properties'

export const metadata: Metadata = {
  title: 'Contact & Book',
  description:
    'Contact Nektar Homes to check availability and pricing. WhatsApp: +918123203622. Email: stay@nektarhomes.com. Kammanahalli, Bangalore.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: 'Contact & Book | Nektar Homes Bangalore',
    images: [{ url: '/images/property-2/hero.jpg', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/property-3/img-01.jpg"
            alt="Nektar Homes contact"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 max-w-container mx-auto px-6 md:px-10">
          <p className="eyebrow text-white/40 mb-4">Get in Touch</p>
          <h1 className="heading-display text-display-lg text-white mb-5">Contact Us</h1>
          <p className="font-inter text-white/60 text-base md:text-lg max-w-md leading-relaxed">
            We respond quickly via WhatsApp. Fill in the form and we will be in touch to confirm availability and pricing.
          </p>
        </div>
      </section>

      <ContactForm />
      <StickyMobileBar />
    </>
  )
}
