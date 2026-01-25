"use client";

import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  ShieldCheck,
  Layers,
  Globe,
  Settings
} from "lucide-react";


const features = [
  {
    title: "Strategic IT Assessment",
    text:
      "Comprehensive evaluation of existing IT environments to identify modernization needs, eliminate inefficiencies, and align technology with business objectives.",
    icon: ShieldCheck,
  },
  {
    title: "Unified Technology Ecosystem",
    text:
      "Seamless integration of multiple platforms into a single, high-performance IT environment.",
    icon: Layers,
  },
  {
    title: "Worldwide Delivery & Expertise",
    text:
      "Proven capability to deliver enterprise-grade infrastructure solutions worldwide, supporting organizations across diverse industries and scales.",
    icon: Globe,
  },
  {
    title: "Future-Ready Architecture",
    text:
      "Scalable, secure, and flexible systems engineered for long-term business growth.",
    icon: Settings,
  },
];


const ItInfrastructureOverview = () => {
  return (
    <section className="relative py-[80px] bg-gray-50 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">

          <SectionTitle
            badgeText="Overview"
            title="Engineering Reliable IT Foundations"
            highlightText="For Enterprise Excellence"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-7 space-y-10 text-gray-600 leading-relaxed">
              <p>
                Sysgenix Technologies enables enterprises to assess, modernize, and optimize
                their IT infrastructure to stay competitive in rapidly evolving digital
                environments.
              </p>

              <p>
                We design and implement resilient IT infrastructure solutions that serve as
                the operational backbone of high-performing enterprises. At Sysgenix
                Technologies, our expertise lies in integrating diverse technologies into a
                unified ecosystem that enhances operational efficiency, productivity, and
                system reliability.
              </p>

              <p>
                With worldwide delivery capabilities, Sysgenix Technologies accelerates
                information flow through structured cabling, data center infrastructure,
                network and wireless solutions, building management systems, media and
                entertainment technologies, and cloud platforms. Our strong channel
                partnerships enable us to deliver tailored, enterprise-grade solutions
                with measurable impact.
              </p>

              <p>
                Our strategic methodology begins with a comprehensive assessment of your
                existing IT landscape—eliminating inefficiencies and reducing unnecessary
                complexity. The result is a future-ready infrastructure that improves
                manageability, agility, and long-term performance while strictly adhering to
                industry best practices.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inner-pages/it-infrastucture/infrastructure.jpg"
                  alt="IT Infrastructure Overview"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white mb-6">
                  <item.icon size={24} />
                </div>

                <h4 className="text-lg font-bold text-[#1e3a52] mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                <span className="absolute top-0 right-0 h-full w-[4px] bg-[#fc1660] rounded-tr-2xl rounded-br-2xl"></span>

                <h4 className="text-lg font-bold text-[#1e3a52] mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div> */}


        </div>
      </Container>
    </section>
  );
};

export default ItInfrastructureOverview;
