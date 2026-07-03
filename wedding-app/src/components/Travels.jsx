import Carousel from './Carousel'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'
import { PACKING_GROUPS, TRAVEL_FACTS, TRAVEL_SLIDES } from '../content/siteContent'

function TravelFact({ fact }) {
  return (
    <div className="travel-fact-card">
      <p className="travel-fact-label">{fact.label}</p>
      {fact.href ? (
        <a
          href={fact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="travel-fact-link"
        >
          {fact.value}
        </a>
      ) : (
        <p className="travel-fact-value">{fact.value}</p>
      )}
    </div>
  )
}

export default function Travels() {
  const ref = useReveal()

  return (
    <section ref={ref} id="travels" className="py-28 md:py-32 bg-dark-teal relative overflow-hidden" aria-label="Travels">
      <div className="absolute inset-0 sacred-geometry-pattern opacity-10" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-24 relative z-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Destination guide"
            title="Travels"
            description="Everything guests need for getting there, settling in, and arriving with a little less stress."
            light
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-16 items-start">
          <div className="space-y-8 reveal">
            <div className="travel-intro-card">
              <p className="travel-card-eyebrow">Destination</p>
              <h3 className="font-headline text-3xl md:text-4xl uppercase tracking-[0.14em] text-white font-black">
                Vikrama Heritage, Pavagadh
              </h3>
              <p className="text-white/74 text-lg leading-relaxed">
                The wedding weekend unfolds in a resort setting surrounded by hillside views, heritage textures, and enough breathing room to make the celebrations feel like a true getaway.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {TRAVEL_FACTS.map((fact) => (
                <TravelFact key={fact.label} fact={fact} />
              ))}
            </div>
          </div>

          <div className="reveal">
            <Carousel slides={TRAVEL_SLIDES} ariaLabel="Travels destination carousel" theme="dark" />
          </div>
        </div>

        <div className="space-y-10">
          <div className="reveal">
            <SectionHeading
              eyebrow="Packing list"
              title="Luggage Packing"
              description="A soft guide for what to bring now, with room to fine-tune once final looks and weather details are confirmed."
              align="left"
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PACKING_GROUPS.map((group) => (
              <article key={group.title} className="packing-card reveal">
                <h3 className="packing-card-title">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="packing-card-item">
                      <span className="material-symbols-outlined text-saffron text-lg" aria-hidden="true">
                        done
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
