"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="w-full bg-white min-h-screen relative flex items-center justify-center">
      
      {/* ✅ Desktop / PC View */}
      <div className="hidden md:block w-full">
        {/* Heading on the left */}
        <div
          className="absolute top-32"
          style={{ left: "250px" }}
        >
          <h2
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 700,
              fontSize: "34px",
              lineHeight: "1.2",
              color: "#A67950",
            }}
          >
            'Democratizing <br />
            Excellence in Robotic <br />
            Surgery'
          </h2>
        </div>

        {/* Paragraphs on the right */}
        <div
          className="absolute top-32"
          style={{ left: "650px", maxWidth: "440px" }}
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
          className="absolute top-32 right-[200px] w-[513px] h-[280px] object-cover rounded-[8px]"
        />

        {/* Section heading */}
        <div
          className="absolute w-full pointer-events-none"
          style={{
            bottom: "400px",
            paddingLeft: "250px",
            paddingRight: "417px",
          }}
        >
          <h3
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 550,
              fontSize: "24px",
              lineHeight: "1.4",
              color: "#A67950",
              margin: 0,
            }}
          >
            At SSICRS, you will:
          </h3>
        </div>

        {/* Bottom Logos */}
        <div
          className="absolute w-full flex justify-between items-center"
          style={{
            bottom: "200px",
            paddingLeft: "330px",
            paddingRight: "417px",
            gap: "90px",
          }}
        >
          {/* Logo 1 */}
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
              }}
            >
              Learn from visionary surgeons <br /> and clinical leaders.
            </p>
          </div>

          {/* Logo 2 */}
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
              }}
            >
              Access world-class training <br /> resources, and research.
            </p>
          </div>

          {/* Logo 3 */}
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
              }}
            >
              Join a global initiative shaping the <br /> future of robotic surgery.
            </p>
          </div>

          {/* Logo 4 */}
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
              }}
            >
              Lead the effort to make surgical <br /> excellence accessible to all.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="flex flex-col md:hidden items-center px-6 py-12 gap-8 text-center">
        {/* Image */}
        <img
          src="/images/image2.webp"
          alt="Decorative"
          className="w-full max-w-[400px] h-auto object-cover rounded-[8px]"
        />

        {/* Heading */}
        <h2
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "1.3",
            color: "#A67950",
          }}
        >
          Democratizing <br />
          Excellence in Robotic <br />
          Surgery
        </h2>

        {/* Paragraphs */}
        <div className="max-w-[500px]">
          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#401323",
            }}
          >
            SSICRS is a pioneering center committed to transforming surgical
            education and innovation. Our mission is to empower healthcare
            professionals across the globe with access to advanced knowledge,
            expert mentorship, and multi-specialty training on the SSI Mantra
            platform.
          </p>

          <p
            style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#401323",
              marginTop: "1.5em",
            }}
          >
            Through our programs, surgeons and surgical teams develop the
            expertise to drive a worldwide movement in decentralizing robotic
            surgery—bringing advanced care to every corner of the world,
            including underserved regions.
          </p>
        </div>

        {/* Section heading */}
        <h3
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "22px",
            lineHeight: "1.4",
            color: "#A67950",
            marginTop: "2em",
          }}
        >
          At SSICRS, you will:
        </h3>

        {/* Logos stacked */}
        <div className="flex flex-col gap-8 w-full max-w-[400px]">
          {/* Logo 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="/logos/bottomlogo1.png" alt="Logo 1" width={36} height={37.5} />
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#401323",
                marginTop: "10px",
              }}
            >
              Learn from visionary surgeons and clinical leaders.
            </p>
          </div>

          {/* Logo 2 */}
          <div className="flex flex-col items-center text-center">
            <img src="/logos/bottomlogo2.png" alt="Logo 2" width={36} height={37.5} />
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#401323",
                marginTop: "10px",
              }}
            >
              Access world-class training resources, and research.
            </p>
          </div>

          {/* Logo 3 */}
          <div className="flex flex-col items-center text-center">
            <img src="/logos/bottomlogo3.png" alt="Logo 3" width={36} height={37.5} />
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#401323",
                marginTop: "10px",
              }}
            >
              Join a global initiative shaping the future of robotic surgery.
            </p>
          </div>

          {/* Logo 4 */}
          <div className="flex flex-col items-center text-center">
            <img src="/logos/bottomlogo4.png" alt="Logo 4" width={36} height={37.5} />
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#401323",
                marginTop: "10px",
              }}
            >
              Lead the effort to make surgical excellence accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
