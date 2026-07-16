import { WHATSAPP_NUMBER } from './properties'

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function propertyEnquiryUrl(propertyName: string): string {
  const message = `Hi Nektar Homes, I am interested in learning more about ${propertyName}. Please share availability and pricing.`
  return buildWhatsAppUrl(message)
}

export function generalEnquiryUrl(): string {
  const message = `Hi Nektar Homes, I'd like to enquire about your properties and check availability.`
  return buildWhatsAppUrl(message)
}

export function contactFormUrl(params: {
  name: string
  property: string
  checkIn: string
  checkOut: string
  guests: string
  message: string
}): string {
  const lines = [
    `[Website Enquiry] Hi Nektar Homes,`,
    ``,
    `My name is ${params.name} and I'm interested in booking *${params.property}*.`,
    ``,
    `Check-in: ${params.checkIn || 'TBD'}`,
    `Check-out: ${params.checkOut || 'TBD'}`,
    `Guests: ${params.guests || 'TBD'}`,
    params.message ? `\nMessage: ${params.message}` : '',
    ``,
    `Please share availability and pricing. Thank you!`,
  ]
  return buildWhatsAppUrl(lines.filter(Boolean).join('\n'))
}
