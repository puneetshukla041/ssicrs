"use client";

import Image from "next/image";

export default function Footer() {
  return (
    // Base footer is full width with the background color
    <footer className="w-full bg-[#A67951] relative">

      {/* ---------------- Desktop View (md and up) ---------------- */}
      {/* Use Tailwind for padding and min-height for adaptability */}
      <div className="hidden md:block w-full min-h-[469px] py-20 px-4 xl:px-32 2xl:px-64">
        
        {/* Main Content Container - use flexbox for horizontal layout */}
        <div className="flex justify-between items-start">
          
          {/* Left Section: Logo, Text, and Paragraph */}
          <div className="flex flex-col items-start max-w-lg">
            
            {/* Logo and text container */}
            <div className="flex items-center mb-4">
              <Image
                src="/Logos/Header/ssicrshead2.png"
                alt="SSICRS Logo"
                width={130}
                height={130}
                className="object-contain"
              />
              {/* Removed the empty span for text that was in the original */}
            </div>

            {/* Paragraph */}
            <p className="mt-2 text-white text-base font-lato leading-relaxed">
              Democratizing excellence in robotic surgery through world-class training and mentorship. SSICRS empowers surgeons and healthcare teams to deliver advanced care everywhere.
            </p>
          </div>

          {/* Right Section: Top Menu Links */}
          <div className="flex flex-col justify-start pt-6"> {/* Added pt-6 for better vertical alignment */}
            <div
              className="flex gap-8 lg:gap-12 xl:gap-16 text-white font-sora font-light text-sm lg:text-base"
            >
              <span style={{ cursor: "pointer" }}>ABOUT</span>
              <span style={{ cursor: "pointer" }}>PROGRAMS</span>
              <span style={{ cursor: "pointer" }}>OUR FACULTY</span>
              <span style={{ cursor: "pointer" }}>REGISTER NOW</span>
            </div>
          </div>
        </div>

        {/* White line */}
        {/* Use Tailwind's border utilities for the separator */}
        <div className="border-t border-white w-full my-16"></div>

        {/* Bottom footer */}
        <div
          className="w-full text-white font-lato flex flex-col sm:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <div
            className="text-xs sm:text-sm font-normal mb-4 sm:mb-0"
          >
            © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
          </div>
          
          {/* Bottom Links */}
          <div
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-normal font-sora"
          >
            <span style={{ cursor: "pointer" }}>Cookies</span>
            <span>|</span>
            <span style={{ cursor: "pointer" }}>Privacy Policy</span>
            <span>|</span>
            <span style={{ cursor: "pointer" }}>Contact us</span>
            <span>|</span>
            <span style={{ cursor: "pointer" }}>Terms of use</span>
            <span>|</span>
         
          </div>
        </div>
      </div>

      {/* ---------------- Mobile View (Below md) ---------------- */}
      {/* This section was already responsive using Tailwind and is kept mostly the same */}
      <div className="block md:hidden w-full py-8 px-6">
        <div className="max-w-[600px] mx-auto flex flex-col items-start gap-4">
          
          {/* Logo and text */}
          <div className="flex items-center gap-2">
            <Image
              src="/Logos/Header/ssicrshead2.png"
              alt="SSICRS Logo"
              width={87}
              height={87}
              className="object-contain"
            />
          </div>

          {/* Paragraph */}
          <p className="text-white text-sm font-lato leading-6">
            Democratizing excellence in robotic surgery through world-class training and mentorship. 
            SSICRS empowers surgeons and healthcare teams to deliver advanced care everywhere.
          </p>

          {/* Top menu */}
          {/* Changed gap-4 to a more forgiving gap-x-4 gap-y-2 for better wrapping */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-white text-sm font-sora font-light pt-2">
            <span className="cursor-pointer">About</span>
            <span className="cursor-pointer">Programs</span>
            <span className="cursor-pointer">Resources</span>
            <span className="cursor-pointer">Register Now</span>
          </div>

          {/* White line */}
          <div className="border-t border-white w-full my-6"></div>

          {/* Bottom section */}
          <div className="flex flex-col gap-3 text-white text-xs font-lato w-full">
            {/* Copyright, centered on small screens */}
            <div className="text-center">© 2025 SS International Center for Robotics Surgery | All Rights Reserved.</div>
            
            {/* Bottom Links, centered and wrapped on small screens */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 items-center font-sora pt-1">
              <span className="cursor-pointer">Cookies</span>
              <span>|</span>
              <span className="cursor-pointer">Privacy Policy</span>
              <span>|</span>
              <span className="cursor-pointer">Contact us</span>
              <span>|</span>
              <span className="cursor-pointer">Terms of use</span>
              <span>|</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}