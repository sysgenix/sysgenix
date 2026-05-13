import Container from "@/components/Layout/Container";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
} from "react-icons/hi2";

const items = [
  {
    icon: HiOutlinePhone,
    label: "Call Us",
    primary: "+1-639-998-0063",
    secondary: "Mon – Fri · 9:00am to 6:00pm CST",
    href: "tel:+16399980063",
  },
  {
    icon: HiOutlineEnvelope,
    label: "Email Us",
    primary: "info@sysgenix.ca",
    secondary: "Replies within one business day",
    href: "mailto:info@sysgenix.ca",
  },
  {
    icon: HiOutlineMapPin,
    label: "Visit Our Office",
    primary: "#4 401 Pakwa Pl",
    secondary: "Saskatoon, SK · S7R 0L2, Canada",
    href: "https://maps.google.com/?q=401+Pakwa+Pl,+Saskatoon,+SK+S7R+0L2",
  },
  {
    icon: HiOutlineClock,
    label: "Working Hours",
    primary: "Mon – Fri · 9 to 6",
    secondary: "Weekend support by appointment",
    href: null,
  },
];

export default function ContactQuickInfo() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            const Card = (
              <div className="group h-full bg-white rounded-2xl border border-gray-100 shadow-md p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#fc1660]/30">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fc1660] to-[#ff6b6b] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#fc1660]/20 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                  {item.label}
                </div>

                <div className="text-[17px] font-bold text-[#1e3a52] mb-1 leading-snug">
                  {item.primary}
                </div>

                <div className="text-sm text-gray-500 leading-relaxed">
                  {item.secondary}
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={index}>{Card}</div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
