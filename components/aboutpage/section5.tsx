// components/homepage/Section2.tsx
"use client";

import Image from "next/image";

interface Section2Props {
  children?: React.ReactNode;
}

interface LogoItem {
  src: string;
  heading: string; // Heading for each logo
  text: React.ReactNode;
  textColor?: string;
}

export default function Section2({ children }: Section2Props) {
  const logos: LogoItem[] = [
    {
      src: "Images/aboutpage/section4/bottomlogo1.png",
      heading: "Expert-Led Faculty &<br>Mentorship",
      text: (
        <>
          Learn from top robotic surgeons <br /> and surgical technologists.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "Images/aboutpage/section4/bottomlogo2.png",
      
      heading: "Live Surgery Observations &<br> Teleproctoring",
      text: (
        <>
          Experience real-world procedures  <br />remotely.
          
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "Images/aboutpage/section4/bottomlogo3.png",
      heading: "Engineering-Integrated <br>Learning",
      text: (
        <>
          Understand robotic mechanics<br />  alongside clinical applications.
        </>
      ),
      textColor: "#A67950",
    },
    {
      src: "Images/aboutpage/section4/bottomlogo4.png",
      heading: "Comprehensive Post-Training <br> Support",
      text: (
        <>
          Access digital resources, case <br />  discussions, and ongoing mentorship.
        </>
      ),
      textColor: "#A67950",
    },
  ];

  const headingStyle: React.CSSProperties = {
    color: "#5B102B",
    fontFamily: "DM Serif Text",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "1.4",
    textAlign: "center",
    marginBottom: "8px",
  };

  return (
    <section
      className="w-full min-h-[80vh] relative"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      {/* Optional children content */}
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
          top: "120px",
          fontSize: "38px",
          lineHeight: "1.2",
          color: "#A67950",
          whiteSpace: "pre-line",
        }}
      >
        Our Approach
      </div>

      {/* Subtext */}
      <div
        className="absolute"
        style={{
          left: "200px",
          width: "700px",
          fontFamily: "Lato, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          top: "200px",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#401323",
          whiteSpace: "pre-line",
        }}
      >
        SSICRS is equipped with world-class infrastructure, combining theoretical education with practical,
        <br />
        hands-on experience. Our training approach includes:<br />
      </div>

      {/* Logos Section */}
      <div
        className="absolute"
        style={{
          bottom: "13rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-center w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group cursor-pointer p-4"
            >
              {/* Logo Image */}
              <img
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={48}
                height={50}
                className="w-12 h-auto mt-4 mb-2 relative z-10"
              />

              {/* Heading (different per logo) */}
              <div
                dangerouslySetInnerHTML={{ __html: logo.heading }}
                style={headingStyle}
              />

              {/* Logo Text */}
              <p
                className="font-lato font-normal text-sm md:text-base leading-snug mt-2"
                style={{ color: logo.textColor }}
              >
                {logo.text}
              </p>

              {/* Decorative Brackets */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute left-0 top-0 bottom-0 w-[2px] border-l-2 border-[#6A4336] rounded-tl-lg rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>
                <span className="absolute right-0 top-0 bottom-0 w-[2px] border-r-2 border-[#6A4336] rounded-tr-lg rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>
                <span className="absolute top-0 left-0 w-4 h-[2px] border-t-2 border-l-2 border-[#6A4336] rounded-tl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
                <span className="absolute top-0 right-0 w-4 h-[2px] border-t-2 border-r-2 border-[#6A4336] rounded-tr-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
                <span className="absolute bottom-0 left-0 w-4 h-[2px] border-b-2 border-l-2 border-[#6A4336] rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
                <span className="absolute bottom-0 right-0 w-4 h-[2px] border-b-2 border-r-2 border-[#6A4336] rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
