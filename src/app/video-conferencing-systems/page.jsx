import InnerPagesBanner from "@/components/Pages/Common/InnerPagesBanner";

export default function VideoConferencingSystemsPage() {
  return (
    <>
      <InnerPagesBanner
        pageTitle="Video Conferencing Systems"
        description="High-quality video conferencing systems built to support productive, face-to-face collaboration from anywhere."
        bgImage="/images/home/home-banner/hero-bg1.png"
        breadcrumbs={[{ label: "Video Conferencing Systems", href: null }]}
      />
    </>
  );
}
