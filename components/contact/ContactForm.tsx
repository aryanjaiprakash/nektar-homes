'use client'

import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { contactFormUrl, generalEnquiryUrl } from '@/lib/whatsapp'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/properties'
import ScrollReveal from '@/components/ui/ScrollReveal'

const propertyOptions = [
  'Nektar Home Amruth (3BHK)',
  'Nektar Home Advaith (3BHK)',
  'Nektar Home Amruth 2BHK (2BHK)',
  'Not sure — help me choose',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const url = contactFormUrl({
      name: form.name || 'Guest',
      property: form.property || 'your properties',
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      message: form.message,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-white border border-divider text-charcoal text-sm font-inter placeholder:text-muted focus:outline-none focus:border-charcoal transition-colors duration-200'

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Contact Info */}
          <ScrollReveal>
            <aside className="space-y-8">
              <div>
                <p className="eyebrow mb-4">Reach Us Directly</p>

                <a
                  href={generalEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group mb-5"
                >
                  <div className="w-9 h-9 border border-divider flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-brass transition-colors duration-300">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-charcoal group-hover:text-brass transition-colors duration-300">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-xs text-muted mb-0.5">WhatsApp</p>
                    <p className="font-inter text-sm font-medium text-charcoal group-hover:text-brass transition-colors duration-300">
                      +91 {WHATSAPP_NUMBER.replace('91', '')}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 group mb-5">
                  <div className="w-9 h-9 border border-divider flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-brass transition-colors duration-300">
                    <Mail size={14} strokeWidth={1.5} className="text-charcoal group-hover:text-brass transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-muted mb-0.5">Email</p>
                    <p className="font-inter text-sm font-medium text-charcoal group-hover:text-brass transition-colors duration-300">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 border border-divider flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} strokeWidth={1.5} className="text-muted" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-muted mb-0.5">Location</p>
                    <p className="font-inter text-sm text-charcoal">Kammanahalli, Bangalore</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-divider">
                <p className="font-inter text-xs text-muted leading-relaxed">
                  We typically respond within a few hours. For urgent enquiries, WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </aside>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-divider p-8 md:p-10">
              <p className="eyebrow mb-6">Booking Enquiry</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>

              <div className="mb-4">
                <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="property">Property *</label>
                <select id="property" name="property" required value={form.property} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">Select a property</option>
                  {propertyOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="checkIn">Check-In</label>
                  <input id="checkIn" name="checkIn" type="date" value={form.checkIn} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="checkOut">Check-Out</label>
                  <input id="checkOut" name="checkOut" type="date" value={form.checkOut} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="guests">Guests</label>
                  <input id="guests" name="guests" type="number" min="1" max="12" value={form.guests} onChange={handleChange} placeholder="Number" className={inputClass} />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Any additional requirements or questions..." className={`${inputClass} resize-none`} />
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2.5 py-4 bg-charcoal text-white text-xs font-semibold tracking-widest uppercase hover:bg-slate transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Enquiry via WhatsApp
              </button>
              <p className="mt-3 text-center font-inter text-xs text-muted">
                This will open WhatsApp with your details pre-filled.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
