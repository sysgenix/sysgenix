import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import SiteCTA from "@/components/Pages/Common/SiteCta";
import DigitalMarketingIntro from "@/components/Pages/InnerPages/DigitalMarketing/DigitalMarketingIntro";
import DigitalMarketingChannels from "@/components/Pages/InnerPages/DigitalMarketing/DigitalMarketingChannels";
import DigitalMarketingUseCases from "@/components/Pages/InnerPages/DigitalMarketing/DigitalMarketingUseCases";
import DigitalMarketingCommandCenter from "@/components/Pages/InnerPages/DigitalMarketing/DigitalMarketingCommandCenter";
import DigitalMarketingProcess from "@/components/Pages/InnerPages/DigitalMarketing/DigitalMarketingProcess";
import DigitalMarketingFAQ from "@/components/Pages/InnerPages/DigitalMarketing/DigitalMarketingFAQ";

export const metadata = {
  title: "Digital Marketing | Sysgenix",
  description:
    "Full-funnel digital marketing — SEO, paid media, content, lifecycle, and analytics — engineered for pipeline, ROI, and accountable growth.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Digital Marketing"
        description="Data-driven growth across SEO, paid media, content, and lifecycle — with measurement and creative velocity built in from day one."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Digital Marketing", href: null }]}
      />

      <DigitalMarketingIntro />
      <DigitalMarketingChannels />
      <DigitalMarketingUseCases />
      <DigitalMarketingCommandCenter />
      <DigitalMarketingProcess />
      <DigitalMarketingFAQ />
      <SiteCTA />
    </>
  );
}
