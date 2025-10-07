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
  const buttonBgColor = "#A46831";

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
      title:
        "MCH (Cardiothoracic and Vascular Surgery), MS (General Surgery)",
      description:
        "Associate Director - Cardiac Surgery | Medanta, The Medicity - Gurugram, Haryana",
      imageSrc: "/Images/homepage/section7/image4.png",
    },
  ];

  return (
    <section className="w-full bg-[#FBFAF2] py-20 md:py-32 flex flex-col items-center">
      {/* Content Container */}
      <div className="w-full max-w-7xl px-6 md:px-10 lg:px-16 flex flex-col items-start">

        {/* Section Heading */}
        <div className="w-full relative mb-16">
          <h2
            className="text-4xl md:text-5xl text-[#A67950] font-serif text-left relative inline-block group cursor-pointer"
            style={{
              fontFamily: "DM Serif Display, serif",
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            Our Expert Faculty
            <span className="absolute bottom-[-10px] left-0 h-[3px] rounded-full w-0 group-hover:w-[90%] transition-all duration-500 bg-gradient-to-r from-[#6A4336] to-transparent"></span>
          </h2>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 xl:gap-x-20 gap-y-16 w-full justify-items-start">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col text-left w-full max-w-[320px] mx-auto sm:mx-0"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[373/378] mb-4">
                <Image
                  src={expert.imageSrc}
                  alt={expert.name}
                  fill
                  className="rounded-xl object-cover shadow-sm"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Expert Info */}
              <h3
                className="mt-2 text-xl sm:text-2xl leading-snug"
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

        {/* View All Button */}
        <div className="flex justify-end mt-16 w-full">
          <Link
            href={facultyPagePath}
            className="px-8 py-3 rounded-[30px] text-white flex items-center justify-center gap-1 transition-transform duration-200 hover:scale-[1.03]"
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
