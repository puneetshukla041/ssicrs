"use client";

import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full relative bg-[#FBFAF2] pt-2 md:h-[75vh] md:pt-0">
      
      {/* Container with consistent horizontal padding */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">

        {/* --- Mobile View --- */}
        <div className="md:hidden flex flex-col items-center">
          
          {/* Mobile Vision Card */}
          <div className="relative w-full mb-8">
            <Image
              src="/Images/aboutpage/section3/image1.png"
              alt="Our Vision"
              width={650}
              height={550}
              className="w-full h-auto object-cover rounded-lg"
            />

            <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-center bg-black bg-opacity-30 rounded-lg">
              <h2
                className="text-2xl sm:text-3xl font-serif text-white"
                style={{ lineHeight: "1.3" }}
              >
                Our Vision
              </h2>

              <p className="mt-2 text-sm sm:text-base font-sans text-white leading-[1.5]">
                To become the global leader in robotic surgery education by providing comprehensive, cutting-edge training that equips healthcare professionals with the skills needed to excel in robotic-assisted surgery using the SSI Mantra.
              </p>
            </div>
          </div>

          {/* Mobile Boxes */}
          <div className="w-full space-y-4">
            {[
              "Deliver specialized training across surgical specialties for true proficiency.",
              "Blend theory with hands-on practice using the SSI Mantra system.",
              "Make robotic surgery education accessible worldwide, with focus on underserved regions.",
              "Create continuous learning pathways to keep professionals at the forefront of innovation."
            ].map((text, idx) => (
              <div
                key={idx}
                className="w-full h-auto min-h-[70px] bg-white rounded-lg border-2 border-[#724B3C] shadow-lg cursor-pointer p-4"
              >
                <p className="text-[#724B3C] font-sans font-medium text-base sm:text-lg leading-5 sm:leading-6">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Desktop View --- */}
        <div className="hidden md:flex flex-col md:flex-row items-start pt-16 md:pt-24 lg:pt-26 w-full">
          
          {/* Left side: Image + overlay */}
          <div className="relative w-full md:w-1/2 lg:w-[650px] mb-8 md:mb-0">
            <Image
              src="/Images/aboutpage/section3/image1.png"
              alt="Our Vision"
              width={650}
              height={550}
              className="w-full h-auto rounded-lg"
            />

            <div className="absolute top-10 left-6 md:top-20 md:left-8 text-white max-w-[80%]">
              <h2 className="font-serif text-3xl lg:text-[40px] font-normal leading-[1.5]">
                Our Vision
              </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-[16px] font-sans font-normal leading-6 whitespace-pre-line">
                To become the global leader in robotic surgery<br/>
                education by providing comprehensive, cutting-edge<br/>
                training that equips healthcare professionals with the<br/>
                skills needed to excel in robotic-assisted surgery using<br/>
                the SSI Mantra.
              </p>
            </div>

            <Image
              src="/Images/aboutpage/section3/image2.png"
              alt="Image 2"
              width={85}
              height={60}
              className="absolute top-0 left-[calc(100%-85px)]"
            />
          </div>

{/* Right side: Permanent Underline Boxes */}
<div className="flex-1 md:ml-8 lg:ml-12 space-y-6 lg:space-y-10 w-full">
  {[
    "Deliver specialized training across surgical specialties for true proficiency.",
    "Blend theory with hands-on practice using the SSI Mantra system.",
    "Make robotic surgery education accessible worldwide, with focus on underserved regions.",
    "Create continuous learning pathways to keep professionals at the forefront of innovation."
  ].map((text, idx) => (
    <div
      key={idx}
      className="relative w-full"
      style={{
        height: "95px",
        borderRadius: "8px",
        border: "2px solid transparent",
        display: "flex",
        alignItems: "center",
        padding: "0px",
      }}
    >
      <p className="text-[#724B3C] font-sans font-medium text-base sm:text-lg leading-5 sm:leading-6 w-full">
        {text}
      </p>
      {/* Permanent underline */}
      <div className="absolute bottom-[-6px] left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#6A4336] to-transparent"></div>
    </div>
  ))}
</div>

        </div>

      </div>
    </section>
  );
}
