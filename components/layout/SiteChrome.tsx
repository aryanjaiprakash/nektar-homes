'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getSource } from '@/lib/whatsapp'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCorporate = pathname === '/corporate'

  // Capture ?src= on first load so it survives navigation to the contact form
  useEffect(() => {
    getSource()
  }, [])

  return (
    <>
      {!isCorporate && <Navbar />}
      <main>{children}</main>
      {!isCorporate && <Footer />}
    </>
  )
}
