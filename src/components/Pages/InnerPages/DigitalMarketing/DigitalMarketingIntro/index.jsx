import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineChartBarSquare,
  HiOutlineMegaphone,
  HiOutlineCursorArrowRays,
} from "react-icons/hi2";

const pillars = [
  {
    icon: HiOutlineChartBarSquare,
    label: "Attribution & ROI",
    text: "Every channel tied to pipeline, revenue, and LTV — not vanity metrics.",
  },
  {
    icon: HiOutlineMegaphone,
    label: "Brand + Performance",
    text: "Creative that converts and builds trust across the full funnel.",
  },
  {
    icon: HiOutlineCursorArrowRays,
    label: "Experimentation",
    text: "Structured tests, landing velocity, and continuous optimization.",
  },
];

export default function DigitalMarketingIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <SectionTitle
              badgeText="Digital Marketing"
              title="Growth Engineered"
              highlightText="With Data, Not Guesswork"
              titleSize="text-2xl md:text-5xl"
              marginBottom="mb-4"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Modern marketing is a system: search, paid media, content,
                social, email, and analytics working as one. Sysgenix designs
                and operates that system end-to-end — so you attract the right
                traffic, convert it efficiently, and prove impact to finance
                and leadership.
              </p>
              <p>
                Whether you are launching a new category, scaling paid
                acquisition, or rebuilding organic visibility, we pair
                strategic narrative with technical execution: tracking,
                audiences, creative testing, and reporting you can trust.
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

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/web-solutions/strategy.jpg"
                  alt="Digital marketing strategy and growth planning"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="hidden md:flex absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-5 py-4 items-center gap-3 max-w-[220px]">
                <div className="text-2xl font-extrabold bg-gradient-to-r from-[#fc1660] to-violet-500 bg-clip-text text-transparent">
                  +42%
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-bold text-[#1e3a52]">Pipeline lift</div>
                  <div className="text-gray-500 text-xs">
                    Example program outcome
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
