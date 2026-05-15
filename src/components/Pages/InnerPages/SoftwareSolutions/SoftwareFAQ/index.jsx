"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "How do you estimate effort and manage scope creep?",
    answer:
      "We begin with a discovery sprint that produces a thin architectural outline, backlog slices, and a risk-adjusted estimate range. Scope is managed through backlog negotiation each sprint — trade-offs are explicit, documented, and agreed with your product owner.",
  },
  {
    question: "Who owns intellectual property and source code?",
    answer:
      "By default, all custom software, repositories, and documentation produced under your engagement are your property upon payment, as defined in the master services agreement. We can work in your Git organization from day one.",
  },
  {
    question: "How do you handle security and compliance requirements?",
    answer:
      "Security is threaded through design, implementation, and operations: threat modeling, dependency scanning, secrets management, encryption, RBAC, and audit trails. We align with SOC 2, ISO 27001, HIPAA, and PCI contexts as required.",
  },
  {
    question: "Can you integrate with our existing systems and vendors?",
    answer:
      "Yes — most of our projects are integration-heavy. We design APIs and events for stability, document contracts, and build resilient adapters so upstream vendor changes do not cascade into production incidents.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "We offer hypercare windows, documentation, training, and optional managed sustainment: SLO-based support, on-call, patching, and a joint roadmap for enhancements. You choose how much autonomy you want in-house.",
  },
  {
    question: "Do you work in our time zone and tools?",
    answer:
      "We align working hours with your core team and embed in Slack, Teams, Jira, Azure DevOps, or whatever toolchain you already use. Transparency beats black-box delivery.",
  },
];

export default function SoftwareFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="Software Solutions"
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
                  type="button"
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
                    isOpen ? "max-h-[420px] pb-6" : "max-h-0"
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
