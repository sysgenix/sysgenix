import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineBuildingOffice2,
  HiOutlineShoppingCart,
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const cases = [
  {
    icon: HiOutlineBuildingOffice2,
    industry: "B2B & Professional Services",
    title: "Pipeline, Not Just Leads",
    description:
      "Account-based programs, LinkedIn thought leadership, and landing experiences tuned for long sales cycles.",
    outcomes: [
      "SQL quality scoring with CRM feedback loops",
      "Content clusters that rank for high-intent queries",
      "Webinar and event funnels with automated nurture",
    ],
  },
  {
    icon: HiOutlineShoppingCart,
    industry: "E-Commerce & D2C",
    title: "Profitable Scale",
    description:
      "Catalog SEO, shopping feeds, retention email, and creative testing that protects margin while growing revenue.",
    outcomes: [
      "MER and contribution margin reporting",
      "Lifecycle flows for first purchase → repeat",
      "Creative velocity for Meta / TikTok / Google",
    ],
  },
  {
    icon: HiOutlineAcademicCap,
    industry: "Education & Training",
    title: "Enrollment Journeys",
    description:
      "Multi-touch journeys across search, social, and partner channels with compliance-aware messaging.",
    outcomes: [
      "Localized landing and keyword strategy",
      "Scholarship and deadline-driven campaigns",
      "Call-center aligned lead routing",
    ],
  },
  {
    icon: HiOutlineGlobeAlt,
    industry: "Global & Regulated",
    title: "Markets Without Chaos",
    description:
      "Multi-language creative, regional compliance, and consolidated reporting for distributed teams.",
    outcomes: [
      "Consolidated dashboards across regions",
      "Consent and privacy-first tracking",
      "Shared creative system with local nuance",
    ],
  },
];

export default function DigitalMarketingUseCases() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-50/60 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Where We Win"
            title="Programs Built for"
            highlightText="Your Go-To-Market Reality"
            description="Different industries need different funnel math. Below are the playbooks we deploy most often — each grounded in measurement and creative rigor."
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {cases.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fc1660]/8 to-violet-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fc1660] to-violet-600 text-white flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-[#fc1660] mb-1">
                        {item.industry}
                      </div>
                      <h3 className="text-xl font-bold text-[#1e3a52] leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {item.outcomes.map((o, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[14px] text-gray-600"
                      >
                        <HiOutlineArrowRight className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
