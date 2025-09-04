"use client";

import Image from "next/image";

export default function FifthSection() {
  return (
    <section className="w-full flex justify-center items-center relative bg-white">
      {/* Image */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/images/fifthsection/image1.png"
          alt="Fifth Section Image"
          width={1906} // actual image width
          height={124} // actual image height
          className="object-contain w-full"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h2
            className="text-white"
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: "400", // Regular
              fontSize: "48px",
              lineHeight: "1.2",
            }}
          >
            Aligned with Core Mission<br/>
            Each option references key SSICRS values—expert<br/>training, accessibility, innovation.
          </h2>
        </div>
      </div>
    </section>
  );
}
