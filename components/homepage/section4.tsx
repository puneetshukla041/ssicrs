"use client";

import Image from "next/image";


// Safe offset function (Kept for the fixed-position desktop view)
const DESKTOP_LEFT_MARGIN_OFFSET = 50;

const applyOffset = (originalLeft: string | number | undefined | null): string => {
  if (!originalLeft) return "0px"; // fallback for undefined/null
  if (typeof originalLeft === "number") return `${originalLeft + DESKTOP_LEFT_MARGIN_OFFSET}px`;
  if (typeof originalLeft === "string") {
    if (originalLeft.endsWith("px")) {
      const value = parseFloat(originalLeft);
      if (!isNaN(value)) return `${value + DESKTOP_LEFT_MARGIN_OFFSET}px`;
      return originalLeft; // fallback if parse fails
    }
    // For percentages or other units, return unchanged
    return originalLeft;
  }
  return "0px"; // fallback for unexpected types
};

export default function FourthSection() {
  // Common data structure for card content
  const cardsData = [
    {
      title: "Surgeons",
      subtitle:
        "Build advanced skills in multi-specialty robotic surgery and gain global certification.",
      imageSrc: "/Images/homepage/section4/image1.png",
      // Desktop positions (adjusted by offset)
      imgLeft: "276px",
      cardLeft: "27%", // Kept percentage for complex centering logic, assuming it's correctly placed over the column
    },
    {
      title: "Surgical Staff",
      subtitle:
        "Learn the essential workflows, patient preparation, and teamwork required in robotic ORs.",
      imageSrc: "/Images/homepage/section4/image2.png",
      imgLeft: "766px",
      cardLeft: "52.5%",
    },
    {
      title: "Anesthesiologists",
      subtitle:
        "Master the unique considerations of anesthesia in robotic surgery for safer patient outcomes.",
      imageSrc: "/Images/homepage/section4/image3.png",
      imgLeft: "1250px",
      cardLeft: "78%",
    },
    {
      title: "Medical Institutions & Hospitals",
      subtitle:
        "Partner with SSICRS to upskill teams, expand surgical capabilities, and bring world-class robotic care to communities.",
      imageSrc: "/Images/homepage/section4/image4.png",
      imgLeft: "521px",
      cardLeft: "39.5%",
    },
    {
      title: "Residents & Fellows",
      subtitle:
        "Access mentorship, training pathways, and exposure to the SSI Mantra platform early in your careers.",
      imageSrc: "/Images/homepage/section4/image5.png",
      imgLeft: "1011px",
      cardLeft: "65.4%",
    },
  ];

  return (
    <section className="w-full bg-white min-h-[110vh] md:min-h-[1050px] flex flex-col items-start justify-start relative">

      {/* =====================================================================================
        RESPONSIVE MOBILE/TABLET/SMALL LAPTOP LAYOUT (Visible on screens LESS THAN md)
        This block is fully responsive using flexbox and grid for all screen sizes below 'md'.
        =====================================================================================
      */}
      <div className="md:hidden w-full flex flex-col items-center justify-center text-center px-6 py-12 gap-12 sm:px-12 sm:py-16">
        <h2
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            color: "#A67950",
          }}
          className="text-3xl sm:text-4xl" // Responsive font size
        >
          For Whom
        </h2>

        {/* Cards Container: Flexible Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-12 sm:gap-10 w-full max-w-6xl">
          {cardsData.map((card, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Image Container - Use aspect ratio or fixed height for uniform look if needed */}
              <div className="w-full max-w-sm rounded-xl overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={373}
                  height={378}
                  layout="responsive" // Use responsive layout for flexible scaling
                  className="rounded-xl"
                />
              </div>

              {/* Card Content Overlay - Repositioned for standard responsive flow */}
              <div
                className="mt-[-25px] rounded-lg flex flex-col items-center text-center p-4 w-full max-w-[300px] z-10 shadow-xl"
                style={{
                  backgroundColor: "#70493B",
                }}
              >
                <h3
                  className="mt-4 text-white text-lg"
                  style={{
                    fontFamily: "DM Serif Text, serif",
                    fontWeight: "200",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 text-sm text-white leading-tight mb-2"
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
        PC and Laptop Layout (STAYS UNCHANGED - visible only on md and up)
        This uses fixed pixel positions as originally requested.
        =====================================================================================
      */}
      <div className="hidden md:block w-full relative h-[1050px]">
        
        {/* Heading */}
        <h2
          className="absolute"
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "40px",
            color: "#A67950",
            top: "80px",
            left: applyOffset("276px"), // MARGIN APPLIED HERE
          }}
        >
          For Whom
        </h2>

        {/* --- First Row (Images & Cards 1, 2, 3) --- */}

        {/* First Image */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: applyOffset(cardsData[0].imgLeft), // MARGIN APPLIED HERE
          }}
        >
          <Image
            src={cardsData[0].imageSrc}
            alt={cardsData[0].title}
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 1 */}
        <div
          className="absolute rounded-lg flex items-center justify-center"
          style={{
            width: "300px",
            height: "111px",
            top: `${235 + 251}px`,
            left: cardsData[0].cardLeft, // Percentage left position remains unchanged
            transform: "translateX(-50%)",
            backgroundColor: "#70493B",
          }}
        >
          {/* Card Content */}
          <div className="absolute top-5 left-5 right-5">
            <h3
              className="text-lg text-white mb-1"
              style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
            >
              {cardsData[0].title}
            </h3>
            <p
              className="text-xs text-white leading-tight"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
            >
              {cardsData[0].subtitle.replace('<br />', '')}
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: applyOffset(cardsData[1].imgLeft), // MARGIN APPLIED HERE
          }}
        >
          <Image
            src={cardsData[1].imageSrc}
            alt={cardsData[1].title}
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 2 */}
        <div
          className="absolute rounded-lg flex items-center justify-center"
          style={{
            width: "300px",
            height: "111px",
            top: `${235 + 251}px`,
            left: cardsData[1].cardLeft, // Percentage left position remains unchanged
            transform: "translateX(-50%)",
            backgroundColor: "#70493B",
          }}
        >
          {/* Card Content */}
          <div className="absolute top-5 left-5 right-5">
            <h3
              className="text-lg text-white mb-1"
              style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
            >
              {cardsData[1].title}
            </h3>
            <p
              className="text-xs text-white leading-tight"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
            >
              {cardsData[1].subtitle.replace('<br />', '')}
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: applyOffset(cardsData[2].imgLeft), // MARGIN APPLIED HERE
          }}
        >
          <Image
            src={cardsData[2].imageSrc}
            alt={cardsData[2].title}
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 3 */}
        <div
          className="absolute rounded-lg flex items-center justify-center"
          style={{
            width: "300px",
            height: "111px",
            top: `${235 + 251}px`,
            left: cardsData[2].cardLeft, // Percentage left position remains unchanged
            transform: "translateX(-50%)",
            backgroundColor: "#70493B",
          }}
        >
           {/* Card Content */}
           <div className="absolute top-5 left-5 right-5">
            <h3
              className="text-lg text-white mb-1"
              style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
            >
              {cardsData[2].title}
            </h3>
            <p
              className="text-xs text-white leading-tight"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
            >
              {cardsData[2].subtitle.replace('<br />', '')}
            </p>
          </div>
        </div>

        {/* --- Second Row (Images & Cards 4, 5) --- */}

        {/* Fourth Image */}
        <div
          className="absolute"
          style={{
            top: "650px",
            left: applyOffset(cardsData[3].imgLeft), // MARGIN APPLIED HERE
          }}
        >
          <Image
            src={cardsData[3].imageSrc}
            alt={cardsData[3].title}
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 4 */}
        <div
          className="absolute rounded-lg flex items-center justify-center"
          style={{
            width: "300px",
            height: "111px",
            top: `${295 + 651}px`,
            left: cardsData[3].cardLeft, // Percentage left position remains unchanged
            transform: "translateX(-50%)",
            backgroundColor: "#70493B",
          }}
        >
          {/* Card Content */}
          <div className="absolute top-5 left-5 right-5">
            <h3
              className="text-lg text-white mb-1"
              style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
            >
              {cardsData[3].title}
            </h3>
            <p
              className="text-xs text-white leading-tight"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
            >
              {cardsData[3].subtitle.replace('<br />', '')}
            </p>
          </div>
        </div>

        {/* Fifth Image */}
        <div
          className="absolute"
          style={{
            top: "650px",
            left: applyOffset(cardsData[4].imgLeft), // MARGIN APPLIED HERE
          }}
        >
          <Image
            src={cardsData[4].imageSrc}
            alt={cardsData[4].title}
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 5 */}
        <div
          className="absolute rounded-lg flex items-center justify-center"
          style={{
            width: "300px",
            height: "111px",
            top: `${295 + 651}px`,
            left: cardsData[4].cardLeft, // Percentage left position remains unchanged
            transform: "translateX(-50%)",
            backgroundColor: "#70493B",
          }}
        >
          {/* Card Content */}
          <div className="absolute top-5 left-5 right-5">
            <h3
              className="text-lg text-white mb-1"
              style={{ fontFamily: "DM Serif Text, serif", fontWeight: 200 }}
            >
              {cardsData[4].title}
            </h3>
            <p
              className="text-xs text-white leading-tight"
              style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}
            >
              {cardsData[4].subtitle.replace('<br />', '')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}