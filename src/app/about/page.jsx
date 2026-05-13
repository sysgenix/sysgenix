import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import SiteCTA from "@/components/Pages/Common/SiteCta";
import AboutIntro from "@/components/Pages/InnerPages/About/AboutIntro";
import AboutMissionVision from "@/components/Pages/InnerPages/About/AboutMissionVision";
import AboutStats from "@/components/Pages/InnerPages/About/AboutStats";
import AboutValues from "@/components/Pages/InnerPages/About/AboutValues";
import AboutJourney from "@/components/Pages/InnerPages/About/AboutJourney";
import AboutWhyChooseUs from "@/components/Pages/InnerPages/About/AboutWhyChooseUs";

export default function AboutPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="About Us"
        description="A global systems integrator and digital solutions partner — engineering the technology that powers modern enterprises."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "About Us", href: null }]}
      />

      <AboutIntro />
      <AboutStats />
      <AboutMissionVision />
      <AboutValues />
      <AboutJourney />
      <AboutWhyChooseUs />
      <SiteCTA />
    </>
  );
}
