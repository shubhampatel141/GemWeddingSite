import { useState, useCallback } from 'react';
import useReveal from '../hooks/useReveal';

const EVENTS = [
  {
    date: 'Dec 22 • Morning',
    title: 'Arrival',
    icon: 'home_pin',
    frontBg: 'bg-white border border-gold-polished/20 shadow-sm',
    frontTextColor: 'text-teal-bright',
    frontDateColor: 'text-warm-orange',
    frontHintColor: 'text-gold-polished opacity-60',
    backBg: 'bg-teal-bright',
    backTitle: 'Welcome',
    backDesc: 'Guests are warmly welcomed to settle into the celebrations. Relax, explore, and reconnect before festivities begin.',
    backDress: 'Dress: Travel Chic',
    backBorder: 'border-white/30',
  },
  {
    date: 'Dec 22 • Evening',
    title: 'Mehndi',
    icon: 'spa',
    frontBg: 'bg-dark-teal text-white border border-dark-teal shadow-lg',
    frontTextColor: '',
    frontDateColor: 'text-saffron',
    frontHintColor: 'text-saffron/60',
    iconColor: 'text-saffron',
    backBg: 'bg-warm-orange',
    backTitle: 'Artistry',
    backDesc: 'An intimate celebration of intricate henna artistry, music, and laughter marking the start of our journey.',
    backDress: 'Dress: Vibrant Indian',
    backBorder: 'border-white/30',
  },
  {
    date: 'Dec 23 • Morning',
    title: 'Grah Shanti',
    icon: 'temple_hindu',
    frontBg: 'bg-white border border-gold-polished/20 shadow-sm',
    frontTextColor: 'text-teal-bright',
    frontDateColor: 'text-warm-orange',
    frontHintColor: 'text-gold-polished opacity-60',
    iconColor: 'text-warm-orange',
    backBg: 'bg-saffron text-earth-brown',
    backTitle: 'Blessings',
    backDesc: 'A sacred ritual performed to invoke blessings and harmony, setting a spiritual tone for the wedding.',
    backDress: 'Dress: Traditional (Light)',
    backBorder: 'border-earth-brown/20',
  },
  {
    date: 'Dec 23 • Late Morning',
    title: 'Haldi',
    icon: 'opacity',
    frontBg: 'bg-saffron text-earth-brown border border-saffron shadow-md',
    frontTextColor: '',
    frontDateColor: 'text-earth-brown/60',
    frontHintColor: 'text-earth-brown/40',
    iconColor: 'text-earth-brown',
    backBg: 'bg-earth-brown',
    backTitle: 'Purification',
    backDesc: 'A playful tradition where turmeric paste is applied to symbolize purification and blessings.',
    backDress: 'Dress: Yellow Shades',
    backBorder: 'border-white/20',
  },
  {
    date: 'Dec 23 • Evening',
    title: 'Sangeet',
    icon: 'queue_music',
    frontBg: 'bg-teal-bright text-white border border-teal-bright shadow-lg',
    frontTextColor: '',
    frontDateColor: 'text-saffron',
    frontHintColor: 'text-white/60',
    iconColor: 'text-saffron',
    backBg: 'bg-dark-teal',
    backTitle: 'Celebration',
    backDesc: 'An evening of music, dance, and celebration, bringing both families together for performances.',
    backDress: 'Dress: Glamorous Indian',
    backBorder: 'border-white/20',
  },
  {
    date: 'Dec 24 • Sunset',
    title: 'The Wedding',
    icon: 'favorite',
    frontBg: 'bg-white border-2 border-warm-orange/30 shadow-sm',
    frontTextColor: 'text-earth-brown',
    frontDateColor: 'text-warm-orange',
    frontHintColor: 'text-gold-polished opacity-60',
    iconColor: 'text-warm-orange',
    backBg: 'bg-warm-orange',
    backTitle: 'Union',
    backDesc: 'A timeless union of tradition and love set against the breathtaking backdrop of Pavagadh peaks.',
    backDress: 'Dress: Formal Indian',
    backBorder: 'border-white/20',
  },
];

function FlipCard({ event }) {
  const [flipped, setFlipped] = useState(false);

  const handleTap = useCallback(() => {
    setFlipped((prev) => !prev);
  }, []);

  const iconColorClass = event.iconColor || event.frontTextColor || 'text-teal-bright';

  return (
    <div className="reveal">
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={handleTap}
      role="button"
      tabIndex={0}
      aria-label={`${event.title} - tap to see details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTap();
        }
      }}
    >
      <div className="flip-card-inner">
        <div className={`flip-card-front ${event.frontBg} p-12 shimmer-border`}>
          <span className={`material-symbols-outlined text-7xl ${iconColorClass} mb-8`} aria-hidden="true">
            {event.icon}
          </span>
          <p className={`text-[11px] tracking-widest ${event.frontDateColor} uppercase font-bold mb-4`}>
            {event.date}
          </p>
          <h4 className={`font-headline text-3xl font-black uppercase ${event.frontTextColor}`}>
            {event.title}
          </h4>
          <p className={`mt-8 text-xs font-bold tracking-widest uppercase ${event.frontHintColor}`}>
            <span className="hidden md:inline">Hover</span>
            <span className="md:hidden">Tap</span> to View Details
          </p>
        </div>
        <div className={`flip-card-back ${event.backBg} text-white p-12`}>
          <h4 className="font-headline text-2xl font-black uppercase mb-6">
            {event.backTitle}
          </h4>
          <p className="text-sm leading-relaxed mb-8">
            {event.backDesc}
          </p>
          <p className={`text-[10px] font-bold tracking-widest uppercase border-t ${event.backBorder} pt-4`}>
            {event.backDress}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default function Itinerary() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-off-white sacred-geometry-pattern" id="events" aria-label="Wedding Events Itinerary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6 reveal">
          <p className="font-body text-[13px] tracking-[0.5em] uppercase text-warm-orange font-black">
            Sacred Commitments
          </p>
          <h2 className="font-cursive text-7xl md:text-9xl text-teal-bright normal-case">
            The itinerary
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <FlipCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
