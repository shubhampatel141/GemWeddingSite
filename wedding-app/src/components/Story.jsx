import useReveal from '../hooks/useReveal';

export default function Story() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-32 bg-dark-teal sacred-geometry-pattern text-white overflow-hidden" id="story" aria-label="Our Story">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-12">
            <div className="p-12 md:p-16 bg-white/5 backdrop-blur-md reveal border border-saffron/30 relative">
              <div className="absolute -top-4 -left-4 text-saffron" aria-hidden="true">
                <span className="material-symbols-outlined text-4xl">architecture</span>
              </div>
              <p className="text-saffron text-[11px] tracking-[0.4em] uppercase mb-8 font-bold">
                The Chapter of Intent
              </p>
              <h3 className="font-cursive text-6xl md:text-7xl mb-10 text-saffron normal-case leading-tight">
                Our Story is a powerful narrative
              </h3>
              <div className="space-y-6 text-white/80 leading-relaxed font-light text-lg">
                <p>
                  Some stories begin with chance, and quietly grow into something extraordinary. Shruti and Shubham&apos;s journey began years ago in Fort McMurray, where a shared sense of familiarity slowly turned into a lasting connection.
                </p>
                <p>
                  Over time, that bond carried them across cities, through milestones, and into new adventures. Now, they look forward to celebrating not just a wedding, but a story that continues to unfold—with love, intention, and a lifetime ahead.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[3/4] border-2 border-saffron/20 relative p-4 reveal">
              <div className="w-full h-full border border-saffron/40 flex items-center justify-center bg-white/5">
                <span className="material-symbols-outlined text-saffron text-9xl opacity-20" aria-hidden="true">all_inclusive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
