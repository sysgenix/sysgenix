import Link from "next/link";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiOutlineCheck, HiOutlineArrowRight } from "react-icons/hi2";

const tiers = [
  {
    name: "Standard",
    tagline: "Reliable baseline ops for steady workloads",
    coverage: "Business Hours · 8×5",
    responseSLA: "P1 in 1 hour",
    features: [
      "Infrastructure & uptime monitoring",
      "Scheduled OS & runtime patching",
      "Encrypted daily backups",
      "Monthly cost & posture report",
      "Email & ticket-based support",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
  {
    name: "Advanced",
    tagline: "24×7 ops with proactive optimization",
    coverage: "Round the clock · 24×7",
    responseSLA: "P1 in 30 minutes",
    features: [
      "Everything in Standard",
      "24×7 incident response & paging",
      "Quarterly DR restore drills",
      "FinOps right-sizing reviews",
      "Vulnerability scans & remediation",
      "Slack / Teams shared channel",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline: "White-glove, contractually tailored",
    coverage: "24×7 · Named TAM",
    responseSLA: "P1 in 15 minutes",
    features: [
      "Everything in Advanced",
      "Dedicated Technical Account Manager",
      "Custom SLAs & runbooks",
      "Compliance evidence (SOC2 / ISO / HIPAA)",
      "Architecture review program",
      "Executive QBRs",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

export default function CloudOpsTiers() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          badgeText="Service Tiers"
          title="Three Tiers."
          highlightText="One Operations Discipline."
          description="Pick the coverage that fits your risk profile and growth stage. Move up as your footprint matures — no rip-and-replace."
          align="center"
          containerAlign="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border bg-white p-7 lg:p-8 flex flex-col transition-all duration-300 ${
                tier.highlight
                  ? "border-transparent shadow-2xl lg:-translate-y-3 ring-1 ring-[#fc1660]/20"
                  : "border-gray-100 shadow-md hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {/* Highlighted top bar */}
              {tier.highlight && (
                <>
                  <div className="absolute inset-x-0 -top-px h-[3px] bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] rounded-t-2xl" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#1e3a52] mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                  {tier.tagline}
                </p>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-2 gap-3 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Coverage
                  </div>
                  <div className="text-[13px] font-bold text-[#1e3a52] leading-tight">
                    {tier.coverage}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                    Response SLA
                  </div>
                  <div className="text-[13px] font-bold text-[#1e3a52] leading-tight">
                    {tier.responseSLA}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-gray-600 leading-relaxed"
                  >
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.highlight
                          ? "bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white"
                          : "bg-[#fc1660]/10 text-[#fc1660]"
                      }`}
                    >
                      <HiOutlineCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[14px] transition-all duration-300 ${
                  tier.highlight
                    ? "bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] text-white shadow-lg shadow-[#fc1660]/30 hover:shadow-xl hover:shadow-[#fc1660]/40"
                    : "border-2 border-[#1e3a52] text-[#1e3a52] hover:bg-[#1e3a52] hover:text-white"
                }`}
              >
                {tier.cta}
                <HiOutlineArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10 max-w-2xl mx-auto">
          Every engagement starts with a free Cloud Health Check so we can
          price your tier against your actual workload — no surprise add-ons,
          no inflated month-end bills.
        </p>
      </Container>
    </section>
  );
}
