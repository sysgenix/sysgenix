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
                strokeWidth="2"
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
        {/* <ul className={styles.SubNav}>
          <li>
            <Link
              href="/services/project-engineering-and-management"
              className={styles.SubNavLink}
            >
              Project Engineering & Management
            </Link>
          </li>
          <li>
            <Link
              href="/services/industrial-and-plant-automation"
              className={styles.SubNavLink}
            >
              Industrial & Plant Automation
            </Link>
          </li>
          <li>
            <Link
              href="/services/engineering-and-advisory-services"
              className={styles.SubNavLink}
            >
              Engineering & Advisory Services
            </Link>
          </li>
          <li>
            <Link href="/services/epc-solutions" className={styles.SubNavLink}>
              EPC Solutions
            </Link>
          </li>
          <li>
            <Link
              href="/services/equipment-design"
              className={styles.SubNavLink}
            >
              Equipment Design
            </Link>
          </li>
          <li>
            <Link
              href="/services/equipment-manufacturing"
              className={styles.SubNavLink}
            >
              Equipment Manufacturing
            </Link>
          </li>
          <li>
            <Link
              href="/services/after-sales-services-and-technical-support"
              className={styles.SubNavLink}
            >
              After-Sales Services & Technical Support
            </Link>
          </li>
        </ul> */}
      </li>
      <li className={styles.NavItem}>
        <Link href="/contact" className={styles.NavLink}>
          Contact 
        </Link>        
      </li>
      
    </>
  );
}
