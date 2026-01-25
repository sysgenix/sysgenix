"use client";

import Container from "@/components/Layout/Container";

const solutions = [
  {
    title: "Server & Storage",
    text:
      "Sysgenix delivers dependable server and storage solutions designed to support both daily operations and demanding workloads with long-term reliability.",
  },
  {
    title: "Power & Cooling",
    text:
      "Sysgenix designs power and cooling environments that protect critical infrastructure from downtime, hardware stress, and data loss.",
  },
  {
    title: "Racking Solutions",
    text:
      "Sysgenix provides well-engineered racking solutions that improve space utilization, airflow, and infrastructure organization across data centers.",
  },
  {
    title: "Disaster & Backup Recovery",
    text:
      "Sysgenix enables rapid system restoration through reliable backup and disaster recovery solutions that help maintain business continuity.",
  },
  {
    title: "Passive Infrastructure",
    text:
      "Sysgenix delivers structured passive infrastructure aligned with security, flexibility, and scalability requirements.",
  },
  {
    title: "Networking & Wireless",
    text:
      "Sysgenix designs secure and scalable networking and wireless solutions to support increasing connectivity demands.",
  },
  {
    title: "Cloud Solutions",
    text:
      "Sysgenix helps organizations adopt and scale cloud environments efficiently through structured migration and optimization.",
  },
];

const ProductsAndSolutions = () => {
  return (
    <section className="py-32 bg-[#f9fafb]">
      <Container>

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl font-semibold text-[#0f172a]">
            Products & Solutions
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Sysgenix offers a carefully structured portfolio of infrastructure
            and technology solutions designed to support stable, secure, and
            scalable IT environments.
          </p>
        </div>

        {/* Capability Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
          {solutions.map((item, index) => (
            <div key={index} className="relative pl-6">
              
              {/* Accent marker */}
              <span className="absolute left-0 top-2 h-6 w-[3px] bg-[#fc1660]" />

              <h3 className="text-xl font-medium text-[#0f172a] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ProductsAndSolutions;
