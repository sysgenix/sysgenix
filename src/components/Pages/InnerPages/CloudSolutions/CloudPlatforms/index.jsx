import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { SiGooglecloud } from "react-icons/si";

const platforms = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    logo: "/images/home/partners/aws.png",
    description:
      "Mature AWS practice covering migration, well-architected reviews, EKS, Lambda, RDS, and data-platform builds.",
    services: ["EC2 / EKS", "Lambda", "RDS / Aurora", "S3 & Glue"],
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    logo: "/images/home/partners/microsoft.png",
    description:
      "Enterprise Azure expertise across hybrid identity, AKS, App Services, Azure SQL, and Microsoft 365 integration.",
    services: ["AKS", "App Service", "Azure SQL", "Entra ID"],
  },
  {
    name: "Google Cloud",
    short: "GCP",
    LogoIcon: SiGooglecloud,
    logoColor: "#4285F4",
    description:
      "Google Cloud expertise across GKE, BigQuery, Vertex AI, and data analytics workloads — ideal for data-first organizations.",
    services: ["GKE", "BigQuery", "Vertex AI", "Cloud Run"],
  },
];

const benefits = [
  "Vendor-neutral architectural guidance",
  "Cross-cloud migration & integration",
  "Certified engineers on every project",
  "Shared accountability for outcomes",
];

export default function CloudPlatforms() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Platforms"
            title="Certified Expertise Across"
            highlightText="The World's Top Cloud Platforms"
            description="We're cloud-agnostic by design — recommending the right platform for the workload, not the other way around."
            align="center"
            containerAlign="center"
          />

          {/* Platform cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-16">
            {platforms.map((p, index) => {
              const LogoIcon = p.LogoIcon;
              return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-md p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#fc1660]/30 overflow-hidden"
              >
                {/* Logo */}
                <div className="h-16 mb-6 flex items-center">
                  {LogoIcon ? (
                    <div className="flex items-center gap-3">
                      <LogoIcon
                        size={36}
                        style={{ color: p.logoColor || "#1e3a52" }}
                      />
                      <span className="text-[20px] font-semibold text-[#202124] tracking-tight">
                        {p.name}
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-32 h-12">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#fc1660] bg-[#fc1660]/10 px-2.5 py-1 rounded-full mb-4">
                  Certified Partner
                </div>

                <h3 className="text-xl font-bold text-[#1e3a52] mb-3 leading-snug">
                  {p.name}
                </h3>

                <p className="text-[14.5px] text-gray-500 leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="pt-5 border-t border-gray-100">
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                    Core Services
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {/* Benefits strip */}
          <div className="relative rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#1e3a52] p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-[300px] h-[300px] bg-[#fc1660]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#fc1660] bg-[#fc1660]/15 border border-[#fc1660]/30 px-3 py-1.5 rounded-full mb-4">
                  Multi-Cloud by Design
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  One Partner. Every Major Cloud. Zero Vendor Lock-In.
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14.5px] text-gray-200 leading-relaxed"
                  >
                    <HiOutlineCheckBadge
                      className="mt-0.5 w-5 h-5 text-[#fc1660] flex-shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
