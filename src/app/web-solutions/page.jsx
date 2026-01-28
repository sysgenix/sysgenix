import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import WebSolutionFAQ from "@/components/Pages/InnerPages/WebSolution/WebSolutionFAQ";
import WebSolutionsCapabilities from "@/components/Pages/InnerPages/WebSolution/WebSolutionsCapabilities";
import WebSolutionsStrategy from "@/components/Pages/InnerPages/WebSolution/WebSolutionsIntro";
import WebSolutionsProcess from "@/components/Pages/InnerPages/WebSolution/WebSolutionsProcess";

export default function WebSolutionsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Web Solutions"
        description="Modern, high-performance web solutions crafted to enhance user experience and digital presence."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Web Solutions", href: null }]}
      />

      <WebSolutionsStrategy/>
      <WebSolutionsCapabilities/>
      <WebSolutionsProcess/>    
      <WebSolutionFAQ/> 
     
    </>
  );
}
