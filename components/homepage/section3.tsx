"use client";

import Image from "next/image";

export default function Section3() {
  return (
    <section className="relative w-full h-screen md:min-h-screen">
      {/* Fullscreen Image */}
      <Image
        src="/Images/homepage/section3/section3image.png"
        alt="Section 3 Background"
        fill
        priority
        className="object-cover object-[35%] md:object-center"
      />

      {/* PC and Laptop Layout (UNCHANGED) */}
      <div className="hidden md:block relative w-full h-full">
        {/* First Heading */}
        <div
          className="absolute"
          style={{
            top: "313px",
            right: "204px",
            left: "1059px",
            bottom: "441px",
          }}
        >
          <h2
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "1.3",
              color: "#F2F0E4",
            }}
          >
            Empowering the next generation of surgeons
            to transform healthcare with innovation and compassion
          </h2>
        </div>

        {/* Second Paragraph */}
        <div
          className="absolute"
          style={{
            top: "500px",
            right: "244px",
            left: "1059px",
            bottom: "313px",
          }}
        >
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#F2F0E4",
            }}
          >
            Dr. Sudhir Srivastava leads a global mission to democratize robotic surgery. <br />
            His vision is shaping the future of healthcare—making advanced surgical <br />
            techniques accessible worldwide and equipping surgeons to deliver precision <br />
            and excellence in every procedure.
          </p>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
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
