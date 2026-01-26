import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

export default function WebSolutionsIntro() {
  return (
    <section className="py-24 ">
      <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative ">
                <div className="rounded-2xl overflow-hidden ">
                  <Image
                    src="/images/inner-pages/web-solutions/intro.jpg" 
                    alt="Enterprise Web Solutions and Digital Platforms"
                    width={900}
                    height={700}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
            <SectionTitle
              badgeText="Web Solutions"
              title="Building Digital Platforms " 
              highlightText="That Power Business Growth"   
              titleSize="text-2xl md:text-5xl" 
              marginBottom="mb-4"         
            />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[15.5px] max-w-2xl">
              <p>
                Across industries worldwide, organizations depend on their web
                platforms to drive engagement, streamline operations, and
                support digital transformation. Sysgenix delivers web
                solutions designed to perform at the core of your business.
              </p>

              <p>
                We engineer scalable, secure, and high-performance websites and
                web applications that go beyond aesthetics—serving as reliable
                digital foundations that evolve with your organization and
                adapt to changing business demands.
              </p>
            </div>
            </div>
          </div>
      </Container>
    </section>
  );
}
