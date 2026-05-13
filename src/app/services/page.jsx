import Link from "next/link";
import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiOutlineArrowRight } from "react-icons/hi2";

const offerings = [
  {
    href: "/services/cloud-operations",
    title: "Cloud Operations",
    description:
      "Managed cloud monitoring, optimization, patching, and day-two operations so your platforms stay reliable and cost-efficient.",
  },
  {
    href: "/services/infrastructure-management",
    title: "Infrastructure Management",
    description:
      "End-to-end lifecycle management of servers, storage, networks, and data centers aligned to your SLAs and growth plans.",
  },
  {
    href: "/services/security-network-operations-center",
    title: "Security & Network Operations Center",
    description:
      "24/7 security and network operations with proactive monitoring, threat detection, and coordinated incident response.",
  },
  {
    href: "/services/annual-maintenance-contract",
    title: "Annual Maintenance Contracts",
    description:
      "Predictable coverage for preventive maintenance, priority support, and vendor coordination under clear contractual SLAs.",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Services"
        description="Operational services that keep your cloud, infrastructure, and security environments running at enterprise standard."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Services", href: null }]}
      />

      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="relative z-10">
            <SectionTitle
              badgeText="What We Deliver"
              title="Managed Services"
              highlightText="Built for Uptime"
              description="Explore our core service lines. Each engagement is scoped to your environment, compliance needs, and operational maturity."
              align="center"
              containerAlign="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {offerings.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block bg-white rounded-2xl border border-gray-100 shadow-md p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#fc1660]/25"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-xl font-bold text-[#1e3a52] leading-snug group-hover:text-[#fc1660] transition-colors">
                      {item.title}
                    </h2>
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white flex items-center justify-center shadow-md shadow-[#fc1660]/20 group-hover:scale-105 transition-transform">
                      <HiOutlineArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
