"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "Which cloud platform should we choose — AWS, Azure, or GCP?",
    answer:
      "The right answer depends on your workloads, your existing technology stack, your regulatory needs, and your team's skills. We're cloud-agnostic and routinely run side-by-side evaluations — recommending the platform (or platforms) that gives you the best TCO, performance, and strategic fit for each workload.",
  },
  {
    question: "How do you ensure a cloud migration won't disrupt operations?",
    answer:
      "We migrate in low-risk waves, with full dependency mapping, dry runs, and rollback plans. Critical workloads typically move during defined maintenance windows, with data integrity validation, performance benchmarking, and acceptance testing before traffic is cut over. Most enterprise migrations achieve near-zero downtime.",
  },
  {
    question: "How do you control cloud costs after migration?",
    answer:
      "We bring FinOps practices into every cloud engagement: granular tagging, automated budget alerts, right-sizing, savings plans, idle-resource cleanup, and architecture-level cost reviews. Most clients see significant cost reductions in the first 90 days after we engage on optimization.",
  },
  {
    question: "What about cloud security and regulatory compliance?",
    answer:
      "Security is built into every layer of our cloud architectures — zero-trust networking, least-privilege IAM, encryption everywhere, secrets management, and continuous compliance scanning. We support frameworks including SOC 2, ISO 27001, HIPAA, PCI-DSS, and regional data residency requirements.",
  },
  {
    question: "Do you support hybrid and multi-cloud environments?",
    answer:
      "Yes — most enterprises we work with operate in hybrid or multi-cloud setups. We design and operate landing zones that connect on-prem, AWS, Azure, GCP, and edge environments under unified identity, networking, observability, and governance.",
  },
  {
    question: "Can you operate our cloud after the project is delivered?",
    answer:
      "Absolutely. Our managed cloud operations team runs production workloads 24/7 under defined SLAs — covering monitoring, patching, backups, disaster recovery, incident response, and ongoing optimization. You stay focused on the business; we keep the cloud healthy.",
  },
];

export default function CloudFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="Cloud Solutions"
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
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
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
