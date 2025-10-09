"use client";

import React from "react";
// 1. Import the Image component from next/image
import Image from "next/image";

export default function Section4() {
  return (
    // 1. Updated: Adjusted padding for better responsiveness across all screens,
    // especially reducing the extreme 'xl' padding so content expands on laptops.
    // The main content is now contained by 'max-w-7xl' for central alignment on very large screens.
    <section
      className="w-full bg-[#FBFAF2] flex flex-col items-center pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-20 xl:pr-20"
      style={{
        minHeight: "100vh",
        paddingTop: "20px", // Added a default top padding
        paddingBottom: "160px",
      }}
    >
      {/* Container for alignment on all screens. This centers the content
          and ensures it doesn't get squished by excessive padding on laptops (xl) */}
      <div className="w-full max-w-7xl">
        {/* Heading with hover + line */}
        <div
          className="group relative cursor-pointer inline-block mt-10"
          style={{ paddingTop: "0px" }}
        >
<h2
  className="text-3xl sm:text-4xl lg:text-4xl text-center lg:text-left leading-snug mb-6"
  style={{
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#A67950",
    whiteSpace: "pre-line",
  }}
>
  How We Train
</h2>
          {/* Responsive Line */}
       
        </div>

        {/* Subheading */}
        <p
          className="text-base" // Ensure font size is controlled
          style={{
            marginTop: "0px",
            color: "#401323",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            lineHeight: "44px",
          }}
        >
          A Balanced Approach: Theory, Practice, and Innovation.
        </p>

        {/* 2x2 Image Grid: 1 column on small, 2 columns on medium/large. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10 mt-6 w-full">
          {/* Image 1: Classroom Learning */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%", // Maintains the original 634x461 aspect ratio
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image1.png"
                alt="Image 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw" // Added sizes for performance
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] max-w-[534px] min-h-[120px]" // Removed unnecessary 'sm:w-[95%]' and 'md:h-[120px]' for better flow
              style={{
                background: "#381205",
                opacity: 0.7,
                backdropFilter: "blur(50px)",
              }}
            >
              <p
                className="text-xl" // Added responsive class for text
                style={{
                  color: "#FFF",
                  fontFamily: '"DM Serif Text", serif',
                  fontWeight: 400,
                  lineHeight: "30px",
                  marginBottom: "6px",
                }}
              >
                Classroom Learning
              </p>
              <p
                className="text-base" // Added responsive class for text
                style={{
                  color: "#FFF",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Interactive sessions led by expert faculty build strong
                foundations in robotic surgery.
              </p>
            </div>
          </div>

          {/* Image 2: Lab-Based Practice */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%",
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image2.png"
                alt="Image 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] max-w-[534px] min-h-[120px]"
              style={{
                background: "#381205",
                opacity: 0.7,
                backdropFilter: "blur(50px)",
              }}
            >
              <p
                className="text-xl"
                style={{
                  color: "#FFF",
                  fontFamily: '"DM Serif Text", serif',
                  fontWeight: 400,
                  lineHeight: "30px",
                  marginBottom: "6px",
                }}
              >
                Lab-Based Practice
              </p>
              <p
                className="text-base"
                style={{
                  color: "#FFF",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                From dry labs to wet labs, participants develop hands-on skills
                in realistic surgical conditions.
              </p>
            </div>
          </div>

          {/* Image 3: Online Modules */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%",
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image3.png"
                alt="Image 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] max-w-[534px] min-h-[120px]"
              style={{
                background: "#381205",
                opacity: 0.7,
                backdropFilter: "blur(50px)",
              }}
            >
              <p
                className="text-xl"
                style={{
                  color: "#FFF",
                  fontFamily: '"DM Serif Text", serif',
                  fontWeight: 400,
                  lineHeight: "30px",
                  marginBottom: "6px",
                }}
              >
                Online Modules
              </p>
              <p
                className="text-base"
                style={{
                  color: "#FFF",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Flexible, self-paced learning with pre-training modules,
                recorded lectures, quizzes, and ongoing support.
              </p>
            </div>
          </div>

          {/* Image 4: Certification & Mentorship */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%",
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image4.png"
                alt="Image 4"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] max-w-[534px] min-h-[120px]"
              style={{
                background: "#381205",
                opacity: 0.7,
                backdropFilter: "blur(50px)",
              }}
            >
              <p
                className="text-xl"
                style={{
                  color: "#FFF",
                  fontFamily: '"DM Serif Text", serif',
                  fontWeight: 400,
                  lineHeight: "30px",
                  marginBottom: "6px",
                }}
              >
                Certification & Mentorship
              </p>
              <p
                className="text-base"
                style={{
                  color: "#FFF",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Graduates earn globally recognized certification with CME credits,
                plus continued access to mentors for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}