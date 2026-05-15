import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineFunnel,
} from "react-icons/hi2";

const kpis = [
  {
    icon: HiOutlineFunnel,
    label: "Qualified pipeline",
    value: "↑ 31%",
    sub: "QoQ · blended channels",
    accent: "from-[#fc1660] to-rose-500",
  },
  {
    icon: HiOutlineUsers,
    label: "CAC efficiency",
    value: "↓ 18%",
    sub: "Same spend, more SQLs",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    icon: HiOutlineCurrencyDollar,
    label: "ROAS / MER",
    value: "4.2×",
    sub: "Paid + assisted organic",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    label: "Brand + demand",
    value: "Unified",
    sub: "One narrative, many surfaces",
    accent: "from-sky-500 to-cyan-500",
  },
];

const feed = [
  { title: "Creative test #12 — winner promoted", meta: "Meta · +14% CTR · 2h ago" },
  { title: "SEO cluster live — 8 supporting articles", meta: "Programmatic · 1d ago" },
  { title: "GA4 + CRM sync validated", meta: "Attribution · 2d ago" },
];

export default function DigitalMarketingCommandCenter() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-violet-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fc1660]/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Command Center"
            title="Visibility Into"
            highlightText="Every Dollar and Click"
            description="We build the measurement layer first — so campaigns ship with clean data, leadership-ready dashboards, and a single source of truth for growth decisions."
            align="center"
            containerAlign="center"
          />

          <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200/80 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/80">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[11px] font-mono text-gray-400 truncate">
                sysgenix-growth · live workspace
              </span>
              <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Reporting
              </span>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {kpis.map((k, i) => {
                    const Icon = k.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 hover:border-[#fc1660]/25 transition-colors"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${k.accent} text-white flex items-center justify-center mb-3 shadow-md`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                          {k.label}
                        </div>
                        <div className="text-xl font-extrabold text-[#1e3a52]">
                          {k.value}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-1">{k.sub}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-dashed border-gray-200 bg-white p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-[#1e3a52]">
                      Funnel snapshot
                    </span>
                    <span className="text-[11px] text-gray-400">Last 30 days</span>
                  </div>
                  <div className="flex items-end gap-2 h-28">
                    {[35, 52, 44, 68, 55, 78, 62, 88, 74, 92, 85, 100].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[#fc1660]/20 to-violet-400/60 min-h-[12px] transition-all hover:from-[#fc1660]/40 hover:to-violet-500/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-400 uppercase tracking-wider">
                    <span>Awareness</span>
                    <span>Consideration</span>
                    <span>Conversion</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/80 p-5">
                <div className="text-xs font-bold text-[#1e3a52] mb-4">
                  Activity feed
                </div>
                <ul className="space-y-4">
                  {feed.map((f, i) => (
                    <li key={i} className="text-sm">
                      <div className="font-semibold text-slate-800 leading-snug">
                        {f.title}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-1">{f.meta}</div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[12px] text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  Dashboards are tailored to your stack — whether you live in
                  HubSpot, Salesforce, or a custom data warehouse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
