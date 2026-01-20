"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroBanner.module.css";
import Link from "next/link";

 const sliderData = [
  {
    id: 1,
    // Suggestion: Use an image of a team coding or a clean workspace with multiple monitors
    image: "/images/home/home-banner/hero-bg1.png", 
    title: "Innovative Web Solutions For Modern Business.",
    description:
      "We build responsive, high-performance, and scalable websites tailored to elevate your brand identity and drive digital growth.",
    buttonText: "GET STARTED",
    href: "/contact"
  },
  {
    id: 2,
    // Suggestion: Use an image of wireframes, prototypes, or designers pointing at a screen
    image: "/images/home/home-banner/hero-bg2.png", 
    title: "Creative UI/UX Design That Inspires.",
    description:
      "Deliver seamless user experiences. Our design team crafts intuitive interfaces that blend stunning aesthetics with effortless functionality.",
    buttonText: "VIEW PORTFOLIO",
    href: "/contact"
  },
  {
    id: 3,
    // Suggestion: Use an image representing analytics, graphs, or growth (upward trends)
    image: "/images/home/home-banner/hero-bg3.png", 
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
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[100vh] min-h-[600px] overflow-hidden bg-gray-100 font-sans">
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
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-20 container mx-auto h-full flex items-center px-6 md:px-12 lg:px-24">
              <div key={currentSlide} className="max-w-2xl mt-20">
                
                {/* Render TitleTag (h1 or div). 
                   The classes remain identical so the look doesn't change 
                */}
                <TitleTag 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a52] leading-tight mb-6 ${styles.textEnterAnimation} ${styles.delay500}`}
                >
                  {slide.title}
                </TitleTag>

                <p className={`text-lg text-gray-600 mb-10 md:pr-20 ${styles.textEnterAnimation} ${styles.delay700}`}>
                  {slide.description}
                </p>

                <div className={`${styles.textEnterAnimation} ${styles.delay900}`}>
                  <Link 
                    href={slide.href}
                    // Added tabIndex to prevent tabbing to invisible buttons
                    tabIndex={isActive ? 0 : -1}
                    className="inline-block bg-[#f94a65] text-white font-semibold py-3 px-8 shadow-md hover:bg-[#c93d4e] transition-colors duration-300 tracking-wider cursor-pointer"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination Controls */}
      <div className="absolute z-30 bottom-8 md:bottom-12 right-6 md:right-12 flex items-center space-x-2 font-bold text-xl md:text-[50px]">
        {sliderData.map((_, index) => {
          const isActive = index === currentSlide;
          const slideNumber = String(index + 1).padStart(2, "0");

          return (
            <div key={index} className="flex items-center">
              <button
                onClick={() => setCurrentSlide(index)}
                className={`transition-colors duration-300 z-30 cursor-pointer ${
                  isActive ? "text-[#de4b5c]" : "text-[#ffffff]/50 hover:text-[#ffffff]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {slideNumber}
              </button>
              {index !== slideLength - 1 && (
                 <span className="text-[#de4b5c] mx-2">-</span>
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