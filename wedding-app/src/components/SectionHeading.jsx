export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const textColor = light ? 'text-white/78' : 'text-earth-brown/72';
  const titleColor = light ? 'text-white' : 'text-teal-bright';
  const dividerColor = light ? 'bg-saffron/50' : 'bg-gold-polished/60';

  return (
    <div className={`flex flex-col gap-4 max-w-[52rem] mx-auto ${alignment}`}>
      {eyebrow ? (
        <p className={`text-[0.72rem] tracking-[0.42em] uppercase font-extrabold ${light ? 'text-saffron' : 'text-warm-orange'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-cursive text-[clamp(3.8rem,8vw,6.5rem)] leading-[0.95] font-bold ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-[1.05rem] leading-[1.9] max-md:text-[0.98rem] max-md:leading-[1.8] ${textColor}`}>
          {description}
        </p>
      ) : null}
      <span className={`w-[5.5rem] h-px ${dividerColor}`} aria-hidden="true" />
    </div>
  );
}
