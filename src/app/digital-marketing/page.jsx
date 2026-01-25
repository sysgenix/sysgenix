import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function DigitalMarketingPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Digital Marketing"
        description="Data-driven digital marketing strategies including SEO, PPC, and social media to maximize ROI."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Digital Marketing", href: null }]}
      />
    </>
  );
}
