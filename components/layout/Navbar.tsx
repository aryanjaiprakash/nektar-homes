'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { generalEnquiryUrl } from '@/lib/whatsapp'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/properties', label: 'Our Homes' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solidNav = !isHome || scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          solidNav
            ? 'bg-charcoal shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-container mx-auto px-6 md:px-10 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10" aria-label="Nektar Homes">
            <div className="relative h-9 w-32">
              <Image
                src="/logo.jpg"
                alt="Nektar Homes"
                fill
                className="object-contain object-left"
                priority
                sizes="128px"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(5deg)' }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-white/80 hover:text-white ${
                  pathname.startsWith(href) ? 'active text-white' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={generalEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-brass text-charcoal text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-85"
            >
              Enquire
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 -mr-2 z-10 relative"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-30 bg-charcoal flex flex-col transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-16" />
        <nav className="flex flex-col items-center justify-center flex-1 gap-10 pb-20">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-cormorant text-4xl font-light text-white tracking-wide hover:text-brass transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={generalEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3.5 bg-brass text-charcoal text-xs font-semibold tracking-widest uppercase"
            onClick={() => setOpen(false)}
          >
            Enquire via WhatsApp
          </a>
        </nav>
      </div>
    </>
  )
}
