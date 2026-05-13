import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./AboutValues.module.css";

import {
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineHandRaised,
  HiOutlineSparkles,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

const values = [
  {
    icon: HiOutlineLightBulb,
    title: "Engineering Excellence",
    description:
      "Every solution is engineered with discipline, clarity, and craft — built to perform at the core of business-critical operations.",
  },
  {
    icon: HiOutlineHandRaised,
    title: "Integrity First",
    description:
      "We operate with transparency, honest communication, and full accountability — at every stage of the engagement.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Partnership Mindset",
    description:
      "We work as an extension of your team, aligning our success with yours and committing to long-term outcomes.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Security & Trust",
    description:
      "Security is built in from day one — protecting your data, your systems, and the trust your customers place in you.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Continuous Innovation",
    description:
      "We invest in modern technologies, new ideas, and continuous learning to keep your business one step ahead.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Outcome Obsessed",
    description:
      "We measure ourselves by the impact we deliver — uptime, growth, efficiency, and the real results your business sees.",
  },
];

export default function AboutValues() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.overlay} />
      <Container>
        <div className="relative z-2">
          <SectionTitle
            badgeText="Core Values"
            title="The Principles That Shape"
            titleClass="text-white"
            highlightText="How We Work"
            highlightClass="text-white"
            titleSize="text-2xl md:text-5xl"
            marginBottom="mb-14"
            align="center"
            containerAlign="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`${styles.valueCard} p-8`}>
                <div
                  className={`mb-6 w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-[#fc1660] ${styles.iconBox}`}
                >
                  <Icon size={22} />
                </div>

                <h3 className={`text-lg font-semibold mb-3 ${styles.title}`}>
                  {item.title}
                </h3>

                <p className={`text-[15px] leading-relaxed ${styles.desc}`}>
                  {item.description}
                </p>

                <div
                  className={`mt-6 h-[1px] w-0 bg-white transition-all duration-300 ${styles.underline}`}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
