import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./CloudCapabilities.module.css";
import {
  HiOutlineCloudArrowUp,
  HiOutlineCubeTransparent,
  HiOutlineArrowsRightLeft,
  HiOutlineShieldCheck,
  HiOutlineBanknotes,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const capabilities = [
  {
    icon: HiOutlineCloudArrowUp,
    title: "Cloud Migration",
    description:
      "Risk-managed migrations across rehost, replatform, and refactor — moving workloads to AWS, Azure, or GCP with zero data loss.",
  },
  {
    icon: HiOutlineCubeTransparent,
    title: "Cloud-Native Architecture",
    description:
      "Containers, serverless, microservices, and event-driven design — built for elasticity, resilience, and rapid release cycles.",
  },
  {
    icon: HiOutlineArrowsRightLeft,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure-as-code, GitOps, and automated testing that ship faster and break less.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Cloud Security & Compliance",
    description:
      "Zero-trust networking, identity-first security, continuous compliance, and threat detection across your cloud estate.",
  },
  {
    icon: HiOutlineBanknotes,
    title: "FinOps & Cost Optimization",
    description:
      "Visibility, accountability, and engineering practices that keep cloud spend efficient and predictable.",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: "Managed Cloud Operations",
    description:
      "24/7 monitoring, patching, backups, and incident response — your cloud, operated to enterprise SLAs.",
  },
];

export default function CloudCapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <Container>
        <div className="relative z-2">
          <SectionTitle
            badgeText="Capabilities"
            title="The Full Cloud Lifecycle"
            highlightText="Under One Roof"
            titleClass="text-white"
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
              <div key={index} className={`${styles.cloudCard} p-8`}>
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
