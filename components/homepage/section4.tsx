"use client";

import Image from "next/image";

// Common data structure for card content
const cardsData = [
  {
    title: "Surgeons",
    subtitle:
      "Build advanced skills in multi-specialty robotic surgery and gain global certification.",
    imageSrc: "/Images/homepage/section4/image1.png",
  },
  {
    title: "Residents & Fellows",
    subtitle:
      "Access mentorship, training pathways, and exposure to the SSI Mantra platform early in your careers.",
    imageSrc: "/Images/homepage/section4/image5.png",
  },

  {
    title: "Anesthesiologists",
    subtitle:
      "Master the unique considerations of anesthesia in robotic surgery for safer patient outcomes.",
    imageSrc: "/Images/homepage/section4/image3.png",
  },
  {
    title: "Medical Institutions & Hospitals",
    subtitle:
      "Partner with SSICRS to upskill teams, expand surgical capabilities, and bring world-class robotic care to communities.",
    imageSrc: "/Images/homepage/section4/image4.png",
  },
  {
    title: "Surgical Staff",
    subtitle:
      "Learn the essential workflows, patient preparation, and teamwork required in robotic ORs.",
    imageSrc: "/Images/homepage/section4/image2.png",
  },
];

export default function FourthSection() {
  return (
    <section className="w-full bg-[#FBFAF2] min-h-[110vh] flex flex-col items-start justify-start relative">
      {/* =====================================================================================
        RESPONSIVE MOBILE/TABLET/SMALL LAPTOP LAYOUT (Visible on screens LESS THAN md)
        This block is fully responsive using flexbox and grid.
        =====================================================================================
      */}
      <div className="md:hidden w-full flex flex-col items-center justify-center text-center px-6 py-12 gap-12 sm:px-12 sm:py-16">
        <h2
          style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontStyle: "normal",
                color: "#A67950",
                whiteSpace: "pre-line",
          }}
          className="text-3xl sm:text-4xl" // Responsive font size
        >
          For Whom
        </h2>

        {/* Cards Container: Flexible Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-12 sm:gap-10 w-full max-w-6xl">
          {cardsData.map((card, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Image Container */}
              <div className="w-full max-w-sm rounded-xl overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={373}
                  height={378}
                  layout="responsive"
                  className="rounded-xl"
                />
              </div>

              {/* Card Content Overlay - Adjusted for left alignment */}
              <div
                className="mt-[-25px] rounded-lg flex flex-col items-start p-4 w-full max-w-[300px] z-10 shadow-xl mx-auto" // Changed items-center to items-start, removed text-center, added mx-auto
                style={{
                  backgroundColor: "#70493B",
                }}
              >
                <h3
                  className="mt-4 text-white text-lg w-full text-left" // Added w-full text-left
                  style={{
                    fontFamily: "DM Serif Text, serif",
                    fontWeight: "200",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 text-sm text-white leading-tight mb-2 w-full text-left" // Added w-full text-left
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================================================
        RESPONSIVE DESKTOP/LAPTOP LAYOUT (Visible on screens md and up)
        Uses CSS Grid for responsive positioning.
        =====================================================================================
      */}
      <div className="hidden md:flex flex-col items-center justify-start w-full px-6 py-16 md:px-12 lg:px-24 xl:px-32">
        {/* Heading */}
{/* Heading */}
<div className="max-w-7xl mx-auto w-full relative group">
  <h2
    className="text-4xl md:text-5xl font-serif text-[#A67950] mb-16 text-left relative inline-block cursor-pointer"
    style={{
      fontFamily: "DM Serif Display, serif",
      fontWeight: 300,
      lineHeight: 1.2,
      whiteSpace: "pre-line", // allows line breaks
    }}
  >
    For Whom
    {/* Underline effect */}
    <span className="absolute bottom-[-10px] left-0 h-[3px] rounded-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#6A4336] to-transparent"></span>
  </h2>
</div>


        {/* --- First Row (Surgeons, Residents & Fellows, Anesthesiologists) --- */}
        {/* Note: I'm keeping the original order of the cardsData array as it maps to the images,
            but slicing index 0, 1, 2 for the first row, and 3, 4 for the second row.
            Surgeons, Residents, Anesthesiologists are indices 0, 1, 2.
            Medical Institutions, Surgical Staff are indices 3, 4.
            The original image-to-card mapping seems to be preserved.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 xl:gap-x-12 2xl:gap-x-16 w-full max-w-7xl">
          {cardsData.slice(0, 3).map((card, index) => (
            <div
              key={`desktop-row1-${index}`}
              className="relative flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full max-w-xs xl:max-w-sm rounded-xl overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={373}
                  height={378}
                  layout="responsive"
                  className="rounded-xl"
                />
              </div>

              {/* Card Content Overlay - Adjusted for left alignment */}
              <div
                className="absolute bottom-[-15%] md:bottom-[-20%] lg:bottom-[-10%] rounded-lg flex flex-col items-start p-4 w-11/12 max-w-[300px] z-10 shadow-xl mx-auto" // Changed items-center to items-start, removed text-center, added mx-auto
                style={{
                  backgroundColor: "#70493B",
                  height: "111px",
                }}
              >
                <h3
                  className="text-lg text-white mb-1 w-full text-left" // Added w-full text-left
                  style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs text-white leading-tight w-full text-left" // Added w-full text-left
                  style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
                >
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Second Row (Medical Institutions, Surgical Staff) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:gap-x-12 2xl:gap-x-16 w-full max-w-4xl mt-[160px] md:mt-[180px] lg:mt-[120px] 2xl:mt-[160px]">
          {cardsData.slice(3, 5).map((card, index) => (
            <div
              key={`desktop-row2-${index}`}
              className="relative flex flex-col items-center"
            >
              {/* Image */}
              <div className="w-full max-w-xs xl:max-w-sm rounded-xl overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={373}
                  height={378}
                  layout="responsive"
                  className="rounded-xl"
                />
              </div>

              {/* Card Content Overlay - Adjusted for left alignment */}
              <div
                className="absolute bottom-[-15%] md:bottom-[-20%] lg:bottom-[-10%] rounded-lg flex flex-col items-start p-4 w-11/12 max-w-[300px] z-10 shadow-xl mx-auto" // Changed items-center to items-start, removed text-center, added mx-auto
                style={{
                  backgroundColor: "#70493B",
                  height: "111px",
                }}
              >
                <h3
                  className="text-lg text-white mb-1 w-full text-left" // Added w-full text-left
                  style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs text-white leading-tight w-full text-left" // Added w-full text-left
                  style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
                >
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
