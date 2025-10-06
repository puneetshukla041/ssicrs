"use client";

import Image from "next/image";

export default function Section3() {
  return (
    // Section container for full width and minimum screen height
    <section className="relative w-full h-screen md:min-h-screen">
      
      {/* Fullscreen Image */}
      <Image
        src="/Images/homepage/section3/section3image.png"
        alt="Section 3 Background"
        fill
        priority
        className="object-cover object-[35%] md:object-center"
      />

      {/* ---------------- PC and Laptop Layout (md and up) ---------------- */}
      <div className="hidden md:block relative w-full h-full">
        
        {/* Content Positioning Container */}
        {/* Uses absolute positioning to cover the whole area, 
            and flexbox to align content to the right and center vertically. */}
        <div className="absolute inset-0 flex items-center justify-end p-8 lg:p-16 xl:p-24">
          
          {/* Text Block Container - set a max width so the text is readable on large screens */}
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left">
            
            {/* First Heading */}
            <div className="mb-8">
              <h2
                // Use responsive Tailwind font sizes to replace fixed "36px"
                className="text-3xl lg:text-4xl xl:text-[40px] leading-snug"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: 400,
                  // Color is preserved
                  color: "#F2F0E4",
                }}
              >
                Empowering the next generation of surgeons to transform healthcare with innovation and compassion
              </h2>
            </div>

            {/* Second Paragraph */}
            <div>
              <p
                // Use responsive Tailwind font sizes to replace fixed "18px"
                className="text-base lg:text-lg xl:text-xl leading-relaxed"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  // Color is preserved
                  color: "#F2F0E4",
                }}
              >
                Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. 
                His vision is shaping the future of healthcare—making advanced surgical 
                techniques accessible worldwide and equipping surgeons to deliver precision 
                and excellence in every procedure.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* ---------------- Mobile and Tablet Layout (Below md) ---------------- */}
      {/* This section was already responsive. Added Tailwind font size classes for consistency. */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent h-full flex flex-col justify-end">
        <div className="max-w-xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              // Color is preserved
              color: "#F2F0E4",
            }}
            // Responsive Tailwind font size
            className="mb-4 text-2xl sm:text-3xl leading-[1.4]"
          >
            Empowering the next generation of surgeons to transform healthcare with innovation and compassion
          </h2>

          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              // Color is preserved
              color: "#F2F0E4",
            }}
            // Responsive Tailwind font size
            className="text-base sm:text-lg leading-[1.6]"
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. His vision is shaping the future of healthcare—making advanced surgical techniques accessible worldwide and equipping surgeons to deliver precision and excellence in every procedure.
          </p>
        </div>
      </div>
    </section>
  );
}