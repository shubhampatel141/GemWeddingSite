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
    <div className="gallery-slide-frame">
      <div className="gallery-bento-grid">
        {GALLERY_CELLS.map((cell) => {
          const photo = slide.photos[cell.id];
          const layoutCell = layout[cell.id];
          const fit = photo?.fit || 'cover';

          return (
            <div
              key={`${slide.id}-${cell.id}`}
              className={`gallery-photo-cell gallery-photo-cell-${layoutCell.variant}`}
              style={{
                gridColumn: layoutCell.gridColumn,
                gridRow: layoutCell.gridRow,
              }}
            >
              {photo?.src ? (
                <div className={`gallery-photo-media ${fit === 'contain' ? 'gallery-photo-media-contained' : ''}`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`gallery-photo-image ${fit === 'contain' ? 'gallery-photo-image-contained' : ''}`}
                    style={{
                      objectPosition: photo.objectPosition || 'center',
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="gallery-photo-placeholder" aria-hidden="true">
                  <span className="material-symbols-outlined gallery-photo-placeholder-icon">photo_camera</span>
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
    <section ref={revealRef} className="gallery-section bg-off-white sacred-geometry-pattern" id="gallery" aria-label="Photo Gallery">
      <div className="max-w-[1480px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="gallery-intro reveal">
          {/* <p className="gallery-intro-eyebrow">Photo essay</p> */}
          <h2 className="gallery-intro-title">Gallery</h2>
        </div>
      </div>

      <div className="gallery-carousel-shell reveal">
        <div className="gallery-carousel-topline" aria-hidden="true">
          <span className="gallery-carousel-count">
            {String(activeIndex + 1).padStart(2, '0')} / {String(GALLERY_SLIDES.length).padStart(2, '0')}
          </span>
          <span className="gallery-carousel-rule" />
        </div>

        <div
          className="gallery-carousel-viewport"
          aria-roledescription="carousel"
          aria-label="Photo gallery carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="gallery-carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {GALLERY_SLIDES.map((slide) => (
              <div key={slide.id} className="gallery-carousel-slide">
                <GallerySlide slide={slide} viewportWidth={viewportWidth} />
              </div>
            ))}
          </div>

        </div>

        <div className="gallery-carousel-controls">
          <button type="button" className="gallery-carousel-arrow" onClick={goToPrev} aria-label="Previous gallery slide">
            <span className="material-symbols-outlined">west</span>
          </button>
          <button type="button" className="gallery-carousel-arrow" onClick={goToNext} aria-label="Next gallery slide">
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>

        <div className="gallery-carousel-footer">
          <div className="gallery-carousel-dots" role="tablist" aria-label="Gallery slides">
            {GALLERY_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`gallery-carousel-dot ${index === activeIndex ? 'gallery-carousel-dot-active' : ''}`}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to gallery slide ${index + 1}`}
              />
            ))}
          </div>

          <p className="gallery-carousel-note">
            Swipe on mobile, or use the left and right arrow keys while the carousel is focused.
          </p>
        </div>
      </div>
    </section>
  );
}
