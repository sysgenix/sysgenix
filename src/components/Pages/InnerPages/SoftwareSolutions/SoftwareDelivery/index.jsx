import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineClipboardDocumentList,
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
  HiOutlineLifebuoy,
} from "react-icons/hi2";

const stages = [
  {
    icon: HiOutlineClipboardDocumentList,
    title: "Discover",
    detail: "Stakeholder workshops, domain modeling, risk register, and a thin architectural spike where needed.",
  },
  {
    icon: HiOutlinePaintBrush,
    title: "Design",
    detail: "UX flows, API contracts, data model, and non-functional requirements — security, performance, compliance.",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Build",
    detail: "Vertical slices with code review, static analysis, and trunk-based integration to mainline.",
  },
  {
    icon: HiOutlineBeaker,
    title: "Verify",
    detail: "Automated tests (unit, contract, e2e), load checks for critical paths, and accessibility passes.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Release",
    detail: "Progressive rollout, feature flags, observability dashboards, and rollback-tested pipelines.",
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Operate",
    detail: "SLOs, error budgets, incident response playbooks, and continuous improvement backlog.",
  },
];

export default function SoftwareDelivery() {
  return (
    <section className="py-24 bg-[#0b1220] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-sky-500/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#fc1660]/25 to-transparent" />
      </div>

      <Container>
        <SectionTitle
          badgeText="Delivery Lifecycle"
          title="From Idea to"
          highlightText="Production You Can Trust"
          titleClass="text-white"
          highlightClass="text-white"
          descriptionClass="text-gray-400!"
          description="We do not disappear after launch. Engineering, quality, and operations are one continuous loop — so releases stay boring in the best way."
          align="center"
          containerAlign="center"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/50 via-[#fc1660]/40 to-sky-500/20" />

          <div className="space-y-6">
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="relative md:pl-24 pl-0 group"
                >
                  <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-sky-400/60 bg-[#0b1220] items-center justify-center z-10 group-hover:border-[#fc1660] group-hover:scale-110 transition-all">
                    <span className="text-[10px] font-bold text-sky-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-7 hover:border-sky-500/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:hidden w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-[#fc1660] text-white flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <div className="hidden md:flex w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-[#fc1660]/20 border border-white/10 text-sky-300 items-center justify-center flex-shrink-0">
                        <Icon size={26} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {s.title}
                        </h3>
                        <p className="text-[14px] text-gray-400 leading-relaxed">
                          {s.detail}
                        </p>
                      </div>
                    </div>
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
