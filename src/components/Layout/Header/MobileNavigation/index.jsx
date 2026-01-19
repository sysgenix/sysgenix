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
      key: "about-us",
      title: "About Us",
      href: "/about-us",
      submenu: [
        {
          title: "Overview",
          href: "/about-us",
        },
        {
          title: "Leadership Message",
          href: "/about-us/leadership-message",
        },
        {
          title: "Management Team",
          href: "/about-us/our-team",
        },
        {
          title: "Infrastructure",
          href: "/about-us/infrastructure",
        },
        {
          title: "Research & Development",
          href: "/about-us/research-and-development",
        },
        {
          title: "Sustainability",
          href: "/sustainability",
        },
        {
          title: "Industry Recognitions/Awards",
          href: "/about-us/industry-recognitions-awards",
        },
        {
          title: "Certifications",
          href: "/about-us/certifications",
        },
        
      ],
    },
    {
      key: "verticals",
      title: "Verticals & Applications",
      href: "/verticals",
      submenu: [
        { title: "Sugar", 
          href: "/verticals/sugar",
          submenu: [
            {
              title: "Turnkey Sugar Plant",
              href: "/verticals/sugar/turnkey-sugar-plant",
            },
          ]
        },
        {
          title: "Water",
          href: "/verticals/water",
          submenu: [
            {
              title: "Pharmaceutical",
              href: "/verticals/water/pharmaceutical",
              // submenu: [
              //   {
              //     title: "API",
              //     href: "/verticals/water/pharmaceutical/api",
              //     submenu: [
              //       {
              //         title: " HTDS Steams",
              //         href: "/verticals/water/pharmaceutical/api/htds-steams",
              //       },
              //       {
              //         title: "LTDS Steams",
              //         href: "/verticals/water/pharmaceutical/api/ltds-steams",
              //       },
              //       {
              //         title: "Solvent Rich Streams",
              //         href: "/verticals/water/chemical/solvent-rich-streams",
              //       },
              //       {
              //         title: "RO Reject",
              //         href: "/verticals/water/chemical/ro-reject",
              //       },
              //     ],
              //   },
              //   {
              //     title: "Formulation",
              //     href: "/verticals/water/pharmaceutical/formulation",
              //     submenu: [
              //       {
              //         title: " HTDS Steams",
              //         href: "/verticals/water/pharmaceutical/api/htds-steams",
              //       },
              //       {
              //         title: "LTDS Steams",
              //         href: "/verticals/water/pharmaceutical/api/ltds-steams",
              //       },
              //       {
              //         title: "Solvent Rich Streams",
              //         href: "/verticals/water/chemical/solvent-rich-streams",
              //       },
              //       {
              //         title: "RO Reject",
              //         href: "/verticals/water/chemical/ro-reject",
              //       },
              //     ],
              //   },
              //   {
              //     title: "Injectables",
              //     href: "/verticals/water/pharmaceutical/injectables",
              //   },
              // ],
            },
            {
              title: "Chemical",
              href: "/verticals/water/chemical",
              // submenu: [
              //   {
              //     title: "Solvent Rich Streams",
              //     href: "/verticals/water/chemical/solvent-rich-streams",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              //   {
              //     title: "ETP Outlet",
              //     href: "/verticals/water/chemical/etp-outlet",
              //   },
              // ],
            },
            {
              title: "Textile & Tanneries",
              href: "/verticals/water/textile-and-tanneries",
              // submenu: [
              //   {
              //     title: "Direct Effluent",
              //     href: "/verticals/water/textile-and-tanneries/direct-effluent",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              //   {
              //     title: "ETP Outlet",
              //     href: "/verticals/water/chemical/etp-outlet",
              //   },
              //   {
              //     title: "Sodium Sulphate Recovery",
              //     href: "/verticals/water/textile-and-tanneries/sodium-sulphate-recovery",
              //   },
              //   {
              //     title: "Leather Effluent Treatment",
              //     href: "/verticals/water/textile-and-tanneries/leather-effluent-treatment",
              //   },
              // ],
            },
            {
              title: "Dyes & Pigment",
              href: "/verticals/water/dye-and-pigment",
              // submenu: [
              //   {
              //     title: "Direct Effluent",
              //     href: "/verticals/water/textile-and-tanneries/direct-effluent",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              //   {
              //     title: "ETP Outlet",
              //     href: "/verticals/water/chemical/etp-outlet",
              //   },
              // ],
            },
            {
              title: "Food & Beverages",
              href: "/verticals/water/food-and-beverages",
              submenu: [
                // {
                //   title: "Bottling Plant Wastewater",
                //   href: "/verticals/water/food-and-beverages/bottling-plant-wastewater",
                // },
                {
                  title: "POME",
                  href: "/verticals/water/food-and-beverages/pome",
                },
                // {
                //   title: "Direct Effluent",
                //   href: "/verticals/water/textile-and-tanneries/direct-effluent",
                // },
                // {
                //   title: "RO Reject",
                //   href: "/verticals/water/chemical/ro-reject",
                // },
                // {
                //   title: "ETP Outlet",
                //   href: "/verticals/water/chemical/etp-outlet",
                // },
              ],
            },
            {
              title: "Metal & Electroplating",
              href: "/verticals/water/metal-and-electroplating",
              // submenu: [
              //   {
              //     title: "Direct Effluent",
              //     href: "/verticals/water/textile-and-tanneries/direct-effluent",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              //   {
              //     title: "ETP Outlet",
              //     href: "/verticals/water/chemical/etp-outlet",
              //   },
              // ],
            },
            {
              title: "Paper & Pulp",
              href: "/verticals/water/paper-and-pulp",
              // submenu: [
              //   {
              //     title: " Black Liquor",
              //     href: "/verticals/water/paper-and-pulp/black-liquor",
              //   },
              //   {
              //     title: " WTP RO Reject",
              //     href: "/verticals/water/paper-and-pulp/wtp-ro-reject",
              //   },
              // ],
            },
            // {
            //   title: "Automobile",
            //   href: "/verticals/water/automobile",
            //   submenu: [
            //     {
            //       title: "Galvanizing Streams",
            //       href: "/verticals/water/automobile/galvanizing-streams",
            //     },
            //     {
            //       title: "Acidic Wastewater",
            //       href: "/verticals/water/automobile/acidic-wastewater",
            //     },
            //     {
            //       title: " Pickling Water",
            //       href: "/verticals/water/automobile/pickling-water",
            //     },
            //     {
            //       title: "Chromium Plating Wastewater",
            //       href: "/verticals/water/automobile/chromium-plating-wastewater",
            //     },
            //     {
            //       title: "ETP Outlet",
            //       href: "/verticals/water/chemical/etp-outlet",
            //     },
            //     {
            //       title: "RO Reject",
            //       href: "/verticals/water/chemical/ro-reject",
            //     },
            //   ],
            // },
            {
              title: "Oil & Gas",
              href: "/verticals/water/oil-and-gas",
            },
            // {
            //   title: "Mining & Minerals",
            //   href: "/verticals/water/mining-and-minerals",
            // },
            {
              title: "Solar,PV & Semicon",
              href: "/verticals/water/solar-pv-and-semicon",
              // submenu: [
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              //   {
              //     title: "Rinse Stream",
              //     href: "/verticals/water/solar-pv-and-semicon/rinse-stream",
              //   },
              //   {
              //     title: "High Concentrated Stream",
              //     href: "/verticals/water/solar-pv-and-semicon/high-concentrated-stream",
              //   },
              //   {
              //     title: "Lithium Recovery",
              //     href: "/verticals/water/solar-pv-and-semicon/lithium-recovery",
              //   },
              // ],
            },
            // {
            //   title: "Rubber & Glass",
            //   href: "/verticals/water/rubber-and-glass",
            //   submenu: [
            //     {
            //       title: "Silica Rich Stream",
            //       href: "/verticals/water/rubber-and-glass/silica-rich-stream",
            //     },
            //     {
            //       title: "ETP Outlet",
            //       href: "/verticals/water/chemical/etp-outlet",
            //     },
            //     {
            //       title: "RO Reject",
            //       href: "/verticals/water/chemical/ro-reject",
            //     },
            //   ],
            // },
            // {
            //   title: "Distillery",
            //   href: "/verticals/water/distillery",
            //   submenu: [
            //     {
            //       title: "Raw Water Treatment",
            //       href: "/verticals/water/distillery/raw-water-treatment",
            //     },
            //     {
            //       title: "WTP RO Reject",
            //       href: "/verticals/water/paper-and-pulp/wtp-ro-reject",
            //     },
            //     {
            //       title: "CPU – Condensate Polishing Unit",
            //       href: "/verticals/water/distillery/cpu–condensate-polishing-unit",
            //     },
            //     {
            //       title: "Spent Wash",
            //       href: "/verticals/water/distillery/spent-wash",
            //     },
            //   ],
            // },
            {
              title: "Municipal Solid Waste",
              href: "/verticals/water/municipal-solid-waste",
              submenu: [
                {
                  title: "Leachate Treatment",
                  href: "/verticals/water/municipal-solid-waste/leachate-treatment",
                },
                {
                  title: "ETP Sludge Drying",
                  href: "/verticals/water/municipal-solid-waste/etp-sludge-drying",
                },
              ],
            },
            {
              title: "Other Industrial Solutions",
              href: "/verticals/water/other-industrial-solutions",
              submenu: [
                {
                  title: " COD Reduction",
                  href: "/verticals/water/other-industrial-solutions/cod-reduction",
                },
                {
                  title: "ZLD Solution",
                  href: "/verticals/water/other-industrial-solutions/zld-solution",
                },
                {
                  title: "CETP",
                  href: "/verticals/water/other-industrial-solutions/cetp",
                },
                {
                  title: " Cooling Tower Blowdown",
                  href: "/verticals/water/other-industrial-solutions/cooling-tower-blowdown",
                },
              ],
            },
          ],
        },
        { title: "Jaggery", href: "/verticals/jaggery" },
        { title: "Biofuel", href: "/verticals/biofuel" },
        {
          title: "Product Concentration",
          href: "/verticals/product-concentration",
          submenu: [
            {
              title: " Starch & Derivatives",
              href: "/verticals/product-concentration/starch-and-derivatives",
              // submenu: [
              //   {
              //     title: " HTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/htds-steams",
              //   },
              //   {
              //     title: "LTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/ltds-steams",
              //   },
              //   {
              //     title: "Solvent Rich Streams",
              //     href: "/verticals/water/chemical/solvent-rich-streams",
              //   },
              // ],
            },
            {
              title: "Dye Solutions",
              href: "/verticals/product-concentration/dye-solutions",
              submenu: [
                {
                  title: " HTDS Steams",
                  href: "/verticals/water/pharmaceutical/api/htds-steams",
                },
              ],
            },
            {
              title: "Alkali Concentration",
              href: "/verticals/product-concentration/alkali-concentration",
              submenu: [
                {
                  title: " HTDS Steams",
                  href: "/verticals/water/pharmaceutical/api/htds-steams",
                },
              ],
            },
            // {
            //   title: "Salt Separation",
            //   href: "/verticals/product-concentration/salt-separation",
            // },
            {
              title: "Dairy",
              href: "/verticals/product-concentration/dairy",
              // submenu: [
              //   {
              //     title: " HTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/htds-steams",
              //   },
              //   {
              //     title: "LTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/ltds-steams",
              //   },
              //   {
              //     title: "Solvent Rich Streams",
              //     href: "/verticals/water/chemical/solvent-rich-streams",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              // ],
            },
            // {
            //   title: "Desalination",
            //   href: "/verticals/product-concentration/desalination",
            //   submenu: [
            //     {
            //       title: " HTDS Steams",
            //       href: "/verticals/water/pharmaceutical/api/htds-steams",
            //     },
            //   ],
            // },
            {
              title: "Food",
              href: "/verticals/product-concentration/food",
              // submenu: [
              //   {
              //     title: " HTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/htds-steams",
              //   },
              //   {
              //     title: "LTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/ltds-steams",
              //   },
              //   {
              //     title: "Solvent Rich Streams",
              //     href: "/verticals/water/chemical/solvent-rich-streams",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              // ],
            },
            {
              title: "Chemical",
              href: "/verticals/water/chemical",
              // submenu: [
              //   {
              //     title: " HTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/htds-steams",
              //   },
              //   {
              //     title: "LTDS Steams",
              //     href: "/verticals/water/pharmaceutical/api/ltds-steams",
              //   },
              //   {
              //     title: "Solvent Rich Streams",
              //     href: "/verticals/water/chemical/solvent-rich-streams",
              //   },
              //   {
              //     title: "RO Reject",
              //     href: "/verticals/water/chemical/ro-reject",
              //   },
              // ],
            },
          ],
        },
      ],
    },
    {
      key: "products",
      title: "Products",
      href: "/products",
      submenu: [
        {
          title: "Evaporators",
          href: "/products/evaporators/falling-film-tubular-evaporator",
          submenu: [
            {
              title: "Falling Film Tubular Evaporator",
              href: "/products/evaporators/falling-film-tubular-evaporator",
            },
            {
              title: "Falling Film Plate Evaporator",
              href: "/products/evaporators/falling-film-plate-evaporator",
            },
            {
              title: "Forced Circulation Evaporator (FCE)",
              href: "/products/evaporators/forced-circulation-evaporator",
            },
            {
              title: "MVR Based Low Temperature Evaporator (LTE®)",
              href: "/products/evaporators/mvr-based-lte",
            },
          ],
        },
        {
          title: "Cooling & Condensing System",
          href: "/products/cooling-and-condensing-system/spray-pond",
          submenu: [
            {
              title: "Spray Pond",
              href: "/products/cooling-and-condensing-system/spray-pond",
            },
            {
              title: "Spray Condenser",
              href: "/products/cooling-and-condensing-system/spray-condenser",
            },
            {
              title: "Ejector",
              href: "/products/cooling-and-condensing-system/ejector",
            },
            {
              title: "Spray Nozzle",
              href: "/products/cooling-and-condensing-system/spray-nozzle",
            },
          ],
        },
        {
          title: "PAN & CRYSTALLIZER",
          href: "/products/pan/batch-pan",
          submenu: [
            { title: "Batch Pan", href: "/products/pan/batch-pan" },
            {
              title: "Spray Continuous Pan (SCP®)",
              href: "/products/pan/spray-continuous-pan",
            },
          ],
        },
        {
          title: "Heat Exchanger",
          href: "/products/heat-exchanger/shell-and-tube-condensate-heater",
          submenu: [
            {
              title: "Shell & Tube Condensate Heater",
              href: "/products/heat-exchanger/shell-and-tube-condensate-heater",
            },
            {
              title: "Direct Contact Heater (DCH)",
              href: "/products/heat-exchanger/dch",
            },
          ],
        },
        {
          title: "Heat Recovery",
          href: "/products/heat-recovery/cfs-flash-cigar",
          submenu: [
            {
              title: "Condensate Flashing System (FLASH CIGAR®)",
              href: "/products/heat-recovery/cfs-flash-cigar",
            },
            {
              title: "Molasses Conditioner",
              href: "/products/heat-recovery/molasses-conditioner",
            },
          ],
        },
        {
          title: "Rotary Equipment",
          href: "/products/rotating-devices/mechanical-circulator",
          submenu: [
            {
              title: "Mechanical Circulator",
              href: "/products/rotating-devices/mechanical-circulator",
            },
            { title: "MVR Fan", href: "/products/rotating-devices/mvr-fan" },
            {
              title: "Paddle Dryer",
              href: "/products/rotating-devices/paddle-dryer",
            },
            {
              title: "Sugar Melter",
              href: "/products/rotating-devices/sugar-melter",
            },
          ],
        },
        {
          title: "Mass Transfer Equipment",
          href: "/products/mass-transfer-equipment/distillation-column",
          submenu: [
            {
              title: "Distillation Column",
              href: "/products/mass-transfer-equipment/distillation-column",
            },
            {
              title: "Stripper Column",
              href: "/products/mass-transfer-equipment/stripper-column",
            },
          ],
        },
        {
          title: "Others",
          href: "/products/others/bioreactor",
          submenu: [
            { title: "Bioreactor", href: "/products/others/bioreactor" },
            { title: "Clarifier (SRT)", href: "/products/others/clarifier" },
            {
              title: "Milling System",
              href: "/products/others/milling-system",
            },
            {
              title: "Jaggery Cooling Belt Conveyer",
              href: "/products/others/jaggery-cooling-belt-conveyer",
            },
          ],
        },
      ],
    },
    {
      key: "services",
      title: "Services",
      href: "/services",
      submenu: [
        {
          title: " Project Engineering & Management",
          href: "/services/project-engineering-and-management",
        },
        {
          title: "Industrial & Plant Automation",
          href: "/services/industrial-and-plant-automation",
        },
        {
          title: " Engineering & Advisory Services",
          href: "/services/engineering-and-advisory-services",
        },
        { title: "EPC Solutions", href: "/services/epc-solutions" },
        { title: "Equipment Design", href: "/services/equipment-design" },
        {
          title: "Equipment Manufacturing",
          href: "/services/equipment-manufacturing",
        },
        {
          title: "After-Sales Services & Technical Support",
          href: "/services/after-sales-services-and-technical-support",
        },
      ],
    },
    {
      key: "contact-us",
      title: "Contact Us",
      href: "/contact-us/enquiry",
      submenu: [
        {
          title: "Customer Care",
          href: "/contact-us/customer-care",
        },
        {
          title: "Enquiry",
          href: "/contact-us/enquiry",
        },
        {
          title: "Careers",
          href: "/careers",
        },
      ],
    },
    {
      key: "resources",
      title: "Resources",
      href: "/blogs",
      submenu: [
        { title: "Blogs", href: "/blogs" },
        { title: "Media", href: "/resources/media" },
        { title: "Case Studies", href: "/resources/case-studies" },
        { title: "Download", href: "/resources/download" },
        { title: "Investors", href: "/investors" },
      ],
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
                <Link href="/about-us">SED’s Story</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/verticals">Verticals</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
            <Link href="tel:18008891082" className={`btn block ${styles.btn}`}>
              Toll Free 1800-889-1082
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
