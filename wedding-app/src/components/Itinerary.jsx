import { useState } from 'react';
import useReveal from '../hooks/useReveal';

const EVENTS = [
  {
    id: 'arrival',
    day: 'Tuesday',
    time: 'Dec 22 • Morning',
    title: 'Arrival',
    icon: 'home_pin',
    theme: 'Welcome',
    summary: 'Guests are warmly welcomed to settle into the celebrations.',
    details:
      'Relax, explore, and reconnect before festivities begin. This is the gentlest part of the weekend and a chance to arrive without rushing straight into the celebrations.',
    dressCode: 'Travel Chic',
    location: 'Resort check-in and welcome spaces',
    note: 'Arriving earlier in the day will give you time to settle in before the evening events.',
  },
  {
    id: 'mehndi',
    day: 'Tuesday',
    time: 'Dec 22 • Evening',
    title: 'Mehndi',
    icon: 'spa',
    theme: 'Artistry',
    summary: 'An intimate celebration of intricate henna artistry, music, and laughter.',
    details:
      'The Mehndi begins the wedding festivities with color, conversation, and an easy celebratory rhythm that brings everyone together.',
    dressCode: 'Vibrant Indian',
    location: 'Celebration lawn',
    note: 'Comfortable footwear is a good idea for moving between mingling and ceremony spaces.',
  },
  {
    id: 'grah-shanti',
    day: 'Wednesday',
    time: 'Dec 23 • Morning',
    title: 'Grah Shanti',
    icon: 'temple_hindu',
    theme: 'Blessings',
    summary: 'A sacred ritual performed to invoke blessings and harmony.',
    details:
      'This ceremony sets a spiritual tone for the wedding and offers a calm, meaningful start to the day before the livelier celebrations begin.',
    dressCode: 'Traditional (Light)',
    location: 'Ceremony pavilion',
    note: 'Lighter fabrics and softer tones will feel especially fitting for the morning atmosphere.',
  },
  {
    id: 'haldi',
    day: 'Wednesday',
    time: 'Dec 23 • Late Morning',
    title: 'Haldi',
    icon: 'opacity',
    theme: 'Purification',
    summary: 'A playful tradition full of turmeric, laughter, and blessings.',
    details:
      'Haldi is one of the most joyful events of the weekend, with a carefree energy that invites everyone into the celebration.',
    dressCode: 'Yellow Shades',
    location: 'Outdoor celebration area',
    note: 'Wear something you do not mind getting a little colorful if you plan to join in closely.',
  },
  {
    id: 'sangeet',
    day: 'Wednesday',
    time: 'Dec 23 • Evening',
    title: 'Sangeet',
    icon: 'queue_music',
    theme: 'Celebration',
    summary: 'An evening of music, dance, and performances from both families.',
    details:
      'The Sangeet brings everyone together for a high-energy night of celebration, choreography, and unforgettable moments on stage.',
    dressCode: 'Glamorous Indian',
    location: 'Main event hall',
    note: 'This is the most performance-forward event, so expect a festive atmosphere and a later finish.',
  },
  {
    id: 'wedding',
    day: 'Thursday',
    time: 'Dec 24 • Sunset',
    title: 'The Wedding',
    icon: 'favorite',
    theme: 'Union',
    summary: 'A timeless union of tradition and love against the backdrop of Pavagadh.',
    details:
      'The ceremony brings together the heart of the celebration weekend, surrounded by family, heritage, and the beauty of the destination.',
    dressCode: 'Formal Indian',
    location: 'Wedding mandap',
    note: 'Arrive a little early so you can settle in and enjoy the setting before the ceremony begins.',
  },
];

function TimelineButton({ event, isActive, onSelect, index }) {
  return (
    <button
      type="button"
      className={`w-full grid grid-cols-[auto_auto_1fr] max-md:grid-cols-[auto_1fr] gap-4 max-md:gap-[0.85rem] items-start py-[1.15rem] px-[1.2rem] rounded-[1.75rem] border border-gold-polished/18 bg-off-white/8 backdrop-blur-[10px] text-left relative transition-[transform,border-color,background-color,box-shadow] duration-300 ease-in-out hover:translate-x-1 hover:border-saffron/45 hover:shadow-[0_16px_30px_rgba(0,0,0,0.14)] ${
        isActive
          ? 'bg-[linear-gradient(135deg,rgba(255,202,40,0.95),rgba(255,112,67,0.92))] border-transparent shadow-[0_20px_36px_rgba(255,112,67,0.2)]'
          : ''
      }`}
      onClick={() => onSelect(event.id)}
      aria-pressed={isActive}
      aria-label={`View details for ${event.title}`}
    >
      <span
        className={`mt-[0.35rem] text-xs tracking-[0.26em] uppercase font-extrabold max-md:hidden ${
          isActive ? 'text-earth-brown/72' : 'text-off-white/45'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className={`size-12 grid place-items-center rounded-full text-[1.75rem] material-symbols-outlined ${
          isActive ? 'bg-off-white/40 text-earth-brown' : 'bg-off-white/12 text-saffron'
        }`}
        aria-hidden="true"
      >
        {event.icon}
      </span>
      <div className="space-y-2 text-left">
        <p
          className={`text-[0.74rem] font-bold tracking-[0.2em] uppercase ${
            isActive ? 'text-earth-brown/72' : 'text-off-white/62'
          }`}
        >
          {event.day}
        </p>
        <h3
          className={`text-[1.2rem] font-extrabold tracking-[0.08em] uppercase ${
            isActive ? 'text-earth-brown' : 'text-off-white'
          }`}
        >
          {event.title}
        </h3>
        <p
          className={`text-[0.74rem] font-bold tracking-[0.2em] uppercase ${
            isActive ? 'text-earth-brown/72' : 'text-off-white/62'
          }`}
        >
          {event.time}
        </p>
      </div>
    </button>
  );
}

export default function Itinerary() {
  const ref = useReveal();
  const [selectedId, setSelectedId] = useState(EVENTS[0].id);
  const selectedEvent = EVENTS.find((event) => event.id === selectedId) ?? EVENTS[0];

  return (
    <section
      ref={ref}
      className="py-32 px-6 md:px-12 bg-earth-light-brown sacred-geometry-pattern"
      id="events"
      aria-label="Wedding Events Itinerary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 space-y-6 reveal">
          <p className="font-body text-[13px] tracking-[0.5em] uppercase text-warm-orange font-black">
            Sacred Commitments
          </p>
          <h2 className="font-cursive text-7xl md:text-9xl text-teal-bright normal-case">
            The itinerary
          </h2>
          <p className="max-w-3xl mx-auto text-off-white/75 text-base md:text-lg leading-relaxed">
            Follow the celebration step by step. Select any event to see the mood, the moment,
            and the details at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.88fr_1.12fr] gap-8 xl:gap-10 items-stretch">
          <div className="relative py-4 reveal">
            <div
              className="absolute top-8 bottom-8 left-6 w-0.5 bg-[linear-gradient(180deg,rgba(255,202,40,0.32),rgba(255,112,67,0.5))]"
              aria-hidden="true"
            />
            <div className="space-y-4 relative z-10">
              {EVENTS.map((event, index) => (
                <TimelineButton
                  key={event.id}
                  event={event}
                  isActive={event.id === selectedEvent.id}
                  onSelect={setSelectedId}
                  index={index}
                />
              ))}
            </div>
          </div>

          <article
            className="p-8 max-md:p-6 rounded-[2rem] max-md:rounded-[1.5rem] bg-off-white border border-gold-polished/18 shadow-[0_24px_60px_rgba(0,0,0,0.18)] flex flex-col gap-7 reveal h-full"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center gap-3">
              <p className="py-[0.7rem] px-4 rounded-full bg-earth-light-brown/8 text-dark-teal text-[0.72rem] font-extrabold tracking-[0.24em] uppercase">
                {selectedEvent.day}
              </p>
              <p className="py-[0.7rem] px-4 rounded-full bg-warm-orange/14 text-warm-orange text-[0.72rem] font-extrabold tracking-[0.24em] uppercase">
                {selectedEvent.time}
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-xs font-extrabold tracking-[0.34em] uppercase text-warm-orange">
                {selectedEvent.theme}
              </p>
              <h3 className="font-headline text-4xl md:text-5xl uppercase tracking-[0.08em] text-dark-teal font-black">
                {selectedEvent.title}
              </h3>
              <p className="text-lg md:text-xl text-earth-brown/80 leading-relaxed">
                {selectedEvent.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="py-[1.1rem] px-[1.2rem] rounded-[1.4rem] bg-white/55 border border-gold-polished/16">
                <p className="text-[0.72rem] font-extrabold tracking-[0.22em] uppercase text-earth-brown/52">
                  Dress code
                </p>
                <p className="mt-[0.7rem] text-earth-brown/82 leading-[1.7]">{selectedEvent.dressCode}</p>
              </div>
              <div className="py-[1.1rem] px-[1.2rem] rounded-[1.4rem] bg-white/55 border border-gold-polished/16">
                <p className="text-[0.72rem] font-extrabold tracking-[0.22em] uppercase text-earth-brown/52">
                  Location
                </p>
                <p className="mt-[0.7rem] text-earth-brown/82 leading-[1.7]">{selectedEvent.location}</p>
              </div>
            </div>

            <div className="space-y-5 border-t border-gold-polished/20 pt-8">
              <p className="text-base md:text-lg leading-relaxed text-earth-brown/78">
                {selectedEvent.details}
              </p>
              <div className="py-[1.1rem] px-[1.2rem] rounded-[1.4rem] bg-white/55 border border-gold-polished/16">
                <p className="text-[0.72rem] font-extrabold tracking-[0.22em] uppercase text-earth-brown/52">
                  Helpful note
                </p>
                <p className="mt-[0.7rem] text-earth-brown/82 leading-[1.7]">{selectedEvent.note}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
