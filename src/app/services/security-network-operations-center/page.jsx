import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function SecurityNetworkOperationsCenterPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Security & Network Operations Center"
        description="Unified 24/7 security and network operations with monitoring, alerting, threat correlation, and coordinated response across your hybrid estate."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Security & Network Operations Center", href: null },
        ]}
      />
    </>
  );
}
