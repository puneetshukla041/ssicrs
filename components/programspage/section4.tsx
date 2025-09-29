"use client";

import React from "react";

export default function Section4() {
  return (
    <section
      className="w-full bg-white flex flex-col items-start"
      style={{ height: "135vh", paddingLeft: "270px", paddingTop: "0px" }}
    >
      {/* Heading with hover + line */}
      <div className="group relative cursor-pointer inline-block" style={{ paddingTop: "0px" }}>
        <h2
          style={{
            color: "#A67950",
            fontFamily: '"DM Serif Text", serif',
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          How We Train
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
        A Balanced Approach: Theory, Practice, and Innovation.
      </p>

      {/* 2x2 Image Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-6">
        {/* Image 1: Zoom and Pointer Cursor Only */}
        <div className="relative group rounded-lg overflow-hidden cursor-pointer">
          {/* Image - Keep zoom effect and put border-radius back on image */}
          <img
            src="/Images/programs/section4/image1.png"
            alt="Image 1"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              width: "634px",
              height: "461px",
              borderRadius: "8px", // Retained border radius on image
            }}
          />
          {/* REMOVED: The <div className="absolute inset-0 bg-[#381205] opacity-0 group-hover:opacity-70..."></div> */}
          {/* Text Overlay (No changes needed here for this request) */}
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg p-4 flex flex-col items-start justify-start"
            style={{
              width: "534px",
              height: "120px",
              background: "#381205",
              opacity: 0.7,
              backdropFilter: "blur(50px)",
              // zIndex is no longer strictly necessary but kept for robustness
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: '"DM Serif Text", serif',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                marginBottom: "6px",
              }}
            >
              Classroom Learning
            </p>
            <p
              style={{
                color: "#FFF",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              Interactive sessions led by expert faculty build strong foundations in robotic surgery.
            </p>
          </div>
        </div>

        {/* Image 2: Zoom and Pointer Cursor Only */}
        <div className="relative ml-7 group rounded-lg overflow-hidden cursor-pointer">
          <img
            src="/Images/programs/section4/image2.png"
            alt="Image 2"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              width: "634px",
              height: "461px",
              borderRadius: "8px",
            }}
          />
          {/* Text Overlay */}
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg p-4 flex flex-col items-start justify-start"
            style={{
              width: "534px",
              height: "120px",
              background: "#381205",
              opacity: 0.7,
              backdropFilter: "blur(50px)",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: '"DM Serif Text", serif',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                marginBottom: "6px",
              }}
            >
              Lab-Based Practice
            </p>
            <p
              style={{
                color: "#FFF",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              From dry labs to wet labs, participants develop hands-on skills in realistic surgical conditions.
            </p>
          </div>
        </div>

        {/* Image 3: Zoom and Pointer Cursor Only */}
        <div className="relative group rounded-lg overflow-hidden cursor-pointer">
          <img
            src="/Images/programs/section4/image3.png"
            alt="Image 3"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              width: "634px",
              height: "461px",
              borderRadius: "8px",
            }}
          />
          {/* Text Overlay */}
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg p-4 flex flex-col items-start justify-start"
            style={{
              width: "534px",
              height: "120px",
              background: "#381205",
              opacity: 0.7,
              backdropFilter: "blur(50px)",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: '"DM Serif Text", serif',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                marginBottom: "6px",
              }}
            >
              Online Modules
            </p>
            <p
              style={{
                color: "#FFF",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              Flexible, self-paced learning with pre-training modules, recorded lectures, quizzes, and ongoing support.
            </p>
          </div>
        </div>

        {/* Image 4: Zoom and Pointer Cursor Only */}
        <div className="relative ml-7 group rounded-lg overflow-hidden cursor-pointer">
          <img
            src="/Images/programs/section4/image4.png"
            alt="Image 4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              width: "634px",
              height: "461px",
              borderRadius: "8px",
            }}
          />
          {/* Text Overlay */}
          <div
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg p-4 flex flex-col items-start justify-start"
            style={{
              width: "534px",
              height: "120px",
              background: "#381205",
              opacity: 0.7,
              backdropFilter: "blur(50px)",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontFamily: '"DM Serif Text", serif',
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                marginBottom: "6px",
              }}
            >
              Certification & Mentorship
            </p>
            <p
              style={{
                color: "#FFF",
                fontFamily: "Lato, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              Graduates earn globally recognized certification with CME credits, plus continued access to mentors for long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}