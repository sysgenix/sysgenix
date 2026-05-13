import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import SiteCTA from "@/components/Pages/Common/SiteCta";
import CloudIntro from "@/components/Pages/InnerPages/CloudSolutions/CloudIntro";
import CloudCapabilities from "@/components/Pages/InnerPages/CloudSolutions/CloudCapabilities";
import CloudPlatforms from "@/components/Pages/InnerPages/CloudSolutions/CloudPlatforms";
import CloudMigration from "@/components/Pages/InnerPages/CloudSolutions/CloudMigration";
import CloudImpactDashboard from "@/components/Pages/InnerPages/CloudSolutions/CloudImpactDashboard";
import CloudFAQ from "@/components/Pages/InnerPages/CloudSolutions/CloudFAQ";

export default function CloudSolutionPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Cloud Solutions"
        description="Secure cloud infrastructure setup, migration, and management for enterprise scalability."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Cloud Solutions", href: null }]}
      />

      <CloudIntro />
      <CloudCapabilities />
      <CloudPlatforms />
      <CloudMigration />
      <CloudImpactDashboard />
      <CloudFAQ />
      <SiteCTA />
    </>
  );
}
