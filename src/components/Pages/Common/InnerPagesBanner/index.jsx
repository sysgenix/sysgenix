import Image from "next/image";
import Link from "next/link";
import styles from "./PageBanner.module.css";

const InnerPagesBanner = ({ pageTitle, description, breadcrumbs, bgImage }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-[#0f172a] flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgImage && (
          <div className={`relative w-full h-full ${styles.bgZoom}`}>
            <Image
              src={bgImage}
              alt={pageTitle}
              fill
              priority
              className="object-cover object-center opacity-50"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
      </div>

      {/* Effects */}
      <div className={styles.activeGrid}></div>
      <div className={styles.glowSpot}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 mt-[85px]">
        <div className="max-w-4xl">

          {/* Breadcrumbs */}
          <div className={`inline-block mb-6 ${styles.revealText}`}>
            <nav className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <Link href="/" className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider">
                Home
              </Link>

              {breadcrumbs?.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-600 text-[10px] mx-2">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-xs font-bold text-[#fc1660] uppercase tracking-wider">
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Title */}
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 ${styles.revealText} ${styles.delay100}`}>
            {pageTitle}
          </h1>

          <div className={`h-1.5 bg-[#fc1660] rounded-full mb-8 ${styles.lineGrow}`}></div>

          {/* Dynamic Description */}
          {description && (
            <p className={`text-lg text-gray-300 max-w-xl font-light leading-relaxed ${styles.revealText} ${styles.delay300}`}>
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default InnerPagesBanner;
