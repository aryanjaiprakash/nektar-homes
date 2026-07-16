import Link from 'next/link'
import { generalEnquiryUrl } from '@/lib/whatsapp'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="eyebrow mb-4">404</p>
        <h1 className="heading-display text-display-lg text-charcoal mb-5">
          Page not found.
        </h1>
        <p className="font-inter text-sm text-muted leading-relaxed mb-10">
          The page you are looking for doesn&apos;t exist. Perhaps you were looking for one of our properties?
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-7 py-3 bg-charcoal text-white text-xs font-semibold tracking-widest uppercase hover:bg-slate transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/properties"
            className="px-7 py-3 border border-charcoal text-charcoal text-xs font-medium tracking-widest uppercase hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            View Properties
          </Link>
          <a
            href={generalEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-divider text-charcoal text-xs font-medium tracking-widest uppercase hover:border-charcoal transition-colors duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
