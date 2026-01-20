import Link from "next/link";
import styles from "./Footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={`${styles.headerRow}  flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center`}>
          <div className={styles.logo}>
            <Image src="/images/logo/sed-logo.png" alt="SED" width={100} height={100} />
          </div>
          <div className='grid grid-cols-5 gap-2'>
            <Link href="https://www.facebook.com/sprayengineering" target="_blank" rel="noopener noreferrer"><Image src="/images/social/fb.svg" alt="" width={30} height={30} className='w-8 invert ' /></Link>
            <Link href="https://www.linkedin.com/company/sprayengineeringdevices" target="_blank" rel="noopener noreferrer"><Image src="/images/social/in.svg" alt="" width={30} height={30} className='w-8 invert' /></Link>
            <Link href="https://twitter.com/sprayeng" target="_blank" rel="noopener noreferrer"><Image src="/images/social/x.svg" alt="" width={30} height={30} className='w-8 invert' /></Link>
            <Link href="https://www.instagram.com/sprayengineering" target="_blank" rel="noopener noreferrer"><Image src="/images/social/ins.svg" alt="" width={30} height={30} className='w-8 invert' /></Link>
            <Link href="https://www.youtube.com/channel/UCkJp6TYMyAYLaRAdQzGNTZQ/featured" target="_blank" rel="noopener noreferrer"><Image src="/images/social/yt.svg" alt="" width={30} height={30} className='w-8 invert ' /></Link>
          </div>
          <div className={styles.headerButtons}>
            <Link href="/contact-us/enquiry" className={`btn ${styles.contactBtn}`}>Contact Us</Link>
          </div>
        </div>

        <div className={`${styles.topSection}  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_300px_280px] gap-8`}>

          <div>
            <h3 className={styles.heading}>About SED</h3>
            <ul className={styles.list}>
              <li><Link href="/about-us">Overview</Link></li>
              <li><Link href="/about-us/leadership-message">Leadership Message</Link></li>
              <li><Link href="/about-us/our-team">Management Team</Link></li>
              <li><Link href="/about-us/infrastructure">Infrastructure</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/about-us/certifications">Certifications</Link></li>
              <li><Link href="/about-us/industry-recognitions-awards">Industry Recognitions/Awards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Verticals</h3>
            <ul className={styles.list}>
              <li><Link href="/verticals/sugar">Sugar</Link></li>
              <li><Link href="/verticals/water">Water</Link></li>
              <li><Link href="/verticals/jaggery">Jaggery</Link></li>
              <li><Link href="/verticals/biofuel">Biofuel</Link></li>
              <li><Link href="/verticals/product-concentration">Product Concentration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Resources</h3>
            <ul className={styles.list}>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/resources/media">Media</Link></li>
              <li><Link href="/resources/case-studies">Case Studies</Link></li>
              <li><Link href="/resources/download">Download</Link></li>
              <li><Link href="/investors">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.list}>
              <li><Link href="/services/project-engineering-and-management">Project Engineering & Management</Link></li>
              <li><Link href="/services/industrial-and-plant-automation">Industrial & Plant Automation</Link></li>
              <li><Link href="/services/engineering-and-advisory-services" >Engineering & Advisory Services</Link></li>
              <li><Link href="/services/epc-solutions">EPC Solutions</Link></li>
              <li><Link href="/services/equipment-design">Equipment Design</Link></li>
              <li><Link href="/services/equipment-manufacturing" >Equipment Manufacturing</Link></li>
              <li><Link href="/services/after-sales-services-and-technical-support">After-Sales Services & Technical Support</Link> </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Contact </h3>
            <div className="space-y-4">
              <div className={styles.contactDomestic}>
                <div className={styles.iconDomestic}><FaMapMarkerAlt /></div>
                <ul className="">
                  <li><Link href="https://maps.app.goo.gl/6cNTGyLgfoei7Df59" > Spray House Plot No C-82 Industrial Area Phase-7 SAS Nagar Mohali-160055 Punjab India</Link></li>
                </ul>
              </div>
              <div className={styles.contactDomestic}>
                <div className={styles.iconDomestic}><FaEnvelope /></div>
                <ul className="">
                  <li><Link href="mailto:info@sprayengineering.com">info@sprayengineering.com</Link></li>
                </ul>
              </div>
              <div className={styles.contactDomestic}>
                <div className={styles.iconDomestic}><FaPhoneAlt /></div>
                <ul className='space-y-2'>
                  <li><Link href="tel:+91-172-3508200" >  +91-172-3508200,</Link></li>
                  <li><Link href="tel:18008891082" className="ml-[10px]" >  18008891082</Link></li>
                </ul>
              </div>
            </div>
          </div>




        </div>


        <div className={`${styles.contactInfo} md:px-[20px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[250px_1fr_250px_1fr] gap-4`}>
          <div className={styles.contactCard1}>
            <Image src="/images/logo/logomain.png" alt="SED" width={246} height={55} className={styles.internationalLogo} />
          </div>
          <div className={styles.contactCard}>
            <div className={styles.icon}><FaMapMarkerAlt /></div>
            <ul>
              <li><Link href="https://maps.app.goo.gl/6cNTGyLgfoei7Df59" >Spray International Water Recovery Devices LLC P.O. Box 391706, Dubai, U.A.E</Link></li>
            </ul>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}><FaPhoneAlt /></div>
            <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-1'>
              <li><Link href="tel:+971 504594932" >  +971 504594932, </Link></li>
              <li><Link href="tel:+971 4 5299688" >  +971 4 5299688, </Link></li>
              <li><Link href="tel:+91 7347027883" >  +91 7347027883</Link></li>
            </ul>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.icon}><FaEnvelope /></div>
            <ul>
              <li><Link href="mailto:internationalsales@sprayengineering.com">internationalsales@sprayengineering.com</Link></li>
            </ul>
          </div>


        </div>

        <div className={`${styles.bottom} container mx-auto flex flex-col lg:flex-row  justify-between items-center gap-3 `}>
          <p>Copyright @ <span>Spray Engineering Devices (SED) Limited.</span>  All Rights Reserved.</p>
          <div className="lg:pr-[42px] md:pr-[24px] sm:pr-[24px] pr-0">
            <div className="flex flex-wrap gap-2 pb-[120px] md:pb-0">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
              <Link href="/subscribe" className="hover:text-white">Subscribe</Link>
              <Link href="https://www.sprayengineering.com/sitemap.xml" className="hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
