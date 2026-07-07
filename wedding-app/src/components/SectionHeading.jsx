export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const textColor = light ? 'text-white/78' : 'text-earth-brown/72';
  const titleColor = light ? 'text-white' : 'text-teal-bright';
  const dividerColor = light ? 'bg-saffron/50' : 'bg-gold-polished/60';

  return (
    <div className={`section-heading ${alignment}`}>
      {eyebrow ? (
        <p className={`section-eyebrow ${light ? 'text-saffron' : 'text-warm-orange'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`section-title ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`section-description ${textColor}`}>
          {description}
        </p>
      ) : null}
      <span className={`section-divider ${dividerColor}`} aria-hidden="true" />
    </div>
  );
}
