import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FAQ_GROUPS } from '../content/siteContent';

function FaqItemCard({ item }) {
  return (
    <article
      className={
        item.highlight
          ? 'py-[1.15rem] pb-[1.2rem] border-t border-off-white/10 pl-4 border-l-2 border-saffron/70'
          : 'py-[1.15rem] pb-[1.2rem] border-t border-off-white/10'
      }
    >
      <h3 className="mt-3 text-[0.92rem] font-extrabold tracking-[0.22em] uppercase text-off-white">
        {item.question}
      </h3>

      <p
        className={`mt-[0.7rem] leading-[1.9] text-base max-w-[44rem] ${
          item.highlight ? 'text-[#F2E7DB]' : 'text-[#F2E7DB]/82'
        }`}
      >
        {item.answer}
      </p>
    </article>
  );
}

function FaqGroup({ group, isOpen, onToggle }) {
  return (
    <article className="reveal border-b border-off-white/14 overflow-hidden">
      <button
        type="button"
        className="w-full flex items-start justify-between gap-6 pb-[1.35rem] text-left border-0 bg-transparent cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="space-y-3 text-left">
          <p className="font-headline uppercase text-[clamp(1.55rem,4vw,2.1rem)] font-extrabold tracking-[0.08em] text-saffron leading-none">
            {group.title}
          </p>
          <p className="text-[#F2E7DB]/72 leading-[1.8] text-base max-w-[48rem]">
            {group.description}
          </p>
        </div>

        <span
          className={`material-symbols-outlined shrink-0 w-8 h-8 inline-grid place-items-center text-[1.6rem] text-saffron transition-transform duration-[250ms] ease-in-out ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          add
        </span>
      </button>

      {isOpen ? (
        <div className="pb-[0.6rem]">
          <div className="pt-[0.2rem]">
            {group.items.map((item) => (
              <FaqItemCard key={item.question} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function ImportantInformationFaq() {
  const ref = useReveal();
  const [openGroup, setOpenGroup] = useState(FAQ_GROUPS[0]?.title ?? '');

  return (
    <section
      ref={ref}
      id="info"
      className="py-28 md:py-32 px-6 md:px-10 bg-earth-light-brown sacred-geometry-pattern"
      aria-label="Important Information and FAQ"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="reveal max-w-[52rem] mx-auto flex flex-col items-center gap-4 text-center">
          <p className="text-[0.72rem] tracking-[0.42em] uppercase font-extrabold text-saffron">
            Guest essentials
          </p>

          <h2 className="font-cursive text-[clamp(3.8rem,8vw,6.5rem)] leading-[0.95] text-saffron">
            Important FAQ
          </h2>

          <p className="max-w-[52rem] text-[#F2E7DB]/76 leading-[1.9] text-[1.05rem] mb-6">
            Use this section as the practical travel checklist before you leave, and treat the
            highlighted safety notes as the fastest things to save to your phone.
          </p>

          <span className="w-[5.5rem] h-px bg-saffron/50" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-12">
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
  );
}
