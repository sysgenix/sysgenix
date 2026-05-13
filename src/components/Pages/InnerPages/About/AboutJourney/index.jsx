"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineFlag,
  HiOutlineCubeTransparent,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

const milestones = [
  {
    year: "2003",
    title: "The Beginning",
    description:
      "Sysgenix Technologies was founded with a singular mission — to engineer technology that businesses can truly rely on.",
    icon: HiOutlineFlag,
  },
  {
    year: "2008",
    title: "Expanding the Stack",
    description:
      "Broadened our capabilities across IT infrastructure, structured cabling, and enterprise networking solutions.",
    icon: HiOutlineCubeTransparent,
  },
  {
    year: "2012",
    title: "Going Global",
    description:
      "Established worldwide delivery capabilities, serving enterprise clients across multiple industries and regions.",
    icon: HiOutlineGlobeAlt,
  },
  {
    year: "2016",
    title: "Strategic Alliances",
    description:
      "Built strategic partnerships with global technology leaders, enabling enterprise-grade, best-in-class solutions.",
    icon: HiOutlineUserGroup,
  },
  {
    year: "2020",
    title: "Digital & Cloud Practice",
    description:
      "Launched dedicated digital, cloud, and managed services practices to support modern enterprise transformation.",
    icon: HiOutlineRocketLaunch,
  },
  {
    year: "Today",
    title: "Trusted at Scale",
    description:
      "A full-stack technology partner trusted by 500+ enterprises to modernize, secure, and scale their operations.",
    icon: HiOutlineArrowTrendingUp,
  },
];

export default function AboutJourney() {
  const [activeIndex, setActiveIndex] = useState(milestones.length - 1);

  return (
    <section className="py-24 bg-[#f8fafc]">
      <Container>
        <SectionTitle
          badgeText="Our Journey"
          title="A Story of"
          highlightText="Consistent Engineering"
          titleSize="text-3xl md:text-5xl"
          marginBottom="mb-20"
          align="center"
          containerAlign="center"
        />

        <div className="relative">
          {/* Vertical line (desktop) */}
          <span className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16 items-center"
                >
                  {/* Card */}
                  <div
                    className={`${
                      isLeft ? "md:order-1 md:pr-12 md:text-right" : "md:order-2 md:pl-12"
                    }`}
                  >
                    <div
                      className={`group relative bg-white rounded-2xl shadow-md border p-6 md:p-8 transition-all duration-300 ${
                        isActive
                          ? "border-[#fc1660]/40 shadow-xl -translate-y-1"
                          : "border-gray-100 hover:shadow-lg"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase ${
                          isActive ? "text-[#fc1660]" : "text-gray-400"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fc1660]" />
                        {item.year}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1e3a52] mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for opposite column on desktop */}
                  <div className={`hidden md:block ${isLeft ? "md:order-2" : "md:order-1"}`} />

                  {/* Center icon node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] text-white border-white shadow-lg shadow-[#fc1660]/30"
                          : "bg-white text-gray-400 border-gray-100 shadow-md"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
