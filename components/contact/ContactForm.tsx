'use client'

import { useEffect, useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { buildEnquiryMessage, buildWhatsAppUrl } from '@/lib/whatsapp'
import WhatsAppLink from '@/components/ui/WhatsAppLink'
import { EMAIL_ADDRESS, PROPERTIES, WHATSAPP_DISPLAY } from '@/config/site'
import ScrollReveal from '@/components/ui/ScrollReveal'

type FormState = {
  name: string
  email: string
  property: string
  checkIn: string
  checkOut: string
  guests: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

// YYYY-MM-DD in the visitor's local timezone, offset by `days`
function localISODate(days: number, from?: string): string {
  const d = from ? new Date(from + 'T00:00:00') : new Date()
  d.setDate(d.getDate() + days)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

function validate(form: FormState, minCheckIn: string): FormErrors {
  const errors: FormErrors = {}

  if (!form.name.trim()) errors.name = 'Please enter your name.'

  if (!(PROPERTIES as readonly string[]).includes(form.property)) {
    errors.property = 'Please select a property.'
  }

  if (!form.checkIn) errors.checkIn = 'Please choose a check-in date.'
  else if (form.checkIn < minCheckIn) errors.checkIn = 'Check-in must be at least 1 day from today.'

  if (!form.checkOut) errors.checkOut = 'Please choose a check-out date.'
  else if (form.checkIn && form.checkOut < localISODate(1, form.checkIn)) {
    errors.checkOut = 'Check-out must be at least 1 day after check-in.'
  }

  const guests = form.guests.trim()
  if (!guests) errors.guests = 'Please enter the number of guests.'
  else if (!/^\d+$/.test(guests) || Number(guests) < 1) errors.guests = 'Enter a whole number of at least 1.'

  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    property: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  // Set on the client only so server and client markup match
  const [minCheckIn, setMinCheckIn] = useState('')

  useEffect(() => {
    setMinCheckIn(localISODate(1))
  }, [])

  const minCheckOut = form.checkIn ? localISODate(1, form.checkIn) : minCheckIn && localISODate(1, minCheckIn)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const next = { ...form, [e.target.name]: e.target.value }
    setForm(next)
    if (submitted) setErrors(validate(next, minCheckIn || localISODate(1)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(form, minCheckIn || localISODate(1))
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const text = buildEnquiryMessage({
      name: form.name,
      property: form.property,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      note: form.message,
    })
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
  }

  const inputBase =
    'w-full px-4 py-3.5 bg-white border text-charcoal text-sm font-inter placeholder:text-muted focus:outline-none transition-colors duration-200'
  const inputClass = `${inputBase} border-divider focus:border-charcoal`
  const fieldClass = (field: keyof FormState) =>
    errors[field] ? `${inputBase} border-red-700 focus:border-red-700` : inputClass
  const errorProps = (field: keyof FormState) =>
    errors[field] ? { 'aria-invalid': true, 'aria-describedby': `${field}-error` } : {}
  const fieldError = (field: keyof FormState) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 font-inter text-xs text-red-700">{errors[field]}</p>
    ) : null

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Contact Info */}
          <ScrollReveal>
            <aside className="space-y-8">
              <div>
                <p className="eyebrow mb-4">Reach Us Directly</p>

                <WhatsAppLink
                  message={{ kind: 'generic' }}
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
                      {WHATSAPP_DISPLAY}
                    </p>
                  </div>
                </WhatsAppLink>

                <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-start gap-3 group mb-5">
                  <div className="w-9 h-9 border border-divider flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-brass transition-colors duration-300">
                    <Mail size={14} strokeWidth={1.5} className="text-charcoal group-hover:text-brass transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-muted mb-0.5">Email</p>
                    <p className="font-inter text-sm font-medium text-charcoal group-hover:text-brass transition-colors duration-300">
                      {EMAIL_ADDRESS}
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
                  Send us your dates on WhatsApp and get your quote in about a minute.
                </p>
              </div>
            </aside>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="bg-white border border-divider p-8 md:p-10">
              <p className="eyebrow mb-6">Booking Enquiry</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={fieldClass('name')} {...errorProps('name')} />
                  {fieldError('name')}
                </div>
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                </div>
              </div>

              <div className="mb-4">
                <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="property">Property *</label>
                <select id="property" name="property" required value={form.property} onChange={handleChange} className={`${fieldClass('property')} appearance-none cursor-pointer`} {...errorProps('property')}>
                  <option value="">Select a property</option>
                  {PROPERTIES.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {fieldError('property')}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="checkIn">Check-In *</label>
                  <input id="checkIn" name="checkIn" type="date" required min={minCheckIn || undefined} value={form.checkIn} onChange={handleChange} className={fieldClass('checkIn')} {...errorProps('checkIn')} />
                  {fieldError('checkIn')}
                </div>
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="checkOut">Check-Out *</label>
                  <input id="checkOut" name="checkOut" type="date" required min={minCheckOut || undefined} value={form.checkOut} onChange={handleChange} className={fieldClass('checkOut')} {...errorProps('checkOut')} />
                  {fieldError('checkOut')}
                </div>
                <div>
                  <label className="block font-inter text-xs text-muted mb-1.5" htmlFor="guests">Guests *</label>
                  <input id="guests" name="guests" type="number" required min="1" max="12" step="1" inputMode="numeric" value={form.guests} onChange={handleChange} placeholder="Number" className={fieldClass('guests')} {...errorProps('guests')} />
                  {fieldError('guests')}
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
                Your message is pre-filled. Just tap Send and we will reply in about a minute.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
