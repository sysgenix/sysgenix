
import Image from 'next/image';
import MainNavigation from '../MainNavigation';
import styles from './Navigation.module.css';
import Link from 'next/link';

export default function Navigation({ isFixed }) {
 
  return (
    <>     
     <nav className={styles.MainNavbar}>
        <ul className={styles.MainNavbarUl}>
            <MainNavigation isFixed={isFixed}/>
        </ul>
        {/* <Link href="/contact-us" className="inline-block bg-[#de4b5c] text-white font-semibold py-3 px-8 shadow-md hover:bg-[#c93d4e] transition-colors duration-300 tracking-wider cursor-pointer"><Image src="/images/contact.gif" alt='sysgenix Number' width={30} height={30}/> +1-639-998-0063</Link> */}
        <Link
            href="tel:+16399980063"
            className={`inline-flex items-center border border-[#fc1660] bg-transparent font-semibold py-2 px-4 tracking-wider cursor-pointer transition-colors duration-300 
              ${isFixed ? 'text-[#fc1660]' : 'text-white'} ${isFixed ? 'hover:bg-[#ffffff]' : 'hover:bg-gray-900'}
            `}
          ><Image src="/images/header/contact.gif" alt='Call - Sysgenix ' width={30} height={30}/>
            +1-639-998-0063
          </Link>
        <Link href="/contact-us" className="inline-flex items-center gap-2 border border-[#fc1660] bg-[#fc1660] text-white font-semibold py-2 px-4  hover:bg-[#c93d4e] transition-colors duration-300 tracking-wider cursor-pointer"><Image src="/images/header/quote.gif" alt='Call - Sysgenix ' width={25} height={25}/>Get a Quote</Link>
    </nav>
    </>
  );
}
