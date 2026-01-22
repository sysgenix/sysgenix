import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function TestMeasurementSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Test & Measurement Solutions"
        description="Accurate and dependable testing solutions that ensure quality, compliance, and operational precision."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Test & Measurement Solutions", href: null }]}
      />
    </>
  );
}
