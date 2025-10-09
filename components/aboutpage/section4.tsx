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
// SCROLL_MULTIPLIER controls the scroll duration for image change.
const SCROLL_MULTIPLIER = 0.35;

// Define responsive class for heading positioning
// We use 'top-10' and 'left-5' as base, then adjust up for tablets/desktop using percentages/vh
const HEADING_POSITION_CLASSES = "top-8 left-4 sm:top-12 sm:left-8 md:top-[10vh] md:left-[5vw] lg:top-[100px] lg:left-[130px]";

// Define responsive class for image wrapper positioning
// Centered horizontally, positioned vertically using percentage/vh
const IMAGE_WRAPPER_POSITION_CLASSES = "top-[30vh] sm:top-[35vh] md:top-[40vh] lg:top-[200px]";

// Define fixed dimensions for the image wrapper/display (for large screens)
// For small screens, the width is 'w-[90vw]' (90% of viewport width)
const IMAGE_WRAPPER_CLASSES = "w-[90vw] h-[300px] sm:w-[80vw] sm:h-[400px] lg:w-[1380px] lg:h-[502px] flex-shrink-0 mx-auto";

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
      <section className="sticky top-0 w-full h-screen bg-[#FBFAF2] relative overflow-hidden">

        {/* Heading - Now uses responsive classes for positioning */}
        <h1
          className={`absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#A67950] font-serif font-medium leading-normal
                      ${HEADING_POSITION_CLASSES} z-10`}
          style={{
            fontFamily: '"DM Serif Text", serif',
          }}
        >
          Why Choose SSICRS
        </h1>

        {/* Image Display Area - Now uses responsive classes for positioning and sizing */}
        <div
          // Centered horizontally, positioned vertically using responsive classes
          className={`absolute left-1/2 -translate-x-1/2 ${IMAGE_WRAPPER_CLASSES} ${IMAGE_WRAPPER_POSITION_CLASSES}`}
          style={{
            position: "absolute", // Keep absolute positioning relative to the sticky section
            // The height and width are now controlled by IMAGE_WRAPPER_CLASSES
          }}
        >
          {IMAGE_PATHS.map((path, index) => (
            <Image
              key={path}
              src={path}
              alt={`Image ${index + 1}`}
              // Use fill to allow the image to scale within the responsive wrapper div
              fill // Use fill with objectFit: "contain" for responsiveness
              style={{
                objectFit: "contain",
                opacity: currentImageIndex === index ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
                // position: 'absolute' is implicitly set by 'fill'
              }}
              priority={currentImageIndex === index}
              // Updated sizes for better mobile performance
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1380px"
            />
          ))}
        </div>


      </section>
    </div>
  );
}