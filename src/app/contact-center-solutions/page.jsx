import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function ContactCenterSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Contact Center Solutions"
        description="Customer engagement solutions that improve responsiveness, service quality, and customer trust."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Contact Center Solutions", href: null }]}
      />
    </>
  );
}
