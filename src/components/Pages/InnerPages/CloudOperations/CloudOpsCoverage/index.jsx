import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineEye,
  HiOutlineCog6Tooth,
  HiOutlineCircleStack,
  HiOutlineShieldExclamation,
  HiOutlineBanknotes,
  HiOutlineLifebuoy,
  HiOutlineCheck,
} from "react-icons/hi2";

const coverage = [
  {
    icon: HiOutlineEye,
    title: "24×7 Monitoring & Alerting",
    bullets: [
      "Infrastructure, app & log telemetry",
      "Synthetic & uptime checks",
      "Severity-routed incident alerts",
    ],
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "Patching & Change Management",
    bullets: [
      "OS, runtime & dependency patching",
      "Scheduled maintenance windows",
      "Documented, audited changes",
    ],
  },
  {
    icon: HiOutlineCircleStack,
    title: "Backup & Disaster Recovery",
    bullets: [
      "Automated, encrypted backups",
      "Cross-region DR posture",
      "Restore drills on a fixed cadence",
    ],
  },
  {
    icon: HiOutlineShieldExclamation,
    title: "Security Operations",
    bullets: [
      "IAM hygiene & key rotation",
      "Vulnerability scans & remediation",
      "Compliance evidence & reporting",
    ],
  },
  {
    icon: HiOutlineBanknotes,
    title: "FinOps & Cost Control",
    bullets: [
      "Spend visibility & tagging",
      "Right-sizing & idle cleanup",
      "Monthly savings reviews",
    ],
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Incident Response & Support",
    bullets: [
      "Ticketing, paging & escalation",
      "Postmortems & action items",
      "Named TAM for enterprise tiers",
    ],
  },
];

export default function CloudOpsCoverage() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="What's Covered"
            title="Everything Your Cloud Needs"
            highlightText="To Run, End-to-End"
            description="A single managed-services umbrella across observability, change, security, cost, and incident response — so nothing falls through the cracks."
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {coverage.map((c, index) => {
              const Icon = c.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-md p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#fc1660]/25"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white flex items-center justify-center shadow-md shadow-[#fc1660]/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a52] leading-snug">
                      {c.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {c.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] text-gray-600 leading-relaxed"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[#fc1660]/10 flex items-center justify-center flex-shrink-0">
                          <HiOutlineCheck className="w-3.5 h-3.5 text-[#fc1660]" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
