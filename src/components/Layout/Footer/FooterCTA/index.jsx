

import styles from './FooterCTA.module.css';
import Container from "@/components/Layout/Container";
import AnimatedLogo from "@/components/Layout/Footer/AnimatedLogo";
import BannerForm from '@/components/Form/BannerForm';
import SectionHeading from "../../SectionHeading";
import Section from '../../Section';
export default function FooterCTA() {
    return (
      <>
        <Section className={`${styles.FooterCTA} section overflow-hidden`}>
            <Container>
            <div className='grid lg:grid-cols-12 lg:gap-10'>
                <div className='col-span-6 hidden lg:block'>
                    <div className='group hway'>
                        <AnimatedLogo/>
                    </div>
                </div>
                <div className='lg:col-span-6 footer-contact'>
                    <SectionHeading
                        TopHeading="Contact us"
                        HeadingThin=""
                        HeadingThinSeparate=""
                        headingThinColor="text-[#f94a65]"
                        Heading="Step Into the Future of Green Tech"
                        Description="Get in touch. We’d love to discuss your needs."
                        color="text-white"
                        descriptionColor='text-white'
                    />
                    <div className='mt-5 max-w-[600px] lg:pr-[15px]'>
                        <BannerForm/>
                    </div>
                </div>
            </div>
            </Container>
        </Section>
      </>
    );
};