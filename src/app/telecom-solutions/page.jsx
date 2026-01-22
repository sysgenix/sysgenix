import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function TelecomSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Telecom Solutions"
        description="Comprehensive telecom services designed to support reliable communication across modern enterprises."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Telecom Solutions", href: null }]}
      />
    </>
  );
}
