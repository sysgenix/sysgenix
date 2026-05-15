import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineMap,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineRocketLaunch,
  HiOutlineChartPie,
  HiOutlineArrowPath,
} from "react-icons/hi2";

const phases = [
  {
    icon: HiOutlineMap,
    title: "Growth Map",
    description:
      "Audits, competitive landscape, ICP clarity, and channel-mix modeling — aligned to revenue goals and seasonality.",
  },
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Build & Instrument",
    description:
      "Tracking plans, audiences, creative systems, and landing infrastructure so every test is measurable from day one.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Launch & Scale",
    description:
      "Phased spend with guardrails, weekly creative rotations, and rapid iteration on winners across paid and organic.",
  },
  {
    icon: HiOutlineChartPie,
    title: "Optimize & Allocate",
    description:
      "Budget reallocation, bid and creative tuning, CRO sprints, and SEO compounding — driven by attribution signals.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Report & Evolve",
    description:
      "Executive-ready reporting, quarterly strategy reviews, and a backlog of experiments that keeps the engine fresh.",
  },
];

export default function DigitalMarketingProcess() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          badgeText="How We Work"
          title="A Repeatable Rhythm for"
          highlightText="Sustainable Growth"
          titleSize="text-3xl md:text-5xl"
          marginBottom="mb-20"
          align="center"
          containerAlign="center"
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-[#fc1660] flex items-center justify-center text-white shadow-lg shadow-violet-500/30 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-violet-500 text-violet-600 text-xs font-bold flex items-center justify-center shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1e3a52] mb-2 text-center leading-snug">
                    {phase.title}
                  </h3>

                  <p className="text-[13.5px] text-gray-500 leading-relaxed text-center">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
