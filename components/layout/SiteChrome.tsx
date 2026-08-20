'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCorporate = pathname === '/corporate'

  return (
    <>
      {!isCorporate && <Navbar />}
      <main>{children}</main>
      {!isCorporate && <Footer />}
    </>
  )
}
