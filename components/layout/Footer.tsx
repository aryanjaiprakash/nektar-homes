import Link from 'next/link'
import Image from 'next/image'
import WhatsAppLink from '@/components/ui/WhatsAppLink'
import { AMRUTH_3BHK, ADVAITH_3BHK, AMRUTH_2BHK, EMAIL_ADDRESS, WHATSAPP_DISPLAY } from '@/config/site'

const links = {
  homes: [
    { href: '/properties/nektar-home-amruth', label: AMRUTH_3BHK },
    { href: '/properties/nektar-home-advaith', label: ADVAITH_3BHK },
    { href: '/properties/nektar-home-amruth-2bhk', label: AMRUTH_2BHK },
  ],
  explore: [
    { href: '/properties', label: 'All Properties' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      <div className="max-w-container mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="relative h-10 w-36 mb-5">
              <Image
                src="/logo.jpg"
                alt="Nektar Homes"
                fill
                className="object-contain object-left"
                sizes="144px"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)' }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-[220px]">
              Thoughtfully curated 2 &amp; 3BHK stays in Kammanahalli, Bangalore.
            </p>
            <WhatsAppLink
              message={{ kind: 'generic' }}
              className="inline-block px-5 py-2.5 bg-brass text-charcoal text-xs font-semibold tracking-widest uppercase hover:opacity-85 transition-opacity"
            >
              Book via WhatsApp
            </WhatsAppLink>
          </div>

          {/* Our Homes */}
          <div>
            <p className="eyebrow text-white/40 mb-5">Our Homes</p>
            <ul className="space-y-3">
              {links.homes.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="eyebrow text-white/40 mb-5">Explore</p>
            <ul className="space-y-3">
              {links.explore.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-white/40 mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <WhatsAppLink
                  message={{ kind: 'generic' }}
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </WhatsAppLink>
              </li>
              <li>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="text-white/40">Kammanahalli, Bangalore</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Nektar Homes. All rights reserved.</p>
          <p>Thoughtfully Curated Stays in Bangalore</p>
        </div>

        {/* Legal */}
        <div className="pt-6 mt-6 border-t border-white/10 text-xs text-white/30 leading-relaxed text-center sm:text-left">
          <p>Nektar Homes is a hospitality brand owned and operated by Sunanda Jaiprakash and Aryan Jaiprakash.</p>
          <p>
            Business Address:
            <br />
            12, 3rd E–F Cross Rd
            <br />
            Indra Nagar, St Thomas Town
            <br />
            Ramaiah Layout, Kacharakanahalli
            <br />
            Bengaluru, Karnataka 560084
          </p>
        </div>
      </div>
    </footer>
  )
}
