import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/Layout/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">  
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Header />
          {children}
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}
