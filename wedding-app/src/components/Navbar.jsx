import { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';

const NAV_LINKS = [
  { href: '#story', label: 'The Narrative' },
  { href: '#events', label: 'Itinerary' },
  { href: '#travel', label: 'Logistics' },
  { href: '#gallery', label: 'Visuals' },
];

const SECTION_IDS = ['story', 'events', 'travel', 'gallery', 'rsvp'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gold-polished/20 shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-gold-polished/20'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <a href="#" className="font-headline font-black text-2xl text-teal-bright tracking-tighter" aria-label="Shruti and Shubham - Home">
        S&amp;S
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 font-body text-[11px] tracking-[0.25em] uppercase items-center text-earth-brown/80 font-bold">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`hover:text-teal-bright transition-colors ${
              activeSection === href.slice(1) ? 'text-teal-bright' : ''
            }`}
          >
            {label}
          </a>
        ))}
        <a
          href="#rsvp"
          className={`px-8 py-2 bg-warm-orange text-white hover:bg-teal-bright transition-all duration-500 shadow-lg ${
            activeSection === 'rsvp' ? 'bg-teal-bright' : ''
          }`}
        >
          RSVP
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden z-50 relative"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className="material-symbols-outlined text-teal-bright text-3xl">
          {menuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-white/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className={`font-body text-lg tracking-[0.25em] uppercase font-bold transition-colors ${
                activeSection === href.slice(1) ? 'text-teal-bright' : 'text-earth-brown/80'
              } hover:text-teal-bright`}
            >
              {label}
            </a>
          ))}
          <a
            href="#rsvp"
            onClick={handleNavClick}
            className="px-12 py-3 bg-warm-orange text-white hover:bg-teal-bright transition-all duration-500 shadow-lg text-sm tracking-[0.25em] uppercase font-bold"
          >
            RSVP
          </a>
        </div>
      )}
    </nav>
  );
}
