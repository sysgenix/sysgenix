import Link from "next/link";
import styles from "./MainNavigation.module.css";
export default function MainNavigation() {
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
          Services
        </Link>
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
