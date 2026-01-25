import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function SecuritySolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Security Solutions"
        description="Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure data integrity."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Security Solutions", href: null }]}
      />
    </>
  );
}   
    
