import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "../SoftwareCapabilities.module.css";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineLink,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineCpuChip,
  HiOutlineCloud,
} from "react-icons/hi2";

const capabilities = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Web & Customer Portals",
    description:
      "Responsive web apps, authenticated portals, and self-service experiences with performance and accessibility baked in.",
    tags: ["Next.js", "React", "APIs"],
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Mobile Experiences",
    description:
      "Cross-platform and native-adjacent apps when your users live on the go — offline-first where it matters.",
    tags: ["iOS", "Android", "PWA"],
  },
  {
    icon: HiOutlineLink,
    title: "Integrations & APIs",
    description:
      "Connect ERP, CRM, payments, and logistics. Event-driven pipelines, webhooks, and stable contract-first APIs.",
    tags: ["REST", "GraphQL", "Events"],
  },
  {
    icon: HiOutlineArrowPathRoundedSquare,
    title: "Legacy Modernization",
    description:
      "Strangler-fig migrations, service extraction, and data replatforming — without stopping the business.",
    tags: [".NET", "Java", "DB"],
  },
  {
    icon: HiOutlineCpuChip,
    title: "Internal Platforms & Tools",
    description:
      "Operator consoles, workflow engines, and admin systems that turn tribal knowledge into reliable software.",
    tags: ["Workflows", "RBAC", "Audit"],
  },
  {
    icon: HiOutlineCloud,
    title: "Cloud-Native Delivery",
    description:
      "Containers, infrastructure-as-code, observability, and secure SDLC aligned with your cloud posture.",
    tags: ["AWS", "Azure", "GCP"],
  },
];

export default function SoftwareCapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} />

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Capabilities"
            title="Engineering Scope That"
            highlightText="Covers the Full Stack"
            titleClass="text-white"
            highlightClass="text-white"
            descriptionClass="text-gray-300!"
            description="From customer-facing products to deep system integration — we build software that is observable, testable, and ready for regulated or high-scale environments."
            titleSize="text-2xl md:text-5xl"
            marginBottom="mb-14"
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={styles.glassCard}>
                  <div className={`${styles.iconTile} mb-6`}>
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[14.5px] text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
