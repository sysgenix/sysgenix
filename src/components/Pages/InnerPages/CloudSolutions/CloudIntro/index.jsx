import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineCloudArrowUp,
  HiOutlineShieldCheck,
  HiOutlineBanknotes,
} from "react-icons/hi2";

const pillars = [
  {
    icon: HiOutlineCloudArrowUp,
    label: "Migration Done Right",
    text: "Lift-and-shift, replatform, or refactor — chosen per workload.",
  },
  {
    icon: HiOutlineShieldCheck,
    label: "Secure by Default",
    text: "Zero-trust networking, least-privilege IAM, and continuous compliance.",
  },
  {
    icon: HiOutlineBanknotes,
    label: "Cost-Optimized",
    text: "FinOps practices that keep cloud spend predictable and efficient.",
  },
];

export default function CloudIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/it-infrastucture/infrastructure.jpg"
                  alt="Enterprise Cloud Solutions and Modern Infrastructure"
                  width={900}
                  height={700}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating uptime card */}
              <div className="hidden md:flex absolute -bottom-8 -right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-5 items-center gap-4">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] bg-clip-text text-transparent leading-none">
                  99.99%
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-bold text-[#1e3a52]">Cloud Uptime</div>
                  <div className="text-gray-500 text-xs">Across Managed Workloads</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <SectionTitle
              badgeText="Cloud Solutions"
              title="Cloud That Scales With Your Business"
              highlightText="Without Scaling Your Risk"
              titleSize="text-2xl md:text-5xl"
              marginBottom="mb-4"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Cloud is no longer just an infrastructure decision — it&apos;s
                an operating model. Sysgenix helps enterprises design,
                migrate to, and operate cloud platforms that are secure,
                cost-efficient, and built for the next decade of growth.
              </p>

              <p>
                From multi-cloud architectures and zero-downtime migrations
                to FinOps, DevOps, and managed services — we cover the full
                cloud lifecycle, working natively across AWS, Microsoft
                Azure, Google Cloud, and hybrid environments.
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
