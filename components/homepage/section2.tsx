"use client";

import Image from "next/image";
import React from "react";

interface Section2Props {
  children?: React.ReactNode;
}

export default function Section2({ children }: Section2Props) {
  const logos = [
    {
      src: "/Images/homepage/section2/bottomlogo1.png",
      text: (
        <>
          Learn from visionary surgeons and clinical <br /> leaders.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo2.png",
      text: (
        <>
          Access world-class training,
          resources, <br /> and research.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo3.png",
      text: (
        <>
          Join a global initiative shaping the future of<br /> robotic surgery.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo4.png",
      text: (
        <>
          Lead the effort to make surgical excellence accessible to all.
        </>
      ),
    },
  ];

  return (
    <section
      className="w-full relative py-10 md:py-20 lg:py-24"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      <div className="w-full h-full">{children}</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12 xl:gap-24 mb-16 lg:mb-24">
          {/* Text Content (Heading and Subtext) */}
          <div className="lg:w-1/2 xl:w-2/5 mb-10 lg:mb-0">
            {/* Main Heading */}
            <div
              className="text-2xl sm:text-3xl lg:text-3xl leading-snug mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#A67950",
                whiteSpace: "pre-line",
              }}
            >
              <div className="lg:ml-[-20px]">
                ‘Democratizing <br /> Excellence in Robotic <br /> Surgery’
              </div>
            </div>

            {/* Subtext */}
            <div
              className="text-sm md:text-base leading-relaxed text-left"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#401323",
                whiteSpace: "pre-line",
              }}
            >
              <div className="lg:transform lg:translate-x-[310px] lg:translate-y-[-127px] text-left">
                SSICRS is a pioneering center committed to<br className="lg:block hidden" /> transforming surgical education and innovation. Our<br className="lg:block hidden" /> mission is to empower healthcare professionals across <br className="lg:block hidden" />the globe with access to advanced knowledge, expert<br className="lg:block hidden" /> mentorship, and multi-specialty training on the SSI<br className="lg:block hidden" /> Mantra platform.<br/><br/>

                Through our programs, surgeons and surgical teams<br className="lg:block hidden" /> develop the expertise to drive a worldwide movement <br className="lg:block hidden" />in decentralizing robotic surgery—bringing advanced <br className="lg:block hidden" />care to every corner of the world, including<br className="lg:block hidden" /> underserved regions.
              </div>
            </div>
          </div>

          {/* Image on the right */}
          <div className="lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end">
            <div
              className="relative rounded-[8px] overflow-hidden w-full max-w-[513px] h-[280px] sm:h-[300px] md:h-[350px] lg:h-[280px] lg:transform lg:translate-x-12"
            >
              <Image
                src="/Images/homepage/section2/image1.webp"
                alt="Section 2 Image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 513px"
              />
            </div>
          </div>
        </div>

        {/* --- "At SSICRS, you will:" Section --- */}
        <div 
          className="w-full pt-10 lg:transform lg:translate-y-[-160px]" 
        >
          <h3
            className="font-serif text-xl md:text-2xl font-semibold leading-tight mb-8 text-center text-[#A67950]"
          >
            <span className="text-left block lg:ml-[-20px]">
              At SSICRS, you will:
            </span>
          </h3>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8 md:gap-x-12 justify-items-center">
            {logos.map((logo, index) => (
              // Card Wrapper: White Background, Shadow, Pointer active
              <div
                key={index}
                className="relative flex flex-col items-center group cursor-pointer 
                           p-4 max-w-[200px] w-full 
                           bg-white rounded-lg shadow-xl transition-shadow duration-300" // Hover shadow removed
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={48}
                  height={50}
                  className="w-12 h-auto mt-4 mb-4 relative z-10"
                />
                
                {/* Decorative Brackets (ALL hover/border effects removed) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Corners: Now hidden and without hover effects */}
                    <span className="absolute top-0 left-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute top-0 right-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute bottom-0 left-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                    <span className="absolute bottom-0 right-0 w-8 h-[2px] opacity-0 transition-all duration-500 ease-in-out"></span>
                  </div>
                </div>
                
                {/* Text */}
                <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4 text-left w-full"> 
                  {logo.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}