// components/aboutus/Section3.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full relative bg-[#FBFAF2] pt-2 md:h-[75vh] md:pt-0">
      
      {/* Container for 80% width centered content */}
      <div className="w-4/5 mx-auto">

        {/* --- Mobile View (below 'md') --- */}
        <div className="md:hidden flex flex-col items-center px-6">
          
          {/* Mobile Vision Card */}
          <div className="relative w-full mb-8">
            <Image
              src="/Images/aboutpage/section3/image1.png"
              alt="Our Vision"
              width={650}
              height={550}
              className="w-full h-auto object-cover rounded-lg"
            />

            <div className="absolute inset-0 p-6 flex flex-col justify-center bg-black bg-opacity-30 rounded-lg">
              <h2
                style={{
                  color: "#FFFFFF",
                  fontFamily: '"DM Serif Text", serif',
                  fontSize: "28px",
                  fontWeight: 400,
                  lineHeight: "130%",
                }}
              >
                Our Vision
              </h2>

              <p
                className="mt-2"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "14px",
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
                <p
                  style={{
                    color: "#724B3C",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "20px",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Desktop View (from 'md') --- */}
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

            <div className="absolute top-10 left-6 md:top-36 md:left-8 text-white">
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

            <Image
              src="/Images/aboutpage/section3/image2.png"
              alt="Image 2"
              width={85}
              height={60}
              className="absolute top-0 left-[566px]"
            />
          </div>

          {/* Right side: Hover Boxes */}
          <div className="flex-1 md:ml-12 space-y-10">
            {[
              "Deliver specialized training across surgical specialties for true proficiency.",
              "Blend theory with hands-on practice using the SSI Mantra system.",
              "Make robotic surgery education accessible worldwide, with focus on underserved regions.",
              "Create continuous learning pathways to keep professionals at the forefront of innovation."
            ].map((text, idx) => (
              <div
                key={idx}
                className="group transition-all duration-300 hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1 relative cursor-pointer"
                style={{
                  width: "100%",
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
                      fontWeight: 500,
                      lineHeight: "24px",
                    }}
                  >
                    {text}
                  </p>
                  <div className="absolute bottom-[-22px] left-[-18px] h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
