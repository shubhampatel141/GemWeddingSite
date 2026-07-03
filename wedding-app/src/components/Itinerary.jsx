import { useState } from 'react'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'
import { ITINERARY_ITEMS } from '../content/siteContent'

function TimelineButton({ item, isActive, onSelect, index }) {
  return (
    <button
      type="button"
      className={`timeline-stop ${isActive ? 'timeline-stop-active' : ''}`}
      onClick={() => onSelect(item.id)}
    >
      <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
      <span className={`timeline-icon material-symbols-outlined ${isActive ? 'text-white' : 'text-teal-bright'}`} aria-hidden="true">
        {item.icon}
      </span>
      <div className="space-y-2 text-left">
        <p className="timeline-day">{item.day}</p>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-time">{item.time}</p>
      </div>
    </button>
  )
}

export default function Itinerary() {
  const ref = useReveal()
  const [selectedId, setSelectedId] = useState(ITINERARY_ITEMS[0]?.id ?? '')
  const selectedItem = ITINERARY_ITEMS.find((item) => item.id === selectedId) ?? ITINERARY_ITEMS[0]

  return (
    <section ref={ref} id="itinerary" className="py-28 md:py-32 px-6 md:px-10 bg-off-white sacred-geometry-pattern" aria-label="Wedding itinerary">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="reveal">
          <SectionHeading
            eyebrow="At a glance"
            title="The Itinerary"
            description="Follow the wedding weekend like a roadmap. Select any stop to see what is happening, how it will feel, and what you may want to wear or plan around."
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-8 xl:gap-10 items-stretch">
          
          <div className="timeline-panel reveal">
            <div className="timeline-rail" aria-hidden="true" />
            <div className="space-y-4 relative z-10">
              {ITINERARY_ITEMS.map((item, index) => (
                <TimelineButton
                  key={item.id}
                  item={item}
                  isActive={item.id === selectedItem.id}
                  onSelect={setSelectedId}
                  index={index}
                />
              ))}
            </div>
          </div>

          <article className="itinerary-detail-card reveal h-full" aria-live="polite">
            <div className="flex flex-wrap items-center gap-3">
              <p className="detail-chip">{selectedItem.day}</p>
              <p className="detail-chip detail-chip-accent">{selectedItem.time}</p>
            </div>

            <div className="space-y-5">
              <h3 className="font-headline text-4xl md:text-5xl uppercase tracking-[0.08em] text-dark-teal font-black">
                {selectedItem.title}
              </h3>
              <p className="text-xl text-earth-brown/78 leading-relaxed">
                {selectedItem.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="detail-info-card">
                <p className="detail-info-label">Dress code</p>
                <p className="detail-info-value">{selectedItem.dressCode}</p>
              </div>
              <div className="detail-info-card">
                <p className="detail-info-label">Location</p>
                <p className="detail-info-value">{selectedItem.location}</p>
              </div>
            </div>

            <div className="space-y-5 border-t border-gold-polished/20 pt-8">
              <p className="text-lg leading-relaxed text-earth-brown/74">
                {selectedItem.details}
              </p>
              <div className="detail-note-box">
                <p className="detail-info-label">Helpful note</p>
                <p className="detail-info-value">{selectedItem.note}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
