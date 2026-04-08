import useReveal from '../hooks/useReveal';

const MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0!2d73.5!3d22.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPavagadh%2C+Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Vikrama+Heritage+Pavagadh+Gujarat';

export default function Destination() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-32 bg-dark-teal relative overflow-hidden" id="travel" aria-label="Destination and Travel Information">
      <div className="absolute inset-0 sacred-geometry-pattern opacity-10" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-12 reveal">
          <p className="text-saffron tracking-[0.5em] uppercase text-xs font-bold">Strategic Presence</p>
          <h2 className="font-cursive text-7xl md:text-8xl text-white normal-case leading-tight">The destination</h2>
          <div className="space-y-8">
            <div className="flex gap-8 items-start p-10 bg-white/5 backdrop-blur-sm border-l-4 border-saffron">
              <span className="material-symbols-outlined text-saffron text-3xl" aria-hidden="true">location_on</span>
              <div>
                <h4 className="font-headline text-2xl text-saffron mb-3 uppercase font-black">Vikrama Heritage</h4>
                <p className="text-base text-white/70 leading-relaxed">
                  Hill Base Road, Champaner-Pavagadh, Gujarat. A sanctuary nestled in the mountains where our story continues.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start p-10 bg-white/5 backdrop-blur-sm border-l-4 border-saffron">
              <span className="material-symbols-outlined text-saffron text-3xl" aria-hidden="true">flight</span>
              <div>
                <h4 className="font-headline text-2xl text-saffron mb-3 uppercase font-black">Vadodara (BDQ)</h4>
                <p className="text-base text-white/70 leading-relaxed">
                  Nearest airport to the venue, approximately 45 minutes from Pavagadh. Recommended for the most convenient arrival.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start p-10 bg-white/5 backdrop-blur-sm border-l-4 border-saffron">
              <span className="material-symbols-outlined text-saffron text-3xl" aria-hidden="true">flight</span>
              <div>
                <h4 className="font-headline text-2xl text-saffron mb-3 uppercase font-black">Ahmedabad (AMD)</h4>
                <p className="text-base text-white/70 leading-relaxed">
                  Sardar Vallabhbhai Patel International Airport — a major hub with extensive domestic and international connections, approximately 2 hours from Pavagadh.
                </p>
              </div>
            </div>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-saffron text-earth-brown font-bold text-sm tracking-[0.2em] uppercase hover:bg-gold-polished transition-all duration-500 shadow-lg"
            aria-label="Get directions to Vikrama Heritage, Pavagadh on Google Maps"
          >
            <span className="material-symbols-outlined text-xl" aria-hidden="true">directions</span>
            Get Directions
          </a>
        </div>

        <div className="aspect-square border-2 border-saffron/20 relative reveal shadow-2xl overflow-hidden bg-white/5">
          <iframe
            src={MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vikrama Heritage, Pavagadh - Wedding Venue Location"
          />
        </div>
      </div>
    </section>
  );
}
