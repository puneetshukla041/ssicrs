// components/aboutpage/section4.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

// --- Image Paths ---
const IMAGE_PATHS = [
  "/Images/aboutpage/section4/image1.png",
  "/Images/aboutpage/section4/image2.png",
  "/Images/aboutpage/section4/image3.png",
  "/Images/aboutpage/section4/image4.png",
  "/Images/aboutpage/section4/image5.png",
];

// Constants
const SCROLL_DURATION_STEPS = IMAGE_PATHS.length;
// MODIFICATION: Reduced multiplier from 70 to 50 to further cut height from the bottom.
const WRAPPER_HEIGHT_VH = SCROLL_DURATION_STEPS * 50; 
const IMAGE_CONTAINER_HEIGHT_PX = 502;

export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const wrapperHeight = wrapperRef.current.offsetHeight;

    const scrollDistance = -wrapperRect.top;
    const totalScrollRange = wrapperHeight - viewportHeight;

    if (totalScrollRange <= 0) return;

    const progress = Math.min(1, Math.max(0, scrollDistance / totalScrollRange));
    const newIndex = Math.min(
      SCROLL_DURATION_STEPS - 1,
      Math.floor(progress * SCROLL_DURATION_STEPS)
    );

    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsReady(true);
      handleScroll();
    }, 100);

    if (isReady) window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isReady]);

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#FBFAF2" }}>
      
      {/* Scroll-controlled Image Section */}
      <div ref={wrapperRef} className="relative" style={{ height: `${WRAPPER_HEIGHT_VH}vh` }}>

        {/* Scroll-controlled Image Section */}
        {/* MODIFICATION: Increased top padding from pt-[20vh] to pt-[30vh] to push the content down more. */}
<div className="sticky top-0 h-screen flex flex-col justify-start items-center pt-[20vh]">
  {/* Heading aligned to left of image container */}
  <h1
    style={{
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#A67950",
      whiteSpace: "pre-line",
      fontSize: "40px",
      lineHeight: "200%", // 60px
      width: "100%",
      maxWidth: "1380px",
      paddingLeft: "0px", // align with container padding
      marginBottom: "74px",
      textAlign: "left",
    }}
  >
    Why Choose SSICRS
  </h1>

  {/* Image container */}
  <div
    className="relative w-full mx-auto max-w-[1380px] flex-shrink-0 overflow-hidden rounded-xl"
    style={{ height: `${IMAGE_CONTAINER_HEIGHT_PX}px` }}
  >
    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

    {isReady &&
      IMAGE_PATHS.map((path, idx) => (
        <Image
          key={idx}
          src={path}
          alt={`Scroll image ${idx + 1}`}
          fill
          className="absolute object-cover transition-opacity duration-700 ease-in-out"
          style={{
            opacity: currentIndex === idx ? 1 : 0,
            transform: currentIndex === idx ? "scale(1)" : "scale(1.02)",
          }}
          sizes="(max-width: 1536px) 100vw, 1380px"
          priority
        />
      ))}


  </div>
</div>

      </div>


    </div>
  );
}