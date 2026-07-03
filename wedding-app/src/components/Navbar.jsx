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

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-transparent border-b border-transparent shadow-none backdrop-blur-none'
          : 'bg-transparent border-b border-transparent shadow-none backdrop-blur-none'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="relative flex items-center justify-center py-4 md:py-5">
          <a href="#" className="space-y-1 absolute left-0 top-1/2 -translate-y-1/2" aria-label="Shruti and Shubham home">
            <p className="font-cursive text-2xl sm:text-4xl text-saffron leading-none">S&amp;S</p>
          </a>

          <div className="hidden lg:flex items-center gap-3">
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
            className="lg:hidden nav-mobile-button absolute right-0 top-1/2 -translate-y-1/2"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-3xl text-saffron" aria-hidden="true">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="lg:hidden absolute top-full inset-x-0 px-4 pt-2">
          <div className="w-full rounded-[1.75rem] bg-off-white/98 backdrop-blur-2xl border border-gold-polished/20 shadow-[0_18px_40px_rgba(53,91,99,0.12)] px-4 py-4">
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
