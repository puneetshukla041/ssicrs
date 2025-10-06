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

// Facility Block
interface FacilityBlockProps {
  title: string;
  description: string;
}

const FacilityBlock: React.FC<FacilityBlockProps> = ({ title, description }) => (
  <div className="mb-8 lg:mb-14 scale-[1.02]">
    <h3
      style={{
        color: Colors.facilityHeading,
        fontFamily: '"DM Serif Text", serif',
      }}
      className="text-xl md:text-2xl lg:text-[1.6rem] font-normal leading-relaxed capitalize"
    >
      {title}:
    </h3>
    <p
      style={{
        color: Colors.mainHeading,
        fontFamily: "Lato, sans-serif",
      }}
      className="mt-1 text-base md:text-[1.05rem] leading-7"
    >
      {description}
    </p>
  </div>
);

// Main Section5
const Section5: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col py-8 md:py-12 lg:py-16 scale-[0.95] origin-top" // slightly zoomed-out, but larger content
      style={{
        backgroundColor: Colors.background,
      }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-14 xl:px-24 max-w-[85%]">
        {/* Heading */}
        <div className="group relative cursor-pointer inline-block pt-0 mb-6">
          <h2
            style={{
              color: Colors.mainHeading,
              fontFamily: '"DM Serif Text", serif',
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-snug"
          >
            How We Train
          </h2>
          <div className="absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-full bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Paragraph */}
        <p
          style={{
            color: Colors.paragraphColor,
            fontFamily: "Lato, sans-serif",
          }}
          className="text-base md:text-lg font-normal leading-7 mb-10 md:mb-12 lg:mb-16 mt-3 max-w-3xl"
        >
          Our institute mirrors the environment of a modern robotic operating room. Trainees gain confidence
          by practicing in facilities that replicate real-world surgical conditions.
        </p>

        {/* Facilities + Image */}
        <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-20">
          {/* Facility List */}
          <div className="flex flex-col flex-shrink-0 lg:w-1/2 xl:w-[580px] lg:order-1 order-2">
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

          {/* Image */}
          <div className="flex-grow flex justify-center lg:justify-start mb-10 lg:mb-0 lg:order-2 order-1">
            <div
              style={{
                background: `url("/Images/programs/section5/image1.png") lightgray center / cover no-repeat`,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 5px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[600px] lg:h-[400px] rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
