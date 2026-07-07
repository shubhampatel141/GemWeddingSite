import useReveal from '../hooks/useReveal';

export default function Welcome() {
  const ref = useReveal();

  return (
    <section className="py-32 px-12 md:px-24 bg-off-white sacred-geometry-pattern relative overflow-hidden" aria-label="Welcome">
      <div ref={ref} className="max-w-4xl mx-auto text-center space-y-12 reveal">
        <div className="inline-block p-8 border-2 border-teal-bright/20 rounded-full bg-white shadow-inner">
          <span className="material-symbols-outlined text-warm-orange text-5xl" aria-hidden="true">potted_plant</span>
        </div>
        <h2 className="font-cursive text-7xl md:text-8xl text-teal-bright">Welcome to the celebration</h2>
        <p className="font-body text-earth-brown leading-relaxed text-2xl max-w-3xl mx-auto font-medium">
          With immense joy and gratitude, we invite you to join us as we begin this new chapter together.
        </p>
        <div className="w-24 h-px bg-gold-polished mx-auto" role="separator" />
        <p className="font-body text-earth-brown/70 leading-loose max-w-3xl mx-auto text-lg italic">
          Surrounded by the timeless beauty of Pavagadh, we look forward to celebrating love, tradition, and togetherness with our closest family and friends.
        </p>
      </div>
    </section>
  );
}
