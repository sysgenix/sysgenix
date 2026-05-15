import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import SiteCTA from "@/components/Pages/Common/SiteCta";
import SoftwareIntro from "@/components/Pages/InnerPages/SoftwareSolutions/SoftwareIntro";
import SoftwareCapabilities from "@/components/Pages/InnerPages/SoftwareSolutions/SoftwareCapabilities";
import SoftwareEngagement from "@/components/Pages/InnerPages/SoftwareSolutions/SoftwareEngagement";
import SoftwareDelivery from "@/components/Pages/InnerPages/SoftwareSolutions/SoftwareDelivery";
import SoftwareStack from "@/components/Pages/InnerPages/SoftwareSolutions/SoftwareStack";
import SoftwareFAQ from "@/components/Pages/InnerPages/SoftwareSolutions/SoftwareFAQ";

export const metadata = {
  title: "Software Solutions | Sysgenix",
  description:
    "Custom software engineering — web and mobile apps, APIs, integrations, legacy modernization, and cloud-native delivery with security and observability.",
};

export default function SoftwareSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Software Solutions"
        description="Bespoke applications, integrations, and platforms — engineered for reliability, security, and the way your teams actually work."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Software Solutions", href: null }]}
      />

      <SoftwareIntro />
      <SoftwareCapabilities />
      <SoftwareEngagement />
      <SoftwareDelivery />
      <SoftwareStack />
      <SoftwareFAQ />
      <SiteCTA />
    </>
  );
}
