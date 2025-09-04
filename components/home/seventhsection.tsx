"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Feather arrow icon

export default function SeventhSection() {
  return (
    <section className="w-full bg-white min-h-screen flex items-center justify-center relative">
      <div className="relative flex flex-col justify-center items-center">
        <Image
          src="/images/seventhsection/image1.png"
          alt="Seventh Section Image"
          width={1306}
          height={724}
          className="object-contain"
        />

        {/* Heading */}
        <h2
          className="absolute text-center text-4xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] whitespace-nowrap"
          style={{
            fontFamily: "DM Serif Text, serif",
            top: "30%", 
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Take the Next Step Toward Surgical Excellence
        </h2>

        {/* Subtitle */}
        <p
          className="absolute text-center text-[24px] font-medium"
          style={{
            fontFamily: "Lato, sans-serif",
            color: "#FBFAF2",
            top: "48%", 
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
          }}
        >
          Enroll today and gain access to expert mentorship, hands-on training, and internationally recognized certification.
        </p>

        {/* Button */}
        <button
          className="absolute flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)]"
          style={{
            top: "63%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "167px",
            height: "43px",
            background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
            fontFamily: "Lato, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            color: "#000",
          }}
        >
          Register Now
          <FiArrowRight className="ml-2" size={18} />
        </button>
      </div>
    </section>
  );
}
