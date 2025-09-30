"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const IMAGE_PATHS = [
  "/Images/aboutpage/section4/image1.png",
  "/Images/aboutpage/section4/image2.png",
  "/Images/aboutpage/section4/image3.png",
  "/Images/aboutpage/section4/image4.png",
  "/Images/aboutpage/section4/image5.png",
];

const NUM_IMAGES = IMAGE_PATHS.length;
const SCROLL_MULTIPLIER = 0.5; // Adjust scroll speed

export default function SectionNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Calculate how far the top of the section has scrolled up into the viewport
    const scrollProgress = Math.min(
      Math.max(viewportHeight - rect.top, 0),
      sectionHeight
    );

    // Normalize progress from 0 to 1 across the full scrollable section area
    // This part is crucial for making the image change smooth during the scroll.
    const normalizedProgress = Math.min(
      (scrollProgress - viewportHeight) / (sectionHeight - viewportHeight),
      1
    );

    const rawIndex = normalizedProgress * (NUM_IMAGES - 1);
    const newIndex = Math.min(Math.round(rawIndex), NUM_IMAGES - 1);

    setCurrentImageIndex(newIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Total height needed to create the scroll effect
  const totalHeight = `${(NUM_IMAGES - 1) * 100 * SCROLL_MULTIPLIER + 100}vh`;

  return (
    // The main container determines the overall scrollable height.
    <div ref={sectionRef} style={{ height: totalHeight }} className="relative w-full">
      {/* The sticky section is what stays fixed in the viewport while scrolling. */}
      <section className="sticky top-0 w-full h-screen bg-[#FBFAF2] border-t-2 border-b-2 border-black relative overflow-hidden">
        
        {/* Heading - Made responsive with dynamic font-size, padding/margin, and positioning */}
        <h1
          className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#A67950] font-serif font-medium leading-normal 
                     top-10 left-5 sm:top-16 sm:left-10 md:top-20 md:left-20 lg:top-[100px] lg:left-[130px] z-10"
          style={{
            fontFamily: '"DM Serif Text", serif',
          }}
        >
          Why Choose SSICRS
        </h1>

        {/* Image Display Area - Responsive positioning and size adjustment */}
        <div 
          className="absolute left-0 right-0" 
          style={{ 
            top: "100px", // Adjusted for smaller screens
            height: "calc(100vh - 100px)", // Adjusted height
            position: "relative" 
          }} 
          // Further adjustments for larger screens (desktop view)
          // lg:top-[200px] lg:h-[calc(100vh - 200px)] are not strictly necessary 
          // since the image scale handles it, but keeps the original layout intention.
        >
          {IMAGE_PATHS.map((path, index) => (
            <Image
              key={path}
              src={path}
              alt={`Image ${index + 1}`}
              fill
              // Image will contain within its parent div, scaling down for mobile.
              // object-position can be added if specific alignment is needed (e.g., center-top)
              style={{
                objectFit: "contain", 
                opacity: currentImageIndex === index ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
                position: "absolute",
              }}
              priority={currentImageIndex === index}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw" // Helps Next.js optimize image loading
            />
          ))}
        </div>

        {/* Dot Progress Indicator - Responsive positioning and spacing */}
        <div
          className="absolute right-5 sm:right-8 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 sm:space-y-3 z-10"
          aria-label="Image progress indicator"
        >
          {IMAGE_PATHS.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ease-in-out ${
                // Adjusting size for responsiveness: smaller dots on mobile
                currentImageIndex === index ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black" : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}