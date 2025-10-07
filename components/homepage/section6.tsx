"use client";

import Image from "next/image";

export default function Section6() {
  const imageSrc = "/Images/homepage/section6/image1.png";

  return (
    <section className="w-full flex justify-center items-center relative bg-white">
      {/* Desktop & Laptop View (STAYS UNCHANGED - visible on md and up) */}
      <div className="hidden md:flex relative w-full justify-center">
        <Image
          src={imageSrc}
          alt="Fifth Section Image"
          width={1906} 
          height={124}
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

      {/* Mobile & Tablet View (responsive below md) */}
      <div className="flex md:hidden relative w-full min-h-[300px] sm:min-h-[350px]">
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt="Mobile Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Centered Text */}
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