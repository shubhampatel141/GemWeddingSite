import { useEffect, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'
import { NAV_ITEMS, SECTION_IDS } from '../content/siteContent'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-off-white/92 border-b border-gold-polished/18 shadow-[0_18px_40px_rgba(53,91,99,0.08)] backdrop-blur-xl'
          : 'bg-off-white/72 border-b border-gold-polished/14 backdrop-blur-lg'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between py-4 md:py-5">
          <a href="#" className="space-y-1" aria-label="Shruti and Shubham home">
            <p className="font-cursive text-4xl md:text-5xl text-dark-teal leading-none">S&amp;S</p>
            <p className="text-[10px] md:text-[11px] tracking-[0.36em] uppercase text-earth-brown/55 font-bold">
              Wedding weekend
            </p>
          </a>

          <div className="hidden md:flex items-center gap-3">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = activeSection === href.slice(1)

              return (
                <a
                  key={href}
                  href={href}
                  className={`nav-pill ${isActive ? 'nav-pill-active' : ''}`}
                >
                  {label}
                </a>
              )
            })}
          </div>

          <button
            type="button"
            className="md:hidden nav-mobile-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-3xl text-dark-teal" aria-hidden="true">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden min-h-screen bg-off-white/98 backdrop-blur-2xl border-t border-gold-polished/20 px-6 py-12">
          <div className="max-w-sm mx-auto flex flex-col items-stretch gap-4 pt-8">
            {NAV_ITEMS.map(({ href, label }, index) => {
              const isActive = activeSection === href.slice(1)

              return (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`nav-mobile-link ${isActive ? 'nav-mobile-link-active' : ''}`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <span className="text-[11px] tracking-[0.34em] uppercase text-earth-brown/45 font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-headline text-3xl uppercase tracking-[0.08em]">{label}</span>
                </a>
              )
            })}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
