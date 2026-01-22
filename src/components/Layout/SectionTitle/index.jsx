export default function SectionTitle({
  badgeText,
  title,
  highlightText,
  description,

  // Text alignment
  align = 'left',

  // ✅ NEW: container alignment
  containerAlign = 'left',

  // Optional class overrides
  wrapperClass = '',
  badgeClass = '',
  titleClass = '',
  highlightClass = '',
  descriptionClass = '',
}) {
  if (!badgeText && !title && !highlightText && !description) return null;

  const alignClass =
    align === 'left'
      ? 'text-left'
      : align === 'right'
      ? 'text-right'
      : 'text-center';

  // ✅ NEW: container positioning
  const containerClass =
    containerAlign === 'center' ? 'mx-auto' : '';

  return (
    <div
      className={`max-w-4xl mb-16 ${containerClass} ${alignClass} ${wrapperClass}`}
    >
      {badgeText && (
        <span
          className={`inline-block mb-6 px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm bg-white text-(--primary-color) ${badgeClass}`}
        >
          {badgeText}
        </span>
      )}

      {(title || highlightText) && (
        <h2
          className={`text-4xl md:text-5xl font-extrabold leading-tight text-[#1e3a52] ${titleClass}`}
        >
          {title}

          {highlightText && (
            <>
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-(--primary-color) to-(--secondary-color) ${highlightClass}`}
              >
                {highlightText}
              </span>
            </>
          )}
        </h2>
      )}

      {description && (
        <p
          className={`mt-8 text-lg font-light leading-relaxed text-gray-500 ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
