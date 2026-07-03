import Carousel from './Carousel'
import SectionHeading from './SectionHeading'
import useReveal from '../hooks/useReveal'
import { GALLERY_SLIDES } from '../content/siteContent'

export default function Gallery() {
  const ref = useReveal()

  return (
    <section ref={ref} id="gallery" className="py-28 md:py-32 px-6 md:px-10 bg-off-white" aria-label="Photo gallery">
      <div className="max-w-[88rem] mx-auto space-y-12">
        <div className="reveal">
          <SectionHeading
            eyebrow="Moments and memories"
            title="The Gallery"
          />
        </div>
        <div className="reveal gallery-stage">
          <Carousel slides={GALLERY_SLIDES} ariaLabel="Wedding gallery carousel" />
        </div>
      </div>
    </section>
  )
}
