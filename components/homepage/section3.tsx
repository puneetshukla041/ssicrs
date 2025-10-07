"use client";

import Image from "next/image";

export default function Section3() {
  return (
    // Ensure min-h-screen is respected for full viewport coverage
    <section className="relative w-full h-screen min-h-screen">
      
      {/* Fullscreen Image Background */}
      <Image
        src="/Images/homepage/section3/section3image.png"
        alt="Section 3 Background"
        fill
        priority
        className="object-cover object-[35%] md:object-center"
      />

      {/* PC and Laptop Layout (Refactored to be responsive) */}
      {/* Uses flex to center content vertically and push it to the right with responsive padding */}
      <div className="hidden md:flex relative w-full h-full justify-end items-center px-8 lg:px-20">
        
        {/* Content Container - Set responsive max-width and vertical spacing */}
        <div className="max-w-md lg:max-w-lg xl:max-w-xl space-y-6 lg:space-y-8 pt-16 lg:pt-0">
          
          {/* First Heading */}
          <div>
            <h2
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#F2F0E4",
              }}
              // Responsive font size classes for desktop screens
              className="text-3xl lg:text-4xl leading-tight"
            >
              Empowering the next generation of surgeons to transform healthcare with innovation and compassion
            </h2>
          </div>

          {/* Second Paragraph */}
          <div>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 500,
                color: "#F2F0E4",
              }}
              className="text-base lg:text-lg leading-relaxed"
            >
              Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery.
              His vision is shaping the future of healthcare—making advanced surgical
              techniques accessible worldwide and equipping surgeons to deliver precision
              and excellence in every procedure.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout (Original structure, already using responsive classes) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent h-full flex flex-col justify-end">
        <div className="max-w-xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              lineHeight: "1.4",
              color: "#F2F0E4",
            }}
            className="mb-4 text-2xl sm:text-3xl"
          >
            Empowering the next generation of surgeons to transform healthcare with innovation and compassion
          </h2>

          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              lineHeight: "1.6",
              color: "#F2F0E4",
            }}
            className="text-base sm:text-lg"
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. His vision is shaping the future of healthcare—making advanced surgical techniques accessible worldwide and equipping surgeons to deliver precision and excellence in every procedure.
          </p>
        </div>
      </div>
    </section>
  );
}
