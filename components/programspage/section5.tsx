"use client";

import React from "react";

// Colors used in the section
const Colors = {
  background: "#F5F3ED",
  mainHeading: "#A67950",
  bodyText: "#401323",
  facilityHeading: "#5B102B",
  paragraphColor: "#401323", // new color for paragraph
};

// TypeScript type for FacilityBlock props
interface FacilityBlockProps {
  title: string;
  description: string;
}

// FacilityBlock component
// FacilityBlock component
const FacilityBlock: React.FC<FacilityBlockProps> = ({ title, description }) => (
  <div style={{ marginBottom: "65px" }}> {/* increased from 30px to 50px */}
    <h3
      style={{
        color: Colors.facilityHeading,
        fontFamily: '"DM Serif Text", serif',
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "150%",
        textTransform: "capitalize",
        marginLeft: "250px", // keep as is
      }}
    >
      {title}:
    </h3>
    <p
      style={{
        color: "#A67950",
        fontFamily: "Lato, sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        marginTop: "4px",
        width: "100%",
        marginLeft: "250px", // keep as is
      }}
    >
      {description}
    </p>
  </div>
);


// Main Section5 component
const Section5: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col"
      style={{
        backgroundColor: Colors.background,
        paddingTop: "20px",
        paddingBottom: "50px",
      }}
    >
      {/* Content container */}
      <div
        className="mx-auto px-6 lg:px-12 xl:px-20"
        style={{ maxWidth: "1400px", marginLeft: "-60px" }} // shift whole content slightly left
      >
{/* Heading with hover + line */}
<div className="group relative cursor-pointer inline-block" style={{ paddingTop: "0px", marginLeft:"250px" }}>
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
  <div className="absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-full bg-gradient-to-r from-[#6A4336] to-transparent"></div>
</div>


        {/* Full-width paragraph */}
        <p
          style={{
            color: Colors.paragraphColor,
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
            marginBottom: "50px",
            width: "100%",
            marginLeft:"250px"
          }}
        >
          Our institute mirrors the environment of a modern robotic operating room. Trainees gain confidence
          by practicing in facilities that replicate real-world surgical conditions.
        </p>

{/* Facilities and Image */}
<div className="flex flex-col lg:flex-row" style={{ gap: "500px" }}>
  {/* Facility List */}
  <div className="flex flex-col" style={{ flexShrink: 0, width: "600px" }}>
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

  {/* Right-side Image */}
  <div className="flex-grow flex justify-start">
    <div
      style={{
        width: "650px",
        height: "433px",
        aspectRatio: "277 / 191",
        borderRadius: "8px",
        marginLeft:"-160px",
        overflow: "hidden",
        background: `url("/Images/programs/section5/image1.png") lightgray -2px -0.202px / 103.49% 100.07% no-repeat`,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Section5;
