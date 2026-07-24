export default function Footer() {
  return (
    <footer
      className="border-t border-gold-polished/20 px-5 py-2 text-center"
      aria-label="Footer"
    >
      <div className="mx-auto grid max-w-120 justify-items-center gap-2">
        <span className="mb-1 h-px w-10 bg-gold-polished/60" aria-hidden="true" />
        <p className="m-0 text-[0.8rem] tracking-[0.2em] uppercase text-earth-brown/70">With love, always</p>
        <p className="m-0 font-cursive text-[clamp(2rem,4vw,2.8rem)] leading-none text-teal-bright">
          Shruti &amp; Shubham
        </p>
      </div>
    </footer>
  )
}