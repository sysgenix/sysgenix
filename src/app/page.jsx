import CompanyHighlights from "@/components/Pages/Home/CompanyHighlights";
import HeroBanner from "@/components/Pages/Home/HeroBanner";
import HowWeWork from "@/components/Pages/Home/HowWeWork";
import Partners from "@/components/Pages/Home/Partners";
import ServicesSection from "@/components/Pages/Home/Services";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs";


   
export default function HomePage() {
  return (
    <>
    
     <HeroBanner/>
     <CompanyHighlights/>
     <ServicesSection/>
     <Partners/>
     {/* <WhyChooseUs/> */}
     {/* <HowWeWork/> */}
    </>
  );
}
