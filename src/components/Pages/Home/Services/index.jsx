import Link from "next/link";
import styles from "./Services.module.css";
import SectionTitle from "@/components/Layout/SectionTitle";
import Button from "@/components/ui/Button";
import {
  HiOutlineCodeBracket,
  HiOutlineMegaphone,
  HiOutlineCloud,
  HiOutlineServerStack,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineWifi,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import Container from "@/components/Layout/Container";

const services = [
  {
    id: 1,
    title: "Web Solutions",
    description:
      "High-performance, scalable websites and web applications built with modern frameworks to drive growth.",
    link: "/web-solutions",
    icon: HiOutlineCodeBracket,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies including SEO, PPC, and social media to maximize ROI.",
    link: "/digital-marketing",
    icon: HiOutlineMegaphone,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Secure cloud infrastructure setup, migration, and management for enterprise scalability.",
    link: "/cloud-solutions",
    icon: HiOutlineCloud,
  },
  {
    id: 4,
    title: "IT Infrastructure Solutions",
    description:
      "End-to-end IT infrastructure planning, deployment, and optimization for reliable business operations.",
    link: "/it-infrastructure",
    icon: HiOutlineServerStack,
  },
  {
    id: 5,
    title: "Software Solutions",
    description:
      "Custom software development solutions designed to automate workflows and scale with your business.",
    link: "/software-solutions",
    icon: HiOutlineCpuChip,
  },
  {
    id: 6,
    title: "Security Solutions",
    description:
      "Comprehensive cybersecurity solutions including audits, monitoring, and threat protection.",
    link: "/security-solutions",
    icon: HiOutlineShieldCheck,
  },
  {
    id: 7,
    title: "Wireless Solutions",
    description:
      "Reliable wireless network design and implementation for seamless connectivity and performance.",
    link: "/wireless-solutions",
    icon: HiOutlineWifi,
  },
  {
    id: 8,
    title: "Design & Print Solutions",
    description:
      "Creative branding, graphic design, and premium print solutions to strengthen brand identity.",
    link: "/design-print-solutions",
    icon: HiOutlinePaintBrush,
  },
];


const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#fc1660]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
        <SectionTitle
          badgeText="Our Expertise"
          title="Empowering Business With"
          highlightText="Next-Gen Technology"
          description="We deliver a full spectrum of IT services — from development to deployment and beyond."
          align="center"
          containerAlign="center"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delayClass = styles[`delay${(index + 1) * 100}`] || "";

            return (
              <Link
              href={service.link}
                key={service.id}
                className={`${styles.serviceCard} ${styles.cardAnimate} ${delayClass}
                p-8 rounded-2xl border border-gray-100 shadow-sm cursor-pointer group`}
              >
                {/* Watermark */}
                <div className={styles.watermark}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className={`${styles.iconBox} w-16 h-16 rounded-xl flex items-center justify-center mb-8`}
                >
                  <Icon className="text-3xl transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className={`${styles.cardTitle} text-xl font-bold text-[#1e3a52] mb-4`}>
                  {service.title}
                </h3>

                <p className={`${styles.cardDesc} text-gray-500 text-sm leading-relaxed mb-8 h-20`}>
                  {service.description}
                </p>

                {/* Read More */}
                <div
                 
                  className={`${styles.arrowLink} inline-flex items-center font-bold text-sm tracking-wide uppercase`}
                >
                  Read More
                  <svg
                    className={`${styles.arrowIcon} w-4 h-4 ml-2 transition-transform duration-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All */}
        {/* <div className="mt-16 text-center">
          <Button href="/services" variant="solid">
            View All Services
          </Button>
        </div> */}
      </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
