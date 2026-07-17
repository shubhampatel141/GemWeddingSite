import { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';

const SAMPLE_GALLERY_IMAGE = '/welcome-photo.jpeg';

const GALLERY_CELLS = [
  { id: 'feature' },
  { id: 'detailTop' },
  { id: 'detailBottom' },
  { id: 'portrait' },
];

const DESKTOP_LAYOUTS = {
  classic: {
    feature: { variant: 'feature', gridColumn: '1 / span 6', gridRow: '1 / span 2' },
    detailTop: { variant: 'detail', gridColumn: '7 / span 3', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '7 / span 3', gridRow: '2 / span 1' },
    portrait: { variant: 'portrait', gridColumn: '10 / span 3', gridRow: '1 / span 2' },
  },
  reverse: {
    portrait: { variant: 'portrait', gridColumn: '1 / span 3', gridRow: '1 / span 2' },
    feature: { variant: 'feature', gridColumn: '4 / span 6', gridRow: '1 / span 2' },
    detailTop: { variant: 'detail', gridColumn: '10 / span 3', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '10 / span 3', gridRow: '2 / span 1' },
  },
  stackedLead: {
    detailTop: { variant: 'detail', gridColumn: '1 / span 3', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '1 / span 3', gridRow: '2 / span 1' },
    feature: { variant: 'feature', gridColumn: '4 / span 6', gridRow: '1 / span 2' },
    portrait: { variant: 'portrait', gridColumn: '10 / span 3', gridRow: '1 / span 2' },
  },
  offset: {
    portrait: { variant: 'portrait', gridColumn: '1 / span 3', gridRow: '1 / span 2' },
    detailTop: { variant: 'detail', gridColumn: '4 / span 3', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '4 / span 3', gridRow: '2 / span 1' },
    feature: { variant: 'feature', gridColumn: '7 / span 6', gridRow: '1 / span 2' },
  },
};

const TABLET_LAYOUTS = {
  classic: {
    feature: { variant: 'feature', gridColumn: '1 / span 4', gridRow: '1 / span 2' },
    detailTop: { variant: 'detail', gridColumn: '5 / span 2', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '5 / span 2', gridRow: '2 / span 1' },
    portrait: { variant: 'portrait', gridColumn: '7 / span 2', gridRow: '1 / span 2' },
  },
  reverse: {
    portrait: { variant: 'portrait', gridColumn: '1 / span 2', gridRow: '1 / span 2' },
    feature: { variant: 'feature', gridColumn: '3 / span 4', gridRow: '1 / span 2' },
    detailTop: { variant: 'detail', gridColumn: '7 / span 2', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '7 / span 2', gridRow: '2 / span 1' },
  },
  stackedLead: {
    detailTop: { variant: 'detail', gridColumn: '1 / span 2', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '1 / span 2', gridRow: '2 / span 1' },
    feature: { variant: 'feature', gridColumn: '3 / span 4', gridRow: '1 / span 2' },
    portrait: { variant: 'portrait', gridColumn: '7 / span 2', gridRow: '1 / span 2' },
  },
  offset: {
    portrait: { variant: 'portrait', gridColumn: '1 / span 2', gridRow: '1 / span 2' },
    detailTop: { variant: 'detail', gridColumn: '3 / span 2', gridRow: '1 / span 1' },
    detailBottom: { variant: 'detail', gridColumn: '3 / span 2', gridRow: '2 / span 1' },
    feature: { variant: 'feature', gridColumn: '5 / span 4', gridRow: '1 / span 2' },
  },
};

const MOBILE_LAYOUT = {
  feature: { variant: 'feature', gridColumn: '1 / span 6', gridRow: '1 / span 2' },
  portrait: { variant: 'portrait', gridColumn: '1 / span 3', gridRow: '3 / span 2' },
  detailTop: { variant: 'detail', gridColumn: '4 / span 3', gridRow: '3 / span 1' },
  detailBottom: { variant: 'detail', gridColumn: '4 / span 3', gridRow: '4 / span 1' },
};

const GALLERY_SLIDES = [
  {
    id: 'arrival',
    layout: 'classic',
    photos: {
      feature: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '50% 28%' },
      detailTop: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '24% 62%' },
      detailBottom: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '80% 63%' },
      portrait: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '78% 25%' },
    },
  },
  {
    id: 'ritual',
    layout: 'reverse',
    photos: {
      feature: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '46% 38%' },
      detailTop: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '34% 44%' },
      detailBottom: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '74% 42%' },
      portrait: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '68% 48%' },
    },
  },
  {
    id: 'portraits',
    layout: 'stackedLead',
    photos: {
      feature: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '52% 16%' },
      detailTop: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '18% 54%' },
      detailBottom: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '68% 58%' },
      portrait: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '58% 20%' },
    },
  },
  {
    id: 'sunset',
    layout: 'offset',
    photos: {
      feature: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '50% 50%' },
      detailTop: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '28% 74%' },
      detailBottom: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '76% 76%' },
      portrait: { src: SAMPLE_GALLERY_IMAGE, alt: 'Wedding gallery sample photo', objectPosition: '82% 52%' },
    },
  },
];

function clampIndex(index, length) {
  if (length === 0) {
    return 0;
  }

  return (index + length) % length;
}

function getSceneLayout(layoutKey, viewportWidth) {
  if (viewportWidth <= 768) {
    return MOBILE_LAYOUT;
  }

  if (viewportWidth <= 1100) {
    return TABLET_LAYOUTS[layoutKey] ?? TABLET_LAYOUTS.classic;
  }

  return DESKTOP_LAYOUTS[layoutKey] ?? DESKTOP_LAYOUTS.classic;
}

function GallerySlide({ slide, viewportWidth }) {
  const layout = getSceneLayout(slide.layout, viewportWidth);

  return (
    <div className="w-full p-[clamp(0.75rem,1.6vw,1.1rem)] max-md:p-[0.75rem] rounded-[1.6rem] max-md:rounded-[1.25rem] border border-earth-brown/8 bg-[rgba(255,252,247,0.86)] shadow-[0_24px_60px_rgba(39,30,26,0.08)] backdrop-blur-[12px]">
      <div className="grid grid-cols-12 max-[1100px]:grid-cols-8 max-md:grid-cols-6 grid-rows-[repeat(2,minmax(5.5rem,1fr))] max-[1100px]:grid-rows-[repeat(2,minmax(5rem,1fr))] max-md:grid-rows-[repeat(4,minmax(4.25rem,1fr))] gap-3 max-md:gap-[0.7rem] min-h-[clamp(14rem,38vh,18rem)] max-[1100px]:min-h-[clamp(13rem,36vh,16rem)] max-md:min-h-[clamp(16rem,58vh,20rem)]">
        {GALLERY_CELLS.map((cell) => {
          const photo = slide.photos[cell.id];
          const layoutCell = layout[cell.id];
          const fit = photo?.fit || 'cover';

          return (
            <div
              key={`${slide.id}-${cell.id}`}
              className="relative overflow-hidden min-h-0 rounded-[1.45rem] max-md:rounded-[1.1rem] bg-[linear-gradient(180deg,rgba(241,236,229,0.92),rgba(232,226,218,0.98))] transition-[border-radius] duration-350 ease-in-out"
              style={{
                gridColumn: layoutCell.gridColumn,
                gridRow: layoutCell.gridRow,
              }}
            >
              {photo?.src ? (
                <div
                  className={`w-full h-full grid place-items-center bg-[linear-gradient(180deg,rgba(252,250,247,0.24),rgba(239,232,224,0.18))] ${fit === 'contain' ? 'p-[clamp(0.8rem,2vw,1.35rem)]' : ''}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`block w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    style={{
                      objectPosition: photo.objectPosition || 'center',
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-full grid place-items-center bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(240,234,226,0.88)),linear-gradient(180deg,rgba(229,221,212,0.74),rgba(248,244,239,0.96))]"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-[2rem] max-md:text-[1.6rem] text-earth-brown/34">photo_camera</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Gallery() {
  const revealRef = useReveal();
  const touchStartX = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(() => (typeof window === 'undefined' ? 1440 : window.innerWidth));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const syncViewport = () => {
      setViewportWidth(window.innerWidth);
    };

    syncViewport();
    window.addEventListener('resize', syncViewport);

    return () => {
      window.removeEventListener('resize', syncViewport);
    };
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(clampIndex(index, GALLERY_SLIDES.length));
  };

  const goToNext = () => {
    setActiveIndex((previous) => clampIndex(previous + 1, GALLERY_SLIDES.length));
  };

  const goToPrev = () => {
    setActiveIndex((previous) => clampIndex(previous - 1, GALLERY_SLIDES.length));
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = touchStartX.current - touchEndX;

    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrev();
    }
  };

  return (
    <section ref={revealRef} className="py-16 max-md:py-14 max-md:pb-12 bg-off-white sacred-geometry-pattern" id="gallery" aria-label="Photo Gallery">
      <div className="max-w-[1480px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="max-w-[44rem] mx-auto mb-6 max-[1100px]:mb-5 max-md:mb-4 text-center reveal">
          {/* <p className="text-[0.72rem] tracking-[0.34em] uppercase font-extrabold text-warm-orange">Photo essay</p> */}
          <h2 className="mt-2 max-md:mt-1 font-headline text-[clamp(2rem,4vw,3.6rem)] max-md:text-[clamp(2.2rem,11vw,3.2rem)] leading-[0.98] max-md:leading-[0.9] tracking-[0.06em] uppercase text-earth-brown/92">
            Gallery
          </h2>
        </div>
      </div>

      <div className="relative w-[min(calc(100%-2rem),1200px)] mx-auto reveal">
        <div className="mb-3 flex items-center gap-4" aria-hidden="true">
          <span className="min-w-[4.25rem] text-[0.72rem] tracking-[0.32em] uppercase font-extrabold text-earth-brown/62">
            {String(activeIndex + 1).padStart(2, '0')} / {String(GALLERY_SLIDES.length).padStart(2, '0')}
          </span>
          <span className="relative flex-1 h-px bg-earth-brown/12" />
        </div>

        <div className="relative">
          <div
            className="overflow-hidden outline-none focus-visible:shadow-[0_0_0_4px_rgba(0,121,107,0.12)] rounded-[1.6rem] max-md:rounded-[1.25rem]"
            aria-roledescription="carousel"
            aria-label="Photo gallery carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div
              className="flex transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:duration-[0.01ms]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {GALLERY_SLIDES.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <GallerySlide slide={slide} viewportWidth={viewportWidth} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="absolute left-2 md:left-3 top-1/2 z-20 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 border-0 rounded-full grid place-items-center text-earth-brown bg-[rgba(255,248,240,0.94)] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-[transform,box-shadow] duration-250 ease-in-out hover:scale-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
            onClick={goToPrev}
            aria-label="Previous gallery slide"
          >
            <span className="material-symbols-outlined">west</span>
          </button>
          <button
            type="button"
            className="absolute right-2 md:right-3 top-1/2 z-20 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 border-0 rounded-full grid place-items-center text-earth-brown bg-[rgba(255,248,240,0.94)] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition-[transform,box-shadow] duration-250 ease-in-out hover:scale-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
            onClick={goToNext}
            aria-label="Next gallery slide"
          >
            <span className="material-symbols-outlined">east</span>
          </button>

          <div
            className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 flex flex-wrap justify-center gap-[0.55rem] px-3 py-2 rounded-full bg-[rgba(255,248,240,0.88)] shadow-[0_8px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm"
            role="tablist"
            aria-label="Gallery slides"
          >
            {GALLERY_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`h-[0.7rem] border-0 rounded-full transition-[width,background-color] duration-250 ease-in-out ${
                  index === activeIndex ? 'w-[2.1rem] bg-dark-teal' : 'w-[0.7rem] bg-earth-light-brown/25'
                }`}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to gallery slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
