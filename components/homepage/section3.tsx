"use client";

import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Fullscreen Background Image */}
      <Image
        src="/Images/homepage/section3/section3image.png"
        alt="Section 3 Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Desktop Layout (min-width: 768px) */}
      <div className="hidden md:flex absolute inset-0 z-10 items-center justify-end px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          {/* Heading */}
          <h2
            className="text-[#F2F0E4] text-3xl lg:text-4xl leading-snug mb-6"
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
            }}
          >
            Empowering the next generation of surgeons to transform healthcare with innovation and compassion
          </h2>

          {/* Paragraph */}
          <p
            className="text-[#F2F0E4] text-base lg:text-lg leading-relaxed"
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
            }}
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. His vision is shaping the future of healthcare—making advanced surgical techniques accessible worldwide and equipping surgeons to deliver precision and excellence in every procedure.
          </p>
        </div>
      </div>

      {/* Mobile Layout (max-width: 767px) */}
      <div className="md:hidden absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 py-16">
        <h2
          className="mb-6 text-[#F2F0E4] text-2xl sm:text-3xl leading-snug"
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
          }}
        >
          Empowering the next generation of surgeons to transform healthcare with innovation and compassion
        </h2>

        <p
          className="text-[#F2F0E4] text-base sm:text-lg leading-relaxed"
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 500,
          }}
        >
          Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. His vision is shaping the future of healthcare—making advanced surgical techniques accessible worldwide and equipping surgeons to deliver precision and excellence in every procedure.
        </p>
      </div>
    </section>
  );
}
