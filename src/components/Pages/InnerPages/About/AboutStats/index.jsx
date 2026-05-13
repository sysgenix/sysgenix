import Container from "@/components/Layout/Container";

const stats = [
  { value: "22+", label: "Years of Engineering Trust" },
  { value: "500+", label: "Enterprise Projects Delivered" },
  { value: "40+", label: "Industries Served Worldwide" },
  { value: "99.9%", label: "Operational Uptime Standard" },
];

export default function AboutStats() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#0f172a] px-8 py-14 md:py-16 shadow-2xl">
          {/* Decorative glows */}
          <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-[#fc1660]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] bg-[#1e3a52]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:border-r md:last:border-r-0 border-white/10"
              >
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] bg-clip-text text-transparent leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-[15px] text-gray-300 uppercase tracking-wider font-medium max-w-[180px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
