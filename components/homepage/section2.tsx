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
      className="w-full min-h-screen relative py-10 md:py-20 lg:py-24" // Added vertical padding
      style={{ backgroundColor: "#FBFAF2" }}
    >
      <div className="w-full h-full">{children}</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area: Stacks vertically on mobile, uses grid/flex on larger screens */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12 xl:gap-24 mb-16 lg:mb-24">
          {/* Text Content (Heading and Subtext) */}
          <div className="lg:w-1/2 xl:w-2/5 mb-10 lg:mb-0">
            {/* Main Heading */}
<div
  className="text-2xl sm:text-3xl lg:text-3xl leading-snug mb-6" // reduced from 3xl/4xl/38px
  style={{
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#A67950",
    marginLeft: "-20px",
    whiteSpace: "pre-line",
  }}
>
  ‘Democratizing <br /> Excellence in Robotic <br /> Surgery’
</div>



<div
  className="text-sm md:text-base leading-relaxed"
  style={{
    fontFamily: "Lato, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "#401323",
    whiteSpace: "pre-line",            // Only respects <br/> breaks
    transform: "translate(310px, -127px)", // triple right shift + upward shift
  }}
>
  SSICRS is a pioneering center committed to<br/> transforming surgical education and innovation. Our<br/> mission is to empower healthcare professionals across <br/>the globe with access to advanced knowledge, expert<br/> mentorship, and multi-specialty training on the SSI<br/> Mantra platform.<br/><br/>

  Through our programs, surgeons and surgical teams<br/> develop the expertise to drive a worldwide movement <br/>in decentralizing robotic surgery—bringing advanced <br/>care to every corner of the world, including<br/> underserved regions.
</div>



          </div>

{/* Image on the right (or below on mobile) */}
<div className="lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end">
  <div
    className="relative rounded-[8px] overflow-hidden transform lg:translate-x-12" // shift right on lg+ screens
    style={{
      width: "513px",
      height: "280px",
    }}
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
<div 
  className="w-full pt-10" 
  style={{ transform: "translateY(-160px)" }} // Moves the whole section upwards
>
  <h3
    className="font-serif text-xl md:text-2xl font-semibold leading-tight mb-8 text-center"
    style={{ 
      color: "#A67950",
      marginLeft: "-20px",   // shift heading to the left
      textAlign: "left"      // optional: align text left instead of center
    }}
  >
    At SSICRS, you will:
  </h3>

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
  <span className="absolute left-0 top-0 bottom-0 w-[2px] border-l-2 border-[#6A4336] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>
  <span className="absolute right-0 top-0 bottom-0 w-[2px] border-r-2 border-[#6A4336] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-4"></span>
  <span className="absolute top-0 left-0 w-4 h-[2px] border-t-2 border-l-2 border-[#6A4336] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
  <span className="absolute top-0 right-0 w-4 h-[2px] border-t-2 border-r-2 border-[#6A4336] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
  <span className="absolute bottom-0 left-0 w-4 h-[2px] border-b-2 border-l-2 border-[#6A4336] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
  <span className="absolute bottom-0 right-0 w-4 h-[2px] border-b-2 border-r-2 border-[#6A4336] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:w-8 group-hover:h-4"></span>
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