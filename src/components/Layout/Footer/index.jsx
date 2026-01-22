import Link from "next/link";
import styles from "./Footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from 'react-icons/fa';
import Image from "next/image";
import Container from "../Container";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={`${styles.headerRow}  flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center`}>
          <div className={styles.logo}>
            <Image src="/images/logo/logo-sys-white.png" alt="Sysgenix Technologies" width={922} height={140} />
          </div>         
          <ul className="flex items-center gap-5 text-white text-2xl">
            <li className="transition-transform duration-300 hover:scale-125"><Link href="https://www.facebook.com/SysGenixT" target="_blank" rel="noopener noreferrer" aria-label="facebook"><FaFacebook /></Link></li>
            <li className="transition-transform duration-300 hover:scale-125"><Link href="#" target="_blank" rel="noopener noreferrer" aria-label="twitter"><FaXTwitter /></Link></li>
            <li className="transition-transform duration-300 hover:scale-125"><Link href="#" target="_blank" rel="noopener noreferrer" aria-label="instagram"><FaInstagram /></Link></li>
            <li className="transition-transform duration-300 hover:scale-125"><Link href="#" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><FaLinkedin /></Link></li>
            <li className="transition-transform duration-300 hover:scale-125"><Link href="#" target="_blank" rel="noopener noreferrer" aria-label="youtube"><FaYoutube /></Link></li>
          </ul>

          <Button href="/contact-us" variant="solid">Contact Us</Button>
        </div>

        <div className={`${styles.topSection}  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.5fr_1fr_300px_280px] gap-8`}>

          <div>
            <h3 className={styles.heading}>About Sysgenix</h3>
           <p className="text-sm">Empowering brands with cutting-edge IT solutions. We specialize in custom web development, intuitive UI/UX design, and data-driven SEO strategies to accelerate your digital growth.</p>
          </div>

          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Services</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>        

          <div>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.list}>
              <li><Link href="/#">Digital Marketing</Link></li>              
              <li><Link href="/#">Web Design </Link></li>              
              <li><Link href="/#">Mobile Apps </Link></li>              
              <li><Link href="/#">UI/UX Design </Link></li>              
              <li><Link href="/#">E-Commerce </Link></li>              
              <li><Link href="/#">SEO Services </Link></li>              
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Contact </h3>
            <div className="space-y-4">
              <div className={styles.contactDomestic}>
                <div className={styles.iconDomestic}><FaMapMarkerAlt /></div>
                <ul className="">
                  <li><Link href="#" >#4 401 Pakwa Pl, Saskatoon SK S7R 0L2 Canada.</Link></li>
                </ul>
              </div>
              <div className={styles.contactDomestic}>
                <div className={styles.iconDomestic}><FaEnvelope /></div>
                <ul className="">
                  <li><Link href="mailto:info@sysgenix.ca">info@sysgenix.ca</Link></li>
                </ul>
              </div>
              <div className={styles.contactDomestic}>
                <div className={styles.iconDomestic}><FaPhoneAlt /></div>
                <ul className='space-y-2'>
                  <li><Link href="tel:+16399980063" >+1-639-998-0063</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
        <div className={`${styles.bottom} mx-auto  `}>
          <p className="text-center">© {new Date().getFullYear()}{' '} <span>Sysgenix Technologies</span> |  All Rights Reserved.</p>         
        </div>
      </Container>
    </footer>
  );
}
