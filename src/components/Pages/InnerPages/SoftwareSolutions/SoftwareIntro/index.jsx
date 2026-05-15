import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineCube,
  HiOutlineServerStack,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const pillars = [
  {
    icon: HiOutlineCube,
    label: "Product Thinking",
    text: "Software shaped around workflows, roles, and outcomes — not feature lists.",
  },
  {
    icon: HiOutlineServerStack,
    label: "Modern Architecture",
    text: "APIs, events, cloud-native patterns, and integrations that age well.",
  },
  {
    icon: HiOutlineShieldCheck,
    label: "Secure by Design",
    text: "Threat modeling, least privilege, and audit-friendly delivery from sprint zero.",
  },
];

export default function SoftwareIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/web-solutions/intro.jpg"
                  alt="Custom software development and engineering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="hidden md:flex absolute -bottom-8 -right-4 bg-[#0f172a] text-white rounded-2xl shadow-2xl border border-white/10 px-5 py-4 max-w-[240px]">
                <div className="text-[11px] uppercase tracking-widest text-sky-400 font-bold mb-1">
                  Delivery
                </div>
                <div className="text-sm font-semibold leading-snug">
                  CI/CD · automated tests · observable production
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionTitle
              badgeText="Software Solutions"
              title="Custom Software Built for"
              highlightText="How Your Business Actually Runs"
              titleSize="text-2xl md:text-5xl"
              marginBottom="mb-4"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Off-the-shelf tools only go so far. Sysgenix engineers bespoke
                applications, platforms, and integrations that match your
                processes, connect your systems, and scale with load and
                complexity — from customer-facing products to internal
                operations hubs.
              </p>
              <p>
                We work as an extension of your team: discovery workshops,
                iterative delivery, production hardening, and long-term
                ownership options. Whether you need a greenfield build or a
                careful modernization of legacy systems, we ship software you
                can run with confidence.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-[#fc1660] text-white flex items-center justify-center mb-3">
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
