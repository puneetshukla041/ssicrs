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
        // This makes the image cover the entire section
        fill
        className="object-cover"
        priority
      />

      {/* Centered Heading and Subtitle Container */}
      {/* Use padding for better spacing on small screens and ensure z-index is above the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1
          // Base font size for mobile (e.g., [36px])
          // md: for tablet (e.g., [48px])
          // lg: for laptop/desktop (maintaining the original [64px])
          className="text-white text-[36px] md:text-[48px] lg:text-[64px] font-serif mb-4 md:mb-6 leading-tight"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
            // Original line-height: 1.2 is good for readability, removed the fixed value from inline style for better responsiveness
          }}
        >
          Global Excellence in <br /> Robotic Surgery Training
        </h1>

        <p
          // Base font size for mobile (e.g., [16px])
          // md: for tablet (e.g., [18px])
          // lg: for laptop/desktop (maintaining the original [20px])
          // Removed whitespace-nowrap for mobile to allow text wrapping
          className="text-white text-[16px] md:text-[18px] lg:text-[20px] max-w-4xl px-4"
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            // Adjusted line-height to be standard (1.5) for better mobile readability
            lineHeight: 1.5,
          }}
        >
          Expanding access to cutting-edge education, from established centers to underserved regions.
        </p>
      </div>
    </section>
  );
}