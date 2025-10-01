"use client";

import React from "react";
// 1. Import the Image component from next/image
import Image from "next/image";

export default function Section4() {
  return (
    // 1. Convert fixed padding-left to responsive padding (p-4 for small, px-72 for large)
    <section
      className="w-full bg-white flex flex-col items-center xl:items-start px-4 md:px-8 lg:px-16 xl:px-64"
      style={{
        minHeight: "100vh",
        paddingTop: "0px",
        paddingBottom: "160px",
      }}
    >
      {/* Container for alignment on large screens */}
      <div className="w-full max-w-7xl">
        {/* Heading with hover + line */}
        {/* Align text left on all screens, but center the div itself on small screens if we were centering content, but here we align left */}
        <div
          className="group relative cursor-pointer inline-block mt-10 xl:mt-0"
          style={{ paddingTop: "0px" }}
        >
          <h2
            style={{
              color: "#A67950",
              fontFamily: '"DM Serif Text", serif',
              fontSize: "40px", // Remains large but can be made responsive if needed (e.g., text-3xl sm:text-4xl)
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

        {/* 2x2 Image Grid: Changed to 1 column on small/medium and 2 columns on large. */}
        {/* max-w-7xl added to constrain the grid width on very large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10 mt-6 w-full">
          {/* Image 1: Zoom and Pointer Cursor Only */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            {/* Set parent div to full width and use a padding-bottom hack for the original aspect ratio (461/634 ≈ 72.71%) */}
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
                // The fill prop makes the image fill the parent element.
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay - Change fixed width to w-[90%] and center it */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] sm:w-[95%] max-w-[534px] h-auto min-h-[120px] md:h-[120px]"
              style={{
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
                Interactive sessions led by expert faculty build strong
                foundations in robotic surgery.
              </p>
            </div>
          </div>

          {/* Image 2: Removed ml-7, gap is handled by the grid's gap-x-6 */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            {/* Set parent div to full width and use padding-bottom for aspect ratio */}
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%", // Maintains the original 634x461 aspect ratio
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image2.png"
                alt="Image 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay - Change fixed width to w-[90%] and center it */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] sm:w-[95%] max-w-[534px] h-auto min-h-[120px] md:h-[120px]"
              style={{
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
                From dry labs to wet labs, participants develop hands-on skills
                in realistic surgical conditions.
              </p>
            </div>
          </div>

          {/* Image 3: No fixed margin needed */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            {/* Set parent div to full width and use padding-bottom for aspect ratio */}
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%", // Maintains the original 634x461 aspect ratio
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image3.png"
                alt="Image 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay - Change fixed width to w-[90%] and center it */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] sm:w-[95%] max-w-[534px] h-auto min-h-[120px] md:h-[120px]"
              style={{
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
                Flexible, self-paced learning with pre-training modules,
                recorded lectures, quizzes, and ongoing support.
              </p>
            </div>
          </div>

          {/* Image 4: Removed ml-7, gap is handled by the grid's gap-x-6 */}
          <div className="relative group rounded-lg overflow-hidden cursor-pointer">
            {/* Set parent div to full width and use padding-bottom for aspect ratio */}
            <div
              className="w-full relative"
              style={{
                paddingTop: "72.71%", // Maintains the original 634x461 aspect ratio
                borderRadius: "8px",
              }}
            >
              <Image
                src="/Images/programs/section4/image4.png"
                alt="Image 4"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Text Overlay - Change fixed width to w-[90%] and center it */}
            <div
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg py-4 px-4 flex flex-col items-start justify-start w-[90%] sm:w-[95%] max-w-[534px] h-auto min-h-[120px] md:h-[120px]"
              style={{
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