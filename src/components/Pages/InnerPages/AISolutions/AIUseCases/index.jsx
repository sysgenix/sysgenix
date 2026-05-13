import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineWrench,
  HiOutlineShoppingBag,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const useCases = [
  {
    icon: HiOutlineDocumentText,
    industry: "Finance & Operations",
    title: "Intelligent Document Processing",
    description:
      "Automate the ingestion, classification, and extraction of invoices, contracts, and KYC documents — with audit-grade accuracy.",
    outcomes: [
      "Reduce manual processing time by up to 80%",
      "Improve data accuracy with human-in-the-loop review",
      "Searchable, structured archives across departments",
    ],
  },
  {
    icon: HiOutlineUserGroup,
    industry: "Customer Experience",
    title: "Conversational AI & Copilots",
    description:
      "Deploy AI assistants and copilots that understand your products, your data, and your tone — across web, app, and contact center.",
    outcomes: [
      "24/7 multilingual support with personalized responses",
      "AI co-pilots that boost agent productivity",
      "Seamless escalation to humans when needed",
    ],
  },
  {
    icon: HiOutlineWrench,
    industry: "Industrial & Manufacturing",
    title: "Predictive Maintenance",
    description:
      "Forecast equipment failures before they happen using telemetry, sensor data, and ML — protecting uptime and capital assets.",
    outcomes: [
      "Lower unplanned downtime and emergency repairs",
      "Extend asset lifespan with proactive interventions",
      "Real-time anomaly detection across your fleet",
    ],
  },
  {
    icon: HiOutlineShoppingBag,
    industry: "Retail & E-Commerce",
    title: "Personalization & Demand Forecasting",
    description:
      "AI-driven recommendations, dynamic pricing, and demand prediction that increase basket size and reduce overstock.",
    outcomes: [
      "Higher conversion from intelligent recommendations",
      "Optimized inventory and supply planning",
      "Customer segmentation that drives retention",
    ],
  },
];

export default function AIUseCases() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Use Cases"
            title="Where AI Creates"
            highlightText="Measurable Value"
            description="Real applications — not theory. The use cases below show where Sysgenix typically deploys AI to deliver business outcomes."
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {useCases.map((uc, index) => {
              const Icon = uc.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl border border-gray-100 shadow-md p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                >
                  {/* Watermark number */}
                  <div className="absolute top-6 right-7 text-[80px] font-extrabold leading-none bg-gradient-to-br from-[#fc1660]/10 to-[#fc1660]/0 bg-clip-text text-transparent select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Top icon + industry pill */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white flex items-center justify-center shadow-lg shadow-[#fc1660]/20">
                      <Icon size={24} />
                    </div>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#fc1660] bg-[#fc1660]/10 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fc1660]" />
                      {uc.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-[26px] font-bold text-[#1e3a52] leading-snug mb-3 relative z-10">
                    {uc.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15px] mb-6 relative z-10">
                    {uc.description}
                  </p>

                  <div className="pt-6 border-t border-gray-100 relative z-10">
                    <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                      Typical Outcomes
                    </div>
                    <ul className="space-y-2.5">
                      {uc.outcomes.map((o, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14.5px] text-gray-700 leading-relaxed"
                        >
                          <HiOutlineArrowRight
                            className="mt-1 w-4 h-4 text-[#fc1660] flex-shrink-0"
                          />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
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
