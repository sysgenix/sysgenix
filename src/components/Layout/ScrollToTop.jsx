"use client";
import Image from "next/image";
import { useState, useEffect } from "react";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[80px] z-[9999] cursor-pointer right-[50px] bg-[--primary-color] rounded-full shadow-xl ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      
      <Image src="/images/up-arrow.gif" alt="Scroll to top" width={40} height={40} className="" />
    </button>
  );
};

export default ScrollToTop;
