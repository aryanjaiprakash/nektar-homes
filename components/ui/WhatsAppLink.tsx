'use client'

import { useEffect, useState } from 'react'
import { buildMessage, buildWhatsAppUrl, DEFAULT_SOURCE, getSource, type WhatsAppMessage } from '@/lib/whatsapp'

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  message: WhatsAppMessage
}

// Renders with the default source on the server, then picks up the visitor's
// stored ?src= tag after hydration so the markup matches on first render.
export default function WhatsAppLink({ message, target = '_blank', rel = 'noopener noreferrer', children, ...rest }: Props) {
  const [source, setSource] = useState(DEFAULT_SOURCE)

  useEffect(() => {
    setSource(getSource())
  }, [])

  return (
    <a href={buildWhatsAppUrl(buildMessage(message, source))} target={target} rel={rel} {...rest}>
      {children}
    </a>
  )
}
