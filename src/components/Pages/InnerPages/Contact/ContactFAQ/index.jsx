"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import { HiPlus, HiMinus } from "react-icons/hi2";

const faqs = [
  {
    question: "How quickly will I hear back after submitting an inquiry?",
    answer:
      "We acknowledge every inquiry within one business day. A relevant Sysgenix specialist will then reach out to schedule a free discovery call at your convenience.",
  },
  {
    question: "Is the initial consultation free of charge?",
    answer:
      "Yes — the discovery call and the initial scoping conversation are always free. We use it to understand your goals and identify whether we're the right fit for your engagement.",
  },
  {
    question: "Do you work with clients outside of Canada?",
    answer:
      "Absolutely. While our head office is in Saskatoon, we deliver solutions worldwide and currently support enterprise clients across North America, Europe, the Middle East, and Asia.",
  },
  {
    question: "Can Sysgenix sign an NDA before our first conversation?",
    answer:
      "Yes. We're happy to execute a mutual NDA before any detailed discussion. Just mention it in your message and we'll send our standard template, or we can sign yours.",
  },
  {
    question: "What information should I include in my first message?",
    answer:
      "A short description of your business, the challenge or project you have in mind, any timeline or budget constraints, and the best way to reach you. The more context you share, the more useful our first response will be.",
  },
  {
    question: "Do you offer ongoing managed services after delivery?",
    answer:
      "Yes. Beyond project delivery, Sysgenix provides long-term managed services including monitoring, maintenance, performance tuning, and continuous improvement under defined SLAs.",
  },
];

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          badgeText="FAQs"
          title="Common Questions"
          highlightText="Before You Reach Out"
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
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#fc1660]/30 shadow-md bg-white"
                    : "border-gray-200 bg-white"
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
