import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  ShieldCheck,
  Layers,
  Globe2,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Proven Industry Expertise",
    text: "Over two decades of delivering enterprise-grade technology solutions across diverse industries and geographies.",
  },
  {
    icon: Layers,
    title: "End-to-End Capability",
    text: "From strategy and design to engineering, deployment, and managed operations — fully delivered under one roof.",
  },
  {
    icon: Globe2,
    title: "Global Partner Ecosystem",
    text: "Strategic alliances with leading technology vendors enable us to offer best-in-class, enterprise-grade solutions.",
  },
  {
    icon: Settings,
    title: "Outcome-Focused Delivery",
    text: "Transparent processes, measurable KPIs, and a continuous-improvement mindset built into every engagement.",
  },
];

export default function AboutWhyChooseUs() {
  return (
    <section className="relative py-[80px] bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Why Sysgenix"
            title="A Technology Partner Built"
            highlightText="Around Your Outcomes"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Narrative */}
            <div className="lg:col-span-7 space-y-8 text-gray-600 leading-relaxed">
              <p>
                Choosing the right technology partner isn&apos;t just about
                capability — it&apos;s about trust, alignment, and the ability
                to deliver consistently. At Sysgenix Technologies, we combine
                deep engineering expertise with a partnership-first mindset to
                help businesses unlock the full potential of their technology
                investments.
              </p>

              <p>
                Our cross-functional teams blend strategy, design, and modern
                engineering practices to deliver solutions that are not only
                technically sound but commercially impactful. Every
                engagement is shaped around your business outcomes — not
                around generic playbooks.
              </p>

              <p>
                With worldwide delivery capabilities, strong vendor
                relationships, and a relentless focus on quality, we serve as
                the long-term technology partner enterprises rely on to
                modernize, secure, and scale their operations.
              </p>
            </div>

            {/* Right: Feature blocks */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 divide-y">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white flex-shrink-0">
                      <item.icon size={22} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-[#1e3a52] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
