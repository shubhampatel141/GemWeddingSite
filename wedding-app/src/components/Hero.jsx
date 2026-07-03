import useCountdown from '../hooks/useCountdown'

const WEDDING_DATE = 'December 22, 2026 00:00:00'

const COUNTDOWN_ITEMS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

export default function Hero() {
  const countdown = useCountdown(WEDDING_DATE)

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-teal" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" aria-hidden="true">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-dark-teal/55 via-dark-teal/52 to-dark-teal/88" />
        <div className="absolute inset-0 sacred-geometry-pattern opacity-10" />
      </div>

      <div className="relative z-10 text-center max-w-6xl px-6 pt-28 md:pt-24 pb-14 md:pb-20">
        <div className="hero-intro-badge fade-in-up">
          <span className="material-symbols-outlined text-saffron text-4xl" aria-hidden="true">temple_hindu</span>
          <p className="text-[11px] md:text-xs tracking-[0.42em] uppercase text-saffron font-bold">
            The union of Shruti &amp; Shubham
          </p>
        </div>

        <h1 className="font-cursive text-[4.5rem] sm:text-[5.5rem] md:text-[8rem] lg:text-[10rem] text-white normal-case leading-[0.92] drop-shadow-2xl fade-in-up-delay-1">
          Shruti <span className="text-saffron">&amp;</span> Shubham
        </h1>

        <p className="hero-location-line fade-in-up-delay-2">
          December 22–24, 2026
          <span className="hidden md:inline-block mx-3 text-saffron/60">|</span>
          Vikrama Heritage, Pavagadh
        </p>

        <div className="hero-countdown-panel fade-in-up-delay-3" aria-label="Countdown to wedding">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {COUNTDOWN_ITEMS.map(({ key, label }) => (
              <div key={key} className="countdown-card">
                <span className="countdown-value" aria-live={key === 'days' || key === 'seconds' ? 'polite' : undefined}>
                  {countdown[key]}
                </span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
