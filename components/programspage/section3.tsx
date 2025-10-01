"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Section3() {
  return (
    // Use min-h-screen for height and p-4/p-8 for padding on small screens, then adjust for larger screens
    <section className="w-full min-h-[90vh] flex flex-col items-center md:items-start p-4 md:p-8 lg:px-48 xl:px-64 pt-10 md:pt-0">
      {/* Container for content to apply padding/margin easily and center on mobile */}
      <div className="w-full max-w-7xl">
        {/* Heading with hover + line */}
        <div className="group relative cursor-pointer inline-block pt-10 md:pt-24 lg:pt-32">
          <h2
            className="text-[#A67950] font-['DM_Serif_Text',_serif] text-3xl md:text-4xl lg:text-[40px] font-normal leading-normal md:leading-[150%]"
          >
            Upcoming Training Batches
          </h2>
          <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Subheading */}
        <p
          className="mt-4 md:mt-6 text-[#401323] font-['Lato',_sans-serif] text-base font-normal leading-relaxed md:leading-[44px]"
        >
          Limited seats per cohort. Reserve early to maximize hands-on time.
        </p>

        {/* Rectangular card under heading - Use flex-col on mobile, flex-row on larger screens */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start 
                     p-6 md:p-10 lg:p-12 mt-8 md:mt-12 lg:mt-16 
                     rounded-lg border border-[#A67950] bg-white w-full 
                     min-h-[auto] lg:min-h-[380px] shadow-lg"
        >
          {/* Left-side content - Full width on mobile, then adjust for larger screens */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h2
              className="text-[#401323] font-['DM_Serif_Text',_serif] text-2xl md:text-3xl lg:text-[36px] font-normal leading-normal md:leading-[150%] text-center lg:text-left"
            >
              Cardiac Robotic Surgery Training
            </h2>

            {/* List with SVGs */}
            <div className="flex flex-col gap-3">
              {[
                "Starting October 2025",
                "Duration: 5 Days",
                "Location: SSICRS Training Facility",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    className="w-5 h-5 flex-shrink-0"
                  >
                    <g clipPath="url(#clip0_666_963)">
                      <path
                        d="M8.25 4.125L15.125 11L8.25 17.875"
                        stroke="#401323"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_666_963">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span
                    className="text-[#401323] font-['Lato',_sans-serif] text-base font-normal leading-6"
                  >
                    {text}
                  </span>
                </div>
              ))}
              
              {/* Procedures Covered text */}
              <div className="mt-4">
                <span
                  className="text-[#401323] font-['Lato',_sans-serif] text-base font-medium leading-6"
                >
                  Procedures Covered
                </span>
                {/* Procedures buttons */}
                <div className="flex flex-wrap gap-2 mt-2">
                   {/* I added the procedure buttons missing from the original code using the image's layout */}
                   {["LIMA", "ASD", "MVR"].map((proc) => (
                      <button
                         key={proc}
                         className="px-4 py-2 text-sm text-[#401323] border border-[#A67950] rounded-lg font-['Lato',_sans-serif] hover:bg-gray-50 transition duration-300"
                      >
                         {proc}
                      </button>
                   ))}
                </div>
              </div>

              {/* Register Now button */}
              <button
                className="flex items-center justify-center 
                           rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(166,121,80,0.5)] 
                           mt-6 md:mt-8 
                           w-48 h-12 
                           bg-[#A67950] font-['Lato',_sans-serif] font-normal text-base text-white mx-auto lg:mx-0"
              >
                Register Now
                <FiArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>

          {/* Right-side image - Adjust margin and size for different screens */}
          {/* Using a regular img tag is better for accessibility and responsiveness than background property */}
          <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* The actual image in the source was likely a fixed size, so we make it responsive */}
            <img 
              src="/Images/programs/section3/image1.png" // Assuming this path is correct
              alt="Model of a human heart representing cardiac surgery"
              className="w-full max-w-sm md:max-w-md lg:max-w-[456px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}