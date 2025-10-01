"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Section7() {
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
            fontFamily: "DM Serif Text, serif",
            fontWeight: 530,
            fontSize: "40px",
            color: "#A67950",
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
            color: "#401323",
            fontFamily: "DM Serif Text, serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // equivalent to 36px
          }}
        >
          Sudhir Srivastava, MD
        </h3>

        <p
          className="absolute"
          style={{
            top: "645px",
            left: "330px",
            color: "#D2A073",
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "150%", // equivalent to 24px
          }}
        >
          Founder, Chairman, CEO - SSICRS
        </p>

        <p
          className="absolute"
          style={{
            top: "670px",
            left: "330px",
            color: "#A67950",
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // equivalent to 24px
          }}
        >
          Robotic Cardiac Surgeon | Surgical Robotics<br /> Pioneer | Industry Leader
        </p>


        {/* Expert 2 (Dr. Husam Balkhy) - The image source was corrected based on the text */}
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
            color: "#401323",
            fontFamily: "DM Serif Text",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // 36px
          }}
        >
          Dr. Husam Balkhy
        </h3>

        <p
          className="absolute"
          style={{
            top: "645px",
            left: "800px",
            color: "#D2A073",
            fontFamily: "Lato",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "150%", // 24px
          }}
        >
          MBBS, MS, FACS, FACC
        </p>

        <p
          className="absolute"
          style={{
            top: "670px",
            left: "800px",
            color: "#A67950",
            fontFamily: "Lato",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // 24px
          }}
        >
          The University of Chicago Medicine and Biological <br />Sciences Chicago, IL, USA
        </p>


        {/* Expert 3 (Dr. Nitin Kumar Rajput) - The image source was corrected based on the text */}
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
            color: "#401323",
            fontFamily: "DM Serif Text",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // 36px
          }}
        >
          Dr. Nitin Kumar Rajput
        </h3>
        <p
          className="absolute"
          style={{
            top: "645px",
            left: "1270px",
            color: "#D2A073",
            fontFamily: "Lato",
            fontSize: "16px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "150%", // 24px
          }}
        >
          MCH (Cardiothoracic and Vascular Surgery), MS<br /> (General Surgery)
        </p>
        <p
          className="absolute"
          style={{
            top: "695px",
            left: "1270px",
            color: "#A67950",
            fontFamily: "Lato",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%", // 24px
          }}
        >
          Associate Director - Cardiac Surgery | Medanta, <br />The Medicity - Gurugram, Haryana
        </p>

        {/* View All Button - PC / Laptop */}
        {/* Adjusted to be a standard-looking button and added the arrow icon */}
        <div
          className="absolute flex items-center justify-center cursor-pointer"
          style={{
            top: "800px", 
            left: "1270px", 
            // The following styles mimic the mobile button, but you can revert them to the original:
            gap: "6px",
            padding: "10px 28px", 
            borderRadius: "30px", 
            background: "#A46831",
            // The original button at 1520px left was removed/merged here
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              display: "flex",
              alignItems: "center", 
              gap: "6px", 
            }}
          >
            View All <FiArrowRight size={16} />
          </span>
        </div>
      </div>

      {/* ========================================================
        Mobile and Tablet Layout (Responsive - visible below md)
        This content is made responsive using Tailwind CSS classes.
        ========================================================
      */}
      <div className="md:hidden w-full flex flex-col items-center text-center px-6 py-12 sm:py-16 gap-12 sm:gap-16">
        {/* Section Heading */}
        <h2
          className="text-4xl sm:text-[40px]" 
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 530,
            color: "#A67950",
          }}
        >
          Our Expert Faculty
        </h2>

        {/* Expert Profiles Container */}
        {/* Adjusted gap-y for more space, increased max-w for better tablet use */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 w-full max-w-4xl px-4">

          {/* Expert 1 (Sudhir Srivastava, MD) */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image1.png"
              alt="Expert 1"
              width={373}
              height={378}
              // Added aspect-ratio class to keep image scaling consistent on mobile
              className="rounded-xl w-full h-auto max-w-[300px] aspect-square object-cover" 
            />
            <h3
              className="mt-4 text-2xl sm:text-2xl lg:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Sudhir Srivastava, MD
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              Founder, Chairman, CEO - SSICRS
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Robotic Cardiac Surgeon | Surgical Robotics Pioneer | Industry Leader
            </p>
          </div>

          {/* Expert 2 (Sudhir K Rawal, MD) - Corrected image source for mobile to match PC layout's *name* flow if possible, using image2 here for a second unique profile. */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image2.png" 
              alt="Expert 2"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px] aspect-square object-cover"
            />
            <h3
              className="mt-4 text-2xl sm:text-2xl lg:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Sudhir K Rawal, MD
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              MBBS, MS, M.Ch, D.N.B (Urology)
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Medical Director and Chief of GenitoUro – Oncology Services | Rajiv Gandhi Cancer Institute and Research Center, New Delhi
            </p>
          </div>

          {/* Expert 3 (Prof. Dr. Somashekhar SP) - Corrected image source for mobile to match PC layout's *name* flow if possible, using image3 here for a third unique profile. */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image3.png" 
              alt="Expert 3"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px] aspect-square object-cover"
            />
            <h3
              className="mt-4 text-2xl sm:text-2xl lg:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Prof. Dr. Somashekhar SP
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              MBBS, MS, MCh (Onco), FRCS Edinburgh
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Chairman - Medical Advisory Board | Aster DM Healthcare - GCC & India
            </p>
          </div>

          {/* Expert 4 (Dr. Husam Balkhy) - Adding the missing expert from the PC layout here for mobile view. Using image6 from PC layout. */}
           <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image6.png" 
              alt="Expert 4 (Dr. Husam Balkhy)"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px] aspect-square object-cover"
            />
            <h3
              className="mt-4 text-2xl sm:text-2xl lg:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Dr. Husam Balkhy
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              MBBS, MS, FACS, FACC
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              The University of Chicago Medicine and Biological Sciences Chicago, IL, USA
            </p>
          </div>
          
        </div>
        
        {/* View All Button - Mobile / Tablet */}
        {/* Moved outside the grid for better centering and flow */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            className="px-8 py-3 rounded-[30px] bg-[#A46831] text-white flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
            style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px" }}
          >
            View All <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}