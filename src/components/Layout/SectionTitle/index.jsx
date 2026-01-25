export default function SectionTitle({
  badgeText,
  title,
  highlightText,
  description,

  // Text alignment
  align = "left",

  // Container alignment
  containerAlign = "left",

  // ✅ NEW: layout controls
  maxWidth = "max-w-4xl",
  marginBottom = "mb-16",
  padding = "",

  // Text sizes
  badgeSize = "text-xs md:text-sm",
  titleSize = "text-4xl md:text-5xl",
  highlightSize = "",
  descriptionSize = "text-lg",

  // Optional class overrides
  wrapperClass = "",
  badgeClass = "",
  titleClass = "",
  highlightClass = "",
  descriptionClass = "",
}) {
  if (!badgeText && !title && !highlightText && !description) return null;

  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  const containerClass = containerAlign === "center" ? "mx-auto" : "";

  return (
    <div
      className={`${maxWidth} ${marginBottom} ${padding} ${containerClass} ${alignClass} ${wrapperClass}`}
    >
      {badgeText && (
        <span
          className={`inline-block mb-6 px-6 py-2 rounded-full font-bold tracking-widest uppercase shadow-sm bg-white text-(--primary-color) ${badgeSize} ${badgeClass}`}
        >
          {badgeText}
        </span>
      )}

      {(title || highlightText) && (
        <h2
          className={`font-extrabold leading-tight text-[#1e3a52] ${titleSize} ${titleClass}`}
        >
          {title}

          {highlightText && (
            <>
              <br />
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-(--primary-color) to-(--secondary-color) ${
                  highlightSize || titleSize
                } ${highlightClass}`}
              >
                {highlightText}
              </span>
            </>
          )}
        </h2>
      )}

      {description && (
        <p
          className={`mt-8 font-light leading-relaxed text-gray-500 ${descriptionSize} ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
