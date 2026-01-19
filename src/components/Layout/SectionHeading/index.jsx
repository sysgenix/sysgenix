import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  TopHeading,
  HeadingThin,
  HeadingThinSeparate,
  Heading,
  BottomHeading,
  Description,
  topHeadingColor = "text-white",
  headingThinSeparateColor = "text-[#f94a65]",
  headingThinColor,
  bottomHeadingColor = "text-[#f94a65]",
  descriptionColor = "",
  gridClasses = "grid gap-3 md:gap-0",
  descriptionClasses = `${styles.HeadingContent} heading-content lg:mt-5 relative`,
}) {
  // Function to lowercase connecting words but keep the first word capitalized
  const formatHeadingText = (text) => {
    if (!text) return "";
    const connectingWords = [
      "and",
      "of",
      "the",
      "in",
      "on",
      "at",
      "to",
      "for",
      "with",
      "by",
      "from",
      "a",
      "us",
      "an",
    ];

    // Split into words
    const words = text.split(" ");
    return words
      .map((word, index) => {
        // If first word → keep as is (don’t lowercase)
        if (index === 0) return capitalizeFirstWord(word);

        // Lowercase connecting words only
        if (connectingWords.includes(word.toLowerCase())) {
          return word.toLowerCase();
        }

        return word;
      })
      .join(" ");
  };

  // Helper to capitalize first letter of the first word
  const capitalizeFirstWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className="heading-col overflow-hidden">
      {TopHeading && (
        <div className={`${styles.TopHeading} leading-tight ${topHeadingColor}`}>
          {formatHeadingText(TopHeading)}
        </div>
      )}

      <div className={gridClasses}>
        <h2 className={styles.HeadingTitle}>
          {HeadingThinSeparate && (
            <div
              className={`heading-thin-sep title-anim ${headingThinSeparateColor}`}
              dangerouslySetInnerHTML={{
                __html: formatHeadingText(HeadingThinSeparate),
              }}
            />
          )}

          <div className={`font-semibold title-anim ${headingThinColor}`}>
            {HeadingThin && (
              <span
                className="heading-thin font-semibold mr-2"
                dangerouslySetInnerHTML={{
                  __html: formatHeadingText(HeadingThin),
                }}
              />
            )}
            {Heading &&(
            <span
              dangerouslySetInnerHTML={{
                __html: formatHeadingText(Heading),
              }}
            />
            ) }
          </div>
        </h2>

        {BottomHeading && (
          <div className={`top-heading leading-tight ${bottomHeadingColor}`}>
            {formatHeadingText(BottomHeading)}
          </div>
        )}

        {Description && (
          <div
            className={`${descriptionClasses} ${descriptionColor}`}
            dangerouslySetInnerHTML={{ __html: Description }}
          />
        )}
      </div>
    </div>
  );
}
