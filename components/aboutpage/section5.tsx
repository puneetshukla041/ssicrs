// components/aboutus/Section2.tsx
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
        Learn from top robotic surgeons <br />and surgical technologists.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo2.png",
      heading: "Live Surgery Observations&<br> Teleproctoring",
      text: (
        <>
          Experience real-world procedures  <br />remotely.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo3.png",
      heading: "Engineering-Integrated <br>Learning",
      text: (
        <>
          Understand robotic mechanics<br />  alongside clinical applications.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "/Images/aboutpage/section5/bottomlogo4.png",
      heading: "Comprehensive Post-Training <br> Support",
      text: (
        <>
          Access digital resources, case <br />  discussions, and ongoing mentorship.
        </>
      ),
      textColor: "#A67950",
    },
  ];

  const headingStyle: React.CSSProperties = {
    color: "#5B102B",
    fontFamily: "DM Serif Text",
    fontSize: "clamp(16px, 2vw, 20px)", // responsive font
    fontWeight: 400,
    lineHeight: 1.4,
    textAlign: "center",
    marginBottom: "8px",
  };

  return (
    <section className="w-full min-h-[80vh] relative bg-[#FBFAF2] px-4 md:px-12 lg:px-32">
      {/* Optional children */}
      {children && <div className="w-full h-full">{children}</div>}

      {/* Main Heading - MODIFIED to align left on PC/Desktop */}
      <div className="pt-[120px] pb-8 md:pt-[120px] lg:pt-[120px] md:pb-10 lg:pb-12">
        <div
          className="font-serif font-normal text-[#A67950] leading-[1.2] text-center lg:text-left mx-auto lg:mx-0"
          style={{
            fontSize: "clamp(28px, 4vw, 38px)",
            width: "90%",
          }}
        >
          {/* Apply left padding from logos section to push text right */}
          <div className="md:pl-44 lg:pl-22 w-full"> 
            Our Approach
          </div>
        </div>

        {/* Subtext - MODIFIED to align left on PC/Desktop */}
        <div
          className="text-center lg:text-left text-[#401323] font-sans mx-auto lg:mx-0"
          style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: 1.6,
            width: "90%",
          }}
        >
{/* Apply left padding from logos section to push text right */}
<div className="md:pl-44 lg:pl-22 w-full pt-6">
  SSICRS is equipped with world-class infrastructure, combining theoretical education with practical,
  <br className="hidden md:inline-block"/>
  hands-on experience. Our training approach includes:<br />
</div>
        </div>
      </div>
      
      {/* Logos Section - Existing positioning retained */}
      <div className="absolute bottom-32 w-full flex justify-center md:justify-start md:pl-44 lg:pl-56 px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-26 w-full max-w-[1200px]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group cursor-pointer p-4"
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

              <p className="font-lato font-normal text-sm md:text-base leading-snug mt-2" style={{ color: logo.textColor }}>
                {logo.text}
              </p>

              {/* Decorative Brackets */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Vertical Brackets (Left and Right) */}
                <span className="absolute left-0 top-0 bottom-0 w-[2px] border-l-2 border-[#6A4336] rounded-tl-lg rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-6"></span>
                <span className="absolute right-0 top-0 bottom-0 w-[2px] border-r-2 border-[#6A4336] rounded-tr-lg rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-6"></span>
                
                {/* Top Brackets (Top-Left and Top-Right) */}
                <span className="absolute top-0 left-0 w-4 h-[2px] border-t-2 border-l-2 border-[#6A4336] rounded-tl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-10 group-hover:h-6"></span>
                <span className="absolute top-0 right-0 w-4 h-[2px] border-t-2 border-r-2 border-[#6A4336] rounded-tr-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-10 group-hover:h-6"></span>
                
                {/* Bottom Brackets (Bottom-Left and Bottom-Right) */}
                <span className="absolute bottom-0 left-0 w-4 h-[2px] border-b-2 border-l-2 border-[#6A4336] rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-10 group-hover:h-6"></span>
                <span className="absolute bottom-0 right-0 w-4 h-[2px] border-b-2 border-r-2 border-[#6A4336] rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-10 group-hover:h-6"></span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}