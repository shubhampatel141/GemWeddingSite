import { useState } from 'react';
import useReveal from '../hooks/useReveal';

const WELCOME_IMAGE_SRC = '/welcome-photo.jpeg';
const WELCOME_IMAGE_SCALE = '100%';

export default function Welcome() {
  const ref = useReveal();
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section className="bg-off-white relative overflow-hidden" aria-label="Welcome">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="relative bg-earth-light-brown flex items-center justify-center p-6 md:p-8 lg:p-10">

          {imageAvailable ? (
            <img
              src={WELCOME_IMAGE_SRC}
              alt="Welcome photo for the wedding celebration"
              className="block h-auto"
              style={{ width: WELCOME_IMAGE_SCALE, maxWidth: WELCOME_IMAGE_SCALE }}
              onError={() => setImageAvailable(false)}
            />
          ) : null}

          {!imageAvailable ? (
            <div className="min-h-[340px] md:min-h-full bg-linear-to-br from-earth-light-brown via-earth-brown to-earth-light-brown" aria-hidden="true" />
          ) : null}
        </div>

        <div className="bg-off-white sacred-geometry-pattern flex items-center justify-center px-8 py-14 md:px-10 md:py-12 lg:px-14 lg:py-16 xl:px-18 xl:py-20">
          <div ref={ref} className="max-w-2xl text-center space-y-10 reveal">
            <div className="inline-block p-7 border-2 border-teal-bright/20 rounded-full bg-white shadow-inner">
              <span className="material-symbols-outlined text-warm-orange text-5xl" aria-hidden="true">
                potted_plant
              </span>
            </div>

            <h2 className="font-cursive text-6xl md:text-7xl xl:text-8xl text-teal-bright leading-tight">
              Welcome to the celebration
            </h2>

            <p className="font-body text-earth-brown leading-relaxed text-xl md:text-2xl max-w-2xl mx-auto font-medium">
              With immense joy and gratitude, we invite you to join us as we begin this new chapter together.
            </p>

            <div className="w-24 h-px bg-gold-polished mx-auto" role="separator" />

            <p className="font-body text-earth-brown/70 leading-loose max-w-2xl mx-auto text-base md:text-lg italic">
              Surrounded by the timeless beauty of Pavagadh, we look forward to celebrating love, tradition, and togetherness with our closest family and friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
