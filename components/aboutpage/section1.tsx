"use client";

import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Images/aboutpage/section1/section1.png"
        alt="SSI CRS"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 z-10">
        <h1
          className="
            text-white 
            text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] 
            mb-4 sm:mb-6 md:mb-8 leading-snug md:leading-tight lg:leading-tight
            max-w-5xl
          "
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)", // Added shadow
          }}
        >
          Global Excellence in <br className="hidden sm:block" /> Robotic Surgery Training
        </h1>

        <p
          className="
            text-white 
            text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
            max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
            px-2 sm:px-4 leading-relaxed
          "
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            lineHeight: 1.6,
            textShadow: "1px 1px 6px rgba(0,0,0,0.6)", // Added shadow
          }}
        >
          Expanding access to cutting-edge education, from established centers to underserved regions.
        </p>
      </div>
    </section>
  );
}
