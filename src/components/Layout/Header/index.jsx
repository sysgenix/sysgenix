'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Layout/Header/Navigation';
import { CgClose } from 'react-icons/cg';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Fix scroll-based header style
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  return (
    <header className="relative">
      <div className={`${styles.navigation} ${isFixed ? styles.navigationfix : ''}`}>
        <div className="relative z-10">
          <div className="flex justify-between items-center px-2 py-4">
            <div className={styles.logo} >
              <Link href="/" className="block w-[150px] xl:w-[250px] ml-4">
                <Image
                src={isFixed 
                    ? "/images/logo/logo-sys.png"
                    : "/images/logo/logo-sys-white.png"
                  }                 
                  alt="Sysgenix Technologies"
                  width={250}
                  height={100}
                />
              </Link>
            </div>
            <div className={`${styles.Navbar} ml-auto`}>
              <Navigation isFixed={isFixed} />
            </div>
            <button
              className={`${styles.openOffcanvasNav} ml-auto`}
              aria-label="toggle mobile menu"
              title="open offcanvas menu"
              onClick={() => setIsNavOpen(true)}
            >
              <span className={`${styles.iconBar} ${styles.topBar}`}></span>
              <span className={`${styles.iconBar} ${styles.middleBar}`}></span>
              <span className={`${styles.iconBar} ${styles.bottomBar}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Navigation */}
      <div
        className={styles.OffcanvasNav}
        style={{
          transform: isNavOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          pointerEvents: isNavOpen ? 'auto' : 'none',
        }}
      >
        <div className={`${styles.OffcanvasNavHeader} flex justify-between items-center py-2 px-4`}>
          <div>
            <Link href="/" className="block w-[150px] xl:w-[60px]">
              <Image
                src="/images/logo/logo-sys.png"
                alt="Sysgenix Technologies"
                width={200}
                height={100}
              />
            </Link>
          </div>
          <div className={styles.CloseMobileNav} onClick={() => setIsNavOpen(false)}>
            <CgClose />
          </div>
        </div>
        {/* <MobileNavigation /> */}
      </div>
    </header>
  );
}
