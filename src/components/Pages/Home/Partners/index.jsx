"use client";
import Image from "next/image";
import styles from "./Partners.module.css";
import SectionTitle from "@/components/Layout/SectionTitle";

const row1 = [
  { name: "Microsoft", src: "/images/home/partners/microsoft-logo.png" },
  { name: "AWS", src: "/images/home/partners/aws.svg" }, 
  { name: "IBM", src: "/images/home/partners/ibm.svg" },
  { name: "Veeam", src: "/images/home/partners/veeam.svg" },
  { name: "ConnectWise", src: "/images/home/partners/connectwise.svg" },
  { name: "BitTitan", src: "/images/home/partners/bittitan.svg" },
];

const row2 = [
  { name: "N-Able", src: "/images/home/partners/n-able.svg" },
  { name: "SentinelOne", src: "/images/home/partners/microsoft-logo.png" },
  { name: "Proofpoint", src: "/images/home/partners/proofpoint.svg" },
  { name: "WatchGuard", src: "/images/home/partners/watchguard.svg" },
  { name: "Acronis", src: "/images/home/partners/acronis.svg" },
  { name: "Exclaimer", src: "/images/home/partners/exclaimer.svg" },
];

const Partners = () => {
  return (
    <section className={`${styles.partnersSection} py-20 bg-white border-t border-white/5 overflow-hidden`}>
      
      <SectionTitle
          badgeText="Our Ecosystem"
          title="Strategic Alliances with"
          highlightText="Global Tech Leaders"
          align="center"
          containerAlign="center"
      />       

      {/* --- ROW 1: Moving Left --- */}
      <div className={`${styles.marqueeContainer} mb-6`}>
        {/* Track 1 */}
        <div className={styles.track}>
          {row1.map((partner, i) => (
            <LogoItem key={i} partner={partner} />
          ))}
        </div>
        {/* Track 1 Duplicate */}
        <div className={styles.track} aria-hidden="true">
          {row1.map((partner, i) => (
            <LogoItem key={`dup-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* --- ROW 2: Moving Right (Reverse) --- */}
      <div className={styles.marqueeContainer}>
        {/* Track 2 */}
        <div className={styles.trackReverse}>
          {row2.map((partner, i) => (
            <LogoItem key={i} partner={partner} />
          ))}
        </div>
        {/* Track 2 Duplicate */}
        <div className={styles.trackReverse} aria-hidden="true">
          {row2.map((partner, i) => (
            <LogoItem key={`dup-${i}`} partner={partner} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

// Helper Component
const LogoItem = ({ partner }) => (
  <div className="relative w-40 h-20 flex items-center justify-center flex-shrink-0">   
    {partner.src ? (
      <Image 
        src={partner.src} 
        alt={partner.name} 
        fill
        className={`${styles.partnerLogo} object-contain max-h-32 w-auto`}
        onError={(e) => {
            e.target.style.display='none'; 
            e.target.nextSibling.style.display='block';
        }}
      />
    ) : null}
    
    {/* Fallback Text */}
    <span 
        className="hidden text-gray-500 font-bold text-xl uppercase tracking-wider transition-colors"
        style={{ display: partner.src ? 'none' : 'block' }}
    >
        {partner.name}
    </span>
  </div>
);

export default Partners;