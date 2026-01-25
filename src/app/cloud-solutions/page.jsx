import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function CloudSolutionPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Cloud Solutions"
        description="Secure cloud infrastructure setup, migration, and management for enterprise scalability."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Cloud Solutions", href: null }]}
      />
    </>
  );
}
