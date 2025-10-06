"use client";

import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    // Section wrapper: Takes full width (w-full) and full viewport height (h-screen).
    // overflow-hidden prevents scrollbars if content slightly exceeds viewport.
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Image: Uses Next.js Image component with fill and object-cover for full responsiveness. */}
      <Image
        src="/Images/aboutpage/section1/section1.png"
        alt="SSI CRS"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay for Readability (New addition for better text contrast on complex backgrounds) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Centered Content Container */}
      {/* absolute inset-0 and flex utilities ensure content is perfectly centered on all devices. 
          The padding (px-4 to px-12) keeps content away from the edges. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 z-10">
        <h1
          className="
            text-white 
            text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] 
            mb-4 sm:mb-6 md:mb-8 leading-snug md:leading-tight lg:leading-tight
            max-w-5xl
          "
          // Font style and weight preserved as requested
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
            text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
            max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
            px-2 sm:px-4 leading-relaxed
          "
          // Font style, weight, and line-height preserved as requested
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
