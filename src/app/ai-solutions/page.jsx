import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import SiteCTA from "@/components/Pages/Common/SiteCta";
import AIIntro from "@/components/Pages/InnerPages/AISolutions/AIIntro";
import AICapabilities from "@/components/Pages/InnerPages/AISolutions/AICapabilities";
import AIUseCases from "@/components/Pages/InnerPages/AISolutions/AIUseCases";
import AIProcess from "@/components/Pages/InnerPages/AISolutions/AIProcess";
import AIFAQ from "@/components/Pages/InnerPages/AISolutions/AIFAQ";

export default function AiSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="AI Solutions"
        description="Custom AI and automation solutions that streamline operations, unlock insights, and accelerate decision-making."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "AI Solutions", href: null }]}
      />

      <AIIntro />
      <AICapabilities />
      <AIUseCases />
      <AIProcess />
      <AIFAQ />
      <SiteCTA />
    </>
  );
}
