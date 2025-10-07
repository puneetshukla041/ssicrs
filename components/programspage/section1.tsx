"use client";

import React from "react";

export default function Section1() {
  return (
    <section className="w-full h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <img
        src="/Images/programs/section1/image1.webp"
        alt="SSI CRS"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered Heading Container */}
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
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // Added shadow
          }}
        >
          Explore Our Robotic Surgery Training Programs
        </h1>
      </div>
    </section>
  );
}
