"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  const logos = [
    "/Logos/Programs/section2/bottomlogo1.png",
    "/Logos/Programs/section2/bottomlogo2.png",
    "/Logos/Programs/section2/bottomlogo3.png",
    "/Logos/Programs/section2/bottomlogo4.png",
  ];

  const containers = [
    {
      logoIndex: 0,
      title: "Surgeon Training",
      paragraph:
        "Master advanced robotic techniques across cardiac, urology, gynecology, thoracic, GI, colorectal, oncology, and head & neck specialties.",
    },
    {
      logoIndex: 1,
      title: "Residents & Fellows",
      paragraph:
        "Early exposure to robotic platforms with structured mentorship and research opportunities — shaping tomorrow's surgical leaders.",
    },
    {
      logoIndex: 2,
      title: "Surgical Staff Training",
      paragraph:
        "Learn essential OR workflows, system setup, and patient preparation.",
    },
    {
      logoIndex: 3,
      title: "Anesthesia Training",
      paragraph:
        "Specialized modules cover patient positioning, insufflation, and safety protocols unique to robotic-assisted surgery.",
    },
  ];

  return (
    <section
      // Adjusted main padding for better responsiveness on laptops
      className="w-full bg-[#FBFAF2] relative flex flex-col items-center p-4 sm:p-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pt-[60px] lg:pt-[130px] pb-12"
    >
      {/* Use a max-width container to center the content on super-wide screens */}
      <div className="w-full max-w-7xl flex flex-col items-center lg:items-start">
        {/* Heading */}
        <div className="group relative cursor-pointer inline-block mx-auto lg:mx-0 text-center lg:text-left">
<h2
  className="
    text-3xl sm:text-4xl lg:text-4xl 
    text-center lg:text-left 
    leading-snug mb-6
    lg:ml-12 xl:ml-0
  "
  style={{
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#A67950",
    whiteSpace: "pre-line",
  }}
>
  Training Pathways
</h2>
         
        </div>

        {/* Subheading */}
        <p
            className="
    text-base md:text-lg font-normal leading-7 
    mb-8 md:mb-10 lg:mb-14 mt-1 
    max-w-full mx-auto 
    text-center lg:text-left 
    lg:ml-12 xl:ml-0
  " // Ensure font size is controlled
          style={{
            marginTop: "0px",
            color: "#401323",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            lineHeight: "44px",
          }}
        >
          A Balanced Approach: Theory, Practice, and Innovation.
        </p>

        {/* Image + Cards Container */}
        <div className="mt-8 lg:mt-[20px] flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-center lg:items-start">
          
          {/* Image - Adjusted for better flexibility on Laptops */}
          <div className="hidden sm:block relative w-full max-w-[400px] aspect-[465/632] 
                        lg:w-5/12 lg:max-w-[465px] lg:min-w-[300px] 
                        h-auto lg:max-h-[632px] rounded-[8px] overflow-hidden flex-shrink-0">
            <Image
              src="/Images/programs/section2/image1.png"
              alt="Surgeon operating with robotic-assisted surgery tools."
              fill
              priority
              // Updated sizes for better performance with flexible layout
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 465px" 
              className="object-cover"
            />
          </div>

          {/* Cards */}
          <div 
            // Simplified and adjusted for better spacing on large screens
            className="grid w-full lg:flex-grow grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[40px] max-w-full lg:mt-8"
          >
            {containers.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-[8px] border-2 border-transparent
                           bg-white 
                           shadow-md hover:shadow-lg
                           relative cursor-pointer transform transition duration-400 ease-out 
                           hover:scale-[1.03] sm:hover:scale-105 p-4 sm:p-6
                           min-h-[220px] sm:min-h-[241px] w-full max-w-full sm:max-w-[400px]
                           mx-auto sm:mx-0"
              >
                {/* Logo */}
                <div className="w-[40px] h-[40px] sm:w-[58px] sm:h-[58px] relative mb-2">
                  <Image
                    src={logos[item.logoIndex]}
                    alt={`Logo for ${item.title}`}
                    fill
                    sizes="58px"
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <p className="mt-2 text-lg sm:text-[20px] font-[DM Serif Text] text-[#5B102B] capitalize font-normal leading-[150%]">
                  {item.title}
                </p>

                {/* Paragraph */}
                <p className="mt-2 text-[#A67950] font-sans text-[16px] font-normal leading-[24px]">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}