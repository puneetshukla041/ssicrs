// components/aboutpage/section4.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

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

const SCROLL_DURATION_STEPS = IMAGE_PATHS.length;
const WRAPPER_HEIGHT_VH = SCROLL_DURATION_STEPS * 50;
const IMAGE_CONTAINER_HEIGHT_PX = 502;
const MOBILE_BREAKPOINT = 640;
const GUIDANCE_TIMEOUT_MS = 3000;

const ScrollGuide: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) setShouldRender(true);
    else {
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center p-3 rounded-xl bg-white shadow-xl border border-gray-100 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="text-sm font-medium text-gray-700 mb-2">
        Scroll to see all reasons
      </div>
      <div className="flex flex-col items-center">
        <ChevronUp
          className="w-6 h-6 text-[#A67950] animate-smooth-up-down"
          style={{ animationDelay: "-1s" }}
        />
        <div className="text-lg font-bold text-[#A67950] leading-none my-1">
          Scroll
        </div>
        <ChevronDown className="w-6 h-6 text-[#A67950] animate-smooth-up-down" />
      </div>

      <style jsx global>{`
        @keyframes smooth-up-down {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-smooth-up-down {
          will-change: transform;
          animation: smooth-up-down 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>
    </div>
  );
};

export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  const handleScroll = useCallback(() => {
    if (!wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;

    // --- Detect visibility for fade-in/fade-out
    const inView = sectionTop < vh * 0.8 && sectionBottom > vh * 0.2;
    setSectionVisible(inView);

    if (!inView) return;

    if (showGuide) setShowGuide(false);

    const wrapperHeight = wrapperRef.current.offsetHeight;
    const scrollDistance = -sectionTop;
    const totalScrollRange = wrapperHeight - vh;

    if (totalScrollRange <= 0) return;

    const progress = Math.min(1, Math.max(0, scrollDistance / totalScrollRange));
    const newIndex = Math.min(
      SCROLL_DURATION_STEPS - 1,
      Math.floor(progress * SCROLL_DURATION_STEPS)
    );

    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  }, [currentIndex, showGuide]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    if (!isMobile) {
      setShowGuide(true);
      const guideTimer = setTimeout(() => setShowGuide(false), GUIDANCE_TIMEOUT_MS);

      const readyTimer = setTimeout(() => {
        setIsReady(true);
        handleScroll();
      }, 100);

      if (isReady) window.addEventListener("scroll", handleScroll);

      return () => {
        clearTimeout(readyTimer);
        clearTimeout(guideTimer);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      setShowGuide(false);
    };
  }, [handleScroll, isReady, isMobile, handleResize]);

  const Heading = () => (
    <h1
      style={{
        fontFamily: "'DM Serif Display', serif",
        fontWeight: 400,
        fontStyle: "normal",
        color: "#A67950",
        whiteSpace: isMobile ? "normal" : "pre-line",
        fontSize: isMobile ? "32px" : "40px",
        lineHeight: "100%",
        width: "100%",
        maxWidth: isMobile ? "calc(100% - 40px)" : "1380px",
        paddingLeft: isMobile ? "0px" : "15px",
        marginBottom: isMobile ? "40px" : "104px",
        textAlign: isMobile ? "center" : "left",
      }}
      className={isMobile ? "mx-auto" : ""}
    >
      Why Choose SSICRS
    </h1>
  );

  // --- Mobile view ---
  if (isMobile) {
    return (
      <div className="w-full py-16 px-5" style={{ backgroundColor: "#FBFAF2" }}>
        <Heading />
        <div className="flex flex-col space-y-8">
          {MOBILE_IMAGE_PATHS.map((path, idx) => (
            <div
              key={idx}
              className="relative w-full overflow-hidden rounded-xl shadow-lg"
              style={{ paddingBottom: `${(247 / 358) * 100}%` }}
            >
              <Image
                src={path}
                alt={`Mobile reason image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 0px"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Desktop View ---
  return (
    <div
      ref={wrapperRef}
      className={`relative w-full transition-opacity duration-700 ease-in-out ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "#FBFAF2",
        height: `${WRAPPER_HEIGHT_VH}vh`,
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-start items-center pt-[20vh] px-5">
        <Heading />

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

          <ScrollGuide isVisible={showGuide} />
        </div>
      </div>
    </div>
  );
}
