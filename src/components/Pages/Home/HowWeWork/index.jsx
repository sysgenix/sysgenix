"use client";

import Image from "next/image";
import styles from "./HowWeWork.module.css";
import SectionTitle from "@/components/Layout/SectionTitle";
import Container from "@/components/Layout/Container";

const steps = [
  {
    step: "01",
    title: "Discovery & Requirement Analysis",
    description:
      "We begin by understanding your business vision, operational challenges, and technical requirements. Through in-depth discussions and analysis, we identify opportunities, define clear objectives, and align technology decisions with your long-term growth strategy.",
    highlights: [
      "Business and technical requirement gathering",
      "Stakeholder consultation and feasibility analysis",
      "Clear scope definition and success metrics",
    ],
    image: "/images/home/home-banner/hero-bg1.png",
  },
  {
    step: "02",
    title: "Solution Architecture",
    description:
      "Our architects design a secure, scalable, and future-ready solution tailored to your needs. We carefully select technologies, define system architecture, and ensure performance, reliability, and security are built into the foundation.",
    highlights: [
      "Scalable and modular architecture design",
      "Security-first system planning",
      "Optimized technology stack selection",
    ],
    image: "/images/home/home-banner/hero-bg2.png",
  },
  {
    step: "03",
    title: "Design & Planning",
    description:
      "We transform ideas into intuitive designs and actionable plans. This phase focuses on user experience, workflows, and a structured roadmap that ensures clarity, alignment, and smooth execution across all teams.",
    highlights: [
      "UI/UX design and user journey mapping",
      "Workflow and process planning",
      "Project milestones and delivery timeline",
    ],
    image: "/images/home/home-banner/hero-bg3.png",
  },
  {
    step: "04",
    title: "Development & Integration",
    description:
      "Using agile development practices, our team builds reliable, high-performance solutions. We focus on clean code, seamless integrations, and flexibility to adapt as your business evolves.",
    highlights: [
      "Agile and iterative development approach",
      "System and third-party integrations",
      "Performance-focused implementation",
    ],
    image: "/images/home/home-banner/hero-bg1.png",
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description:
      "Before launch, every solution goes through rigorous testing to ensure quality, performance, and security. Our QA process minimizes risk and ensures a stable, production-ready system.",
    highlights: [
      "Functional and performance testing",
      "Security and reliability validation",
      "Issue resolution and optimization",
    ],
    image: "/images/home/home-banner/hero-bg2.png",
  },
  {
    step: "06",
    title: "Deployment & Ongoing Support",
    description:
      "We ensure a smooth deployment with minimal disruption. After launch, we provide continuous monitoring, maintenance, and optimization to keep your systems secure, updated, and performing at their best.",
    highlights: [
      "Seamless deployment and go-live support",
      "Continuous monitoring and maintenance",
      "Long-term optimization and assistance",
    ],
    image: "/images/home/home-banner/hero-bg3.png",
  },
];

const HowWeWork = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <SectionTitle
          badgeText="Our Process"
          title="How We Work"
          highlightText=""
          description="A structured, transparent, and results-driven delivery process designed to support long-term business success."
          align="center"
          containerAlign="center"
        />

        <div className={styles.steps}>
          {steps.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={item.step}
                className={`${styles.stepRow} ${
                  isReversed ? styles.reverse : ""
                }`}
              >
                {/* IMAGE */}
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                  />
                </div>

                {/* CONTENT */}
                <div className={styles.content}>
                  <span className={styles.stepNumber}>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <ul className={styles.highlights}>
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
