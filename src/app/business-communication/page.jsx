import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function BusinessCommunicationPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Business Communication"
        description="Delivering reliable communication solutions that improve collaboration and keep organizations connected at all times."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Business Communication", href: null }]}
      />
    </>
  );
}
