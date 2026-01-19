

import Link from 'next/link';
import Image from "next/image";
import Container from "@/components/Layout/Container";
import styles from './Footer.module.css';
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <>
       <footer className="relative z-0 footer pt-10 border-t-[1px] border-[#eaeaea] bg-gray-900" id="footer">
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-70 z-[-1]"
        style={{ backgroundImage: "url('/images/bg/footer_bg.jpg')" }}>
        </div>
            <Container>
                <div className="grid grid-cols-12 px-[10px] footer_grid justify-center gap-y-10 gap-3 xl:gap-10 text-[14px] md:text-[16px]">
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <div className=''>
                            <div className="footer-col">
                                <h3 className={styles.footerTitle}>About SED</h3>
                                <div className={styles.footerLinks }>
                                    <ul className=' grid gap-3'>
                                        <li><Link href="/about-us">Overview</Link></li> 
                                        <li><Link href="/about-us/leadership-message">Leadership Message</Link></li> 
                                        <li><Link href="/about-us/infrastructure">Infrastructure</Link></li>  
                                        {/* <li><Link href="/about-us/our-team">Our Team</Link></li>  */}
                                        <li><Link href="/about-us/certifications">Certifications</Link></li>  
                                        <li><Link href="/about-us/industry-recognitions-awards">Industry Recognitions/Awards</Link></li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <div className="footer-col">
                            <h3 className={styles.footerTitle}>Verticals & Applications</h3>
                            <div className={styles.footerLinks }>
                                <ul className=' grid gap-3'>
                                    <li><Link href="/verticals/sugar">Sugar</Link></li>                
                                    <li><Link href="/verticals/water">Water</Link></li>
                                    <li><Link href="/verticals/jaggery">Jaggery</Link></li> 
                                    <li><Link href="/verticals/biofuel">Biofuel</Link></li>  
                                    <li><Link href="/verticals/product-concentration">Product Concentration</Link></li>
                                    <li><Link href="/sustainability">Sustainability</Link></li>                
                                    <li><Link href="/advisory">Advisory</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-4 lg:col-span-2">
                        <div className="footer-col">
                            <h3 className={styles.footerTitle}>Resources</h3>
                            <div className={styles.footerLinks }>
                                <ul className=' grid gap-3'>
                                    <li><Link href="/careers">Careers</Link></li>
                                    <li><Link href="/blogs">Blogs</Link></li>
                                    <li><Link href="/resources/media">Media</Link></li>
                                    <li><Link href="/resources/case-studies">Case Studies</Link></li>
                                    <li><Link href="/resources/download">Download</Link></li>
                                    <li><Link href="/contact-us">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-4 lg:col-span-3">
                        <div className="footer-col">
                            <h3 className={styles.footerTitle}>Investors & Media</h3>
                            <div className={styles.footerLinks }>
                                <ul className=' grid gap-3'>
                                    <li><Link href="/investors#boardOfDirectors">Board Of Directors</Link></li> 
                                    <li><Link href="/investors#financialResults">Financial Results</Link></li> 
                                    <li><Link href="/investors#shareholdingPattern" >Shareholding Pattern</Link></li>  
                                    <li><Link href="/investors#policiesAndDisclosures">Policies & Disclosures</Link></li> 
                                    <li><Link href="/investors#shareTransferInformation">Share Transfer Information</Link></li>  
                                    <li><Link href="/investors#keyBankers" >Key Bankers</Link></li> 
                                    <li><Link href="/investors#auditors">Auditors</Link> </li>
                                    <li><Link href="/investors#shareholdersInformation" >Shareholders Information</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <div className="footer-col">
                            <h3 className={styles.footerTitle}>Contact</h3>
                            <div className={styles.footerLinks }>
                                <ul className=' grid gap-3'>
                                    <li><Link href="https://maps.app.goo.gl/6cNTGyLgfoei7Df59" > Spray House Plot No C-82 Industrial Area Phase-7 SAS Nagar Mohali-160055 Punjab India</Link></li>
                                    <li><Link href="mailto:info@sprayengineering.com">info@sprayengineering.com</Link></li>
                                    <li >
                                        <ul className='grid grid-cols-2'>
                                            <li><Link href="tel:+91-172-3508200" >  +91-172-3508200</Link></li>
                                            <li><Link href="tel:18008891082" >  18008891082</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.footerLinks }>
                                <Image src="/images/logo/logomain.png" alt="intl logo" width={200} height={70} className='w-[200px] h-[70px] object-contain'/>
                                <ul className=' grid gap-3'>
                                    <li><Link href="https://maps.app.goo.gl/6cNTGyLgfoei7Df59" >Spray International Water Recovery Devices LLC P.O. Box 391706, Dubai, U.A.E</Link></li>
                                    <li><Link href="mailto:internationalsales@sprayengineering.com">internationalsales@sprayengineering.com</Link></li>
                                    <li >
                                        <ul className='grid grid-cols-2 gap-y-2'>
                                            <li><Link href="tel:+971 504594932" >  +971 504594932, </Link></li>
                                            <li><Link href="tel:+971 4 5299688" >  +971 4 5299688, </Link></li>
                                            <li><Link href="tel:+91 7347027883" >  +91 7347027883</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-6 '>
                        <h3 className={styles.footerTitle}>Get the Latest from SED</h3>
                        <div className='footer-social grid grid-cols-5 mt-3'>
                            <Link href="https://www.facebook.com/sprayengineering"target="_blank" rel="noopener noreferrer"><Image src="/images/social/fb.svg" alt="" width={30} height={30} className='w-8 invert '/></Link>
                            <Link href="https://www.linkedin.com/company/sprayengineeringdevices"target="_blank" rel="noopener noreferrer"><Image src="/images/social/in.svg" alt="" width={30} height={30} className='w-8 invert'/></Link>
                            <Link href="https://twitter.com/sprayeng"target="_blank" rel="noopener noreferrer"><Image src="/images/social/x.svg" alt="" width={30} height={30} className='w-8 invert'/></Link>
                            <Link href="https://www.instagram.com/sprayengineering"target="_blank" rel="noopener noreferrer"><Image src="/images/social/ins.svg" alt="" width={30} height={30} className='w-8 invert'/></Link>
                            <Link href="https://www.youtube.com/channel/UCkJp6TYMyAYLaRAdQzGNTZQ/featured" target="_blank" rel="noopener noreferrer"><Image src="/images/social/yt.svg" alt="" width={30} height={30} className='w-8 invert ml-[-10px]'/></Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom border-t-[1px] mt-8 pt-4 pb-[30px] md:pb-4 text-gray-500 ">
                    <div className="md:flex justify-center items-center text-center">
                        <div className="">
                        ©{currentYear} <span className="text-[#f94a65]">Spray Engineering Devices Limited.</span> 
                        </div>
                    </div>
                </div>
            </Container> 
        </footer>
      </>
    );
};
