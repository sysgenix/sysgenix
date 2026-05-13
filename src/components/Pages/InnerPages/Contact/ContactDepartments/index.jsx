import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import styles from "./ContactDepartments.module.css";
import {
  HiOutlineBriefcase,
  HiOutlineLifebuoy,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const departments = [
  {
    icon: HiOutlineBriefcase,
    title: "Sales & New Projects",
    description:
      "Exploring a new project, RFP, or technology engagement? Our sales team will route you to the right specialist.",
    email: "sales@sysgenix.ca",
    phone: "+1-639-998-0063",
  },
  {
    icon: HiOutlineLifebuoy,
    title: "Customer Support",
    description:
      "Existing client? Reach our support desk for tickets, escalations, and managed-service requests with priority SLAs.",
    email: "support@sysgenix.ca",
    phone: "+1-639-998-0063",
  },
  {
    icon: HiOutlineUsers,
    title: "Partnerships & Alliances",
    description:
      "Vendor, reseller, or strategic alliance inquiry? Let's explore how we can grow together across our ecosystem.",
    email: "partners@sysgenix.ca",
    phone: "+1-639-998-0063",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Careers & Talent",
    description:
      "Interested in joining the Sysgenix team? Share your profile — we're always meeting exceptional engineers and designers.",
    email: "careers@sysgenix.ca",
    phone: "+1-639-998-0063",
  },
];

export default function ContactDepartments() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#fc1660]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <SectionTitle
            badgeText="Where to Reach"
            title="Route Your Inquiry"
            highlightText="To the Right Team"
            description="Skip the back-and-forth. Reach the right team directly and we'll get back to you faster."
            align="center"
            containerAlign="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className={`${styles.deptCard} p-7 flex flex-col`}>
                  <div className={styles.cardInner}>
                    <div
                      className={`mb-6 w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-[#fc1660] ${styles.iconBox}`}
                    >
                      <Icon size={22} />
                    </div>

                    <h3
                      className={`text-lg font-bold text-[#1e3a52] mb-3 leading-snug ${styles.title}`}
                    >
                      {dept.title}
                    </h3>

                    <p
                      className={`text-[14px] text-gray-500 leading-relaxed mb-6 ${styles.desc}`}
                    >
                      {dept.description}
                    </p>

                    <div className={`pt-5 border-t border-gray-100 space-y-2 ${styles.divider}`}>
                      <a
                        href={`mailto:${dept.email}`}
                        className={`block text-[13.5px] font-semibold text-[#1e3a52] hover:opacity-80 ${styles.contactLine}`}
                      >
                        {dept.email}
                      </a>
                      <div className={`flex items-center justify-between text-[13px] text-gray-500 ${styles.contactLine}`}>
                        <span>{dept.phone}</span>
                        <HiOutlineArrowRight
                          className={`w-4 h-4 text-[#fc1660] ${styles.arrow}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
