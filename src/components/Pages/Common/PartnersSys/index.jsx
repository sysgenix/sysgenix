"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

export default function PartnersSys({ partners, title, content }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2500,
    centerPadding: "60px",
    slidesToShow: 5,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden  py-20">
      <Container>
        <div className="text-center mb-12">
          <SectionTitle
                    badgeText="Our Ecosystem"
                    title="Strategic Alliances with"
                    highlightText="Global Tech Leaders"
                    align="center"
                    containerAlign="center"
                />     
        </div>

        <div className="w-full">
          <Slider {...settings}>
            {partners.map((partner, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={index} className="px-4">
                  <div
                    className={`
                      relative flex items-center p-3 justify-center
                      transition-all duration-700 ease-out
                      ${
                        isActive
                          ? "scale-125"
                          : "scale-75"
                      }
                    `}
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name || "Partner logo"}
                      width={500}
                      height={300}
                      className={`
                        w-[200px] h-auto rounded-xl
                        transition-all duration-700 ease-out
                        ${
                          isActive
                            ? "grayscale-0 blur-0 "
                            : "grayscale opacity-70"
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
}
