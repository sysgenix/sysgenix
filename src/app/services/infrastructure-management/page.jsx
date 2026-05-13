import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function InfrastructureManagementPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Infrastructure Management"
        description="Lifecycle management of compute, storage, networking, and data center environments with proactive health checks and change control aligned to your business."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Infrastructure Management", href: null },
        ]}
      />
    </>
  );
}
