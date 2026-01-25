import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function AboutPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="About Us"
        description="Learn more about our company, mission, and values."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "About Us", href: null }]}
      />
    </>
  );
}
