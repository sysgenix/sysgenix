import PartnersSys from "@/components/Pages/Common/PartnersSys";
import CompanyHighlights from "@/components/Pages/Home/CompanyHighlights";
import HeroBanner from "@/components/Pages/Home/HeroBanner";
import HowWeWork from "@/components/Pages/Home/HowWeWork";
import Partners from "@/components/Pages/Home/Partners";
import ServicesSection from "@/components/Pages/Home/Services";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs";

const partners = [
  { image: "/images/home/partners/microsoft.png", name: "Softwares",},
  { image: "/images/home/partners/aws.png", name: "Softwares",},
  { image: "/images/home/partners/bittitan.png", name: "Softwares",},
  { image: "/images/home/partners/connectwise.png", name: "Softwares",},
  { image: "/images/home/partners/fortinet.png", name: "Softwares",},
  { image: "/images/home/partners/ibm.png", name: "Softwares",},
  { image: "/images/home/partners/proofpoint.png", name: "Softwares",},
  { image: "/images/home/partners/sentinel.png", name: "Softwares",},
  { image: "/images/home/partners/veeam.png", name: "Softwares",},
  { image: "/images/home/partners/watchguard.png", name: "Softwares",},
  { image: "/images/home/partners/exclaimer.png", name: "Softwares",},
  { image: "/images/home/partners/acronis.png", name: "Softwares",},
  { image: "/images/home/partners/screen-connect.png", name: "Softwares",},
  { image: "/images/home/partners/n-able.png", name: "Softwares",},
  
];
   
export default function HomePage() {
  return (
    <>
    
     <HeroBanner/>
     <CompanyHighlights/>
     <ServicesSection/>
     <Partners/>
     <PartnersSys
  title="Strategic Alliances with Global Tech Leaders"
  content="We collaborate with industry-leading brands who trust our vision and values."
  partners={partners}
/>
     {/* <WhyChooseUs/> */}
     {/* <HowWeWork/> */}
    </>
  );
}
