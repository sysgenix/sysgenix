import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./WebSolutionsCapabilities.module.css";

import {
  HiOutlineCodeBracket,
  HiOutlineSquares2X2,
  HiOutlineShoppingCart,
  HiOutlineCubeTransparent,
  HiOutlinePencilSquare,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const capabilities = [
  {
    icon: HiOutlineCodeBracket,
    title: "Custom Website Development",
    description:
      "Enterprise-grade websites built for performance, scalability, and long-term maintainability across modern devices.",
  },
  {
    icon: HiOutlineSquares2X2,
    title: "Web Application Development",
    description:
      "Secure, scalable web applications designed to support complex workflows and business-critical operations.",
  },
  {
    icon: HiOutlineShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Robust e-commerce platforms focused on conversion, secure transactions, and seamless customer journeys.",
  },
  {
    icon: HiOutlineCubeTransparent,
    title: "CMS & Headless Platforms",
    description:
      "Flexible content management systems that give teams control without sacrificing speed or structure.",
  },
  {
    icon: HiOutlinePencilSquare,
    title: "UI / UX Engineering",
    description:
      "User-centric interface design driven by usability, accessibility, and data-informed design decisions.",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: "Maintenance & Optimization",
    description:
      "Continuous performance tuning, security updates, and enhancements to ensure reliability and uptime.",
  },
];

export default function WebSolutionsCapabilities() {
  return (
    <section className={styles.CapabilitiesSection}>
      <div className={styles.overlay} />
      <Container>
       <div className="relative z-2">
         <SectionTitle
          badgeText="Capabilities"
          title="What We Deliver"
          titleClass="text-white"
          highlightText="Through Web Solutions"
          highlightClass="text-white"
          titleSize="text-2xl md:text-5xl"
          marginBottom="mb-14"
          align="center"
          containerAlign="center"
        />

       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className={`${styles.webdevCard} p-8`}>
                {/* Accent bar */}
                {/* <span
                  className={`absolute inset-x-0 top-0 h-[3px] bg-white opacity-0 rounded-t-2xl ${styles.accentBar}`}
                /> */}

                {/* Icon */}
                <div
                  className={`mb-6 w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-[#fc1660] ${styles.iconBox}`}
                >
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-semibold mb-3 ${styles.title}`}>
                  {item.title}
                </h3>

                <p className={`text-[15px] leading-relaxed ${styles.desc}`}>
                  {item.description}
                </p>

                {/* Hover underline */}
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
