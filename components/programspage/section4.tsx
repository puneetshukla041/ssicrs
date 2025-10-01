"use client";

import React from "react";
import Image from "next/image";

export default function Section4() {
  return (
    // **RESPONSIVE CONTAINER:**
    // - Remove fixed height and paddingLeft.
    // - Use responsive padding (px-6 for mobile, increasing to lg:px-48 for large screens).
    // - Use min-h-screen for height to ensure content fits, especially on mobile.
    <section
      className="w-full bg-white flex flex-col items-start min-h-screen py-10 px-6 sm:px-10 md:px-20 lg:py-20 lg:px-[270px]"
    >
      {/* Heading with hover + line */}
      <div className="group relative cursor-pointer inline-block pt-0">
        <h2
          style={{
            color: "#A67950",
            fontFamily: '"DM Serif Text", serif',
            // **RESPONSIVE FONT SIZE:** Smaller on mobile, larger on bigger screens
            fontSize: "32px", // Mobile/Default
            fontWeight: 400,
            lineHeight: "150%",
          }}
          className="lg:text-[40px]" // Larger on large screens
        >
          How We Train
        </h2>
        {/* Line remains as is */}
        <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
      </div>

      {/* Subheading */}
      <p
        style={{
          color: "#401323",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "32px", // Adjusted for better mobile readability
        }}
        className="mt-6 lg:mt-8" // Responsive margin-top
      >
        A Balanced Approach: Theory, Practice, and Innovation.
      </p>

      {/* 2x2 Image Grid */}
      {/* **RESPONSIVE GRID:** 1 column on mobile, 2 columns from large screens up */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-6 lg:gap-y-10 mt-10 w-full">
        
        {/* === Image 1 === */}
        <ImageCard
          src="/Images/programs/section4/image1.png"
          alt="Image 1"
          title="Classroom Learning"
          description="Interactive sessions led by expert faculty build strong foundations in robotic surgery."
          // Remove ml-7 from the first column item, it was part of the fixed layout
        />

        {/* === Image 2 === */}
        {/* Remove fixed ml-7, use standard grid spacing */}
        <ImageCard
          src="/Images/programs/section4/image2.png"
          alt="Image 2"
          title="Lab-Based Practice"
          description="From dry labs to wet labs, participants develop hands-on skills in realistic surgical conditions."
          className="lg:ml-7" // Retain original ml-7 only for the right column on large screens
        />

        {/* === Image 3 === */}
        <ImageCard
          src="/Images/programs/section4/image3.png"
          alt="Image 3"
          title="Online Modules"
          description="Flexible, self-paced learning with pre-training modules, recorded lectures, quizzes, and ongoing support."
        />

        {/* === Image 4 === */}
        {/* Remove fixed ml-7, use standard grid spacing */}
        <ImageCard
          src="/Images/programs/section4/image4.png"
          alt="Image 4"
          title="Certification & Mentorship"
          description="Graduates earn globally recognized certification with CME credits, plus continued access to mentors for long-term growth."
          className="lg:ml-7" // Retain original ml-7 only for the right column on large screens
        />
      </div>
    </section>
  );
}

// **New Reusable ImageCard Component for clean, responsive structure**
const ImageCard = ({ src, alt, title, description, className = "" }) => (
  <div className={`relative group rounded-lg overflow-hidden cursor-pointer w-full ${className}`}>
    {/* **RESPONSIVE IMAGE CONTAINER:** */}
    {/* Use a common aspect ratio (e.g., aspect-square, aspect-video, or custom) */}
    {/* The original ratio (634/461) is approx 1.375. aspect-video is 16/9 (1.77) */}
    {/* aspect-[1.375/1] is not standard, so we use a common one or a custom class */}
    {/* Using pt-[] trick for a custom aspect ratio: 461 / 634 * 100% = 72.7% */}
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{
        paddingTop: "72.7%", // Creates the original aspect ratio (461px height for 634px width)
        borderRadius: "8px",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        // object-cover is equivalent to className="object-cover"
        // transition-transform duration-500 group-hover:scale-105 for the zoom effect
        className="object-cover transition-transform duration-500 group-hover:scale-105 absolute top-0 left-0 w-full h-full"
        style={{
          borderRadius: "8px",
        }}
        sizes="(max-width: 1024px) 100vw, 50vw" // Optimizes image loading for responsiveness
      />
    </div>

    {/* Text Overlay */}
    <div
      className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg p-4 flex flex-col items-start justify-start w-[90%] md:w-[80%]" // Responsive width
      style={{
        // Remove fixed width/height for overlay; let padding/content define height
        background: "#381205",
        opacity: 0.7,
        backdropFilter: "blur(50px)",
      }}
    >
      <p
        style={{
          color: "#FFF",
          fontFamily: '"DM Serif Text", serif',
          fontSize: "18px", // Smaller title on mobile
          fontWeight: 400,
          lineHeight: "24px",
          marginBottom: "6px",
        }}
        className="md:text-[20px] md:leading-[30px]" // Larger title on medium screens
      >
        {title}
      </p>
      <p
        style={{
          color: "#FFF",
          fontFamily: "Lato, sans-serif",
          fontSize: "14px", // Smaller body on mobile
          fontWeight: 400,
          lineHeight: "20px",
        }}
        className="md:text-[16px] md:leading-[24px]" // Larger body on medium screens
      >
        {description}
      </p>
    </div>
  </div>
);