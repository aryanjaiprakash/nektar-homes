import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SITE_URL } from '@/lib/properties'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nektar Homes – Premium 2 & 3BHK Stays in Bangalore',
    template: '%s | Nektar Homes',
  },
  description:
    'Thoughtfully curated furnished homes in Kammanahalli, Bangalore. Self check-in, fully equipped kitchens, king beds. Up to 7 guests. Book on WhatsApp.',
  keywords: [
    'furnished apartments Bangalore',
    '3BHK for rent Bangalore',
    'holiday homes Bangalore',
    'stays in Kammanahalli',
    'vacation rental Bangalore',
    'serviced apartments Manyata Tech Park',
    'short stay Bangalore',
    'Nektar Homes',
  ],
  authors: [{ name: 'Nektar Homes' }],
  creator: 'Nektar Homes',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Nektar Homes',
    title: 'Nektar Homes – Premium 2 & 3BHK Stays in Bangalore',
    description:
      'Thoughtfully curated furnished homes in Kammanahalli, Bangalore. Self check-in, fully equipped kitchens, king beds. Book on WhatsApp.',
    images: [
      {
        url: '/images/property-2/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Nektar Home Advaith — Premium Stay in Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nektar Homes – Premium 2 & 3BHK Stays in Bangalore',
    description:
      'Thoughtfully curated furnished homes in Kammanahalli, Bangalore. Self check-in, king beds, fully equipped kitchens.',
    images: ['/images/property-2/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-cream text-charcoal">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
