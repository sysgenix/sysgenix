import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function WirelessSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Wireless Solutions"
        description="Scalable wireless networks engineered to deliver speed, stability, and seamless connectivity."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Wireless Solutions", href: null }]}
      />
    </>
  );
}
