"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="w-full bg-white min-h-screen relative flex items-center justify-center">
      
      {/* Heading on the left */}
      <div
        className="absolute top-32"
        style={{
          left: "70px",
        }}
      >
        <h2
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "34px",
            lineHeight: "1.2",
            color: "#A67950",
          }}
        >
          Democratizing <br />
          Excellence in Robotic <br />
          Surgery
        </h2>
      </div>

      {/* Paragraphs on the right of the heading */}
      <div
        className="absolute top-32"
        style={{
          left: "450px",
          maxWidth: "440px",
        }}
      >
        <p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#401323",
          }}
        >
          SSICRS is a pioneering center committed to <br />
          transforming surgical education and innovation. Our <br />
          mission is to empower healthcare professionals across <br />
          the globe with access to advanced knowledge, expert <br />
          mentorship, and multi-specialty training on the SSI <br />
          Mantra platform.
        </p>

        <p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "1.5",
            color: "#401323",
            marginTop: "2em",
          }}
        >
          Through our programs, surgeons and surgical teams <br />
          develop the expertise to drive a worldwide movement <br />
          in decentralizing robotic surgery—bringing advanced <br />
          care to every corner of the world, including <br />
          underserved regions.
        </p>
      </div>

      {/* Top-right Image */}
      <img
        src="/images/image2.webp"
        alt="Decorative"
        className="absolute top-32 right-[80px] w-[513px] h-[280px] object-cover rounded-[8px]"
      />
{/* Section heading for the whole container (doesn't move the logos) */}
<div
  className="absolute w-full pointer-events-none"
  style={{
    // logos are at bottom-40 => 160px. Put this ~52px above them.
    bottom: "250px",
    paddingLeft: "71px",
    paddingRight: "417px",
  }}
>
  <h3
    style={{
      fontFamily: "DM Serif Text, serif",
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "1.4",
      color: "#A67950",
      margin: 0,
    }}
  >
    At SSICRS, you will:
  </h3>
</div>

{/* Bottom Logos inside padded container */}
<div
  className="absolute w-full flex justify-between items-center"
  style={{
    bottom: "80px",       // pushed further down
    paddingLeft: "201px",  // global left padding
    paddingRight: "417px", // global right padding
    gap: "90px",
  }}
>
  {/* Logo 1 + Text */}
  <div className="flex flex-col items-center text-center min-w-[220px]">
    <img src="/logos/bottomlogo1.png" alt="Logo 1" width={36} height={37.5} />
    <p
      style={{
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#401323",
        marginTop: "10px",
        whiteSpace: "normal",   // allow natural wrapping
      }}
    >
      Learn from visionary surgeons <br /> and clinical leaders.
    </p>
  </div>

  {/* Logo 2 + Text */}
  <div className="flex flex-col items-center text-center min-w-[220px]">
    <img src="/logos/bottomlogo2.png" alt="Logo 2" width={36} height={37.5} />
    <p
      style={{
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#401323",
        marginTop: "10px",
        whiteSpace: "normal",
      }}
    >
      Access world-class training <br /> resources, and research.
    </p>
  </div>

  {/* Logo 3 + Text */}
  <div className="flex flex-col items-center text-center min-w-[240px]">
    <img src="/logos/bottomlogo3.png" alt="Logo 3" width={36} height={37.5} />
    <p
      style={{
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#401323",
        marginTop: "10px",
        whiteSpace: "normal",
      }}
    >
      Join a global initiative shaping the <br /> future of robotic surgery.
    </p>
  </div>

  {/* Logo 4 + Text */}
  <div className="flex flex-col items-center text-center min-w-[240px]">
    <img src="/logos/bottomlogo4.png" alt="Logo 4" width={36} height={37.5} />
    <p
      style={{
        fontFamily: "Lato, sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#401323",
        marginTop: "10px",
        whiteSpace: "normal",
      }}
    >
      Lead the effort to make surgical <br /> excellence accessible to all.
    </p>
  </div>
</div>

    </section>
  );
}
