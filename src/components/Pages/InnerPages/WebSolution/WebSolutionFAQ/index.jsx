"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "What types of web solutions does Sysgenix provide?",
    answer:
      "Sysgenix delivers end-to-end web solutions including custom website development, scalable web applications, enterprise platforms, e-commerce systems, and headless CMS implementations tailored to business goals."
  },
  {
    question: "How does Sysgenix approach custom website development?",
    answer:
      "Our approach starts with understanding your business objectives and users. We then design, engineer, and optimize high-performance websites focused on scalability, security, and long-term maintainability."
  },
  {
    question: "Can Sysgenix build scalable web applications for growing businesses?",
    answer:
      "Yes. Sysgenix specializes in building scalable web applications that support increasing users, data, and integrations without compromising performance or security."
  },
  {
    question: "Do you work with modern frontend and backend technologies?",
    answer:
      "Absolutely. Our teams work with modern frameworks and technologies such as React, Next.js, Node.js, headless CMS platforms, and cloud-ready architectures to ensure future-proof solutions."
  },
  {
    question: "How does Sysgenix ensure website performance and speed?",
    answer:
      "We apply performance-first engineering practices including optimized code, image handling, caching strategies, and SEO-friendly structures to ensure fast load times and strong Core Web Vitals."
  },
  {
    question: "Is SEO considered during web development at Sysgenix?",
    answer:
      "Yes. SEO is integrated into our development process from the beginning, including clean code structure, semantic markup, mobile responsiveness, and performance optimization."
  },
  {
    question: "Can Sysgenix integrate third-party tools and APIs?",
    answer:
      "We seamlessly integrate third-party services such as payment gateways, CRMs, analytics tools, and custom APIs to ensure your web solution works efficiently within your ecosystem."
  },
  {
    question: "Do you offer ongoing maintenance and support after launch?",
    answer:
      "Yes. Sysgenix provides continuous maintenance, security updates, performance monitoring, and feature enhancements to ensure long-term reliability and growth."
  },
  {
    question: "How do you ensure security in web applications?",
    answer:
      "Security is built into every layer of our solutions. We follow best practices including secure authentication, data protection, regular audits, and compliance-driven development standards."
  },
  {
    question: "Why choose Sysgenix for web development services?",
    answer:
      "Sysgenix combines strategic thinking, modern technology, and enterprise-grade engineering to deliver reliable, scalable, and business-focused web solutions that drive measurable results."
  }
];

export default function WebSolutionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pb-24 bg-white">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="Web Solutions"
          highlightText="Frequently Asked Questions"
          align="center"
          containerAlign="center"
          marginBottom="mb-16"
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <span className="ml-4 text-[#fc1660]">
                    {isOpen ? <HiMinus size={20} /> : <HiPlus size={20} />}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
