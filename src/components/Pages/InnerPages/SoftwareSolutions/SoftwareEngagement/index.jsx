import Link from "next/link";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineCubeTransparent } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi2";

const models = [
  {
    icon: HiOutlineCubeTransparent,
    name: "Fixed Scope Delivery",
    blurb: "Milestones, acceptance criteria, and a defined backlog — ideal when requirements are clear and timing is fixed.",
    bullets: [
      "Discovery → design → build → UAT → launch",
      "Fixed-price or capped T&M options",
      "Documentation and handoff included",
    ],
  },
  {
    icon: HiOutlineUserGroup,
    name: "Embedded Product Team",
    blurb: "A cross-functional squad that ships continuously alongside your stakeholders — PM, design, backend, frontend, QA.",
    bullets: [
      "Sprint cadence aligned to your rituals",
      "Shared backlog and transparent velocity",
      "Scales up or down by discipline",
    ],
    featured: true,
  },
  {
    icon: HiOutlineBriefcase,
    name: "Modernize & Sustain",
    blurb: "Rescue fragile systems, pay down technical debt, then operate with SLAs — monitoring, patching, and roadmap grooming.",
    bullets: [
      "Stabilize → refactor → extract services",
      "Runbooks and on-call as needed",
      "Roadmap co-owned with your leadership",
    ],
  },
];

export default function SoftwareEngagement() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <SectionTitle
          badgeText="Engagement Models"
          title="Flexibility in How We"
          highlightText="Partner With You"
          description="The right model depends on clarity of scope, internal capacity, and how much velocity you need. Most clients start with a focused initiative and evolve into embedded delivery."
          align="center"
          containerAlign="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl border bg-white p-8 flex flex-col transition-all duration-300 ${
                  m.featured
                    ? "border-transparent shadow-2xl ring-1 ring-sky-500/20 lg:-translate-y-2"
                    : "border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {m.featured && (
                  <>
                    <div className="absolute inset-x-0 -top-px h-[3px] bg-gradient-to-r from-sky-500 to-[#fc1660] rounded-t-2xl" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-sky-500 to-[#fc1660] px-3 py-1 rounded-full shadow-md">
                      Most common
                    </span>
                  </>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    m.featured
                      ? "bg-gradient-to-br from-sky-500 to-[#fc1660] text-white shadow-lg"
                      : "bg-sky-50 text-sky-600 border border-sky-100"
                  }`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-extrabold text-[#1e3a52] mb-2">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 min-h-[48px]">
                  {m.blurb}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {m.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[14px] text-gray-600 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[14px] transition-all ${
                    m.featured
                      ? "bg-gradient-to-r from-sky-500 to-[#fc1660] text-white shadow-lg shadow-sky-500/25"
                      : "border-2 border-[#1e3a52] text-[#1e3a52] hover:bg-[#1e3a52] hover:text-white"
                  }`}
                >
                  Discuss this model
                  <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
