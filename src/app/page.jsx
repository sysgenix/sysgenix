import CompanyHighlights from "@/components/Pages/Home/CompanyHighlights";
import HeroBanner from "@/components/Pages/Home/HeroBanner";
import ServicesSection from "@/components/Pages/Home/Services";


   
export default function HomePage() {
  return (
    <>
    
     <HeroBanner/>
     <CompanyHighlights/>
     <ServicesSection/>
      {/* <div className="py-[200px]">
      <h1 className="font-bold text-[60px] md:text-[150px] text-green-600 text-center ">Sysgenix</h1>
     </div>
      <div className="py-[200px]">
      <h1 className="font-bold text-[60px] md:text-[150px] text-red-600 text-center ">Sysgenix</h1>
     </div> */}
    </>
  );
}
