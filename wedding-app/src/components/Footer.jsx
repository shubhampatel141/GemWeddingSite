export default function Footer() {
  return (
    <footer className="bg-off-white text-earth-brown/50 py-24 px-12 text-center relative overflow-hidden border-t border-gold-polished/20" aria-label="Footer">
      <div className="absolute inset-0 sacred-geometry-pattern opacity-5 pointer-events-none" aria-hidden="true" />
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="font-cursive text-5xl md:text-7xl text-teal-bright normal-case">
          Shruti &amp; Shubham
        </div>
        <div className="w-px h-16 bg-saffron/30 mx-auto" role="separator" />
        <p className="text-[11px] tracking-[0.6em] uppercase text-warm-orange font-bold">
          Building the Eternal Forever • MMXXVI
        </p>
      </div>
    </footer>
  );
}
