"use client";

import Container from "@/components/Layout/Container";
import Link from "next/link";
import styles from "./SiteCTA.module.css";
import Button from "@/components/ui/Button";

export default function SiteCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay} />

      <Container>
        <div className={styles.inner}>
          {/* LEFT: Value */}
          <div>           

            <h2 className={styles.title}>
              Engineering Digital Platforms That Grow With You
            </h2>

            <p className={styles.desc}>
              Sysgenix works with ambitious teams to design and build secure,
              scalable web platforms. Our focus is long-term performance,
              clean architecture, and systems that evolve as your business
              grows.
            </p>
          </div>

          {/* RIGHT: Action */}
          <div className={styles.actionBox}>
            <h3 className={styles.actionTitle}>
              Start a Conversation
            </h3>

            <p className={styles.actionDesc}>
              Tell us about your product, platform, or challenge. We’ll help
              you map the right technical direction.
            </p>
            <Button href="/services" variant="solid" fullWidth>
                Get in Touch
             </Button>
            {/* <Link href="/contact" className={styles.primaryBtn}>
              Get in Touch
            </Link> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
