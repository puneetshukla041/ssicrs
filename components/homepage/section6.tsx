"use client";

import Image from "next/image";

export default function Section6() {
  // Define the common image source
  const imageSrc = "/Images/homepage/section6/image1.png";

  return (
    <section className="w-full flex justify-center items-center relative bg-white">
      {/* Desktop View (STAYS UNCHANGED - visible on md and up) */}
      <div className="hidden md:flex relative w-full justify-center">
        <Image
          src={imageSrc}
          alt="Fifth Section Image"
          width={1906}
          height={124}
          className="object-contain w-full"
        />

        {/* Centered Text - Desktop Styles */}
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

      {/* Mobile & Tablet View (Responsive - visible below md) */}
      <div className="flex md:hidden relative w-full min-h-[300px] sm:min-h-[350px]">
        {/* Background Image using Next/Image with fill */}
        <Image
          src={imageSrc}
          alt="Mobile Background"
          fill // Makes the image fill the parent container's size
          priority
          className="object-cover object-center"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Centered Text */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center w-full px-4">
          <h2
            className="text-white text-3xl sm:text-[32px] md:text-[36px]" // Responsive font size
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: "400",
              lineHeight: "1.2",
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