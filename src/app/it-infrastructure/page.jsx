
import { ShieldCheck, Layers, Globe2, Settings } from "lucide-react";
import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

const features = [
  {
    icon: ShieldCheck,
    title: "Strategic IT Assessment",
    text: "Deep evaluation of existing IT infrastructure to identify gaps, risks, and opportunities for modernization."
  },
  {
    icon: Layers,
    title: "Unified Technology Ecosystem",
    text: "Seamless integration of multiple platforms into a single, high-performance IT environment."
  },
  {
    icon: Globe2,
    title: "Regional Expertise at Scale",
    text: "Proven delivery across the Middle East and Africa with enterprise-grade infrastructure solutions."
  },
  {
    icon: Settings,
    title: "Future-Ready Architecture",
    text: "Scalable, secure, and flexible systems engineered for long-term business growth."
  },
];

 export default function ITInfrastructurePage() {
    return (
       <>
         <InnerPagesBanner
               pageTitle="IT Infrastructure" 
               description="Building strong, secure, and scalable IT foundations that power business growth and ensure uninterrupted performance."
               bgImage="/images/home/home-banner/hero-bg1.png"
               breadcrumbs={[
               { label: "IT Infrastructure", href: null } 
         ]}
         />

         <div className="relative py-28 bg-gray-50 overflow-hidden">
            
            {/* Architectural Background Lines */}
            <div className="absolute inset-0 pointer-events-none">
            
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl"></div>
            </div>

            <Container>
               <div className="relative z-10">
            
            {/* Section Header */}
            <SectionTitle
               badgeText="Overview"
               title="Engineering Reliable IT Foundations"
               highlightText="For Enterprise Excellence"
               />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               
               {/* Left: Narrative Content */}
               <div className="lg:col-span-7 space-y-10 text-gray-600 leading-relaxed">
                  <p> Sysgenix Technologies enables enterprises to assess, modernize, and optimize
                  their IT infrastructure to stay competitive in rapidly evolving digital
                  environments.</p>
                  <p>
                  We design and implement resilient IT infrastructure solutions that serve as
                  the operational backbone of high-performing enterprises. At Sysgenix
                  Technologies, our expertise lies in integrating diverse technologies into a
                  unified ecosystem that enhances operational efficiency, productivity, and
                  system reliability.
                  </p>

                  <p>
                  Operating across the Middle East and Africa, we accelerate information flow
                  through advanced structured cabling, data center infrastructure, network and
                  wireless solutions, building management systems, media and entertainment
                  technologies, and cloud platforms. Backed by strong partnerships with global
                  technology leaders, we deliver tailored solutions with measurable business
                  impact.
                  </p>

                  <p>
                  Our strategic methodology begins with a comprehensive assessment of your
                  existing IT landscape—eliminating inefficiencies and reducing unnecessary
                  complexity. The result is a future-ready infrastructure that improves
                  manageability, agility, and long-term performance while strictly adhering to
                  industry best practices.
                  </p>
               </div>

               {/* Right: Capability Blocks */}
               <div className="lg:col-span-5">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 divide-y">
                  {features.map((item, index) => (
                     <div
                        key={index}
                        className="flex items-start gap-5 p-6 hover:bg-gray-50 transition-colors"
                     >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white flex-shrink-0">
                        <item.icon size={22} />
                        </div>

                        <div>
                        <h4 className="text-lg font-bold text-[#1e3a52] mb-1">
                           {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           {item.text}
                        </p>
                        </div>
                     </div>
                  ))}
                  </div>
               </div>

            </div>
            </div>
            </Container>
         </div>  
       </>
    );
  }