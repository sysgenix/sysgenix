import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Layout/Header";
import FooterNew from "@/components/Layout/FooterNew";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import Script from "next/script"; 

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {

  
  return (
    <html lang="en">
      <head>
      
       
      </head>

      <body className={poppins.className} suppressHydrationWarning={true}>
      
           <Header />
        {children}
        {/* <FooterNew /> */}
        <ScrollToTop />
       
       
      </body>
    </html>
  );
}
