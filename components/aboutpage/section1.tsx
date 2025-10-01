// components/aboutus/Section1.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full h-screen relative">
      {/* Background Image */}
      <Image
        src="/Images/aboutpage/section1/section1.png"
        alt="SSI CRS"
        fill
        className="object-cover"
        priority
      />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 z-10">
        <h1
          className="
            text-white 
            text-[28px] sm:text-[32px] md:text-[48px] lg:text-[64px] 
            font-serif mb-3 sm:mb-4 md:mb-6 leading-snug md:leading-tight
          "
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
          }}
        >
          Global Excellence in <br className="hidden sm:block" /> Robotic Surgery Training
        </h1>

        <p
          className="
            text-white 
            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
            max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
            px-2 sm:px-4
          "
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Expanding access to cutting-edge education, from established centers to underserved regions.
        </p>
      </div>
    </section>
  );
}
