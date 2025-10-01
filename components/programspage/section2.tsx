"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  const containers = [
    {
      logo: 1,
      title: "Surgeon Training",
      paragraph: (
        <>
          Master advanced robotic techniques across <br className="hidden lg:inline-block" />
          cardiac, urology, gynecology, thoracic, GI, <br className="hidden lg:inline-block" />
          colorectal, oncology, and head & neck <br className="hidden lg:inline-block" />
          specialties.
        </>
      ),
    },
    {
      logo: 2,
      title: "Residents & Fellows",
      paragraph: (
        <>
          Early exposure to robotic platforms with <br className="hidden lg:inline-block" />
          structured mentorship and research <br className="hidden lg:inline-block" />
          opportunities — shaping tomorrow&apos;s surgical <br className="hidden lg:inline-block" />
          leaders.
        </>
      ),
    },
    {
      logo: 3,
      title: "Surgical Staff Training",
      paragraph: (
        <>
          Learn essential OR workflows, system setup, and patient preparation.
        </>
      ),
    },
    {
      logo: 4,
      title: "Anesthesia Training",
      paragraph: (
        <>
          Specialized modules cover patient positioning, <br className="hidden lg:inline-block" />
          insufflation, and safety protocols unique to <br className="hidden lg:inline-block" />
          robotic-assisted surgery.
        </>
      ),
    },
  ];

  const logoBaseUrl = "/logos/programs/section2/bottomlogo";

  return (
    // Removed fixed height (h-screen) and fixed left padding (paddingLeft: "270px")
    <section
      className="w-full bg-white flex flex-col items-center lg:items-start px-4 md:px-12 lg:px-32 pb-20"
      style={{ paddingTop: "80px" }}
    >
      
      {/* Header and Subheading Container - Aligns left on large screens */}
      <div className="w-full max-w-7xl"> 
        {/* Heading with hover + line */}
        <div className="group relative cursor-pointer inline-block text-center lg:text-left mx-auto lg:mx-0">
          <h2
            className="font-normal"
            style={{
              color: "#A67950",
              fontFamily: '"DM Serif Text", serif',
              fontSize: "clamp(28px, 4vw, 40px)", // Responsive font size
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Our Specialized Training
          </h2>
          <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Subheading */}
        <p
          className="text-center lg:text-left"
          style={{
            marginTop: "12px",
            color: "#401323",
            fontFamily: "Lato, sans-serif",
            fontSize: "clamp(14px, 1.5vw, 16px)", // Responsive font size
            fontWeight: 400,
            lineHeight: "1.5", // Changed fixed line height to relative
          }}
        >
          Programs Designed for Every Healthcare Professional
        </p>
      </div>

      {/* Main content - Flexbox/Stacking for responsiveness */}
      <div className="mt-[40px] lg:mt-[60px] w-full flex flex-col lg:flex-row lg:gap-[60px] max-w-7xl">
        
        {/* Main image on the left - Sets height via aspect ratio for responsiveness */}
        <div className="relative w-full lg:w-[465px] h-96 lg:h-[632px] rounded-[8px] overflow-hidden flex-shrink-0 mb-8 lg:mb-0">
          <Image
            src="/Images/programs/section2/image1.png"
            alt="Main Program Image"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 465px" // Added sizes for better performance
          />
        </div>

        {/* Right 4 containers - Uses responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[40px] flex-1">
          {containers.map((item, index) => (
            <div
              key={index}
              // Fixed dimensions replaced with flex-shrink-0 and aspect ratio/min-height for responsiveness
              className="flex-shrink-0 rounded-[8px] border-2 border-transparent hover:border-[#6A4336] shadow-md hover:shadow-lg bg-white overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] p-4 sm:p-6" 
              style={{
                height: "241px", // Maintain approximate height for desktop view, but it will be constrained by grid now
              }}
            >
              {/* Logo */}
              {/* Positioned inside the card, using margin/padding now */}
              <div className="relative w-[48px] h-[48px] mb-4">
                <Image
                  src={`${logoBaseUrl}${item.logo}.png`}
                  alt={`Logo ${item.logo}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p
                className="text-[#5B102B] font-normal"
                style={{
                  fontFamily: '"DM Serif Text", serif',
                  fontSize: "clamp(18px, 2.5vw, 20px)", // Responsive font size
                  lineHeight: "1.2",
                  marginBottom: "8px",
                  textTransform: "capitalize",
                }}
              >
                {item.title}
              </p>

              {/* Paragraph */}
              <p
                className="text-[#A67950] font-normal"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "clamp(14px, 1.5vw, 16px)", // Responsive font size
                  lineHeight: "1.5",
                }}
              >
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}