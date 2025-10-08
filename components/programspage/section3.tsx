// components/programspage/section3.tsx

"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Added the correct Image import

export default function Section3() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/Register");
  };

  return (
    <section 
      // Adjusted padding for better responsiveness on laptops
      className="w-full min-h-[90vh] flex flex-col items-center p-4 md:p-8 lg:px-16 xl:px-32 2xl:px-48 pt-10 md:pt-0 bg-[#FBFAF2]"
    >
      <div className="w-full max-w-7xl">
        
        {/* Main Heading */}
        <div className="group relative cursor-pointer inline-block pt-10 md:pt-24 lg:pt-32">
          <h2
            className="text-[#A67950] font-['DM_Serif_Text',_serif] text-3xl md:text-4xl lg:text-[40px] font-normal leading-normal md:leading-[150%]"
          >
            Upcoming Training Batches
          </h2>
          <div className="absolute bottom-[-10px] left-0 h-[3px] rounded-full transition-all duration-500 w-0 group-hover:w-[90%] bg-gradient-to-r from-[#6A4336] to-transparent"></div>
        </div>

        {/* Sub-Text */}
        <p
          className="mt-4 md:mt-6 text-[#401323] font-['Lato',_sans-serif] text-base font-normal leading-relaxed md:leading-[44px]"
        >
          Limited seats per cohort. Reserve early to maximize hands-on time.
        </p>

        {/* Main Content Card (Flex Container) */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:items-start 
                      p-6 md:p-10 lg:p-12 mt-8 md:mt-12 lg:mt-16 
                      rounded-lg border border-[#A67950] bg-white w-full 
                      min-h-[auto] shadow-lg"
        >
          {/* Left Side: Text and Details */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:pr-8">
            <h2
              className="text-[#401323] font-['DM_Serif_Text',_serif] text-2xl md:text-3xl lg:text-[36px] font-normal leading-normal md:leading-[150%] text-center lg:text-left"
            >
              Cardiac Robotic Surgery Training
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Starting October 2025",
                "Duration: 5 Days",
                "Location: SSICRS Training Facility",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-2 mx-auto lg:mx-0">
                  {/* Custom SVG icon */}
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

              <div className="mt-4">
                <span
                  className="text-[#401323] font-['Lato',_sans-serif] text-base font-medium leading-6 block text-center lg:text-left"
                >
                  Procedures Covered
                </span>
                <div className="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
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
                onClick={handleRegisterClick} 
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

          {/* Right Side: Image Container with Next.js Image */}
          <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-[456px] h-[280px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image 
                    src="/Images/programs/section3/image1.png" 
                    alt="Model of a human heart representing cardiac surgery"
                    fill
                    className="object-cover" // Ensure it covers the area
                    sizes="(max-width: 1024px) 100vw, 50vw" // Responsive sizes for optimization
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}