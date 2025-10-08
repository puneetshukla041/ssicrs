"use client";

import Image from "next/image";
import React from "react";

interface Section2Props {
  children?: React.ReactNode;
}

interface LogoItem {
  src: string;
  heading: string; // HTML allowed
  text: React.ReactNode;
  textColor?: string;
}

export default function Section2({ children }: Section2Props) {
  const logos: LogoItem[] = [
    {
      src: "/Images/aboutpage/section5/bottomlogo1.png",
      heading: "Expert-Led Faculty &<br>Mentorship",
      text: (
        <>
          Learn from top robotic surgeons<br />and surgical technologists.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo2.png",
      heading: "Live Surgery Observations&<br> Teleproctoring",
      text: (
        <>
          Experience real-world procedures remotely.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo3.png",
      heading: "Engineering-Integrated <br>Learning",
      text: (
        <>
          Understand robotic mechanics<br />  alongside clinical applications.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo4.png",
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

  return (
    // Updated: Added lg:px-12 xl:px-20 for more padding on large/xl screens (laptops/desktops)
    <section className="w-full relative bg-[#FBFAF2] px-4 sm:px-6 md:px-8 **lg:px-12 xl:px-20** pt-16 pb-8 md:pt-32 md:pb-16 min-h-[60vh]">
      
      {/* Centered Content Container for Desktop */}
      <div className="max-w-7xl mx-auto">
        
        {/* Optional children */}
        {children && <div className="w-full h-full">{children}</div>}

        {/* Main Heading Block */}
        <div className="pb-8 md:pb-10 lg:pb-12">
          
          {/* Main Heading */}
<h2
  className="text-3xl sm:text-4xl lg:text-4xl text-center lg:text-left leading-snug mb-6"
  style={{
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#A67950",
    whiteSpace: "pre-line",
  }}
>
  Our Approach
</h2>

          {/* Subtext */}
          <div
            className="text-center md:text-left text-[#401323] font-sans pt-6" // Align left on medium screens and up
            style={{
              fontSize: "clamp(14px, 1.5vw, 16px)",
              lineHeight: 1.6,
            }}
          >
            SSICRS is equipped with world-class infrastructure, combining theoretical education with practical,
            <br className="hidden md:inline-block"/>
            hands-on experience. Our training approach includes:<br />
          </div>
        </div>

{/* Logos Section */}
<div className="w-full flex justify-center md:justify-start mt-16 md:mt-32 relative">
  <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 w-full">
    {logos.map((logo, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center text-center p-2 sm:p-4"
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