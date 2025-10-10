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

const MOBILE_IMAGE_PATHS = [
  "/Images/aboutpage/section4/mobile/image1.png",
  "/Images/aboutpage/section4/mobile/image2.png",
  "/Images/aboutpage/section4/mobile/image3.png",
  "/Images/aboutpage/section4/mobile/image4.png",
  "/Images/aboutpage/section4/mobile/image5.png",
];

// Constants
const SCROLL_DURATION_STEPS = IMAGE_PATHS.length;
const WRAPPER_HEIGHT_VH = SCROLL_DURATION_STEPS * 50; 
const IMAGE_CONTAINER_HEIGHT_PX = 502;
// Mobile breakpoint for simplified check. Adjust as needed (e.g., to 768px for md)
const MOBILE_BREAKPOINT = 640; 

export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  // New state to manage mobile view
  const [isMobile, setIsMobile] = useState(false); 

  const handleResize = useCallback(() => {
    // Basic check for mobile using window.innerWidth
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

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
    handleResize(); // Initial check

    // Add resize listener for dynamic mobile/desktop switching
    window.addEventListener("resize", handleResize);

    // Desktop Scroll Logic
    if (!isMobile) {
      const timeoutId = setTimeout(() => {
        setIsReady(true);
        handleScroll();
      }, 100);

      if (isReady) window.addEventListener("scroll", handleScroll);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
    
    // Cleanup for mobile
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [handleScroll, isReady, isMobile, handleResize]); // Depend on isMobile and handleResize

  // Common Heading Component
  const Heading = () => (
    <h1
      style={{
        fontFamily: "'DM Serif Display', serif",
        fontWeight: 400,
        fontStyle: "normal",
        color: "#A67950",
        whiteSpace: isMobile ? "normal" : "pre-line", // Allow wrapping on mobile
        fontSize: isMobile ? "32px" : "40px",
        lineHeight: "100%", 
        width: "100%",
        maxWidth: isMobile ? "calc(100% - 40px)" : "1380px", // Padded on mobile
        paddingLeft: isMobile ? "0px" : "15px", 
        marginBottom: isMobile ? "40px" : "104px",
        textAlign: isMobile ? "center" : "left", // Centered on mobile
      }}
      className={isMobile ? "mx-auto" : ""}
    >
      Why Choose SSICRS
    </h1>
  );

  // --- Mobile View Component ---
  if (isMobile) {
    return (
      <div className="w-full py-16 px-5" style={{ backgroundColor: "#FBFAF2" }}>
        <Heading />
        
        <div className="flex flex-col space-y-8">
          {MOBILE_IMAGE_PATHS.map((path, idx) => (
            <div 
              key={idx} 
              className="relative w-full overflow-hidden rounded-xl shadow-lg"
              // MODIFICATION: Set the exact aspect ratio for the mobile images (358 / 247 = 1.449)
              style={{ paddingBottom: `${(247 / 358) * 100}%` }} // Custom aspect ratio for 358x247
            >
              <Image
                src={path}
                alt={`Mobile reason image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 0px"
                priority={idx < 2} // Prioritize first couple of images
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Desktop/Scroll View Component ---
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#FBFAF2" }}>
      
      {/* Scroll-controlled Image Section */}
      <div ref={wrapperRef} className="relative" style={{ height: `${WRAPPER_HEIGHT_VH}vh` }}>

        {/* Sticky Container for Heading and Image */}
        <div className="sticky top-0 h-screen flex flex-col justify-start items-center pt-[20vh] px-5">
          <Heading />

          {/* Image container */}
          <div
            className="relative w-full mx-auto max-w-[1350px] flex-shrink-0 overflow-hidden rounded-xl"
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