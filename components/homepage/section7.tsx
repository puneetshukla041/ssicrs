"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { FiArrowRight } from "react-icons/fi";

export default function Section7() {
  // Define the path for the faculty page
  const facultyPagePath = "/faculty-card-page";

  // Common font/color styles extracted for cleaner responsive code
  const dmSerifText = { fontFamily: "DM Serif Text, serif" };
  const latoSansSerif = { fontFamily: "Lato, sans-serif" };
  const headingColor = "#401323";
  const subTitleColor = "#D2A073";
  const bioColor = "#A67950";
  const facultyTitleColor = "#A67950";
  const buttonBgColor = "#A46831";

  // Array of experts for the mobile/tablet grid to ensure consistency and easy management
  const mobileExperts = [
    {
      name: "Sudhir Srivastava, MD",
      title: "Founder, Chairman, CEO - SSICRS",
      description: "Robotic Cardiac Surgeon | Surgical Robotics Pioneer | Industry Leader",
      imageSrc: "/Images/homepage/section7/image1.png",
      alt: "Expert 1",
    },
    {
      name: "Dr. Husam Balkhy",
      title: "MBBS, MS, FACS, FACC",
      description: "The University of Chicago Medicine and Biological Sciences Chicago, IL, USA",
      imageSrc: "/Images/homepage/section7/image6.png", // Image from PC layout
      alt: "Expert 2 (Dr. Husam Balkhy)",
    },
    {
      name: "Dr. Nitin Kumar Rajput", // Expert 3 from PC layout
      title: "MCH (Cardiothoracic and Vascular Surgery), MS (General Surgery)",
      description: "Associate Director - Cardiac Surgery | Medanta, The Medicity - Gurugram, Haryana",
      imageSrc: "/Images/homepage/section7/image4.png",
      alt: "Expert 3 (Dr. Nitin Kumar Rajput)",
    },
    {
      name: "Prof. Dr. Somashekhar SP", // Retaining the fourth unique expert from original mobile logic
      title: "MBBS, MS, MCh (Onco), FRCS Edinburgh",
      description: "Chairman - Medical Advisory Board | Aster DM Healthcare - GCC & India",
      imageSrc: "/Images/homepage/section7/image3.png",
      alt: "Expert 4 (Prof. Dr. Somashekhar SP)",
    },
  ];

  return (
    <section className="w-full bg-white min-h-[90vh] flex flex-col items-start justify-start relative pb-20 md:pb-0">
      {/* ========================================================
        PC and Laptop Layout (STAYS UNCHANGED - visible on md and up)
        This content uses absolute positioning and remains exactly as provided.
        ========================================================
      */}
      <div className="hidden md:block w-full relative min-h-[900px]">
        {/* Section Heading */}
        <h2
          className="absolute"
          style={{
            ...dmSerifText,
            fontWeight: 530,
            fontSize: "40px",
            color: facultyTitleColor,
            top: "80px",
            left: "310px",
          }}
        >
          Our Expert Faculty
        </h2>

        {/* Expert 1 (Sudhir Srivastava, MD) */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "330px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image1.png"
            alt="Expert 1"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Expert 1 Text (Sudhir Srivastava, MD) */}
        <h3
          className="absolute"
          style={{
            top: "600px",
            left: "330px",
            color: headingColor,
            ...dmSerifText,
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Sudhir Srivastava, MD
        </h3>

        <p
          className="absolute"
          style={{
            top: "645px",
            left: "330px",
            color: subTitleColor,
            ...latoSansSerif,
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Founder, Chairman, CEO - SSICRS
        </p>

        <p
          className="absolute"
          style={{
            top: "670px",
            left: "330px",
            color: bioColor,
            ...latoSansSerif,
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Robotic Cardiac Surgeon | Surgical Robotics<br /> Pioneer | Industry Leader
        </p>


        {/* Expert 2 (Dr. Husam Balkhy) - Corrected to use the original PC image/details */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "800px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image6.png"
            alt="Expert 2"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Expert 2 Text (Dr. Husam Balkhy) */}
        <h3
          className="absolute"
          style={{
            top: "600px",
            left: "800px",
            color: headingColor,
            ...dmSerifText,
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Dr. Husam Balkhy
        </h3>

        <p
          className="absolute"
          style={{
            top: "645px",
            left: "800px",
            color: subTitleColor,
            ...latoSansSerif,
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          MBBS, MS, FACS, FACC
        </p>

        <p
          className="absolute"
          style={{
            top: "670px",
            left: "800px",
            color: bioColor,
            ...latoSansSerif,
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          The University of Chicago Medicine and Biological <br />Sciences Chicago, IL, USA
        </p>


        {/* Expert 3 (Dr. Nitin Kumar Rajput) - Corrected to use the original PC image/details */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "1270px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image4.png"
            alt="Expert 3"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Expert 3 Text (Dr. Nitin Kumar Rajput) */}
        <h3
          className="absolute"
          style={{
            top: "600px",
            left: "1270px",
            color: headingColor,
            ...dmSerifText,
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Dr. Nitin Kumar Rajput
        </h3>
        <p
          className="absolute"
          style={{
            top: "645px",
            left: "1270px",
            color: subTitleColor,
            ...latoSansSerif,
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          MCH (Cardiothoracic and Vascular Surgery), MS<br /> (General Surgery)
        </p>
        <p
          className="absolute"
          style={{
            top: "695px",
            left: "1270px",
            color: bioColor,
            ...latoSansSerif,
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",
          }}
        >
          Associate Director - Cardiac Surgery | Medanta, <br />The Medicity - Gurugram, Haryana
        </p>

        {/* View All Button - PC / Laptop - CONVERTED TO LINK */}
        <Link
          href={facultyPagePath}
          className="absolute flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
          style={{
            top: "800px",
            left: "1270px",
            gap: "6px",
            padding: "10px 28px",
            borderRadius: "30px",
            background: buttonBgColor,
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              ...latoSansSerif,
              fontWeight: 500,
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            View All <FiArrowRight size={16} />
          </span>
        </Link>
      </div>

      {/* ========================================================
        Mobile and Tablet Layout (Responsive - visible below md)
        Standardized styling for better responsiveness.
        ========================================================
      */}
      <div className="md:hidden w-full flex flex-col items-center text-center px-6 py-12 sm:py-16 gap-12 sm:gap-16">
        {/* Section Heading */}
        <h2
          className="text-4xl sm:text-[40px] font-normal" // Using Tailwind for size, keeping custom font/color
          style={{
            ...dmSerifText,
            fontWeight: 530, // Custom weight
            color: facultyTitleColor,
          }}
        >
          Our Expert Faculty
        </h2>

        {/* Expert Profiles Container - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 w-full max-w-4xl px-4">
          {mobileExperts.map((expert, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <Image
                src={expert.imageSrc}
                alt={expert.alt}
                width={373}
                height={378}
                // Use a fixed max-width and aspect ratio for responsive image display
                className="rounded-xl w-full h-auto max-w-[300px] aspect-square object-cover"
              />
              <h3
                className="mt-4 text-2xl" // Text size from original mobile: 2xl on mobile, kept consistent
                style={{
                  ...dmSerifText,
                  fontWeight: 400,
                  color: headingColor,
                }}
              >
                {expert.name}
              </h3>
              <p
                className="text-sm" // Text size from original mobile: 14px (text-sm)
                style={{
                  ...latoSansSerif,
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: subTitleColor,
                }}
              >
                {expert.title.split('<br />').join(' ')} {/* Replaces <br /> if present for single line title */}
              </p>
              <p
                className="mt-2 text-sm sm:text-base max-w-sm leading-normal" // text-sm for mobile, text-base for small screens
                style={{
                  ...latoSansSerif,
                  fontWeight: 400,
                  color: bioColor,
                }}
              >
                {expert.description.split('<br />').join(' ')} {/* Replaces <br /> if present */}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile / Tablet - CONVERTED TO LINK */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href={facultyPagePath}
            className="px-8 py-3 rounded-[30px] text-white flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
            style={{
              ...latoSansSerif,
              fontWeight: 500,
              fontSize: "16px",
              backgroundColor: buttonBgColor,
            }}
          >
            View All <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}