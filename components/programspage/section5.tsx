"use client";

import React from "react";

const Colors = {
  background: "#FBFAF2",
  mainHeading: "#A67950",
  bodyText: "#401323",
  facilityHeading: "#5B102B",
  paragraphColor: "#401323",
};

interface FacilityBlockProps {
  title: string;
  description: string;
}

const FacilityBlock: React.FC<FacilityBlockProps> = ({ title, description }) => (
  <div className="mb-6 md:mb-10 lg:mb-10">
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

const Section5: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-16 lg:pb-8"
      style={{ backgroundColor: Colors.background }}
    >
      <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-full lg:max-w-[1400px]">
        {/* Heading */}
        <div className="group relative inline-block pt-0 mb-6 text-center lg:text-left cursor-pointer">
          <h2
            style={{
              color: Colors.mainHeading,
              fontFamily: '"DM Serif Text", serif',
            }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-snug"
          >
            Training Facilities
          </h2>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-full bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Paragraph */}
        <p
          style={{
            color: Colors.paragraphColor,
            fontFamily: "Lato, sans-serif",
          }}
          className="text-base md:text-lg font-normal leading-7 mb-10 md:mb-12 lg:mb-16 mt-3 max-w-full mx-auto lg:mx-0 text-center lg:text-left"
        >
          Our institute mirrors the environment of a modern robotic operating room. Trainees gain confidence
          by practicing in facilities that replicate real-world surgical conditions.
        </p>

        {/* Facilities + Image */}
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
          {/* Facility List */}
          <div className="flex flex-col flex-shrink-0 w-full lg:w-1/2 order-2 lg:order-1">
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
          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0 order-1 lg:order-2 w-full lg:w-7/12">
            <div
              style={{
                background: `url("/Images/programs/section5/image1.png") lightgray center / cover no-repeat`,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 5px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              className="w-full h-72 sm:h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
