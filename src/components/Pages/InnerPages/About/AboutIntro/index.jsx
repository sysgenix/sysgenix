import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

export default function AboutIntro() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/it-infrastucture/infrastructure.jpg"
                  alt="Sysgenix Technologies — Engineering Enterprise Excellence"
                  width={900}
                  height={700}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="hidden md:flex absolute -bottom-8 -right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 px-6 py-5 items-center gap-4">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] bg-clip-text text-transparent">
                  22+
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-bold text-[#1e3a52]">Years of</div>
                  <div className="text-gray-500">Engineering Trust</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <SectionTitle
              badgeText="Who We Are"
              title="Engineering the Technology"
              highlightText="That Powers Modern Enterprises"
              titleSize="text-2xl md:text-5xl"
              marginBottom="mb-4"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                Sysgenix Technologies is a global systems integrator and
                digital solutions partner, helping enterprises modernize their
                IT, secure their operations, and accelerate their growth.
                From cloud platforms and structured infrastructure to web
                applications and managed services, we engineer technology
                that performs at the core of your business.
              </p>

              <p>
                Our teams bring together strategy, design, and engineering
                under one roof — collaborating with industry-leading partners
                to deliver scalable, secure, and future-ready solutions for
                organizations of every size and sector.
              </p>

              <p>
                We don&apos;t just deliver projects — we build long-term
                technology partnerships rooted in transparency, measurable
                outcomes, and a relentless focus on quality.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
