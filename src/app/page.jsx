import CompanyHighlights from "@/components/Pages/Home/CompanyHighlights";
import HeroBanner from "@/components/Pages/Home/HeroBanner";
import HowWeWork from "@/components/Pages/Home/HowWeWork";
import ServicesSection from "@/components/Pages/Home/Services";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs";


   
export default function HomePage() {
  return (
    <>
    
     <HeroBanner/>
     <CompanyHighlights/>
     <ServicesSection/>
     {/* <WhyChooseUs/> */}
     {/* <HowWeWork/> */}
    </>
  );
}
