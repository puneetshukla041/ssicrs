"use client";

import React from "react";

export default function Section2() {
  return (
    <section className="w-full h-screen bg-white relative flex flex-col items-start" style={{ paddingTop: "100px", paddingLeft: "270px" }}>
      {/* Heading with hover + line */}
      <div className="group relative cursor-pointer inline-block">
        <h2
          style={{
            color: "#A67950",
            fontFamily: '"DM Serif Text", serif',
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // 60px
          }}
        >
          Our Specialized Training
        </h2>

        {/* Animated line under heading */}
        <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
      </div>

      {/* Subheading */}
      <p
        style={{
          marginTop: "12px",
          color: "#401323",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "44px", // 150%
        }}
      >
        Programs Designed for Every Healthcare Professional
      </p>

      {/* Image under heading and paragraph */}
      <div
        style={{
          marginTop: "60px",
          borderRadius: "8px",
          width: "465px",
          height: "632px",
          background: `url("/Images/programs/section2/image1.png") lightgray -0.126px 0px / 100.054% 110.472% no-repeat`,
          aspectRatio: "465/632",
        }}
      />
    </section>
  );
}
