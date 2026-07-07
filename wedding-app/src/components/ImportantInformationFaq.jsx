import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FAQ_GROUPS } from '../content/siteContent';

const COLORS = {
  saffron: '#FFCA28',
  offWhite: '#FFF8F0',
  softIvory: '#F2E7DB',
  mutedIvory: '#E2D3C6',
  warmOrange: '#FF7043',
  earthBrown: '#4E342E',
  earthLightBrown: '#6D4C41',
  gold: '#D4AF37',
};

const sectionIntroStyle = {
  maxWidth: '52rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  textAlign: 'center',
};

const groupShellStyle = {
  borderBottom: '1px solid rgba(255, 248, 240, 0.14)',
  overflow: 'hidden',
};

const groupHeaderStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '1.5rem',
  padding: '0 0 1.35rem',
  textAlign: 'left',
  border: 0,
  background: 'transparent',
  cursor: 'pointer',
};

const groupContentStyle = {
  padding: '0 0 0.6rem',
};

const answerRowStyle = {
  padding: '1.15rem 0 1.2rem',
  borderTop: '1px solid rgba(255, 248, 240, 0.1)',
};

const highlightRowStyle = {
  ...answerRowStyle,
  paddingLeft: '1rem',
  borderLeft: '2px solid rgba(255, 202, 40, 0.7)',
};



function FaqItemCard({ item }) {

  return (
    <article style={item.highlight ? highlightRowStyle : answerRowStyle}>
      <h3
        style={{
          marginTop: '0.75rem',
          fontSize: '0.92rem',
          fontWeight: 800,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: COLORS.offWhite,
        }}
      >
        {item.question}
      </h3>

      <p
        style={{
          marginTop: '0.7rem',
          color: item.highlight ? COLORS.softIvory : 'rgba(242, 231, 219, 0.82)',
          lineHeight: 1.9,
          fontSize: '1rem',
          maxWidth: '44rem',
        }}
      >
        {item.answer}
      </p>
    </article>
  );
}

function FaqGroup({ group, isOpen, onToggle }) {
  return (
    <article className="reveal" style={groupShellStyle}>
      <button
        type="button"
        style={groupHeaderStyle}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="space-y-3 text-left">
          <p
            className="font-headline uppercase"
            style={{
              fontSize: 'clamp(1.55rem, 4vw, 2.1rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: COLORS.saffron,
              lineHeight: 1,
            }}
          >
            {group.title}
          </p>
          <p
            style={{
              color: 'rgba(242, 231, 219, 0.72)',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '48rem',
            }}
          >
            {group.description}
          </p>
        </div>

        <span
          className="material-symbols-outlined shrink-0"
          aria-hidden="true"
          style={{
            width: '2rem',
            height: '2rem',
            display: 'inline-grid',
            placeItems: 'center',
            fontSize: '1.6rem',
            color: COLORS.saffron,
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          add
        </span>
      </button>

      {isOpen ? (
        <div style={groupContentStyle}>
          <div style={{ paddingTop: '0.2rem' }}>
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
        <div className="reveal" style={sectionIntroStyle}>
          <p
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              fontWeight: 800,
              color: COLORS.saffron,
            }}
          >
            Guest essentials
          </p>

          <h2
            className="font-cursive"
            style={{
              fontSize: 'clamp(3.8rem, 8vw, 6.5rem)',
              lineHeight: 0.95,
              color: COLORS.saffron,
            }}
          >
            Important FAQ
          </h2>

          <p
            style={{
              maxWidth: '52rem',
              color: 'rgba(242, 231, 219, 0.76)',
              lineHeight: 1.9,
              fontSize: '1.05rem',
              marginBottom: '1.5rem',
            }}
          >
            Use this section as the practical travel checklist before you leave, and treat the
            highlighted safety notes as the fastest things to save to your phone.
          </p>

          <span
            aria-hidden="true"
            style={{
              width: '5.5rem',
              height: '1px',
              background: 'rgba(255, 202, 40, 0.5)',
            }}
          />
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
