'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import MainNavigation from '../MainNavigation';
import styles from './Navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
  const [isFixed, setIsFixed] = useState(false);
   useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>     
     <nav className={styles.MainNavbar}>
        <ul className={styles.MainNavbarUl}>
            <MainNavigation isFixed={isFixed}/>
        </ul>
        {/* <Link href="/contact-us" className="inline-block bg-[#de4b5c] text-white font-semibold py-3 px-8 shadow-md hover:bg-[#c93d4e] transition-colors duration-300 tracking-wider cursor-pointer"><Image src="/images/helpdesk.gif" alt='sysgenix Number' width={30} height={30}/> +1-639-998-0063</Link> */}
        <Link
            href="tel:+16399980063"
            className={`inline-block border border-[#fc1660] bg-transparent font-semibold py-3 px-8 tracking-wider cursor-pointer transition-colors duration-300 hover:bg-[#c93d4e]
              ${isFixed ? 'text-[#de4b5c]' : 'text-white'} ${isFixed ? 'hover:bg-[#ffffff]' : 'hover:bg-[#c93d4e]'}
            `}
          >
            +1-639-998-0063
          </Link>
        <Link href="/contact-us" className="inline-block border border-[#fc1660] bg-[#fc1660] text-white font-semibold py-3 px-8  hover:bg-[#c93d4e] transition-colors duration-300 tracking-wider cursor-pointer">Get a Quote</Link>
    </nav>
    </>
  );
}
