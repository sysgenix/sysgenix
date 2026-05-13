import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineCircleStack,
  HiOutlineBeaker,
  HiOutlineRocketLaunch,
  HiOutlineArrowPath,
} from "react-icons/hi2";

const phases = [
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Discover & Align",
    description:
      "We start by understanding the business problem, the available data, and where AI can drive measurable value.",
  },
  {
    icon: HiOutlineCircleStack,
    title: "Data & Foundations",
    description:
      "We assess data quality, design pipelines, and put the right data infrastructure in place for reliable AI.",
  },
  {
    icon: HiOutlineBeaker,
    title: "Prototype & Validate",
    description:
      "Rapid model prototyping with measurable success criteria — proving the value before scaling investment.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Productionize & Integrate",
    description:
      "We deploy AI into your stack with MLOps best practices — versioned, monitored, secured, and observable.",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Operate & Improve",
    description:
      "Continuous monitoring, retraining, and feedback loops keep the model accurate and aligned with your business.",
  },
];

export default function AIProcess() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          badgeText="Our Methodology"
          title="A Framework for"
          highlightText="Trustworthy, Production-Grade AI"
          titleSize="text-3xl md:text-5xl"
          marginBottom="mb-20"
          align="center"
          containerAlign="center"
        />

        <div className="relative">
          {/* Decorative connector dashed line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#fc1660]/40 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Step number on top */}
                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white shadow-lg shadow-[#fc1660]/30 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={26} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-[#fc1660] text-[#fc1660] text-xs font-bold flex items-center justify-center shadow-sm">
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
