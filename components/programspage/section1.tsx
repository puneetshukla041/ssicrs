// components/aboutus/Section1.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="w-full h-screen relative">
      {/* Background Image */}
      <Image
        src="/Images/programs/section1/section1.webp"
        alt="SSI CRS"
        fill
        className="object-cover"
        priority
      />

      {/* Centered Heading */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-white text-[64px] font-serif mb-6"
          style={{
            fontFamily: "DM Serif Display, serif",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: 1.2,
          }}
        >
          Explore Our Robotic <br /> Surgery Training Programs
        </h1>

      </div>
    </section>
  );
}
