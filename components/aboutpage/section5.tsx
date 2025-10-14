// components/aboutus/Section9.tsx
"use client";

import Image from "next/image";
import React from "react";
// 1. Import useInView from react-intersection-observer
import { useInView } from "react-intersection-observer";

interface Section2Props {
  children?: React.ReactNode;
}

interface LogoItem {
  src: string;
  heading: string; // HTML allowed
  text: React.ReactNode;
  textColor?: string;
}

export default function Section9({ children }: Section2Props) {
  const logos: LogoItem[] = [
    {
      src: "/Images/aboutpage/section5/bottomlogo1.webp",
      heading: "Expert-Led Faculty &<br>Mentorship",
      text: (
        <>
          Learn from top robotic surgeons<br />and surgical technologists.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo2.webp",
      heading: "Live Surgery Observations&<br> Teleproctoring",
      text: (
        <>
          Experience real-world procedures remotely.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo3.webp",
      heading: "Engineering-Integrated <br>Learning",
      text: (
        <>
          Understand robotic mechanics<br />  alongside clinical applications.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo4.webp",
      heading: "Comprehensive Post-Training <br>Support",
      text: (
        <>
          Access digital resources, case <br />  discussions, and ongoing mentorship.
        </>
      ),
      textColor: "#A67950",
    },
  ];

  const headingStyle: React.CSSProperties = {
    color: "#5B102B",
    fontFamily: "DM Serif Text",
    fontSize: "clamp(16px, 2vw, 20px)",
    fontWeight: 400,
    lineHeight: 1.4,
    textAlign: "center",
    marginBottom: "8px",
  };

  // 2. Setup observer for the main heading/text block
  const { ref: headerRef, inView: headerInView } = useInView({
    // Trigger once the element is 10% visible
    threshold: 0.1,
    // Setting triggerOnce to false ensures it animates every time it comes into view
    triggerOnce: false, 
  });
  
  // 3. Setup observer for the entire logos grid
  const { ref: logosRef, inView: logosInView } = useInView({
    threshold: 0.01,
    triggerOnce: false, 
  });
  
  return (
    <section 
      // 1. Applied flex, flex-col, and justify-center to vertically center the content block.
      // 2. Kept h-screen to give the centering a large vertical space to work within.
      className="w-full h-[70vh] bg-[#FBFAF2] flex flex-col justify-center" 
    >
        
      {/* The inner container now dictates the vertical padding (py-16 md:py-24).
        Horizontal centering (mx-auto) and horizontal padding (implicit via max-w-7xl + mx-auto) are preserved.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full"> 
        {children && <div className="w-full h-full">{children}</div>}

        {/* Main Heading Block - Uses headerRef */}
        <div 
          ref={headerRef} 
          className={`pb-8 md:pb-10 lg:pb-12 transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-4xl text-center lg:text-left leading-snug mb-20"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
              color: "#A67950",
              whiteSpace: "pre-line",
              marginLeft:"-30px"
            }}
          >
            Our Approach
          </h2>

          {/* Subtext */}
          <div
            className="text-center md:text-left text-[#401323] font-sans pt-12" // Align left on medium screens and up
            style={{
              fontSize: "clamp(14px, 1.5vw, 16px)",
              lineHeight: 1.6,
              marginLeft:"-30px"
            }}
          >
            SSICRS is equipped with world-class infrastructure, combining theoretical education with practical,
            <br className="hidden md:inline-block"/>
            hands-on experience. Our training approach includes:<br />
          </div>
        </div>

        {/* Logos Section - Uses logosRef */}
        <div 
          ref={logosRef} 
          className={`w-full flex justify-center md:justify-start mt-16 md:mt-10 relative transition-all duration-700 delay-200 ease-out ${
            logosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 w-full">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center p-2 sm:p-4 transition-transform duration-700 ease-out`}
                // Inline style for staggered delay
                style={{
                    transitionDelay: logosInView ? `${index * 50}ms` : "0ms", 
                }}
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={48}
                  height={50}
                  className="mt-4 mb-2 relative z-10"
                />

                <div
                  dangerouslySetInnerHTML={{ __html: logo.heading }}
                  style={headingStyle}
                />

                <p
                  className="font-lato font-normal text-xs sm:text-sm md:text-base leading-snug mt-2"
                  style={{ color: logo.textColor }}
                >
                  {logo.text}
                </p>

                {/* Permanent Decorative Brackets */}
                <div className="absolute inset-0 pointer-events-none">
                  <span className="absolute left-0 top-5 bottom-6 w-[2px] border-l-2 border-[#6A4336] rounded-tl-lg rounded-bl-lg opacity-60"></span>
                  <span className="absolute right-0 top-5 bottom-6 w-[2px] border-r-2 border-[#6A4336] rounded-tr-lg rounded-br-lg opacity-60"></span>
                  <span className="absolute top-0 left-0 w-10 h-6 border-t-2 border-l-2 border-[#6A4336] rounded-tl-lg opacity-60"></span>
                  <span className="absolute top-0 right-0 w-10 h-6 border-t-2 border-r-2 border-[#6A4336] rounded-tr-lg opacity-60"></span>
                  <span className="absolute bottom-0 left-0 w-10 h-6 border-b-2 border-l-2 border-[#6A4336] rounded-bl-lg opacity-60"></span>
                  <span className="absolute bottom-0 right-0 w-10 h-6 border-b-2 border-r-2 border-[#6A4336] rounded-br-lg opacity-60"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}