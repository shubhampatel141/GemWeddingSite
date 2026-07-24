import { useState } from 'react';

function clampIndex(index, length) {
  if (length === 0) {
    return 0;
  }

  return (index + length) % length;
}

export default function Carousel({ slides, ariaLabel, theme = 'light' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const isDark = theme === 'dark';
  const safeIndex = activeIndex >= slides.length ? 0 : activeIndex;
  const activeSlide = slides[safeIndex] ?? slides[0];

  const goTo = (index) => {
    setActiveIndex(clampIndex(index, slides.length));
  };

  const goNext = () => {
    goTo(safeIndex + 1);
  };

  const goPrev = () => {
    goTo(safeIndex - 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goNext();
    }

    if (event.key === 'ArrowLeft') {
      goPrev();
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchStartX - touchEndX;

    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    setTouchStartX(null);
  };

  return (
    <div
      className={`grid gap-0 rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.18)] ${
        isDark ? 'border border-off-white/12 bg-white/6' : 'border border-gold-polished/18 bg-white'
      }`}
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="relative min-h-[22rem] max-md:min-h-[18rem]">
        {activeSlide.image ? (
          <img src={activeSlide.image} alt={activeSlide.alt || activeSlide.title} className="w-full h-full object-cover" />
        ) : (
          <div
            className={`min-h-[22rem] max-md:min-h-[18rem] grid place-items-center p-8 ${
              isDark
                ? 'text-white bg-[radial-gradient(circle_at_top_left,rgba(255,202,40,0.2),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,112,67,0.16))]'
                : 'text-dark-teal bg-[radial-gradient(circle_at_top_left,rgba(255,202,40,0.18),transparent_34%),linear-gradient(135deg,rgba(255,248,240,1),rgba(255,183,77,0.12))]'
            }`}
          >
            <span className="material-symbols-outlined text-7xl md:text-8xl opacity-70" aria-hidden="true">
              {activeSlide.icon || 'photo_camera'}
            </span>
            <div className="space-y-3 text-center">
              {activeSlide.tag ? (
                <p className="text-[0.72rem] tracking-[0.28em] uppercase font-extrabold text-warm-orange">{activeSlide.tag}</p>
              ) : null}
              <h3 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-[0.16em]">
                {activeSlide.title}
              </h3>
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
          <button
            type="button"
            className="size-12 border-0 rounded-full grid place-items-center text-earth-brown bg-off-white/92 shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined">west</span>
          </button>
          <button
            type="button"
            className="size-12 border-0 rounded-full grid place-items-center text-earth-brown bg-off-white/92 shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            onClick={goNext}
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>

      <div className={`p-[1.6rem] grid gap-5 ${isDark ? 'bg-off-white/98' : 'bg-white'}`}>
        <div className="space-y-4">
          {activeSlide.tag ? (
            <p className="text-[0.72rem] tracking-[0.28em] uppercase font-extrabold text-warm-orange">{activeSlide.tag}</p>
          ) : null}
          <h3 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-[0.12em] text-dark-teal">
            {activeSlide.title}
          </h3>
          {activeSlide.caption ? (
            <p className="text-base md:text-lg leading-relaxed text-earth-brown/75">
              {activeSlide.caption}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-[0.55rem]" role="tablist" aria-label={`${ariaLabel} slides`}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`size-[0.8rem] border-0 rounded-full bg-earth-light-brown/18 ${
                index === safeIndex ? 'w-[2.35rem] bg-dark-teal' : ''
              }`}
              onClick={() => goTo(index)}
              role="tab"
              aria-selected={index === safeIndex}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
