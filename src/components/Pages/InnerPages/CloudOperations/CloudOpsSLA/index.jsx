import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineExclamationTriangle,
  HiOutlineBolt,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const severities = [
  {
    icon: HiOutlineExclamationTriangle,
    sev: "Sev 1",
    label: "Critical",
    desc: "Production down or major impact",
    response: "15 min",
    resolve: "4 hrs",
    accent: "from-red-500 to-rose-500",
  },
  {
    icon: HiOutlineBolt,
    sev: "Sev 2",
    label: "High",
    desc: "Degraded production, workaround possible",
    response: "30 min",
    resolve: "8 hrs",
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: HiOutlineAdjustmentsHorizontal,
    sev: "Sev 3",
    label: "Medium",
    desc: "Non-blocking issue or minor degradation",
    response: "2 hrs",
    resolve: "1 business day",
    accent: "from-yellow-400 to-amber-400",
  },
  {
    icon: HiOutlineInformationCircle,
    sev: "Sev 4",
    label: "Low",
    desc: "Questions, requests, configuration changes",
    response: "Next business day",
    resolve: "3 business days",
    accent: "from-sky-400 to-cyan-400",
  },
];

const guarantees = [
  { value: "99.99%", label: "Platform Uptime Target" },
  { value: "15 min", label: "Critical Response (Enterprise)" },
  { value: "< 4 hrs", label: "Mean Time to Resolution · Sev 1" },
  { value: "100%", label: "Postmortems on Sev 1 / Sev 2" },
];

export default function CloudOpsSLA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0f1e2e] via-[#1e3a52] to-[#0f1e2e]">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#fc1660]/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Service Level Agreement"
            title="SLAs You Can"
            highlightText="Plan a Quarter Around"
            description="Severity, response, resolution — defined up-front, tracked monthly, and reported transparently. No fine print, no surprises."
            align="center"
            containerAlign="center"
            titleClass="text-white"
            highlightClass="text-white"
            descriptionClass="text-white/70!"
          />

          {/* SLA matrix */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden shadow-2xl">
            {/* Header (desktop only) */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.03]">
              <div className="col-span-3 text-[11px] uppercase tracking-widest text-white/50 font-semibold">
                Severity
              </div>
              <div className="col-span-5 text-[11px] uppercase tracking-widest text-white/50 font-semibold">
                Description
              </div>
              <div className="col-span-2 text-[11px] uppercase tracking-widest text-white/50 font-semibold">
                Response
              </div>
              <div className="col-span-2 text-[11px] uppercase tracking-widest text-white/50 font-semibold">
                Resolution Target
              </div>
            </div>

            {severities.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-4 px-6 py-5 ${
                    i !== severities.length - 1
                      ? "border-b border-white/5"
                      : ""
                  } hover:bg-white/[0.03] transition-colors`}
                >
                  {/* Severity */}
                  <div className="lg:col-span-3 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.accent} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-[15px] leading-tight">
                        {s.sev}
                      </div>
                      <div className="text-white/50 text-xs">{s.label}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-5 text-white/70 text-[14px] leading-relaxed self-center">
                    <span className="lg:hidden text-[11px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                      Description
                    </span>
                    {s.desc}
                  </div>

                  {/* Response */}
                  <div className="lg:col-span-2 self-center">
                    <span className="lg:hidden text-[11px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                      Response
                    </span>
                    <span className="inline-block text-white font-bold text-[14px] px-3 py-1 rounded-lg bg-white/10 border border-white/10">
                      {s.response}
                    </span>
                  </div>

                  {/* Resolution */}
                  <div className="lg:col-span-2 self-center">
                    <span className="lg:hidden text-[11px] uppercase tracking-widest text-white/40 font-semibold block mb-1">
                      Resolution Target
                    </span>
                    <span className="text-white/80 text-[14px] font-semibold">
                      {s.resolve}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 text-center"
              >
                <div className="text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-1">
                  {g.value}
                </div>
                <div className="text-[12px] uppercase tracking-wider text-white/60 font-semibold">
                  {g.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-white/50 mt-8 max-w-2xl mx-auto">
            Targets shown reflect the Enterprise tier. Standard & Advanced
            tier SLAs are defined in the master services agreement.
          </p>
        </div>
      </Container>
    </section>
  );
}
