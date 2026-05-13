import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiOutlineRocketLaunch, HiOutlineEye } from "react-icons/hi2";

const blocks = [
  {
    icon: HiOutlineRocketLaunch,
    label: "Our Mission",
    title: "Engineer technology that drives measurable business outcomes.",
    text: "We empower enterprises to modernize, scale, and compete by delivering integrated technology solutions built on engineering excellence, security, and long-term reliability — solutions that solve real problems and create real value.",
    bullets: [
      "Solve complex business challenges with the right technology",
      "Engineer for performance, security, and longevity",
      "Deliver outcomes — not just deliverables",
    ],
  },
  {
    icon: HiOutlineEye,
    label: "Our Vision",
    title: "To be the most trusted technology partner for forward-looking organizations.",
    text: "We envision a future where every enterprise — regardless of size or sector — operates on a unified, intelligent, and resilient technology foundation. Our role is to engineer that future, one partnership at a time.",
    bullets: [
      "A global standard for integrated digital infrastructure",
      "Transparent, partnership-led delivery at every step",
      "Future-ready solutions built to evolve with your business",
    ],
  },
];

export default function AboutMissionVision() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Soft background blobs (consistent with rest of site) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Mission & Vision"
            title="Purpose-Driven."
            highlightText="Engineering-Led."
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Accent bar */}
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#fc1660] to-[#ff6b6b]" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white shadow-lg">
                      <Icon size={26} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#fc1660]">
                      {block.label}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-[26px] font-bold text-[#1e3a52] leading-snug mb-4">
                    {block.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                    {block.text}
                  </p>

                  <ul className="space-y-3">
                    {block.bullets.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#fc1660] flex-shrink-0" />
                        <span>{point}</span>
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
