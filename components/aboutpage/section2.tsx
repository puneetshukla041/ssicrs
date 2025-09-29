// components/aboutus/Section2.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section
      className="relative w-full h-[712px]"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      {/* Heading on the left */}
      <h2
        className="absolute"
        style={{
          left: "130px",
          top: "300px",
          fontFamily: "DM Serif Display, serif",
          fontSize: "34px",
          fontWeight: 500,
          color: "#A67950",
        }}
      >
        Educating the future of<br />Accessible Robotic Surgery
      </h2>

      {/* Text on the left */}
      <div
        className="absolute"
        style={{
          left: "650px",
          width: "700px",
          top: "120px",
          fontFamily: "Lato, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#401323",
          whiteSpace: "pre-line",
        }}
      >
        Dr. Sudhir Srivastava stands at the forefront of robotic surgical innovation<br /> 
        as a globally recognized pioneer in robotic-assisted surgery. With an<br /> 
        unwavering commitment to democratizing this transformative technology,<br /> 
        he has dedicated his career to making robotic surgery more affordable,<br /> 
        accessible, and impactful for patients worldwide.
        <br /><br />
        In pursuit of this vision, Dr. Srivastava founded SS Innovations to develop<br /> 
        state-of-the-art, cost-effective robotic surgical solutions. Building on this<br /> 
        success, the SS International Centre for Robotics Surgery (SSICRS) has<br /> 
        been established to create a comprehensive educational framework. This<br /> 
        initiative empowers the next generation of healthcare professionals—<br /> 
        including surgeons, anesthesiologists, surgical staff, and ICU specialists—<br /> 
        to master robotic-assisted surgery using the advanced SSI Mantra Surgical<br /> 
        Robotic System.
        <br /><br />
        SSICRS is devoted to cultivating future leaders in robotic surgery, ensuring<br /> 
        that the benefits of robotic-assisted healthcare are accessible to all, rather<br /> 
        than being a privilege for only a select few.
      </div>

      {/* Image on the right */}
      <div
        className="absolute w-[404px] h-[404px]"
        style={{ right: "130px", top: "150px" }} // adjust top as needed
      >
        <Image
          src="/Images/aboutpage/section2/sudhir.png"
          alt="Dr. Sudhir Srivastava"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
