import styles from "./MobileNavigation.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
export default function MobileNavigation() {
  const [openDropdowns, setOpenDropdowns] = useState(new Set());
  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };
  
  const navItems = [
    {
      key: "home",
      title: "Home",
      href: "/",
    },
    {
      key: "about",
      title: "About",
      href: "/about",
    },
    {
      key: "services",
      title: "Services",
      href: "/services",
      submenu: [
        { title: "Digital Marketing", href: "/services/digital-marketing" },
        { title: "Web Design", href: "/services/web-design" },
        { title: "Mobile Apps", href: "/services/mobile-apps" },
        { title: "UI/UX Design", href: "/services/ui-ux-design" },
        { title: "E-Commerce", href: "/services/e-commerce" },
        { title: "SEO Services", href: "/services/seo-services" },
      ],
    },
    {
      key: "contact",
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className={styles.ScrollContainer}>
      <nav className={styles.MobileNavigation}>
        <ul className={styles.MobileNavigationUl}>
          {navItems.map((item) => (
            <NavItem
              key={item.key}
              item={item}
              level={0}
              toggleDropdown={toggleDropdown}
              openDropdowns={openDropdowns}
              parentKey=""
              onLinkClick={() => setIsOpen(false)}
            />
          ))}
        </ul>
        <div className="px-4 text-center">
          <div className="p-4 text-center">
            <ul className="flex items-center justify-center flex-wrap gap-x-5 gap-y-2 mb-5 text-sm">
              
              <li>
                <Link href="/careers">Sysgenix</Link>
              </li>
            </ul>
            <Link href="tel:+16399980063" className={`btn block ${styles.btn}`}>
              Call +1-639-998-0063
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
function NavItem({
  item,
  level,
  toggleDropdown,
  openDropdowns,
  parentKey,
  onLinkClick,
}) {
  const hasSubmenu = !!item.submenu;
  const currentKey = `${parentKey}/${item.title}`;
  const isOpen = openDropdowns.has(currentKey);
  const handleClick = () => {
    if (item.href) {
      onLinkClick();
    }
    if (hasSubmenu) {
      toggleDropdown(currentKey);
    }
  };
  return (
    <li className="relative">
      <div className="flex items-center w-full">
        <Link href={item.href} className={styles.NavLink} onClick={handleClick}>
          {item.title}
        </Link>
        {hasSubmenu && (
          <button
            onClick={() => toggleDropdown(currentKey)}
            className="p-3"
            aria-label="Toggle Submenu"
          >
            <FaChevronDown
              className={`${styles.Chevron} ${
                isOpen ? styles.ChevronOpen : ""
              }`}
            />
          </button>
        )}
      </div>
      {hasSubmenu && (
        <ul className={`${styles.MobileDropdown} ${isOpen ? styles.Show : ""}`}>
          {item.submenu.map((subItem, index) => (
            <NavItem
              key={index}
              item={subItem}
              level={level + 1}
              toggleDropdown={toggleDropdown}
              openDropdowns={openDropdowns}
              parentKey={currentKey}
              onLinkClick={onLinkClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
