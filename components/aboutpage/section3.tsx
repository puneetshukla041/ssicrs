// components/aboutus/Section3.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full relative bg-[#FBFAF2] pt-2 md:h-[75vh] md:pt-0">

      
      {/* --- Mobile View (visible below 'md' breakpoint) --- */}
      <div className="md:hidden flex flex-col items-center px-6">
        
        {/* Mobile Vision Card (Mimics the left side image content) */}
        <div className="relative w-full mb-8">
          <Image
            src="/Images/aboutpage/section3/image1.png"
            alt="Our Vision"
            width={650}
            height={550}
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Heading on top of image1 */}
          <div className="absolute inset-0 p-6 flex flex-col justify-center bg-black bg-opacity-30 rounded-lg">
            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: '"DM Serif Text", serif',
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "130%",
              }}
            >
              Our Vision
            </h2>

            {/* Paragraph below the heading */}
            <p
              className="mt-2"
              style={{
                color: "#FFFFFF",
                fontFamily: "Lato, sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "150%",
              }}
            >
              To become the global leader in robotic surgery education by
              providing comprehensive, cutting-edge training that equips
              healthcare professionals with the skills needed to excel in
              robotic-assisted surgery using the SSI Mantra.
            </p>
          </div>
          
          {/* Decorative image (optional on mobile, but included for context) */}

        </div>
        
        {/* Mobile Boxes (Mimics the right side hover boxes) */}
        <div className="w-full space-y-4">
          {/* Box 1 (Mobile) */}
          <div
            className="w-full h-auto min-h-[70px] bg-white rounded-lg border-2 border-transparent transition-all duration-300 shadow-lg cursor-pointer p-4"
            style={{ border: "2px solid #724B3C" }} // Solid border for visibility on mobile
          >
            <p
              style={{
                color: "#724B3C",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Deliver specialized training across surgical specialties for true
              proficiency.
            </p>
          </div>
          
          {/* Box 2 (Mobile) */}
          <div
            className="w-full h-auto min-h-[70px] bg-white rounded-lg border-2 border-transparent transition-all duration-300 shadow-lg cursor-pointer p-4"
            style={{ border: "2px solid #724B3C" }}
          >
            <p
              style={{
                color: "#724B3C",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Blend theory with hands-on practice using the SSI Mantra system.
            </p>
          </div>
          
          {/* Box 3 (Mobile) */}
          <div
            className="w-full h-auto min-h-[70px] bg-white rounded-lg border-2 border-transparent transition-all duration-300 shadow-lg cursor-pointer p-4"
            style={{ border: "2px solid #724B3C" }}
          >
            <p
              style={{
                color: "#724B3C",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Make robotic surgery education accessible worldwide, with focus on
              underserved regions.
            </p>
          </div>
          
          {/* Box 4 (Mobile) */}
          <div
            className="w-full h-auto min-h-[70px] bg-white rounded-lg border-2 border-transparent transition-all duration-300 shadow-lg cursor-pointer p-4"
            style={{ border: "2px solid #724B3C" }}
          >
            <p
              style={{
                color: "#724B3C",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Create continuous learning pathways to keep professionals at the
              forefront of innovation.
            </p>
          </div>
        </div>
      </div>
      
      {/* --- Desktop View (visible from 'md' breakpoint and up) --- */}
      <div className="hidden md:flex items-start px-32 pt-16 md:pt-24 lg:pt-26 w-full">
{/* Desktop View (md and up) */}
<div className="hidden md:flex items-start px-32 pt-16 md:pt-24 lg:pt-26 w-full">
  {/* Left side: Image + overlay */}
  <div className="relative ml-4 w-[650px]">
    {/* First image */}
    <Image
      src="/Images/aboutpage/section3/image1.png"
      alt="Our Vision"
      width={650}
      height={550}
      className="w-full h-auto rounded-lg"
    />

    {/* Heading and paragraph overlay */}
    <div className="absolute top-36 left-8 text-white">
      <h2 className="font-serif text-[40px] font-normal leading-[150%]">
        Our Vision
      </h2>
      <p className="mt-4 text-[16px] font-sans font-normal leading-6 whitespace-pre-line">
        To become the global leader in robotic surgery
        <br />
        education by providing comprehensive, cutting-edge
        <br />
        training that equips healthcare professionals with the
        <br />
        skills needed to excel in robotic-assisted surgery using
        <br />
        the SSI Mantra.
      </p>
    </div>

    {/* Optional second overlay image */}
    <Image
      src="/Images/aboutpage/section3/image2.png"
      alt="Image 2"
      width={85}
      height={60}
      className="absolute top-0 left-[566px]"
    />
  </div>
</div>


        {/* Right side: Text with hover boxes */}
        <div
          style={{
            marginTop: "100px",
            marginLeft: "-50px",
          }}
        >
          {/* Box 1 */}
          <div
            className="group transition-all duration-300 hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1 relative cursor-pointer"
            style={{
              width: "756px",
              height: "95px",
              borderRadius: "8px",
              border: "2px solid transparent",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="relative w-full h-full flex items-center">
              <p
                style={{
                  color: "#724B3C",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                Deliver specialized training across surgical specialties for true
                <br />
                proficiency.
              </p>
              {/* Animated extended fading line */}
              <div className="absolute bottom-[-22px] left-[-18px] h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
            </div>
          </div>

          {/* Box 2 */}
          <div
            className="group transition-all duration-300 mt-[40px] hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1 relative cursor-pointer"
            style={{
              width: "756px",
              height: "95px",
              borderRadius: "8px",
              border: "2px solid transparent",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="relative w-full h-full flex items-center">
              <p
                style={{
                  color: "#724B3C",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                Blend theory with hands-on practice using the SSI Mantra system.
              </p>
              {/* Animated extended fading line */}
              <div className="absolute bottom-[-22px] left-[-18px] h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
            </div>
          </div>

          {/* Box 3 */}
          <div
            className="group transition-all duration-300 mt-[40px] hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1 relative cursor-pointer"
            style={{
              width: "756px",
              height: "95px",
              borderRadius: "8px",
              border: "2px solid transparent",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="relative w-full h-full flex items-center">
              <p
                style={{
                  color: "#724B3C",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                Make robotic surgery education accessible worldwide, with focus
                on
                <br />
                underserved regions.
              </p>
              {/* Animated extended fading line */}
              <div className="absolute bottom-[-22px] left-[-18px] h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
            </div>
          </div>

          {/* Box 4 */}
          <div
            className="group transition-all duration-300 mt-[40px] hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1 relative cursor-pointer"
            style={{
              width: "756px",
              height: "95px",
              borderRadius: "8px",
              border: "2px solid transparent",
              display: "flex",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div className="relative w-full h-full flex items-center">
              <p
                style={{
                  color: "#724B3C",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                Create continuous learning pathways to keep professionals at the
                <br />
                forefront of innovation.
              </p>
              {/* Animated extended fading line */}
              <div className="absolute bottom-[-22px] left-[-18px] h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}