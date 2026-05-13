import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineWrench,
  HiOutlineArrowTrendingUp,
  HiOutlinePlayCircle,
} from "react-icons/hi2";

const steps = [
  {
    icon: HiOutlineMagnifyingGlass,
    week: "Week 1",
    title: "Audit",
    description:
      "Architecture review, IAM & security posture, monitoring gaps, cost waste, and runbook completeness — captured as a baseline scorecard.",
  },
  {
    icon: HiOutlineWrench,
    week: "Weeks 2–3",
    title: "Stabilize",
    description:
      "Close critical gaps: alerting coverage, backup verification, IAM hygiene, patch baseline, and incident on-call wired to your channels.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    week: "Weeks 3–4",
    title: "Optimize",
    description:
      "Right-size workloads, eliminate idle spend, harden security policies, and codify what's manual into automated, auditable runbooks.",
  },
  {
    icon: HiOutlinePlayCircle,
    week: "Day 30+",
    title: "Operate",
    description:
      "We assume daily operations under SLA. Monthly business reviews, quarterly DR drills, and a shared backlog of continuous improvements.",
  },
];

export default function CloudOpsOnboarding() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle
          badgeText="Onboarding"
          title="From Handoff to"
          highlightText="Steady-State in 30 Days"
          description="A predictable, four-stage takeover that gets your cloud operated to enterprise standards inside one month — without disrupting what's already running."
          align="center"
          containerAlign="center"
        />

        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#fc1660]/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-7"
                >
                  {/* Step number */}
                  <span className="absolute top-5 right-5 text-[44px] leading-none font-extrabold text-[#fc1660]/10 group-hover:text-[#fc1660]/20 transition-colors">
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#fc1660]/25 relative z-10">
                    <Icon size={26} />
                  </div>

                  {/* Week */}
                  <div className="text-[11px] uppercase tracking-widest font-bold text-[#fc1660] mb-2">
                    {s.week}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1e3a52] mb-3 leading-snug">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {s.description}
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
