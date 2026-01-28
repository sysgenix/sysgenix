"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineCodeBracket,
  HiOutlineShieldCheck,
  HiOutlineArrowPath
} from "react-icons/hi2";

const steps = [
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Discovery & Strategic Alignment",
    description:
      "We begin by understanding your business objectives, users, and technical environment to align strategy with measurable outcomes.",
    image: "/images/inner-pages/web-solutions/strategy.jpg"
  },
  {
    icon: HiOutlinePencilSquare,
    title: "Experience & System Design",
    description:
      "User experience, interface structure, and system architecture are designed together to ensure clarity, scalability, and consistency.",
    image: "/images/inner-pages/web-solutions/strategy.jpg"
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Engineering & Integration",
    description:
      "Our teams build secure, high-performance web platforms using modern technologies and integrate them seamlessly with your ecosystem.",
    image: "/images/inner-pages/web-solutions/strategy.jpg"
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Quality, Security & Validation",
    description:
      "Each solution undergoes rigorous testing for performance, accessibility, and security to meet enterprise delivery standards.",
    image: "/images/inner-pages/web-solutions/strategy.jpg"
  },
  {
    icon: HiOutlineArrowPath,
    title: "Launch & Continuous Evolution",
    description:
      "Post-launch, we monitor, optimize, and continuously enhance the platform to support long-term growth and adaptability.",
    image: "/images/inner-pages/web-solutions/strategy.jpg"
  }
];

export default function WebSolutionsProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#f8fafc]">
      <Container>
        <SectionTitle
          badgeText="Our Methodology"
          title="A Proven Framework for"
          highlightText="Digital Excellence"
          titleSize="text-3xl md:text-5xl"
          marginBottom="mb-20"
          align="center"
          containerAlign="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* LEFT — Process Steps (60%) */}
          <div className="md:col-span-7 space-y-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <div className="flex p-4 rounded-md shadow-md items-start gap-6">
                    
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-white border flex items-center justify-center transition-all duration-300
                        ${
                          isActive
                            ? "border-[#fc1660] text-[#fc1660] shadow-md"
                            : "border-gray-200 text-gray-500"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-white border border-gray-100 px-1.5 py-0.5 rounded text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-base md:text-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile divider */}
                  <div className="mt-10 h-px w-full bg-gray-200 md:hidden" />
                </div>
              );
            })}
          </div>

          {/* RIGHT — Hover Image (40%) */}
          <div className="hidden md:block md:col-span-5 sticky top-32">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
