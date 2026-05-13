import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./CloudImpactDashboard.module.css";
import {
  HiOutlineArrowTrendingDown,
  HiOutlineCheckCircle,
  HiOutlineArrowsPointingIn,
  HiOutlineShieldCheck,
  HiOutlineBolt,
} from "react-icons/hi2";

// Heights of the 12 bars (relative %) — a believable downward cost-trend
const barHeights = [82, 74, 88, 70, 78, 60, 65, 50, 58, 42, 38, 30];

const sideStats = [
  {
    label: "Operational Uptime",
    value: "99.99%",
    delta: "▲ 0.04% MoM",
    deltaPositive: true,
    icon: HiOutlineShieldCheck,
  },
  {
    label: "Workloads Migrated",
    value: "350+",
    delta: "▲ 28 this quarter",
    deltaPositive: true,
    icon: HiOutlineArrowsPointingIn,
  },
  {
    label: "SLA Compliance",
    value: "100%",
    delta: "12 months running",
    deltaPositive: true,
    icon: HiOutlineCheckCircle,
  },
];

const activity = [
  {
    icon: HiOutlineArrowTrendingDown,
    title: "Right-sized 142 EC2 instances",
    meta: "$18,400 / mo saved · AWS · 2h ago",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Rotated IAM keys across 9 production accounts",
    meta: "Zero-trust posture · Azure + AWS · 6h ago",
  },
  {
    icon: HiOutlineBolt,
    title: "Auto-scaled GKE cluster ahead of demand spike",
    meta: "No degradation · Google Cloud · 1d ago",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Migration wave complete — 18 workloads validated",
    meta: "Zero downtime · Multi-cloud · 2d ago",
  },
];

export default function CloudImpactDashboard() {
  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay} />

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="By the Numbers"
            title="Real Cloud."
            highlightText="Real Impact."
            description="A snapshot of the kind of outcomes Sysgenix delivers as a managed cloud partner — uptime, savings, and operational excellence at scale."
            titleClass="text-white"
            descriptionClass="text-gray-300!"
            align="center"
            containerAlign="center"
          />

          {/* Dashboard mock */}
          <div className={styles.dashboard}>
            {/* Title / browser-chrome bar */}
            <div className={styles.titleBar}>
              <span className={styles.trafficDot} style={{ background: "#ff5f57" }} />
              <span className={styles.trafficDot} style={{ background: "#febc2e" }} />
              <span className={styles.trafficDot} style={{ background: "#28c840" }} />
              <span className={`${styles.tabPill} ml-3`}>
                sysgenix-cloud-ops · production
              </span>
              <div className="ml-auto flex items-center gap-2">
                <span className={styles.livePill}>
                  <span className={styles.liveDot} />
                  Live
                </span>
              </div>
            </div>

            {/* Main grid */}
            <div className="p-5 md:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* LEFT — big metric + chart */}
              <div className={`${styles.card} lg:col-span-7 p-7`}>
                <div className={styles.cardAccent} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Avg. Annual Cloud Savings
                      </div>
                      <div className={styles.bigMetric}>47%</div>
                      <div className="text-sm text-gray-400 mt-2">
                        Across optimized client engagements
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2.5 py-1 rounded-full">
                      <HiOutlineArrowTrendingDown size={14} />
                      Spend Down
                    </div>
                  </div>

                  {/* Bar chart */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2">
                      <span className="uppercase tracking-widest">
                        Monthly cloud spend (last 12 months)
                      </span>
                      <span>Trend: declining</span>
                    </div>
                    <div className={styles.chartGrid}>
                      {barHeights.map((h, i) => (
                        <div
                          key={i}
                          className={`${styles.bar} ${
                            i < barHeights.length - 3 && i > 5 ? styles.muted : ""
                          }`}
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                      <span>JAN</span>
                      <span>MAR</span>
                      <span>JUN</span>
                      <span>SEP</span>
                      <span>DEC</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — 3 stacked stat cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
                {sideStats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className={`${styles.card} flex-1`}>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                          {s.label}
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white shadow-md shadow-[#fc1660]/20">
                          <Icon size={18} />
                        </div>
                      </div>
                      <div className="text-3xl font-extrabold text-white leading-none mb-2 tracking-tight">
                        {s.value}
                      </div>
                      <div
                        className={`text-[12px] ${
                          s.deltaPositive ? "text-emerald-400" : "text-rose-400"
                        }`}
                      >
                        {s.delta}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM — activity feed (full width) */}
              <div className={`${styles.card} lg:col-span-12 p-7`}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                      Recent Cloud Optimizations
                    </div>
                    <div className="text-sm text-gray-400">
                      Auto-actions executed by Sysgenix Managed Cloud Operations
                    </div>
                  </div>
                  <span className={styles.tabPill}>Last 48 hours</span>
                </div>

                <div className="mt-3">
                  {activity.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className={styles.logRow}>
                        <div className={styles.logBadge}>
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[14.5px] font-semibold text-white leading-snug">
                            {item.title}
                          </div>
                          <div className="text-[12.5px] text-gray-400 mt-0.5">
                            {item.meta}
                          </div>
                        </div>
                        <div className="hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-emerald-400">
                          <HiOutlineCheckCircle size={14} />
                          Resolved
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Subtle footnote */}
          <p className="text-center text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
            Aggregate, anonymized metrics. Individual engagement results vary
            based on architecture, scale, and starting baseline.
          </p>
        </div>
      </Container>
    </section>
  );
}
