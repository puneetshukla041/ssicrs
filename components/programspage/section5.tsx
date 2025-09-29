"use client";

import React from "react";

export default function Section5() {
  return (
    <section className="w-full h-screen bg-white flex flex-col" style={{ paddingTop: "0px" }}>
      
      {/* Heading with hover underline only under text and hand cursor */}
      <div style={{ paddingLeft: "270px" }}>
        <h2 className="group relative inline-block cursor-pointer"
            style={{
              color: "#A67950",
              fontFamily: '"DM Serif Text", serif',
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "150%",
            }}>
          How We Train
          <span className="absolute left-0 bottom-[-10px] h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-full bg-gradient-to-r from-[#6A4336] to-transparent"></span>
        </h2>
      </div>

      {/* Subheading */}
      <p
        style={{
          marginTop: "22px",
          paddingLeft: "270px",
          color: "#401323",
          fontFamily: "Lato, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "44px",
        }}
      >
        Our institute mirrors the environment of a modern robotic operating room. Trainees gain confidence by practicing in facilities that replicate real-world surgical conditions.
      </p>

      {/* Headings and image in a flex row */}
      <div style={{ display: "flex", marginTop: "40px", paddingLeft: "270px", gap: "100px" }}>
        
        {/* Left side headings */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        
          <h3 style={{ color: "#5B102B", fontFamily: '"DM Serif Text", serif', fontSize: "20px", fontWeight: 400, lineHeight: "150%", textTransform: "capitalize", whiteSpace: "nowrap" }}>Simulated ORs</h3>
                  <p style={{ color: "#A67950", fontFamily: "Lato, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "2px", whiteSpace: "pre-line" }}>
            Fully equipped with SSI Mantra systems for mock procedures.
          </p>
          <h3 style={{ color: "#5B102B", fontFamily: '"DM Serif Text", serif', fontSize: "20px", fontWeight: 400, lineHeight: "150%", textTransform: "capitalize", whiteSpace: "nowrap" }}>Dry Labs</h3>
                <p style={{ color: "#A67950", fontFamily: "Lato, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", whiteSpace: "pre-line" }}>
            Practice instrument handling, suturing, and dissection on<br/> synthetic models.
          </p>
          <h3 style={{ color: "#5B102B", fontFamily: '"DM Serif Text", serif', fontSize: "20px", fontWeight: 400, lineHeight: "150%", textTransform: "capitalize", whiteSpace: "nowrap" }}>Wet Labs</h3>
          <p style={{ color: "#A67950", fontFamily: "Lato, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", whiteSpace: "pre-line" }}>
            Advanced practice on tissue models for realistic feedback and  <br/>precision training.
          </p>



          <h3 style={{ color: "#5B102B", fontFamily: '"DM Serif Text", serif', fontSize: "20px", fontWeight: 400, lineHeight: "150%", textTransform: "capitalize", whiteSpace: "nowrap" }}>Classrooms</h3>

          <p style={{ color: "#A67950", fontFamily: "Lato, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", whiteSpace: "pre-line" }}>
            Modern lecture halls for interactive sessions, case discussions, <br/>and expert talks
          </p>
        </div>

        {/* Right side image */}
        <div>
          <div
            style={{
              width: "831px",
              height: "573px",
              aspectRatio: "277 / 191",
              borderRadius: "8px",
              background: `url("/Images/programs/section5/image1.png") lightgray -29px -0.202px / 103.49% 100.07% no-repeat`,
            }}
          ></div>
        </div>
      </div>

    </section>
  );
}
