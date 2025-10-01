"use client";

import React from "react";

// Colors used in the section
const Colors = {
  background: "#F5F3ED",
  mainHeading: "#A67950",
  bodyText: "#401323",
  facilityHeading: "#5B102B",
  paragraphColor: "#401323",
};

// TypeScript type for FacilityBlock props
interface FacilityBlockProps {
  title: string;
  description: string;
}

// FacilityBlock component - Now uses Tailwind for responsive spacing and positioning
const FacilityBlock: React.FC<FacilityBlockProps> = ({ title, description }) => (
  // Reduced bottom margin on mobile, increased on larger screens
  <div className="mb-8 lg:mb-16">
    <h3
      style={{
        color: Colors.facilityHeading,
        fontFamily: '"DM Serif Text", serif',
      }}
      // Text styling
      className="text-xl font-normal leading-relaxed capitalize lg:text-2xl"
    >
      {title}:
    </h3>
    <p
      style={{
        color: Colors.mainHeading, // Using mainHeading color as in the original <p>
        fontFamily: "Lato, sans-serif",
      }}
      className="mt-1 text-base font-normal leading-6"
    >
      {description}
    </p>
  </div>
);

// Main Section5 component - Fully responsive
const Section5: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col py-8 md:py-12 lg:py-16" // Responsive padding
      style={{
        backgroundColor: Colors.background,
      }}
    >
      {/* Content container - Centered and max-width for large screens.
          Removed hardcoded marginLeft: "-60px" */}
     {/* Content container - slightly left on large screens */}
<div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl w-full lg:-ml-">

        {/* Heading with hover + line - Removed hardcoded marginLeft:"250px" */}
        <div className="group relative cursor-pointer inline-block pt-0">
          <h2
            style={{
              color: Colors.mainHeading,
              fontFamily: '"DM Serif Text", serif',
            }}
            // Responsive font size
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-snug"
          >
            How We Train
          </h2>
          <div className="absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-full bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Full-width paragraph - Removed hardcoded marginLeft:"250px" */}
        <p
          style={{
            color: Colors.paragraphColor,
            fontFamily: "Lato, sans-serif",
          }}
          className="text-base font-normal leading-6 mb-10 md:mb-12 lg:mb-16 mt-4 max-w-3xl" // Max-width for readability on large screens
        >
          Our institute mirrors the environment of a modern robotic operating room. Trainees gain confidence
          by practicing in facilities that replicate real-world surgical conditions.
        </p>

        {/* Facilities and Image - Responsive layout using flex-col on small screens and flex-row on large screens */}
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          
          {/* Facility List - Takes up full width on mobile/tablet, and a portion on desktop */}
          <div className="flex flex-col flex-shrink-0 lg:w-1/2 xl:w-[600px] lg:order-1 order-2">
            <FacilityBlock
              title="Simulated ORs"
              description="Fully equipped with SSI Mantra systems for mock procedures."
            />
            <FacilityBlock
              title="Dry Labs"
              description="Practice instrument handling, suturing, and dissection on synthetic models."
            />
            <FacilityBlock
              title="Wet Labs"
              description="Advanced practice on tissue models for realistic feedback and precision training."
            />
            <FacilityBlock
              title="Classrooms"
              description="Modern lecture halls for interactive sessions, case discussions, and expert talks."
            />
          </div>

          {/* Right-side Image - Placed above facilities on mobile/tablet (order-1), beside them on desktop (order-2) */}
          <div className="flex-grow flex justify-center lg:justify-start mb-10 lg:mb-0 lg:order-2 order-1">
            <div
              style={{
                // Background image from the original style
                background: `url("/Images/programs/section5/image1.png") lightgray -2px -0.202px / 103.49% 100.07% no-repeat`,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-[650px] lg:h-[433px] aspect-[277/191] rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;