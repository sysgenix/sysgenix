import Link from "next/link";
import Image from "next/image";

export default function Button({
  href = "#",
  children,
  variant = "outline",
  isFixed = false,
  fullWidth = false,
  imageSrc,
  imageAlt = "",
  imageSize = 24,
  tabIndex,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold py-2 px-4 tracking-wider border transition-colors duration-300 cursor-pointer group overflow-hidden";

  const widthClass = fullWidth ? "w-full" : "w-auto";

  const variantStyles = {
    outline: isFixed
      ? "border-(--primary-color) text-(--primary-color) bg-transparent hover:bg-white"
      : "border-(--primary-color) text-white bg-transparent hover:bg-gray-900",

    solid:
      "border-(--primary-color) bg-(--primary-color) text-white hover:bg-gray-900",
  };

  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      className={`${base} ${widthClass} ${variantStyles[variant]} ${className}`}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageSize}
          height={imageSize}
        />
      )}

      {/* 🔥 TEXT SLIDE EFFECT (ADDED ONLY) */}
      <span className="relative  overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </Link>
  );
}
