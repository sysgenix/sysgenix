import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./DigitalMarketingChannels.module.css";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineBolt,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
  HiOutlineEnvelope,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";

const channels = [
  {
    icon: HiOutlineMagnifyingGlass,
    title: "SEO & Organic Growth",
    description:
      "Technical SEO, content architecture, and authority programs that compound visibility where intent is highest.",
    tags: ["Technical", "Content", "E-E-A-T"],
  },
  {
    icon: HiOutlineBolt,
    title: "Paid Media & Performance",
    description:
      "Search, social, and display campaigns with rigorous audience design, bidding strategy, and creative iteration.",
    tags: ["Google", "Meta", "LinkedIn"],
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Social & Community",
    description:
      "Brand voice, creator workflows, and community programs that turn followers into customers and advocates.",
    tags: ["Organic", "Paid social", "UGC"],
  },
  {
    icon: HiOutlinePencilSquare,
    title: "Content & Story",
    description:
      "Editorial calendars, landing narratives, and assets engineered for both humans and algorithms.",
    tags: ["Web", "Video", "Long-form"],
  },
  {
    icon: HiOutlineEnvelope,
    title: "Lifecycle & CRM",
    description:
      "Email, SMS, and in-product journeys that nurture leads, reduce churn, and lift lifetime value.",
    tags: ["Automation", "Segments", "CDP"],
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "Analytics & Attribution",
    description:
      "GA4, server-side tagging, dashboards, and modeled attribution so leadership sees what actually works.",
    tags: ["GA4", "GTM", "Looker"],
  },
];

export default function DigitalMarketingChannels() {
  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} />

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Channels"
            title="Full-Funnel Marketing"
            highlightText="Under One Roof"
            titleClass="text-white"
            highlightClass="text-white"
            descriptionClass="text-gray-300!"
            description="Six disciplines, one operating model. We orchestrate channels so spend, creative, and measurement reinforce each other instead of fighting in silos."
            titleSize="text-2xl md:text-5xl"
            marginBottom="mb-14"
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {channels.map((item, index) => {
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
