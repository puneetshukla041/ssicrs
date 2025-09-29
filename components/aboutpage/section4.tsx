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

    const scrollProgress = Math.min(
      Math.max(viewportHeight - rect.top, 0),
      sectionHeight
    );

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

  const totalHeight = `${(NUM_IMAGES - 1) * 100 * SCROLL_MULTIPLIER + 100}vh`;

  return (
    <div ref={sectionRef} style={{ height: totalHeight }} className="relative w-full">
      <section className="sticky top-0 w-full h-screen bg-[#FBFAF2] border-t-2 border-b-2 border-black relative">
        
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

        {/* Image Display Area */}
        <div className="absolute left-0 right-0" style={{ top: "200px", height: "calc(100vh - 200px)", position: "relative" }}>
          {IMAGE_PATHS.map((path, index) => (
            <Image
              key={path}
              src={path}
              alt={`Image ${index + 1}`}
              fill
              style={{
                objectFit: "contain",
                opacity: currentImageIndex === index ? 1 : 0,
                transition: "opacity 0.2s ease-in-out",
                position: "absolute",
              }}
              priority={currentImageIndex === index} // Preload current image
            />
          ))}
        </div>

        {/* Dot Progress Indicator */}
        <div
          className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3"
          aria-label="Image progress indicator"
        >
          {IMAGE_PATHS.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ease-in-out ${
                currentImageIndex === index ? "w-3 h-3 bg-black" : "w-2 h-2 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
