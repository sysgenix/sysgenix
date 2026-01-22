import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function WebSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Web Solutions"
        description="Modern, high-performance web solutions crafted to enhance user experience and digital presence."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Web Solutions", href: null }]}
      />
    </>
  );
}
