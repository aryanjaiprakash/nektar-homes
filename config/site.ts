export const PROPERTIES = [
  'Nektar Home Amruth 3BHK',
  'Nektar Home Advaith 3BHK',
  'Nektar Home Amruth 2BHK',
] as const

export type PropertyName = (typeof PROPERTIES)[number]

export const [AMRUTH_3BHK, ADVAITH_3BHK, AMRUTH_2BHK] = PROPERTIES

// Digits only, for wa.me links
export const WHATSAPP_NUMBER = '919902926007'
// Human-readable, for display on the page
export const WHATSAPP_DISPLAY = '+91 99029 26007'

export const EMAIL_ADDRESS = 'stay@nektarhomes.com'
