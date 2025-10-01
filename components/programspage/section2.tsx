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
      paragraph: (
        <>
          Master advanced robotic techniques across <br />
          cardiac, urology, gynecology, thoracic, GI, <br />
          colorectal, oncology, and head & neck <br />
          specialties.
        </>
      ),
    },
    {
      logoIndex: 1,
      title: "Residents & Fellows",
      paragraph: (
        <>
          Early exposure to robotic platforms with <br />
          structured mentorship and research <br />
          opportunities — shaping tomorrow&apos;s surgical <br />
          leaders.
        </>
      ),
    },
    {
      logoIndex: 2,
      title: "Surgical Staff Training",
      paragraph: (
        <>
          Learn essential OR workflows, system setup,<br /> and patient preparation.
        </>
      ),
    },
    {
      logoIndex: 3,
      title: "Anesthesia Training",
      paragraph: (
        <>
          Specialized modules cover patient positioning, <br />
          insufflation, and safety protocols unique to <br />
          robotic-assisted surgery.
        </>
      ),
    },
  ];

  return (
    <section
      className="w-full h-screen bg-white relative flex flex-col items-start"
      style={{ paddingTop: "100px", paddingLeft: "270px" }}
    >
      {/* Heading */}
      <div className="group relative cursor-pointer inline-block">
        <h2
          style={{
            color: "#A67950",
            fontFamily: '"DM Serif Text", serif',
            fontSize: "40px",
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
        style={{
          marginTop: "12px",
          color: "#401323",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "44px",
        }}
      >
        Programs Designed for Every Healthcare Professional
      </p>

      {/* Main content */}
      <div className="mt-[60px] flex gap-[60px]">
        {/* Main image */}
        <div className="relative w-[465px] h-[632px] rounded-[8px] overflow-hidden">
          <Image
            src="/Images/programs/section2/image1.png"
            alt="Main Program Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right containers */}
        <div className="grid grid-rows-2 grid-cols-2 gap-[40px]">
          {containers.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-[8px] border-2 border-transparent hover:border-[#6A4336] shadow-[3px_3px_10px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_20px_rgba(0,0,0,0.25)] bg-white overflow-hidden relative cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105"
              style={{
                width: "400px",
                height: "241px",
              }}
            >
              {/* Logo */}
              <div className="absolute top-[16px] left-[16px] w-[58px] h-[58px] relative">
                <Image
                  src={logos[item.logoIndex]}
                  alt={`Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p
                style={{
                  position: "absolute",
                  top: "70px",
                  left: "16px",
                  color: "#5B102B",
                  fontFamily: '"DM Serif Text", serif',
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "150%",
                  textTransform: "capitalize",
                }}
              >
                {item.title}
              </p>

              {/* Paragraph */}
              <p
                style={{
                  position: "absolute",
                  top: "110px",
                  left: "16px",
                  right: "16px",
                  color: "#A67950",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
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
