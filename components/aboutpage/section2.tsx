// components/aboutus/Section2.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section
      className="w-full py-10 lg:py-24" // Added vertical padding for spacing on all devices
      style={{ backgroundColor: "#FBFAF2" }}
    >
      {/* The main container is centered and sets a max-width for large screens 
        to prevent the content from stretching too wide on massive monitors.
      */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-20">
        
        {/*
          DESKTOP/TABLET VIEW (lg: prefix): Uses a flex/grid layout
          Visible on screens >= 1024px.
          The content is split into three main areas (Heading, Text, Image) 
          and arranged using a modern flex-based grid.
        */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-20">
          
          {/* Section 1: Heading (Spans 4 columns) */}
          <div className="col-span-4 self-center">
            <h2
              className="mt-0" // Reset default margin
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "34px",
                fontWeight: 500,
                color: "#A67950",
                lineHeight: "1.2", // Adjust line height for better typography
              }}
            >
              Educating the future of
              
              Accessible Robotic
             
              Surgery
            </h2>
          </div>

          {/* Section 2: Text Content (Spans 5 columns) */}
          <div className="col-span-5 self-center">
            <div
              className="mt-0" // Reset default margin
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#401323",
              }}
            >
              <p className="mb-6">
                <span className="font-semibold">Dr. Sudhir Srivastava</span> stands at the forefront of robotic surgical innovation 
                as a globally recognized pioneer in robotic-assisted surgery. With an 
                unwavering commitment to democratizing this transformative technology, 
                he has dedicated his career to making robotic surgery more affordable, 
                accessible, and impactful for patients worldwide.
              </p>
              <p className="mb-6">
                In pursuit of this vision, Dr. Srivastava founded SS Innovations to develop 
                state-of-the-art, cost-effective robotic surgical solutions. Building on this 
                success, the SS International Centre for Robotics Surgery (SSICRS) has 
                been established to create a comprehensive educational framework. This 
                initiative empowers the next generation of healthcare professionals—
                including surgeons, anesthesiologists, surgical staff, and ICU specialists—
                to master robotic-assisted surgery using the advanced SSI Mantra Surgical 
                Robotic System.
              </p>
              <p>
                SSICRS is devoted to cultivating future leaders in robotic surgery, ensuring 
                that the benefits of robotic-assisted healthcare are accessible to all, rather 
                than being a privilege for only a select few.
              </p>
            </div>
          </div>

          {/* Section 3: Image (Spans 3 columns) */}
<div className="col-span-3 self-center">
  <div className="relative w-full aspect-square max-w-[404px] mx-auto">
    <Image
      src="/Images/aboutpage/section2/sudhir.png"
      alt="Dr. Sudhir Srivastava"
      fill
      className="object-cover" // removed 'rounded-full'
      priority
    />
  </div>
</div>

        </div>
        

        {/* MOBILE VIEW (No prefix): Uses fluid layout and specified mobile styles
          Visible on screens < 1024px.
        */}
        <div className="lg:hidden flex flex-col items-center">
          
          {/* Mobile Heading */}
          <h2
            className="text-center mb-8 max-w-lg"
            style={{
              color: "#A67950",
              fontFamily: "DM Serif Text",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "150%", // 36px
            }}
          >
            Educating the future of Accessible Robotic Surgery
          </h2>

          {/* Mobile Image */}
          <div className="w-[158px] h-[158px] relative rounded-full overflow-hidden mb-8">
            <Image
              src="/Images/aboutpage/section2/sudhir.png"
              alt="Dr. Sudhir Srivastava"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile Text Content */}
          <div
            className="max-w-lg text-left" // Use max-w-lg for better readability on narrow screens
            style={{
              color: "#401323",
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "24px", // 200%
            }}
          >
            <p className="mb-6">
              <span className="font-semibold">Dr. Sudhir Srivastava</span> stands at the forefront of robotic surgical innovation as a globally recognized pioneer in robotic-assisted surgery.
            </p>
            <p className="mb-6">
              With an unwavering commitment to democratizing this transformative technology, he has dedicated his career to making robotic surgery more affordable, accessible, and impactful for patients worldwide.
            </p>
            <p className="mb-6">
              In pursuit of this vision, Dr. Srivastava founded SS Innovations to develop state-of-the-art, cost-effective robotic surgical solutions. Building on this success, the SS International Centre for Robotics Surgery (SSICRS) has been established to create a comprehensive educational framework. This initiative empowers the next generation of healthcare professionals—including surgeons, anesthesiologists, surgical staff, and ICU specialists—to master robotic-assisted surgery using the advanced SSI Mantra Surgical Robotic System.
            </p>
            <p>
              SSICRS is devoted to cultivating future leaders in robotic surgery, ensuring that the benefits of robotic-assisted healthcare are accessible to all, rather than being a privilege for only a select few.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}