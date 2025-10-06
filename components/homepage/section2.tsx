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
          Access world-class training,
          <br /> resources, and research.
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
      className="w-full relative py-10 md:py-20 lg:py-24" // Added vertical padding
      style={{ backgroundColor: "#FBFAF2" }}
    >
      <div className="w-full h-full">{children}</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area: Stacks vertically on mobile, uses grid/flex on larger screens */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12 xl:gap-24 mb-16 lg:mb-24">
          {/* Text Content (Heading and Subtext) */}
          <div className="lg:w-1/2 xl:w-2/5 mb-10 lg:mb-0">
            {/* Main Heading - PC View: Fixed negative margin left */}
            {/* Mobile View: No fixed negative margin, default alignment */}
            <div
              className="text-2xl sm:text-3xl lg:text-3xl leading-snug mb-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#A67950",
                // PC ONLY: marginLeft: "-20px",
                whiteSpace: "pre-line",
              }}
            >
              <div className="lg:ml-[-20px]">
                ‘Democratizing <br /> Excellence in Robotic <br /> Surgery’
              </div>
            </div>

            {/* Subtext - PC View: Fixed translation to position it right/up */}
            {/* Mobile View: Static position, default flow */}
            <div
              className="text-sm md:text-base leading-relaxed"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#401323",
                whiteSpace: "pre-line",
              }}
            >
              <div className="lg:transform lg:translate-x-[310px] lg:translate-y-[-127px]">
                SSICRS is a pioneering center committed to<br className="lg:block hidden" /> transforming surgical education and innovation. Our<br className="lg:block hidden" /> mission is to empower healthcare professionals across <br className="lg:block hidden" />the globe with access to advanced knowledge, expert<br className="lg:block hidden" /> mentorship, and multi-specialty training on the SSI<br className="lg:block hidden" /> Mantra platform.<br/><br/>

                Through our programs, surgeons and surgical teams<br className="lg:block hidden" /> develop the expertise to drive a worldwide movement <br className="lg:block hidden" />in decentralizing robotic surgery—bringing advanced <br className="lg:block hidden" />care to every corner of the world, including<br className="lg:block hidden" /> underserved regions.
              </div>
            </div>
          </div>

          {/* Image on the right (or below on mobile) - PC View: Fixed shift right */}
          {/* Mobile View: No shift, full width/max-w center */}
          <div className="lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end">
            <div
              className="relative rounded-[8px] overflow-hidden w-full max-w-[513px] h-[280px] sm:h-[300px] md:h-[350px] lg:h-[280px] lg:transform lg:translate-x-12"
            >
              <Image
                src="/Images/homepage/section2/image1.webp"
                alt="Section 2 Image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 513px"
              />
            </div>
          </div>
        </div>

        {/* --- "At SSICRS, you will:" Section --- */}
        {/* PC View: Fixed upward translation. Mobile View: Static position */}
        <div 
          className="w-full pt-10 lg:transform lg:translate-y-[-160px]" 
        >
          <h3
            className="font-serif text-xl md:text-2xl font-semibold leading-tight mb-8 text-center text-[#A67950]"
          >
            {/* PC View: Fixed negative margin left */}
            {/* Mobile View: No fixed negative margin, text-left */}
            <span className="text-left block lg:ml-[-20px]">
              At SSICRS, you will:
            </span>
          </h3>

          {/* Logo Grid: Mobile/Sm screens: 2 cols, Md/Lg screens: 4 cols */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8 md:gap-x-12 justify-items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group cursor-pointer p-4 max-w-[200px]"
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={48}
                  height={50}
                  className="w-12 h-auto mt-4 mb-4 relative z-10"
                />
                <div className="absolute inset-0 pointer-events-none">
                  {/* Decorative Brackets */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Vertical Lines */}
                    <span className="absolute left-0 top-3.5 bottom-3.5 w-[2px] border-l-2 border-[#6A4336] rounded-tl-lg rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-0"></span>
                    <span className="absolute right-0 top-3.5 bottom-3.5 w-[2px] border-r-2 border-[#6A4336] rounded-tr-lg rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-0"></span>

                    {/* Corners */}
                    <span className="absolute top-0 left-0 w-8 h-[2px] border-t-2 border-l-2 border-[#6A4336] rounded-tl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-12 group-hover:h-4"></span>
                    <span className="absolute top-0 right-0 w-8 h-[2px] border-t-2 border-r-2 border-[#6A4336] rounded-tr-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-12 group-hover:h-4"></span>
                    <span className="absolute bottom-0 left-0 w-8 h-[2px] border-b-2 border-l-2 border-[#6A4336] rounded-bl-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-12 group-hover:h-4"></span>
                    <span className="absolute bottom-0 right-0 w-8 h-[2px] border-b-2 border-r-2 border-[#6A4336] rounded-br-lg opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-12 group-hover:h-4"></span>
                  </div>
                </div>
                <p className="font-lato font-normal text-sm md:text-base leading-snug text-[#401323] mt-4">
                  {logo.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}