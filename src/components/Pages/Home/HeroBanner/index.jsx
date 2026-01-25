"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroBanner.module.css";
import Link from "next/link";
import Button from "@/components/ui/Button";

 const sliderData = [
  {
    id: 1,
    image: "/images/home/home-banner/hero-bg1.webp", 
    title: "Innovative Web Solutions For Modern Business.",
    description:
      "We build responsive, high-performance, and scalable websites tailored to elevate your brand identity and drive digital growth.",
    buttonText: "GET STARTED",
    href: "/contact"
  },
  {
    id: 2,
    image: "/images/home/home-banner/hero-bg2.webp", 
    title: "Creative UI/UX Design That Inspires.",
    description:
      "Deliver seamless user experiences. Our design team crafts intuitive interfaces that blend stunning aesthetics with effortless functionality.",
    buttonText: "VIEW PORTFOLIO",
    href: "/contact"
  },
  {
    id: 3,
    image: "/images/home/home-banner/hero-bg3.webp", 
    title: "Data-Driven SEO To Maximize Visibility.",
    description:
      "Dominate search results. We optimize your digital presence to attract organic traffic and convert visitors into loyal customers.",
    buttonText: "CONTACT US",
    href: "/contact"
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoPlayTime = 6000;

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const interval = setInterval(nextSlide, autoPlayTime);
    return () => clearInterval(interval);
  }, [currentSlide, slideLength]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[100vh] min-h-[600px] overflow-hidden  bg-gray-100 font-sans">
     
       
      {sliderData.map((slide, index) => {
        const isActive = index === currentSlide;
        
        // DYNAMIC TAG LOGIC:
        // Only the active slide gets the 'h1' tag. 
        // Inactive slides become 'div' to preserve the fade-out visual 
        // without violating SEO rules.
        const TitleTag = isActive ? "h1" : "div";

        return (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
              ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"}
            `}
            // Hides inactive slides from screen readers completely
            aria-hidden={!isActive}
          >
            {/* Image Layer */}  
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}                
                className={`object-cover object-center transition-transform duration-[7000ms] ease-in-out ${isActive ? "scale-110" : "scale-100"}`}
              />
               {/* <div className="absolute bg-black/50 inset-0"></div> */}
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-20 container mx-auto h-full flex items-center px-6 md:px-12 lg:px-24">
              <div key={currentSlide} className="max-w-2xl ">
                
                {/* Render TitleTag (h1 or div). 
                   The classes remain identical so the look doesn't change 
                */}
                <TitleTag 
                  className={`text-4xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 ${styles.textEnterAnimation} ${styles.delay500}`}
                >
                  {slide.title}
                </TitleTag>

                <p className={`text-lg text-white mb-10 md:pr-20 ${styles.textEnterAnimation} ${styles.delay700}`}>
                  {slide.description}
                </p>

                <div className={`${styles.textEnterAnimation} ${styles.delay900}`}>
                  <Button
                    href={slide.href}
                    variant="solid"
                    tabIndex={isActive ? 0 : -1}
                    className="py-3 px-8 shadow-md inline-block"
                  >
                    {slide.buttonText}
                  </Button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.lineAnimated}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>

      {/* Pagination Controls */}
      <div className="absolute z-30 bottom-8 md:bottom-12 right-6 md:right-12 flex items-center space-x-2 font-bold text-xl md:text-[40px]">
        {sliderData.map((_, index) => {
          const isActive = index === currentSlide;
          const slideNumber = String(index + 1).padStart(2, "0");

          return (
            <div key={index} className="flex items-center">
              <button
                onClick={() => setCurrentSlide(index)}
                className={`transition-colors duration-300 z-30 cursor-pointer ${
                  isActive ? "text-(--primary-color)" : "text-white/70 hover:text-[#ffffff]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {slideNumber}
              </button>
              {index !== slideLength - 1 && (
                 <span className="text-(--primary-color) mx-2">-</span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="absolute inset-0 z-0 pointer-events-none container mx-auto border-l border-r border-gray-200/30 h-full"></div>
    </section>
  );
};

export default HeroBanner;