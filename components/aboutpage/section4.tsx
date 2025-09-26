"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const IMAGE_PATHS = [
  "/Images/aboutpage/section4/image1.png",
  "/Images/aboutpage/section4/image2.png",
  "/Images/aboutpage/section4/image3.png",
  "/Images/aboutpage/section4/image4.png",
  "/Images/aboutpage/section4/image5.png",
];

const NUM_IMAGES = IMAGE_PATHS.length;

// Set to 0.5 for a very short, fast-scrolling effect.
const SCROLL_MULTIPLIER = 0.5; 

export default function SectionNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // 1. Calculate the raw scroll progress within the *total scrollable* area (sectionRef).
    const scrollProgress = Math.min(
      Math.max(viewportHeight - rect.top, 0),
      sectionHeight
    );

    // 2. Calculate the progress as a normalized value from 0 to 1.
    const normalizedProgress = Math.min(
      (scrollProgress - viewportHeight) / (sectionHeight - viewportHeight),
      1
    );

    // 3. Map the 0-1 progress to the number of images.
    const rawIndex = normalizedProgress * (NUM_IMAGES - 1);
    
    // 4. Use Math.round() for image switching.
    const newIndex = Math.min(Math.round(rawIndex), NUM_IMAGES - 1);

    setCurrentImageIndex(newIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Total height = ((5 - 1) * 0.5 * 100) + 100 = 300vh.
  const totalHeight = `${(NUM_IMAGES - 1) * 100 * SCROLL_MULTIPLIER + 100}vh`;

  return (
    <div
      ref={sectionRef}
      style={{ height: totalHeight }} // Total scrollable height
      className="relative w-full"
    >
      {/* This section will stay fixed in the viewport while scrolling */}
      <section className="sticky top-0 w-full h-screen bg-[#FBFAF2] border-t-2 border-b-2 border-black">
        
        {/* Heading */}
        <h1
          className="absolute"
          style={{
            color: "#A67950",
            fontFamily: '"DM Serif Text", serif',
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: "150%",
            top: "100px",
            left: "130px",
          }}
        >
          Why Choose SSICRS
        </h1>

        {/* Image Display Area with cross-fade transition */}
        <div
          className="absolute left-0 right-0"
          style={{ top: "200px", height: "calc(100vh - 200px)" }}
        >
          {IMAGE_PATHS.map((path, index) => (
            <img
              key={path}
              src={path}
              alt={`Image ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-contain"
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                transition: "opacity 0.2s ease-in-out", 
              }}
            />
          ))}
        </div>

        {/* NEW: Dot Progress Indicator */}
        <div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3"
          aria-label="Image progress indicator"
        >
          {IMAGE_PATHS.map((_, index) => (
            <div
              key={index}
              className={`
                rounded-full transition-all duration-300 ease-in-out
                ${currentImageIndex === index 
                  ? 'w-3 h-3 bg-black' // Active dot: larger and black
                  : 'w-2 h-2 bg-gray-400' // Inactive dot: smaller and gray
                }
              `}
              // Optional: Add a smooth scroll on click for better navigation
              // Note: Implementing click navigation requires more complex scroll-to-position logic
              // and is outside the scope of this request, so it's omitted here.
            />
          ))}
        </div>
      </section>
    </div>
  );
}