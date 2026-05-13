import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import SiteCTA from "@/components/Pages/Common/SiteCta";
import CloudOpsIntro from "@/components/Pages/InnerPages/CloudOperations/CloudOpsIntro";
import CloudOpsCoverage from "@/components/Pages/InnerPages/CloudOperations/CloudOpsCoverage";
import CloudOpsTiers from "@/components/Pages/InnerPages/CloudOperations/CloudOpsTiers";
import CloudOpsSLA from "@/components/Pages/InnerPages/CloudOperations/CloudOpsSLA";
import CloudOpsOnboarding from "@/components/Pages/InnerPages/CloudOperations/CloudOpsOnboarding";
import CloudOpsFAQ from "@/components/Pages/InnerPages/CloudOperations/CloudOpsFAQ";

export const metadata = {
  title: "Managed Cloud Operations | Sysgenix",
  description:
    "SLA-backed 24×7 cloud operations — monitoring, patching, backups, security ops, FinOps, and incident response for AWS, Azure, and Google Cloud.",
};

export default function CloudOperationsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Cloud Operations"
        description="SLA-backed managed services that monitor, patch, secure, and optimize your cloud — every hour, every day, every quarter."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Cloud Operations", href: null },
        ]}
      />

      <CloudOpsIntro />
      <CloudOpsCoverage />
      <CloudOpsTiers />
      <CloudOpsSLA />
      <CloudOpsOnboarding />
      <CloudOpsFAQ />
      <SiteCTA />
    </>
  );
}
