import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function SoftwareSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Software Solutions"
        description="Custom software engineered to solve real business challenges, enhance productivity, and scale with your growth."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[
          { label: "Software Solutions", href: null }
        ]}
      />
    </>
  );
}
