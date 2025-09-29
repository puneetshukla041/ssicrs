"use client";

import React from "react";

export default function Section2() {
  const containers = [
    {
      logo: 1,
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
      logo: 2,
      title: "Residents & Fellows",
      paragraph: (
        <>
          Early exposure to robotic platforms with 
          <br />structured mentorship and research <br />
          opportunities — shaping tomorrow’s surgical <br /> leaders.
        </>
      ),
    },
    {
      logo: 3,
      title: "Surgical Staff Training",
      paragraph: <>Learn essential OR workflows, system setup,<br /> and patient preparation.</>,
    },
    {
      logo: 4,
      title: "Anesthesia Training",
      paragraph: (
        <>
          Specialized modules cover patient positioning, <br />insufflation, and safety protocols unique to <br />robotic-assisted surgery.
        </>
      ),
    },
  ];

  return (
    <section
      className="w-full h-screen bg-white relative flex flex-col items-start"
      style={{ paddingTop: "100px", paddingLeft: "270px" }}
    >
      {/* Heading with hover + line */}
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
<div className="mt-[60px] flex gap-[60px]"> {/* reduced gap from 120px to 60px */}
  {/* Main image on the left */}
  <div
    style={{
      width: "465px",
      height: "632px",
      borderRadius: "8px",
      background: `url("/Images/programs/section2/image1.png") lightgray -0.126px 0px / 100.054% 110.472% no-repeat`,
      aspectRatio: "465/632",
    }}
  />

{/* Right 4 containers */}
<div className="grid grid-rows-2 grid-cols-2 gap-[40px]"> {/* reduced from 100px to 40px */}
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
      <img
        src={`/logos/programs/section2/logo${item.logo}.png`}
        width={58}
        height={58}
        alt={`Logo ${item.logo}`}
        className="absolute top-[16px] left-[16px]"
      />

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
