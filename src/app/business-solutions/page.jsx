import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function BusinessSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Business Solutions"
        description="Tailored solutions that simplify complex processes, increase efficiency, and drive smarter business decisions."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Business Solutions", href: null }]}
      />
    </>
  );
}
