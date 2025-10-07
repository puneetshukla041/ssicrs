"use client";

import React from "react";
// Removed: import Image from "next/image"; -> Causes compilation error outside of Next.js

export default function Section1() {
  return (
    <section className="w-full h-screen relative overflow-x-hidden">
      {/* Background Image: Replaced Next.js Image with a standard <img> tag.
          The classes absolute inset-0 w-full h-full object-cover mimic the behavior of Next/Image fill 
          to ensure it covers the entire section responsively.
      */}
      <img
        src="/Images/programs/section1/image1.webp"
        alt="SSI CRS"
        className="absolute inset-0 w-full h-full object-cover"
        // Note: 'priority' attribute is for Next.js Image component only and is removed here.
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
