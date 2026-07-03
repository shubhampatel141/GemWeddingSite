import { useState } from 'react'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'
import { FAQ_GROUPS } from '../content/siteContent'

function FaqGroup({ group, isOpen, onToggle }) {
  return (
    <article className="faq-group-card reveal">
      <button
        type="button"
        className="faq-group-button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="space-y-3 text-left">
          <p className="faq-group-title">{group.title}</p>
          <p className="text-earth-brown/65 leading-relaxed">{group.description}</p>
        </div>
        <span className={`material-symbols-outlined text-3xl text-teal-bright transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
          add
        </span>
      </button>

      {isOpen ? (
        <div className="faq-group-content">
          {group.items.map((item) => (
            <div key={item.question} className={`faq-item ${item.highlight ? 'faq-item-highlight' : ''}`}>
              <h3 className="faq-item-question">{item.question}</h3>
              <p className="faq-item-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export default function ImportantInformationFaq() {
  const ref = useReveal()
  const [openGroup, setOpenGroup] = useState(FAQ_GROUPS[0]?.title ?? '')

  return (
    <section ref={ref} id="info" className="py-28 md:py-32 px-6 md:px-10 bg-off-white sacred-geometry-pattern" aria-label="Important Information and FAQ">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="reveal">
          <SectionHeading
            eyebrow="Guest essentials"
            title="Important FAQ"
            description="Use this section as the practical travel checklist before you leave, and treat the highlighted safety notes as the fastest things to save to your phone."
          />
        </div>

        <div className="grid grid-cols-1 gap-10">
          {FAQ_GROUPS.map((group) => (
            <FaqGroup
              key={group.title}
              group={group}
              isOpen={openGroup === group.title}
              onToggle={() => setOpenGroup((current) => (current === group.title ? '' : group.title))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
