import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineClock,
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBar,
} from "react-icons/hi2";

const pillars = [
  {
    icon: HiOutlineClock,
    label: "24×7 Coverage",
    text: "Round-the-clock monitoring, alerting, and response from a dedicated ops team.",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    label: "SLA-Backed Response",
    text: "Defined response & resolution targets by severity, contractually guaranteed.",
  },
  {
    icon: HiOutlineChartBar,
    label: "Predictable Spend",
    text: "FinOps built into ops — visibility, alerts, and right-sizing every month.",
  },
];

export default function CloudOpsIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content (left) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <SectionTitle
              badgeText="Managed Cloud Operations"
              title="Your Cloud, Operated"
              highlightText="Like a Production System"
              titleSize="text-2xl md:text-5xl"
              marginBottom="mb-4"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Designing the cloud is one discipline. Running it well — every
                hour, every alert, every patch window — is another. Sysgenix
                Managed Cloud Operations is the day-two service that keeps
                your AWS, Azure, and Google Cloud workloads performant,
                secure, and cost-efficient long after go-live.
              </p>

              <p>
                Engineers, runbooks, on-call rotations, monitoring, FinOps,
                and security operations — all wrapped under SLAs you can
                actually plan around. You stay focused on your business; we
                keep the cloud healthy.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <div className="text-sm font-bold text-[#1e3a52] mb-1">
                      {p.label}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {p.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image (right) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/cloud-solutions/cloud.webp"
                  alt="Managed Cloud Operations — Day-2 Reliability"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating "On-Call" badge */}
              <div className="hidden md:flex absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <span className="relative block w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-bold text-[#1e3a52]">On-Call</div>
                  <div className="text-gray-500 text-xs">Engineers · 24×7×365</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
