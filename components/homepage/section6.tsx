"use client";

import Image from "next/image";

export default function Section6() {
  const imageSrc = "/Images/homepage/section6/image1.png";

  return (
    // Increased minimum height for the section to allow more vertical space
    <section className="w-full relative bg-[#FBFAF2] flex justify-center items-center overflow-hidden min-h-[700px] md:min-h-[800px] lg:min-h-[700px]">
      
      {/* Desktop & Laptop View (MODIFIED) */}
      <div className="hidden md:flex relative w-full justify-center">
        <Image
          src={imageSrc}
          alt="Fifth Section Image"
          // Increased height on the Image component for better fit in the taller container
          width={1906}
          height={600} // CHANGED from 124 to a larger value (e.g., 600)
          className="object-contain w-full"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2
            className="text-white"
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: "400",
              fontSize: "48px",
              lineHeight: "1.2",
            }}
          >
            Aligned with Core Mission<br />
            Each option references key SSICRS values—expert<br />training, accessibility, innovation.
          </h2>
        </div>
      </div>

      {/* Mobile & Tablet View (UNCHANGED, but overall section height increased) */}
      <div className="flex md:hidden relative w-full min-h-[400px] sm:min-h-[500px]">
        <Image
          src={imageSrc}
          alt="Mobile Background"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center text-center w-full px-4 sm:px-6">
          <h2
            className="text-white text-2xl sm:text-[28px] md:text-[32px] lg:text-[36px] leading-snug sm:leading-tight"
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: "400",
            }}
          >
            Aligned with Core Mission<br />
            Each option references key SSICRS values—expert<br />training, accessibility, innovation.
          </h2>
        </div>
      </div>
    </section>
  );
}