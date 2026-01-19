import Image from 'next/image';
import MainNavigation from '../MainNavigation';
import styles from './Navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>     
     <nav className={styles.MainNavbar}>
        <ul className={styles.MainNavbarUl}>
            <MainNavigation/>
        </ul>
        <Link href="/contact-us" className={`btn ${styles.btn}`}><Image src="/images/helpdesk.gif" alt='sysgenix Number' width={30} height={30}/> +1-639-998-0063</Link>
    </nav>
    </>
  );
}
