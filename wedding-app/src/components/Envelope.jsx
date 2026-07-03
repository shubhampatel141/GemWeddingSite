import { useCallback, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { ENVELOPE_NOTE } from '../content/siteContent'

export default function Envelope() {
  const ref = useReveal()
  const [envelopeOpen, setEnvelopeOpen] = useState(false)

  const openEnvelope = useCallback(() => {
    setEnvelopeOpen(true)
  }, [])

  return (
    <section ref={ref} id="note" className="py-28 md:py-32 px-6 bg-dark-teal relative overflow-hidden" aria-label="Guest note">
      <div className="absolute inset-0 sacred-geometry-pattern opacity-10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto relative z-10 reveal">
        <div className={`envelope-wrapper floral-envelope shadow-2xl rounded-[28px] ${envelopeOpen ? 'envelope-open' : ''}`}>
          <div className="floral-corner floral-corner-top-left" aria-hidden="true" />
          <div className="floral-corner floral-corner-top-right" aria-hidden="true" />
          <div className="floral-corner floral-corner-bottom-left" aria-hidden="true" />
          <div className="floral-corner floral-corner-bottom-right" aria-hidden="true" />
          <div className="envelope-flap" aria-hidden="true" />

          <button className="wax-seal" onClick={openEnvelope} aria-label="Open travel note envelope">
            S&amp;S
          </button>

          <div className="form-content p-8 md:p-14 lg:p-20 relative z-10 bg-white/96 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <p className="text-[11px] tracking-[0.38em] uppercase text-warm-orange font-black">
                {ENVELOPE_NOTE.eyebrow}
              </p>
              <h2 className="font-cursive text-6xl md:text-7xl text-dark-teal leading-none">
                {ENVELOPE_NOTE.title}
              </h2>
              <p className="text-lg md:text-xl text-earth-brown/75 leading-relaxed">
                {ENVELOPE_NOTE.body}
              </p>
            </div>

            <div className="note-reminders-grid mt-12">
              {ENVELOPE_NOTE.reminders.map((reminder, index) => (
                <article key={reminder} className="note-reminder-card">
                  <p className="note-reminder-index">{String(index + 1).padStart(2, '0')}</p>
                  <p className="text-earth-brown/76 leading-relaxed">{reminder}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gold-polished/20 text-center">
              <p className="font-cursive text-3xl md:text-4xl text-dark-teal/88">
                {ENVELOPE_NOTE.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
