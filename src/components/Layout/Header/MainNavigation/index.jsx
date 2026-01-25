import Link from "next/link";
import styles from "./MainNavigation.module.css";
export default function MainNavigation({ isFixed }) {
  return (
    <>
      <li className={styles.NavItem}>
        <Link href="/" className={styles.NavLink}>
          Home
        </Link>        
      </li>

       <li className={styles.NavItem}>
        <Link href="#" className={styles.NavLink}>
          <span className={styles.ServicesLink}>
            What We Do
            <svg
              className={`${styles.Chevron} ${
                isFixed ? styles.ChevronDark : styles.ChevronLight
              }`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
        {/* <ul className={styles.SubNav}>
          <li><Link href="/it-infrastructure" className={styles.SubNavLink}>IT Infrastructure</Link></li>
          <li><Link href="/it-security-solutions" className={styles.SubNavLink}>IT Security Solutions</Link></li>
          <li><Link href="/business-communication" className={styles.SubNavLink}>Business Communication</Link></li>
          <li><Link href="/business-solutions" className={styles.SubNavLink}>Business Solutions</Link></li>
          <li><Link href="/software-solutions" className={styles.SubNavLink}>Software Solutions</Link></li>
          <li><Link href="/web-solutions" className={styles.SubNavLink}>Web Solutions</Link></li>
          <li><Link href="/test-measurement-solutions" className={styles.SubNavLink}>Test & Measurement Solutions</Link></li>
          <li><Link href="/wireless-solutions" className={styles.SubNavLink}>Wireless Solutions</Link></li>
          <li><Link href="/contact-center-solutions" className={styles.SubNavLink}>Contact Center Solutions</Link></li>
          <li><Link href="/telecom-solutions" className={styles.SubNavLink}>Telecom Solutions</Link></li>
          <li><Link href="/office-telephone-systems" className={styles.SubNavLink}>Office Telephone Systems</Link></li>
          <li><Link href="/video-conferencing-systems" className={styles.SubNavLink}>Video Conferencing Systems</Link></li>          
        </ul> */}
        <ul className={styles.SubNav}>
          <li><Link href="/web-solutions" className={styles.SubNavLink}>Web Solutions</Link></li>
          <li><Link href="/digital-marketing" className={styles.SubNavLink}>Digital Marketing</Link></li>
          <li><Link href="/cloud-solutions" className={styles.SubNavLink}>Cloud Solutions</Link></li>
          <li><Link href="/it-infrastructure" className={styles.SubNavLink}>IT Infrastructure Solutions</Link></li>
          <li><Link href="/software-solutions" className={styles.SubNavLink}>Software Solutions</Link></li>
          <li><Link href="/security-solutions" className={styles.SubNavLink}>Security Solutions</Link></li>
          <li><Link href="/wireless-solutions" className={styles.SubNavLink}>Wireless Solutions</Link></li>
          <li><Link href="/design-print-solutions" className={styles.SubNavLink}>Design &amp; Print Solutions</Link></li>
        </ul>
      </li>

      <li className={styles.NavItem}>
        <Link href="/about" className={styles.NavLink}>
          About
        </Link>       
      </li>

      <li className={styles.NavItem}>
        <Link href="/services" className={styles.NavLink}>
          <span className={styles.ServicesLink}>
            Services
            <svg
              className={`${styles.Chevron} ${
                isFixed ? styles.ChevronDark : styles.ChevronLight
              }`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
        <ul className={styles.SubNav}>
          <li><Link href="/services/digital-marketing" className={styles.SubNavLink}>Digital Marketing</Link></li>
          <li><Link href="/services/web-design" className={styles.SubNavLink}>Web Design</Link></li>
          <li><Link href="/services/mobile-apps" className={styles.SubNavLink}>Mobile Apps</Link></li>
          <li><Link href="/services/ui-ux-design" className={styles.SubNavLink}>UI/UX Design</Link></li>
          <li><Link href="/services/e-commerce" className={styles.SubNavLink}>E-Commerce</Link></li>
          <li><Link href="/services/seo-services" className={styles.SubNavLink}>SEO Services</Link></li>
        </ul>       
      </li>
      <li className={styles.NavItem}>
        <Link href="/contact" className={styles.NavLink}>
          Contact 
        </Link>        
      </li>
      
    </>
  );
}
