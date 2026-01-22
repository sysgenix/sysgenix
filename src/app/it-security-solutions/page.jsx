import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function ITSecuritySolutionsPage() {
  return (
    <InnerPagesBanner
      pageTitle="IT Security Solutions"
      description="Protecting your digital assets with advanced security frameworks, threat detection, and proactive risk management."
      bgImage="/images/home/home-banner/hero-bg1.png"
      breadcrumbs={[{ label: "IT Security Solutions", href: null }]}
    />
  );
}
