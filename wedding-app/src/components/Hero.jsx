import useCountdown from '../hooks/useCountdown';

const WEDDING_DATE = 'December 22, 2026 00:00:00';

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-earth-light-brown" aria-label="Hero">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-earth-light-brown via-earth-light-brown/40 to-earth-light-brown/60" />
        <div className="absolute inset-0 sacred-geometry-pattern opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-5xl px-6 fade-in-up">
        <div className="flex justify-center mb-4 fade-in-up">
          <span className="material-symbols-outlined text-saffron text-6xl" aria-hidden="true">temple_hindu</span>
        </div>

        <p className="font-body text-[12px] tracking-[0.5em] uppercase text-saffron font-bold fade-in-up-delay-1">
          Welcome to the Union of
        </p>

        <h1 className="font-cursive text-7xl md:text-9xl text-white normal-case leading-tight drop-shadow-2xl fade-in-up-delay-1">
          Shruti <span className="text-saffron">&amp;</span> Shubham
        </h1>

        <p className="font-body text-lg md:text-lg text-off-white tracking-[0.3em] font-light uppercase border-t border-b border-saffron/30 py-4 inline-block fade-in-up-delay-2">
          December 22–24, 2026 <br /> Vikrama Heritage Resort, Pavagadh
        </p>

        {/* Countdown Timer */}
        <div className="flex gap-8 md:gap-12 justify-center pt-12 fade-in-up-delay-3" aria-label="Countdown to wedding">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-headline font-bold text-saffron" aria-live="polite">{days}</span>
            <span className="text-[10px] tracking-widest uppercase text-white/70 font-bold">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-headline font-bold text-saffron">{hours}</span>
            <span className="text-[10px] tracking-widest uppercase text-white/70 font-bold">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-headline font-bold text-saffron">{minutes}</span>
            <span className="text-[10px] tracking-widest uppercase text-white/70 font-bold">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-headline font-bold text-saffron" aria-live="polite">{seconds}</span>
            <span className="text-[10px] tracking-widest uppercase text-white/70 font-bold">Secs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
