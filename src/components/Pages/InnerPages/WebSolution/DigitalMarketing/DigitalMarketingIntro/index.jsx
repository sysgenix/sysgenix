import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

export default function DigitalMarketingIntroBridge() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Diagonal / fade separator */}
     

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-[-20%] w-[600px] h-[600px] rounded-full bg-[#fc1660]/10 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-20%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* LEFT — Content */}
          <div className="lg:col-span-6">

            <SectionTitle                          
                title=" We Engineer Growth, " 
                highlightText="Not Just Campaigns"   
                titleSize="text-2xl md:text-5xl" 
                marginBottom="mb-4"         
              />           

            <p className="text-slate-400  leading-relaxed mb-8">
              Sysgenix designs performance-driven digital marketing systems that
              connect visibility to demand, demand to revenue, and insights to
              continuous optimization.
            </p>

            <p className="text-slate-400 leading-relaxed ">
              Our approach blends SEO, paid media, analytics, and content into
              a unified growth engine—built to scale as your business evolves.
            </p>
          </div>

          {/* RIGHT — Visual Story */}
          <div className="lg:col-span-6 relative">

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/digital-marketing/dashboard.jpg"
                alt="Digital marketing performance dashboard"
                width={900}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Floating insight card */}
            <div className="hidden md:block absolute -bottom-12 -left-12 w-64 rounded-2xl bg-[#0f172a] border border-white/10 p-5 shadow-xl">
              <span className="block text-xs uppercase tracking-wide text-[#fc1660] mb-2">
                Campaign Performance
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                Optimized funnels, improved conversion rates, and data-backed
                decisions driving consistent ROI.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
