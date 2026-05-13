"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "Can you operate the cloud we already built — or that another vendor built?",
    answer:
      "Yes. The vast majority of our managed-ops engagements begin with someone else's environment. Our onboarding starts with an audit, a stabilization pass, and runbook creation — so we can operate it confidently regardless of who designed it.",
  },
  {
    question: "How is Cloud Operations different from Cloud Solutions?",
    answer:
      "Cloud Solutions is the build practice — architecture, migration, modernization. Cloud Operations is the day-two service that runs the result: SLA-backed monitoring, incident response, patching, FinOps, and security operations. They're complementary, but you can engage either independently.",
  },
  {
    question: "Do you take over on-call from our internal team?",
    answer:
      "Yes. From Day 30, our engineers carry the primary on-call pager under your defined severity matrix. Your team is welcome to remain as a secondary escalation, but the pressure of 2 AM incidents is ours, not yours.",
  },
  {
    question: "How do you charge — fixed fee, usage-based, or hybrid?",
    answer:
      "Managed operations are billed as a predictable monthly fee tied to the chosen tier, environment scope, and workload count. Cloud infrastructure spend remains directly with your cloud provider — we never mark it up or take a margin on it.",
  },
  {
    question: "What if our environment spans AWS, Azure, and GCP?",
    answer:
      "Multi-cloud is the norm, not the exception. Our ops platform is cloud-agnostic — single ticketing, unified observability, consolidated reporting — so you get one operational experience regardless of where workloads live.",
  },
  {
    question: "How do you handle compliance and audit evidence?",
    answer:
      "On Advanced and Enterprise tiers, we maintain continuous compliance posture for SOC 2, ISO 27001, HIPAA, and PCI-DSS — generating evidence, tracking control deviations, and supporting your auditors directly during attestation cycles.",
  },
];

export default function CloudOpsFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="Cloud Operations"
          highlightText="Frequently Asked"
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
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-[#fc1660]/30 shadow-md" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-[17px] font-semibold text-slate-900 pr-6">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#fc1660] text-white"
                        : "bg-[#fc1660]/10 text-[#fc1660]"
                    }`}
                  >
                    {isOpen ? <HiMinus size={16} /> : <HiPlus size={16} />}
                  </span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[400px] pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed text-[15px]">
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
