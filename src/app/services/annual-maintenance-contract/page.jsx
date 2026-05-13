import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function AnnualMaintenanceContractPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Annual Maintenance Contracts"
        description="Structured annual coverage for preventive maintenance, priority support, vendor coordination, and SLA-backed response when you need it most."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Annual Maintenance Contracts", href: null },
        ]}
      />
    </>
  );
}
