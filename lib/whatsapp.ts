import { WHATSAPP_NUMBER } from '@/config/site'

const SOURCE_KEY = 'nektar_src'
export const DEFAULT_SOURCE = 'website'

function sanitizeSource(value: string): string {
  return value.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 20)
}

// Reads ?src= from the URL, persists it for the session, and falls back to "website".
export function getSource(): string {
  if (typeof window === 'undefined') return DEFAULT_SOURCE

  const fromUrl = sanitizeSource(new URLSearchParams(window.location.search).get('src') ?? '')

  try {
    if (fromUrl) {
      window.sessionStorage.setItem(SOURCE_KEY, fromUrl)
      return fromUrl
    }
    const stored = sanitizeSource(window.sessionStorage.getItem(SOURCE_KEY) ?? '')
    return stored || DEFAULT_SOURCE
  } catch {
    return fromUrl || DEFAULT_SOURCE
  }
}

export function fmtDate(d: string): string {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function buildEnquiryMessage(params: {
  name: string
  property: string
  checkIn: string
  checkOut: string
  guests: string | number
  note?: string
}): string {
  const name = params.name.trim()
  const property = params.property.trim()
  const checkIn = params.checkIn.trim()
  const checkOut = params.checkOut.trim()
  const guests = String(params.guests).trim()
  const note = (params.note ?? '').trim()
  const guestLabel = Number(guests) === 1 ? `${guests} guest` : `${guests} guests`

  const parts = [
    `[Website Enquiry | ${getSource()}] Hi Nektar Homes, I'm ${name}.`,
    `I'd like to book ${property} from ${fmtDate(checkIn)} to ${fmtDate(checkOut)} for ${guestLabel}.`,
    note,
    'Please share availability.',
  ]
  return parts.filter(Boolean).join(' ')
}

export function buildWhatsAppUrl(text: string): string {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text)
}

export function buildGenericMessage(source: string = getSource()): string {
  return `[Website Enquiry | ${source}] Hi Nektar Homes, I'd like to enquire about your properties and check availability.`
}

export function buildPropertyMessage(property: string, source: string = getSource()): string {
  return `[Website Enquiry | ${source}] Hi Nektar Homes, I'd like to check availability for ${property.trim()}.`
}

// Wording for the /corporate landing page buttons
export const CORPORATE_TEXT = {
  event: `Hi Nektar Homes, I came across you at the corporate event and would like to know more about accommodation options for our team in Bangalore.`,
  rates: `Hi Nektar Homes, we're exploring corporate accommodation in Bangalore. Could you share your corporate rate card and tie-up details?`,
  siteVisit: `Hi Nektar Homes, we'd like to arrange a site visit to your properties in Bangalore as part of our corporate accommodation planning.`,
} as const

export type CorporateTextKey = keyof typeof CORPORATE_TEXT

export function buildCorporateMessage(key: CorporateTextKey, source: string = getSource()): string {
  return `[Corporate Enquiry | ${source}] ${CORPORATE_TEXT[key]}`
}

export type WhatsAppMessage =
  | { kind: 'generic' }
  | { kind: 'property'; property: string }
  | { kind: 'corporate'; text: CorporateTextKey }

export function buildMessage(message: WhatsAppMessage, source: string = getSource()): string {
  switch (message.kind) {
    case 'property':
      return buildPropertyMessage(message.property, source)
    case 'corporate':
      return buildCorporateMessage(message.text, source)
    default:
      return buildGenericMessage(source)
  }
}
