// components/aboutus/Section3.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <section className="w-full relative bg-[#FBFAF2] h-[70vh] flex items-start px-32">
      {/* Left side: Images */}
      <div className="relative">
        {/* First image */}
        <Image
          src="/Images/aboutpage/section3/image1.png"
          alt="Image 1"
          width={650}
          height={550}
        />

        {/* Heading on top of image1 */}
        <h2
          className="absolute"
          style={{
            top: "140px",
            left: "40px",
            color: "#FFFFFF",
            fontFamily: '"DM Serif Text", serif',
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Our Vision
        </h2>

        {/* Paragraph below the heading */}
        <p
          className="absolute"
          style={{
            top: "220px",
            left: "40px",
            color: "#FFFFFF",
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
            whiteSpace: "pre-line",
          }}
        >
          To become the global leader in robotic surgery<br />
          education by providing comprehensive, cutting-edge<br />
          training that equips healthcare professionals with the <br />
          skills needed to excel in robotic-assisted surgery using <br />
          the SSI Mantra.
        </p>

        {/* Second image overlay */}
        <Image
          src="/Images/aboutpage/section3/image2.png"
          alt="Image 2"
          width={85}
          height={60}
          className="absolute"
          style={{
            left: "566px",
            top: "0px",
          }}
        />
      </div>

      {/* Right side: Text with hover boxes */}
      <div
        style={{
          marginTop: "50px",
          marginLeft: "100px",
        }}
      >
        {/* Box 1 */}
        <div
          // MODIFIED HOVER EFFECT: Added scale and a more pronounced shadow-xl
          className="transition-all duration-300 hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1"
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
            Deliver specialized training across surgical specialties for true<br />
            proficiency.
          </p>
        </div>

        {/* Box 2 */}
        <div
          // MODIFIED HOVER EFFECT: Added scale and a more pronounced shadow-xl
          className="transition-all duration-300 mt-[40px] hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1"
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
        </div>

        {/* Box 3 */}
        <div
          // MODIFIED HOVER EFFECT: Added scale and a more pronounced shadow-xl
          className="transition-all duration-300 mt-[40px] hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1"
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
            Make robotic surgery education accessible worldwide, with focus on<br />
            underserved regions.
          </p>
        </div>

        {/* Box 4 */}
        <div
          // MODIFIED HOVER EFFECT: Added scale and a more pronounced shadow-xl
          className="transition-all duration-300 mt-[40px] hover:border-[#6A4336] hover:shadow-xl hover:bg-white hover:scale-[1.02] hover:-translate-y-1"
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
            Create continuous learning pathways to keep professionals at the<br />
            forefront of innovation.
          </p>
        </div>
      </div>
    </section>
  );
}