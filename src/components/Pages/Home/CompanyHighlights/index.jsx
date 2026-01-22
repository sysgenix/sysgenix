"use client";
import styles from "./CompanyHighlights.module.css";
import Section from "@/components/Layout/Section";

export default function CompanyHighlights() {
  const items = [
    "IT Infrastructure",
    "IT Security Solutions",
    "Business Communication",
    "Business Solutions",
    "Software Solutions",
    "Web Solutions",
    "Test & Measurement Solution",
    "Wireless Solution",
    "Contact Center Solutions",
    "Telecom Solutions",
    "Office Telephone Systems",
    "Video Conferencing System",
    "Vehicle Security & Fleet Management Software",
    "System Integrator",
    "Cloud Operations",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <section className="overflow-hidden">
      <div className={styles.highlightBar}>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {marqueeItems.map((item, index) => (
              <span className={styles.marqueeItem} key={index}>
                {item}
                {index !== marqueeItems.length - 1 && (
                  <span className={styles.dot} />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
