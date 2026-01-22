import Link from "next/link";
import styles from "./Services.module.css";
import SectionTitle from "@/components/Layout/SectionTitle";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Robust, scalable websites built with Next.js and React to handle high traffic and complex functionality.",
    link: "/services/web-development",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Immersive user interfaces and experiences that guide visitors effortlessly towards conversion.",
    link: "/services/design",
    iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Advanced keyword strategies and technical SEO to dominate search engines and boost organic reach.",
    link: "/services/seo",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    id: 4,
    title: "Mobile App Dev",
    description: "Native and cross-platform mobile apps that provide seamless experiences on iOS and Android devices.",
    link: "/services/apps",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Secure AWS & Azure cloud infrastructure setup, migration, and management for enterprise scalability.",
    link: "/services/cloud",
    iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
  },
  {
    id: 6,
    title: "Cyber Security",
    description: "Comprehensive security audits, penetration testing, and protection protocols to safeguard your data.",
    link: "/services/security",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    id: 7,
    title: "Digital Marketing",
    description: "Performance-based marketing campaigns across Social Media, PPC, and Email to drive instant leads.",
    link: "/services/marketing",
    iconPath: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
  },
  {
    id: 8,
    title: "IT Consultancy",
    description: "Strategic technology planning and digital transformation consulting to align IT with business goals.",
    link: "/services/consultancy",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Decor: Subtle dots or shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#fc1660]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1e3a52]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[#fc1660] font-bold tracking-widest uppercase text-xs md:text-sm bg-white shadow-sm px-6 py-2 rounded-full inline-block mb-6">
                Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a52] mb-6 leading-tight">
                Empowering Business With <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc1660] to-[#ff6b6b]">
                    Next-Gen Technology
                </span>
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
                We deliver a full spectrum of IT services. From the first line of code to the final marketing campaign, we are your dedicated digital partner.
            </p>
        </div>

        
         <SectionTitle
          badgeText="Our Expertise"
          title="Empowering Business With"
          highlightText="Next-Gen Technology"
          description="We deliver a full spectrum of IT services. From the first line of code to the final marketing campaign, we are your dedicated digital partner."
          align="center"
          containerAlign="center"
        />
        

        {/* --- 8-GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
             // Calculate staggered delay dynamically
             const delayClass = styles[`delay${(index + 1) * 100}`] || "";

             return (
                <div 
                    key={service.id} 
                    className={`
                        ${styles.serviceCard} ${styles.cardAnimate} ${delayClass}
                        p-8 rounded-2xl border border-gray-100 shadow-sm cursor-pointer group
                    `}
                >
                    {/* Watermark Number */}
                    <div className={styles.watermark}>
                        {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon Box */}
                    <div className={`${styles.iconBox} w-16 h-16 rounded-xl flex items-center justify-center mb-8`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                        </svg>
                    </div>

                    {/* Content */}
                    <h3 className={`${styles.cardTitle} text-xl font-bold text-[#1e3a52] mb-4`}>
                        {service.title}
                    </h3>
                    <p className={`${styles.cardDesc} text-gray-500 text-sm leading-relaxed mb-8 h-20`}>
                        {service.description}
                    </p>

                    {/* Arrow Button */}
                    <Link href={service.link} className={`${styles.arrowLink} inline-flex items-center font-bold text-sm tracking-wide uppercase`}>
                        Learn More
                        <svg 
                            className={`${styles.arrowIcon} w-4 h-4 ml-2 transition-transform duration-300`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            );
          })}
        </div>
        
        {/* --- View All Button (Optional) --- */}
        <div className="mt-16 text-center">
            <Link href="/services" className="inline-block bg-[#1e3a52] text-white font-semibold py-4 px-10 rounded shadow-lg hover:bg-[#fc1660] transition-colors duration-300">
                View All Services
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;