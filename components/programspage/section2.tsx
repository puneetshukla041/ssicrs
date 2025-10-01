"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  const logos = [
    "/logos/programs/section2/bottomlogo1.png",
    "/logos/programs/section2/bottomlogo2.png",
    "/logos/programs/section2/bottomlogo3.png",
    "/logos/programs/section2/bottomlogo4.png",
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
    <section className="w-full bg-white relative flex flex-col items-center lg:items-start p-4 md:px-12 lg:px-[270px] pt-[60px] lg:pt-[100px] pb-12">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <div className="group relative cursor-pointer inline-block">
          <h2 className="font-[DM Serif Text] text-[#A67950] text-2xl md:text-[40px] font-normal leading-[150%]">
            Our Specialized Training
          </h2>
          <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Subheading */}
        <p className="mt-3 lg:mt-[12px] text-[#401323] font-sans text-[16px] leading-[44px]">
          Programs Designed for Every Healthcare Professional
        </p>

        {/* Main content */}
        <div className="mt-8 lg:mt-[60px] flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-center lg:items-start">
          {/* Main image */}
          <div className="hidden sm:block relative w-full max-w-[400px] h-[550px] lg:w-[465px] lg:h-[632px] rounded-[8px] overflow-hidden flex-shrink-0">
            <Image
              src="/Images/programs/section2/image1.png"
              alt="Main Program Image"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Right containers */}
          <div className="grid w-full lg:w-auto grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[40px] max-w-full lg:max-w-[840px]">
            {containers.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-[8px] border-2 border-transparent 
                           hover:border-[#6A4336] shadow-[3px_3px_10px_rgba(0,0,0,0.2)] 
                           hover:shadow-[6px_6px_20px_rgba(0,0,0,0.25)] bg-white 
                           relative cursor-pointer transform transition-all duration-500 
                           ease-in-out hover:scale-[1.02] sm:hover:scale-105 p-4 sm:p-6
                           min-h-[220px] sm:min-h-[241px] w-full max-w-[400px]"
              >
                {/* Logo */}
                <div className="w-[40px] h-[40px] sm:w-[58px] sm:h-[58px] relative mb-2">
                  <Image
                    src={logos[item.logoIndex]}
                    alt={`Logo ${index + 1}`}
                    fill
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
