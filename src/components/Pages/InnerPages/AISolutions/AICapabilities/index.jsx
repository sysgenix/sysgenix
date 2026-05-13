import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./AICapabilities.module.css";
import {
  HiOutlineCpuChip,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEye,
  HiOutlineChartBar,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const capabilities = [
  {
    icon: HiOutlineCpuChip,
    title: "Custom ML Models",
    description:
      "Domain-specific machine learning models — from training to deployment — built around your data and business outcomes.",
    tags: ["TensorFlow", "PyTorch", "MLOps"],
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Generative AI & LLMs",
    description:
      "Enterprise-grade LLM applications, RAG pipelines, and AI copilots that integrate securely with your internal data.",
    tags: ["GPT", "Claude", "RAG"],
  },
  {
    icon: HiOutlineEye,
    title: "Computer Vision",
    description:
      "Image and video intelligence for quality inspection, safety monitoring, OCR, and automated visual workflows.",
    tags: ["OpenCV", "YOLO", "OCR"],
  },
  {
    icon: HiOutlineChartBar,
    title: "Predictive Analytics",
    description:
      "Forecasting, demand planning, and risk scoring models that turn historical signals into forward-looking decisions.",
    tags: ["Forecasting", "Risk", "BI"],
  },
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    title: "Intelligent Document AI",
    description:
      "Extract, classify, and route information from contracts, invoices, and forms — with human-in-the-loop accuracy.",
    tags: ["NLP", "Extraction", "Search"],
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "AI-Powered Automation",
    description:
      "Intelligent automation that combines workflows, decisions, and AI agents to remove operational friction at scale.",
    tags: ["Agents", "RPA", "Orchestration"],
  },
];

export default function AICapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} />

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Capabilities"
            title="What We Build With"
            highlightText="Artificial Intelligence"
            titleClass="text-white"
            highlightClass="text-white"
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
