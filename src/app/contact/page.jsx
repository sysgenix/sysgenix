import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";
import ContactQuickInfo from "@/components/Pages/InnerPages/Contact/ContactQuickInfo";
import ContactFormSection from "@/components/Pages/InnerPages/Contact/ContactFormSection";
import ContactDepartments from "@/components/Pages/InnerPages/Contact/ContactDepartments";
import ContactOffice from "@/components/Pages/InnerPages/Contact/ContactOffice";
import ContactFAQ from "@/components/Pages/InnerPages/Contact/ContactFAQ";

export default function ContactPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Contact Us"
        description="22+ years of engineering trust. Let's talk about your project, your platform, or the next step in your digital journey."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Contact Us", href: null }]}
      />

      <ContactQuickInfo />
      <ContactFormSection />
      <ContactDepartments />
      <ContactOffice />
      <ContactFAQ />
    </>
  );
}
