import { useState, useCallback } from 'react';
import useReveal from '../hooks/useReveal';

const GALLERY_ITEMS = [
  { label: 'Ritual', aspect: 'aspect-square', offset: '' },
  { label: 'Heritage', aspect: 'aspect-[3/4]', offset: 'mt-16' },
  { label: 'Connection', aspect: 'aspect-square', offset: '' },
  { label: 'Devotion', aspect: 'aspect-[3/4]', offset: 'mt-16' },
  { label: 'Tradition', aspect: 'aspect-square', offset: '' },
  { label: 'Joy', aspect: 'aspect-[3/4]', offset: 'mt-16' },
  { label: 'Grace', aspect: 'aspect-square', offset: '' },
  { label: 'Eternity', aspect: 'aspect-[3/4]', offset: 'mt-16' },
];

export default function Gallery() {
  const ref = useReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, []);

  return (
    <section ref={ref} className="py-32 bg-off-white sacred-geometry-pattern" id="gallery" aria-label="Photo Gallery">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="font-cursive text-7xl md:text-9xl text-teal-bright normal-case">The gallery</h2>
          <p className="text-[13px] tracking-[0.5em] uppercase text-warm-orange mt-6 font-black">
            Building a Shared Future
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.label}
              className={`${item.aspect} ${item.offset} border border-gold-polished/30 flex items-center justify-center p-12 bg-white reveal shadow-sm hover:shadow-lg transition-all cursor-pointer group`}
              onClick={() => openLightbox(index)}
              aria-label={`View ${item.label} photo`}
            >
              <span className="font-headline text-xl text-gold-polished/40 uppercase font-black tracking-widest group-hover:text-gold-polished transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-5xl">chevron_left</span>
          </button>

          <div
            className="max-w-3xl max-h-[80vh] bg-white/10 backdrop-blur-md border border-gold-polished/30 flex items-center justify-center p-16 md:p-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-6">
              <span className="material-symbols-outlined text-saffron text-8xl" aria-hidden="true">photo_camera</span>
              <p className="font-headline text-3xl text-white uppercase font-black tracking-widest">
                {GALLERY_ITEMS[lightboxIndex].label}
              </p>
              <p className="text-white/50 text-sm tracking-widest uppercase">Photo placeholder</p>
            </div>
          </div>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-5xl">chevron_right</span>
          </button>
        </div>
      )}
    </section>
  );
}
