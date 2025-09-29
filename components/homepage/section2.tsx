"use client";

import Image from "next/image";

interface Section2Props {
  children?: React.ReactNode;
}

export default function Section2({ children }: Section2Props) {
  const logos = [
    {
      src: "/Images/homepage/section2/bottomlogo1.png",
      text: (
        <>
          Learn from visionary surgeons <br /> and clinical leaders.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo2.png",
      text: (
        <>
          Access world-class training,<br /> resources, and research.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo3.png",
      text: (
        <>
          Join a global initiative shaping the <br /> future of robotic surgery.
        </>
      ),
    },
    {
      src: "/Images/homepage/section2/bottomlogo4.png",
      text: (
        <>
          Lead the effort to make surgical <br /> excellence accessible to all.
        </>
      ),
    },
  ];

  return (
    <section
      className="w-full min-h-screen relative"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      <div className="w-full h-full">{children}</div>

      {/* Main Heading */}
      <div
        className="absolute"
        style={{
          left: "200px",
          width: "700px",
          fontFamily: "'DM Serif Display', serif",
          fontWeight: 400,
          fontStyle: "normal",
          top: "150px",
          fontSize: "38px",
          lineHeight: "1.2",
          color: "#A67950",
          whiteSpace: "pre-line",
        }}
      >
        Democratizing <br /> Excellence in Robotic <br /> Surgery
      </div>

      {/* Subtext */}
      <div
        className="absolute"
        style={{
          left: "640px",
          width: "700px",
          fontFamily: "Lato, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          top: "150px",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#401323",
          whiteSpace: "pre-line",
        }}
      >
        SSICRS is a pioneering center committed to<br />
        transforming surgical education and innovation. Our<br />
        mission is to empower healthcare professionals across<br />
        the globe with access to advanced knowledge, expert<br />
        mentorship, and multi-specialty training on the SSI <br />
        Mantra platform.
        <br />
        <br />
        Through our programs, surgeons and surgical teams <br />
        develop the expertise to drive a worldwide movement <br />
        in decentralizing robotic surgery—bringing advanced <br />
        care to every corner of the world, including<br />
        underserved regions.<br />
      </div>

      {/* Image on the right */}
      <div className="absolute" style={{ top: "150px", right: "270px" }}>
        <Image
          src="/Images/homepage/section2/image1.webp"
          alt="Section 2 Image"
          width={550}
          height={550}
          className="rounded-[8px] object-cover"
        />
      </div>

      {/* "At SSICRS, you will:" Section */}
      <div
        className="absolute"
        style={{
          bottom: "6rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <h3 className="font-serif text-xl md:text-2xl font-semibold leading-tight text-[#A67950] mb-6 text-center">
          At SSICRS, you will:
        </h3>

        {/* Logos/Icons with hover brackets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-center w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group cursor-pointer p-4"
            >
              {/* Logo Image */}
              <Image
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={48}
                height={50}
                className="w-12 h-auto mt-4 mb-4 relative z-10"
              />

              {/* Decorative Brackets */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute left-0 top-0 bottom-0 w-[2px] border-l-2 border-[#6A4336] rounded-tl-lg rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>
                <span className="absolute right-0 top-0 bottom-0 w-[2px] border-r-2 border-[#6A4336] rounded-tr-lg rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>
                <span className="absolute top-0 left-0 w-4 h-[2px] border-t-2 border-l-2 border-[#6A4336] rounded-tl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
                <span className="absolute top-0 right-0 w-4 h-[2px] border-t-2 border-r-2 border-[#6A4336] rounded-tr-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
                <span className="absolute bottom-0 left-0 w-4 h-[2px] border-b-2 border-l-2 border-[#6A4336] rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
                <span className="absolute bottom-0 right-0 w-4 h-[2px] border-b-2 border-r-2 border-[#6A4336] rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
              </div>

              {/* Logo Text */}
              <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
                {logo.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
