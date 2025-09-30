"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    heading: "Multi Specialty Focus",
    text: "Gain exposure across cardiac, thoracic, ,<br/> urology gynecology, and general surgery, all on the SSI Mantra platform.",
    image: "/Images/homepage/section5/slider1.png",
  },
  {
    heading: "Hands-On Experience",
    text: "Train directly on simulators and live systems,<br/> building confidence through immersive<br> practice.",
    image: "/Images/homepage/section5/slider2.png",
  },
  {
    heading: "Expert Mentorship",
    text: "Learn from pioneering robotic surgeons and <br/>clinical leaders who guide every step<br/> of your journey.",
    image: "/Images/homepage/section5/slider3.png",
  },
  {
    heading: "Global Certification Pathways",
    text: "Gain exposure across cardiac, thoracic,<br/> urology, gynecology, and general surgery,<br/> all on the SSI Mantra platform.",
    image: "/Images/homepage/section5/slider4.png",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const autoPlayInterval = 3000;
  const totalSlides = slides.length;

  const handleNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % totalSlides),
    [totalSlides]
  );

  const handlePrev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides),
    [totalSlides]
  );

  const goToSlide = (index: number) => setCurrentIndex(index % totalSlides);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.touches[0].clientX;
    // Prevent scrolling while swiping
    if (Math.abs(diff) > 10) e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(handleNext, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [isHovered, handleNext]);

  // Determine the translation percentage based on screen size for the carousel effect
  const getTransformValue = () => {
    // Mobile/Tablet: full width slides, moves by 100%
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    // Desktop: Uses a slightly aggressive translation (70%) to maintain the "card stack" visual
    return `translateX(-${currentIndex * 70}%)`;
  };


  return (
    // 1. UPDATED PADDING: Replaced lg:px-12 with lg:pl-20 lg:pr-12
    <div className="w-full bg-white pt-20 sm:pt-28 pb-12 px-4 sm:px-8 lg:pl-20 lg:pr-12">

      {/* Heading - Now centered visually within the new padding */}
<h2 className="text-4xl md:text-5xl font-serif text-[#A67950] mb-12 relative inline-block group cursor-pointer ml-64">
  Our Comprehensive Training Program
  <span
    className="absolute left-0 top-12 w-0 h-[4px] bg-gradient-to-r from-[#A67950] to-[#5B102B] transition-all duration-500 ease-out group-hover:w-full"
    style={{
      clipPath: "polygon(0 0%, 100% 50%, 100% 50%, 0% 100%)",
    }}
  ></span>
</h2>


      {/* Slider Container */}
      <div
        // 2. REDUCED SPACING: Reduced desktop gap from lg:gap-16 to lg:gap-8
        className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-8 xl:gap-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
{/* Text Content */}
<div className="w-full lg:w-1/3 order-2 lg:order-1 lg:pl-60"> {/* 4x moved right */}
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 text-left lg:text-left"
    >
      <h3 className="text-[#5B102B] text-xl sm:text-2xl font-serif font-normal">
        {slides[currentIndex].heading}
      </h3>
      <p
        className="text-[#A67950] text-sm sm:text-base font-lato font-normal max-w-lg lg:mx-0"
      >
        {slides[currentIndex].text.split(/<br\s*\/?>/i).map((line, idx) => (
          <React.Fragment key={idx}>
            {line.trim()}
            <br />
          </React.Fragment>
        ))}
      </p>
    </motion.div>
  </AnimatePresence>
</div>


{/* Image Carousel */}
<div className="w-full lg:w-2/3 order-1 lg:order-2 overflow-hidden relative lg:pl-16"> {/* <--- MODIFIED: Increased padding-left from lg:pl-8 to lg:pl-16 */}
  <div
    className="flex transition-transform duration-700 ease-in-out relative"
    style={{ transform: getTransformValue() }}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    {slides.map((slide, idx) => {
      const offset = idx - currentIndex;
      return (
        <div
          key={idx}
          className="flex-shrink-0 w-full sm:w-1/2 md:w-2/3 lg:w-[70%] pr-4 flex justify-center relative"
          style={{
            zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
            transform: `translateX(${offset === 0 ? 0 : offset * 20}px) scale(${offset === 0 ? 1 : 0.85})`,
            transition: "transform 0.5s",
          }}
        >
          <Image
            src={slide.image}
            alt={`Slide ${idx + 1}`}
            width={700}
            height={400}
            className="w-full h-64 sm:h-[400px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      );
    })}
  </div>



          {/* Navigation Arrows - Kept positioning relative to the carousel div */}
          <button
            onClick={handlePrev}
            className="absolute top-[52%] left-36 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-opacity-100 transition z-30"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#A67950]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:bg-opacity-100 transition z-30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#A67950]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots - Kept positioning relative to the carousel div */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === idx ? "bg-[#A67950]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;