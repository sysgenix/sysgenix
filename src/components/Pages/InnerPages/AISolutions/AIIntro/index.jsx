import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiOutlineSparkles, HiOutlineBolt, HiOutlineShieldCheck } from "react-icons/hi2";

const pillars = [
  {
    icon: HiOutlineSparkles,
    label: "Custom Intelligence",
    text: "Models tailored to your data, workflows, and outcomes.",
  },
  {
    icon: HiOutlineBolt,
    label: "Production-Ready",
    text: "Engineered for scale, latency, and real-world reliability.",
  },
  {
    icon: HiOutlineShieldCheck,
    label: "Responsible AI",
    text: "Built with privacy, fairness, and auditability at the core.",
  },
];

export default function AIIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/ai-solutions/artificial-intelligence.webp"
                  alt="Enterprise AI Solutions and Intelligent Automation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating "Live AI" badge */}
              <div className="hidden md:flex absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <span className="relative block w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-bold text-[#1e3a52]">AI Systems</div>
                  <div className="text-gray-500 text-xs">In Production · 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <SectionTitle
              badgeText="AI Solutions"
              title="Enterprise AI That Delivers"
              highlightText="Real Business Impact"
              titleSize="text-2xl md:text-5xl"
              marginBottom="mb-4"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                AI is no longer a side experiment — it&apos;s the operating
                layer of modern business. At Sysgenix, we help enterprises
                move from AI curiosity to AI in production, building
                intelligent systems that solve real problems, work alongside
                your teams, and scale with your operations.
              </p>

              <p>
                From large language models and predictive analytics to
                computer vision and intelligent automation, we design
                AI solutions that are tailored to your data, integrated
                with your stack, and accountable to your business KPIs.
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
        </div>
      </Container>
    </section>
  );
}
