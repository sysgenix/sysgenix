
import Image from 'next/image';
import MainNavigation from '../MainNavigation';
import styles from './Navigation.module.css';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Navigation({ isFixed }) {
 
  return (
    <>     
     <nav className={styles.MainNavbar}>
        <ul className={styles.MainNavbarUl}>
            <MainNavigation isFixed={isFixed}/>
        </ul>
      
          <Button
            href="tel:+16399980063"
            variant="outline"
            isFixed={isFixed}
            imageSrc="/images/header/contact.gif"
            imageAlt="Call - Sysgenix"
            imageSize={30}
          >
            +1-639-998-0063
          </Button>

          <Button
            href="/contact-us"
            variant="solid"
            imageSrc="/images/header/quote.gif"
            imageAlt="Get a Quote"
            imageSize={25}
          >
            Get a Quote
          </Button>
       
    </nav>
    </>
  );
}
