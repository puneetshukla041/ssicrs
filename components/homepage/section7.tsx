"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Section7() {
  const facultyPagePath = "/faculty-card-page";

  const dmSerifText = { fontFamily: "DM Serif Text, serif" };
  const latoSansSerif = { fontFamily: "Lato, sans-serif" };
  const headingColor = "#401323";
  const subTitleColor = "#D2A073";
  const bioColor = "#A67950";
  const facultyTitleColor = "#A67950";
  const buttonBgColor = "#A46831";

  // Removed "Prof. Dr. Somashekhar SP"
  const experts = [
    {
      name: "Sudhir Srivastava, MD",
      title: "Founder, Chairman, CEO - SSICRS",
      description:
        "Robotic Cardiac Surgeon | Surgical Robotics Pioneer | Industry Leader",
      imageSrc: "/Images/homepage/section7/image1.png",
    },
    {
      name: "Dr. Husam Balkhy",
      title: "MBBS, MS, FACS, FACC",
      description:
        "The University of Chicago Medicine and Biological Sciences Chicago, IL, USA",
      imageSrc: "/Images/homepage/section7/image6.png",
    },
    {
      name: "Dr. Nitin Kumar Rajput",
      title: "MCH (Cardiothoracic and Vascular Surgery), MS (General Surgery)",
      description:
        "Associate Director - Cardiac Surgery | Medanta, The Medicity - Gurugram, Haryana",
      imageSrc: "/Images/homepage/section7/image4.png",
    },
  ];

  return (
<section className="w-full bg-[#FBFAF2] py-16 md:py-24 flex flex-col items-start">
  <div className="w-full max-w-full px-6 sm:px-8 md:px-10 lg:px-[270px] xl:px-[270px] flex flex-col items-start">
    {/* Section Heading */}
    <h2
      className="text-3xl sm:text-4xl md:text-[40px] font-normal mb-12 md:mb-16 text-left"
      style={{
        ...dmSerifText,
        color: facultyTitleColor,
        fontWeight: 530,
      }}
    >
      Our Expert Faculty
    </h2>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 justify-items-center w-full">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full max-w-[320px]"
            >
              <Image
                src={expert.imageSrc}
                alt={expert.name}
                width={373}
                height={378}
                className="rounded-xl w-full h-auto object-cover shadow-sm"
              />

              <h3
                className="mt-4 text-xl sm:text-2xl leading-snug"
                style={{
                  ...dmSerifText,
                  color: headingColor,
                  fontWeight: 400,
                }}
              >
                {expert.name}
              </h3>

              <p
                className="mt-1 text-sm sm:text-base italic"
                style={{
                  ...latoSansSerif,
                  color: subTitleColor,
                }}
              >
                {expert.title}
              </p>

              <p
                className="mt-2 text-sm sm:text-base leading-relaxed max-w-xs"
                style={{
                  ...latoSansSerif,
                  color: bioColor,
                  fontWeight: 400,
                }}
              >
                {expert.description}
              </p>
            </div>
          ))}
        </div>

{/* View All Button aligned right with margin */}
<div className="flex justify-end mt-16 w-full">
  <Link
    href={facultyPagePath}
    className="px-8 py-3 rounded-[30px] text-white flex items-center justify-center gap-1 transition-transform duration-200 hover:scale-[1.03] mr-12"
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
