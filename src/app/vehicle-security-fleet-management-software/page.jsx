import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function VehicleSecurityFleetManagementPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Vehicle Security & Fleet Management Software"
        description="Intelligent fleet management and vehicle security solutions that enhance visibility, safety, and control."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[
          { label: "Vehicle Security & Fleet Management Software", href: null }
        ]}
      />
    </>
  );
}
