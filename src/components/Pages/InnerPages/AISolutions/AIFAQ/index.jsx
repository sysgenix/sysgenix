"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "How do you decide if AI is the right fit for our problem?",
    answer:
      "We start with a structured discovery — assessing the business problem, available data, expected ROI, and operational constraints. Sometimes the best answer is AI; sometimes it's automation, analytics, or simply a better workflow. We recommend the right tool for the job.",
  },
  {
    question: "Do you build custom models or use existing LLMs and APIs?",
    answer:
      "Both. We use foundation models (OpenAI, Anthropic, open-source LLMs) where they're the fastest and most reliable path to value, and we build custom models when your data or domain demands it. Many of our solutions combine both — for example, retrieval-augmented generation (RAG) over your private data.",
  },
  {
    question: "How do you handle data privacy, security, and IP protection?",
    answer:
      "Privacy and security are designed in from day one. We support private deployments, regional data residency, encryption at rest and in transit, role-based access, and BYO-key configurations. For LLMs, we can deploy on-prem or in your VPC to ensure your data never leaves your environment.",
  },
  {
    question: "What does a typical AI engagement look like — and how long?",
    answer:
      "Most engagements start with a 2–4 week discovery and prototyping sprint to validate value. Production rollouts typically range from 8–16 weeks depending on data readiness, integrations, and scope. We work iteratively, releasing measurable value at every milestone.",
  },
  {
    question: "How do you measure success and prevent AI from going off the rails?",
    answer:
      "Every model ships with defined success metrics, monitoring dashboards, and drift/regression detection. We implement guardrails, human-in-the-loop reviews, evaluation suites, and automated retraining pipelines — so accuracy, fairness, and reliability stay high over time.",
  },
  {
    question: "Can you work with our existing data and cloud infrastructure?",
    answer:
      "Yes. We're cloud-agnostic and work natively with AWS, Azure, GCP, Snowflake, Databricks, and on-prem stacks. Our AI systems integrate with your data warehouses, lakehouses, APIs, and business applications — no rip-and-replace.",
  },
];

export default function AIFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="AI Solutions"
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
