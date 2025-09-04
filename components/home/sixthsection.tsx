"use client";

import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="w-full bg-white min-h-[140vh] flex items-center justify-center relative">

      {/* Heading */}
      <h2
        className="absolute"
        style={{
          fontFamily: "DM Serif Text, serif",
          fontWeight: 530,
          fontSize: "40px",
          color: "#A67950",
          top: "80px",
          left: "200px",
        }}
      >
        Our Expert Faculty
      </h2>

      {/* First Image */}
      <div
        className="absolute"
        style={{
          top: "200px",
          left: "200px",
        }}
      >
        <Image
          src="/images/sixthsection/image1.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>

      {/* Heading under first image */}
      <h3
        className="absolute"
        style={{
          top: "600px", // slightly below image 1
          left: "200px",
          fontFamily: "DM Serif Text, serif",
          fontWeight: 400,
          fontSize: "34px",
          color: "#401323",
        }}
      >
        Sudhir Srivastava, MD
      </h3>

      {/* Subtitle under heading */}
      <p
        className="absolute"
        style={{
          top: "645px", // slightly below heading
          left: "200px",
          fontFamily: "Lato, sans-serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "16px",
          color: "#D2A073",
        }}
      >
        Founder, Chairman, CEO - SSICRS
      </p>

      {/* Second Image */}
      <div
        className="absolute"
        style={{
          top: "200px",
          left: "766px",
          right: "760px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/sixthsection/image2.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>

      {/* Third Image */}
      <div
        className="absolute"
        style={{
          top: "200px",
          left: "1320px",
          right: "210px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/sixthsection/image3.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>

      {/* Fourth Image */}
      <div
        className="absolute"
        style={{
          top: "780px",
          left: "480px",
          right: "1005px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/sixthsection/image4.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>

      {/* Fifth Image */}
      <div
        className="absolute"
        style={{
          top: "790px",
          left: "1070px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/sixthsection/image5.png"
          alt="Fourth Section Image"
          width={370}
          height={330}
          className="rounded-xl"
        />
      </div>

    </section>
  );
}
