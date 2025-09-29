"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
export default function Section3() {
  return (
    <section
      className="w-full bg-white flex flex-col items-start"
      style={{ height: "90vh", paddingLeft: "270px", paddingTop: "0px" }}
    >
      {/* Heading with hover + line */}
      <div className="group relative cursor-pointer inline-block" style={{ paddingTop: "100px" }}>
        <h2
          style={{
            color: "#A67950",
            fontFamily: '"DM Serif Text", serif',
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Upcoming Training Batches
        </h2>
        <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
      </div>

      {/* Subheading */}
      <p
        style={{
          marginTop: "22px",
          color: "#401323",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "44px",
        }}
      >
        Limited seats per cohort. Reserve early to maximize hands-on time.
      </p>

      {/* Rectangular card under heading */}
      <div
        className="flex justify-between items-start"
        style={{
          padding: "40px",
          marginTop: "60px",
          borderRadius: "8px",
          border: "1px solid #A67950",
          background: "#FFF",
          width: "83%",
          minHeight: "380px",
        }}
      >
        {/* Left-side content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2
            style={{
              color: "#401323",
              fontFamily: '"DM Serif Text", serif',
              fontSize: "36px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Cardiac Robotic Surgery Training
          </h2>

{/* List with SVGs */}
<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
  {[
    "Starting October 2025",
    "Duration: 5 Days",
    "Location: SSICRS Training Facility",
  ].map((text, index) => (
    <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        style={{ width: "22px", height: "22px", aspectRatio: "1 / 1" }}
      >
        <g clipPath="url(#clip0_666_963)">
          <path
            d="M8.25 4.125L15.125 11L8.25 17.875"
            stroke="#401323"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_666_963">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span
        style={{
          color: "#401323",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
        }}
      >
        {text}
      </span>
    </div>
  ))}
{/* Procedures Covered text */}
<div style={{ marginTop: "16px" }}>
  <span
    style={{
      color: "#401323",
      fontFamily: "Lato, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    }}
  >
    Procedures Covered
  </span>
</div>

{/* Button under Procedures Covered */}
<button
  className="flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)] mt-4"
  style={{
    width: "167px",
    height: "43px",
    background: "#A67950",       // updated color
    borderRadius: "100px",       // fully rounded
    fontFamily: "Lato, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    color: "#FFF",               // white text for contrast
  }}
>
  Register Now
  <FiArrowRight className="ml-2" size={18} />
</button>



</div>

        </div>

        {/* Right-side image using background */}
        <div
          style={{
            width: "456px",
            height: "329px",
            borderRadius: "8px",
            background: `url("/Images/programs/section3/image1.png") lightgray -146.286px -100.9px / 157.415% 145.543% no-repeat`,
            flexShrink: 0,
          }}
        ></div>
      </div>
    </section>
  );
}
