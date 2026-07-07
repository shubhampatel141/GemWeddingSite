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
      className={`carousel-shell ${isDark ? 'carousel-shell-dark' : 'carousel-shell-light'}`}
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="carousel-media">
        {activeSlide.image ? (
          <img src={activeSlide.image} alt={activeSlide.alt || activeSlide.title} className="carousel-image" />
        ) : (
          <div className={`carousel-placeholder ${isDark ? 'carousel-placeholder-dark' : 'carousel-placeholder-light'}`}>
            <span className="material-symbols-outlined text-7xl md:text-8xl opacity-70" aria-hidden="true">
              {activeSlide.icon || 'photo_camera'}
            </span>
            <div className="space-y-3 text-center">
              {activeSlide.tag ? <p className="carousel-tag">{activeSlide.tag}</p> : null}
              <h3 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-[0.16em]">
                {activeSlide.title}
              </h3>
            </div>
          </div>
        )}
        <div className="carousel-controls">
          <button type="button" className="carousel-arrow" onClick={goPrev} aria-label="Previous slide">
            <span className="material-symbols-outlined">west</span>
          </button>
          <button type="button" className="carousel-arrow" onClick={goNext} aria-label="Next slide">
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>

      <div className={`carousel-caption ${isDark ? 'carousel-caption-dark' : 'carousel-caption-light'}`}>
        <div className="space-y-4">
          {activeSlide.tag ? <p className="carousel-tag">{activeSlide.tag}</p> : null}
          <h3 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-[0.12em] text-dark-teal">
            {activeSlide.title}
          </h3>
          {activeSlide.caption ? (
            <p className="text-base md:text-lg leading-relaxed text-earth-brown/75">
              {activeSlide.caption}
            </p>
          ) : null}
        </div>

        <div className="carousel-dots" role="tablist" aria-label={`${ariaLabel} slides`}>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`carousel-dot ${index === safeIndex ? 'carousel-dot-active' : ''}`}
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
