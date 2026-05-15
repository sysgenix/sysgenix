"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "Do you handle both strategy and day-to-day execution?",
    answer:
      "Yes. Many clients engage us for a full operating model: strategy, creative production, media buying, and weekly optimization. We can also plug in as a specialist layer alongside your in-house team — for example, owning paid media while your team owns brand.",
  },
  {
    question: "How quickly can we expect to see results?",
    answer:
      "Paid channels can show directional performance within days, but mature optimization typically needs 4–8 weeks of learning. SEO and content compound over months. We set expectations up-front with a 90-day roadmap tied to your funnel economics.",
  },
  {
    question: "How do you approach tracking when our data is messy?",
    answer:
      "We start with a tracking audit: event schema, consent mode, server-side tagging where needed, and CRM alignment. Clean data is non-negotiable — we will not scale spend on broken attribution.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "B2B SaaS, professional services, e-commerce, healthcare-adjacent, and industrial brands are common. Regulations (HIPAA, finance) inform channel choice and messaging — we adapt playbooks rather than force a one-size template.",
  },
  {
    question: "What does reporting look like for leadership?",
    answer:
      "Beyond channel dashboards, we deliver monthly business reviews: pipeline contribution, CAC trends, creative learnings, and a prioritized experiment backlog. Boards and CFOs get narrative plus numbers.",
  },
  {
    question: "Can you work with our existing agencies or freelancers?",
    answer:
      "Absolutely. We often orchestrate multiple contributors under a single measurement framework and operating cadence — reducing overlap, conflicting KPIs, and duplicated spend.",
  },
];

export default function DigitalMarketingFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="Digital Marketing"
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
