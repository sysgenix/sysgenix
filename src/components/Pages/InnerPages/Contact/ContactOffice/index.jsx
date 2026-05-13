import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

const officeDetails = [
  {
    icon: HiOutlineMapPin,
    label: "Head Office",
    primary: "#4 401 Pakwa Pl",
    secondary: "Saskatoon, SK · S7R 0L2, Canada",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    primary: "+1-639-998-0063",
    secondary: "Direct line · International welcome",
    href: "tel:+16399980063",
  },
  {
    icon: HiOutlineEnvelope,
    label: "Email",
    primary: "info@sysgenix.ca",
    secondary: "General inquiries & quotes",
    href: "mailto:info@sysgenix.ca",
  },
  {
    icon: HiOutlineClock,
    label: "Office Hours",
    primary: "Mon – Fri · 9:00am to 6:00pm",
    secondary: "Central Standard Time (CST)",
  },
];

export default function ContactOffice() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Visit Us"
            title="Find Us On"
            highlightText="The Map"
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* LEFT — Office Info */}
            <div className="lg:col-span-5">
              <div className="h-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#fc1660] bg-[#fc1660]/10 px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fc1660] animate-pulse" />
                  Open Today
                </div>

                <h3 className="text-2xl md:text-[28px] font-bold text-[#1e3a52] mb-3 leading-tight">
                  Sysgenix Technologies
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
                  Drop by our Saskatoon office for a coffee and a conversation,
                  or reach out using any of the channels below.
                </p>

                <ul className="space-y-5">
                  {officeDetails.map((item, index) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white shadow-md shadow-[#fc1660]/20">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">
                            {item.label}
                          </div>
                          <div className="text-[15px] font-semibold text-[#1e3a52] leading-snug">
                            {item.primary}
                          </div>
                          <div className="text-[13.5px] text-gray-500">
                            {item.secondary}
                          </div>
                        </div>
                      </div>
                    );

                    return (
                      <li key={index}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="block hover:opacity-80 transition-opacity"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="https://maps.google.com/?q=401+Pakwa+Pl,+Saskatoon,+SK+S7R+0L2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-[#fc1660] hover:text-[#1e3a52] transition-colors"
                >
                  Get Directions
                  <HiOutlineArrowTopRightOnSquare className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* RIGHT — Map */}
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                {/* Decorative gradient frame */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#fc1660] to-[#ff6b6b] z-10" />

                <iframe
                  title="Sysgenix Technologies — Saskatoon Office"
                  src="https://www.google.com/maps?q=401+Pakwa+Pl,+Saskatoon,+SK+S7R+0L2,+Canada&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                />

                {/* Floating address pill */}
                <div className="hidden md:flex absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-4 items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white flex-shrink-0">
                    <HiOutlineMapPin size={20} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-[#1e3a52] leading-tight">
                      Sysgenix HQ
                    </div>
                    <div className="text-gray-500 text-xs leading-tight">
                      #4 401 Pakwa Pl, Saskatoon, SK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
