// components/programspage/section1.tsx

"use client";

import React from "react";
import Image from "next/image"; // Re-added the correct import

export default function Section1() {
  return (
    <section className="w-full h-screen relative overflow-x-hidden">
      {/* Background Image: Replaced <img> with Next.js <Image />.
        - fill: Makes the image fill the parent container.
        - className="object-cover": Ensures the image covers the section without stretching.
        - priority: Essential for images in the hero section to speed up LCP.
      */}
      <Image
        src="/Images/programs/section1/image1.webp"
        alt="SSI CRS"
        fill
        className="object-cover"
        sizes="100vw" // Helps Next.js optimize image loading based on viewport width
        priority
      />

      {/* Centered Heading Container 
        Ensures the text is always centered vertically and horizontally.
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-white font-serif mb-6 
          text-3xl sm:text-4xl md:text-5xl lg:text-[64px]
          max-w-4xl mx-auto"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: 1.2,
          }}
        >
          {/* Heading text remains one continuous line for optimal responsiveness. */}
          Explore Our Robotic Surgery Training Programs
        </h1>
      </div>
    </section>
  );
}