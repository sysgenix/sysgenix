import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineSquare3Stack3D,
  HiOutlineArrowsPointingOut,
  HiOutlineCheckCircle,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const phases = [
  {
    icon: HiOutlineClipboardDocumentCheck,
    label: "Phase 01",
    title: "Assess",
    description:
      "Workload inventory, dependency mapping, and a TCO/ROI business case for each candidate workload.",
  },
  {
    icon: HiOutlineSquare3Stack3D,
    label: "Phase 02",
    title: "Architect",
    description:
      "Target architecture, landing zones, security baselines, and a migration wave plan tailored to risk.",
  },
  {
    icon: HiOutlineArrowsPointingOut,
    label: "Phase 03",
    title: "Migrate",
    description:
      "Execute migrations in low-risk waves — with data integrity validation, rollback plans, and minimal downtime.",
  },
  {
    icon: HiOutlineCheckCircle,
    label: "Phase 04",
    title: "Validate",
    description:
      "Performance, security, and cost validation against acceptance criteria before workloads go live.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    label: "Phase 05",
    title: "Optimize",
    description:
      "Ongoing FinOps, right-sizing, modernization, and continuous improvement to compound cloud value.",
  },
];

export default function CloudMigration() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Migration Framework"
            title="A Proven Path"
            highlightText="To the Cloud"
            description="Our five-phase migration framework de-risks every move to the cloud — from first assessment to long-term optimization."
            align="center"
            containerAlign="center"
          />

          {/* Phase cards with connector arrows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3 relative">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isLast = index === phases.length - 1;
              return (
                <div key={index} className="relative flex flex-col">
                  <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-md p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Phase label */}
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#fc1660] mb-3">
                      {phase.label}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white flex items-center justify-center mb-4 shadow-md shadow-[#fc1660]/20 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-bold text-[#1e3a52] mb-2 leading-snug">
                      {phase.title}
                    </h3>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Connector arrow (desktop, between cards) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#fc1660]">
                        <HiOutlineArrowLongRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
