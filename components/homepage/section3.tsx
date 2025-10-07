"use client";

import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative w-full h-screen md:min-h-screen bg-[#FBFAF2]">
      {/* Fullscreen Background Image */}
      <Image
        src="/Images/homepage/section3/section3image.png"
        alt="Section 3 Background"
        fill
        priority
        className="object-contain object-center bg-[#FBFAF2]" // 👈 shows full image without zoom
      />

      {/* ---------------- PC and Laptop Layout (md and up) ---------------- */}
      <div className="hidden md:block relative w-full h-full">
        {/* Content Wrapper */}
        <div className="absolute inset-0 flex items-center justify-end p-8 lg:p-16 xl:p-24">
          {/* Text Block - slightly shifted to the right */}
          <div
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left relative"
            style={{ right: "160px" }} // shifted a bit right
          >
            {/* Heading */}
            <div className="mb-8">
              <h2
                className="text-3xl lg:text-4xl xl:text-[40px] leading-snug"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: 400,
                  color: "#F2F0E4",
                }}
              >
                Empowering the next generation of surgeons to transform
                healthcare with innovation and compassion
              </h2>
            </div>

            {/* Paragraph */}
            <div>
              <p
                className="text-base lg:text-lg xl:text-xl leading-relaxed"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 500,
                  color: "#F2F0E4",
                }}
              >
                Dr. Sudhir Srivastava leads a global mission to democratize
                robotic surgery. His vision is shaping the future of
                healthcare—making advanced surgical techniques accessible
                worldwide and equipping surgeons to deliver precision and
                excellence in every procedure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile and Tablet Layout (Below md) ---------------- */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent h-full flex flex-col justify-end">
        <div className="max-w-xl mx-auto text-center">
          <h2
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              color: "#F2F0E4",
            }}
            className="mb-4 text-2xl sm:text-3xl leading-[1.4]"
          >
            Empowering the next generation of surgeons to transform healthcare
            with innovation and compassion
          </h2>

          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              color: "#F2F0E4",
            }}
            className="text-base sm:text-lg leading-[1.6]"
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic
            surgery. His vision is shaping the future of healthcare—making
            advanced surgical techniques accessible worldwide and equipping
            surgeons to deliver precision and excellence in every procedure.
          </p>
        </div>
      </div>
    </section>
  );
}
