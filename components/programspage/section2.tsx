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
    // *** MODIFIED PADDING: Changed lg:px-[270px] to lg:pl-[270px] lg:pr-[100px] ***
    // This reduces the right-side margin on large screens, pushing content wider.
    <section className="w-full bg-white relative flex flex-col items-center lg:items-start p-4 sm:p-8 md:px-12 lg:pl-[270px] lg:pr-[100px] pt-[60px] lg:pt-[100px] pb-12">
      <div className="w-full max-w-7xl">
        
        {/* Heading container: Centered on mobile, left-aligned on large screens */}
        <div className="group relative cursor-pointer inline-block mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="font-[DM Serif Text] text-[#A67950] text-2xl sm:text-3xl md:text-[40px] font-normal leading-[150%]">
            Our Specialized Training
          </h2>
          {/* Underline for effect on hover, adjusted for responsiveness */}
          <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-full lg:group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Subheading: Centered on mobile, left-aligned on large screens */}
        <p className="mt-3 lg:mt-[12px] text-[#401323] font-sans text-[16px] leading-8 sm:leading-[44px] text-center lg:text-left">
          Programs Designed for Every Healthcare Professional
        </p>

        {/* Main content: Image and Training Cards */}
        <div className="mt-8 lg:mt-[60px] flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-center lg:items-start">
          
          {/* Main image - Dimensions remain the same */}
          <div className="hidden sm:block relative w-full max-w-[400px] h-[550px] lg:w-[465px] lg:h-[632px] rounded-[8px] overflow-hidden flex-shrink-0">
            <Image
              src="/Images/programs/section2/image1.png"
              alt="Surgeon operating with robotic-assisted surgery tools."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 465px"
              className="object-cover"
            />
          </div>

          {/* Right containers (Training Cards) */}
          <div className="grid w-full lg:w-auto grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[40px] max-w-full">
            {containers.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-[8px] border-2 border-transparent 
                          hover:border-[#6A4336] shadow-[3px_3px_10px_rgba(0,0,0,0.2)] 
                          hover:shadow-[6px_6px_20px_rgba(0,0,0,0.25)] bg-white hover:bg-[#FBF6F3] 
                          relative cursor-pointer transform transition duration-400 ease-out 
                          hover:scale-[1.02] sm:hover:scale-105 p-4 sm:p-6
                          min-h-[220px] sm:min-h-[241px] w-full max-w-full sm:max-w-[400px] 
                          mx-auto sm:mx-0 lg:max-w-none"
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