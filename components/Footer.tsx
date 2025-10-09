"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react'; // Added React import for safety

export default function Footer() {
  const router = useRouter();

  // Navigation Handlers
  const handleAboutClick = () => router.push("/about");
  const handleProgramsClick = () => router.push("/programs");
  const handleRegisterClick = () => router.push("/register");
  const handleLoginClick = () => router.push("/login");

  // Legal Handlers (Existing from user's code)
  const handleCookiesClick = () => {
    router.push("/cookies");
  };

  const handlePrivacyClick = () => {
    router.push("/privacypolicy");
  };

  const handleContactus = () => {
    router.push("/contactus");
  };

  const handleTermsofuse = () => {
    // Note: The original code points this to /privacypolicy
    router.push("/terms"); 
  };
  


  const navLinks = [
    { name: 'ABOUT', handler: handleAboutClick },
    { name: 'PROGRAMS', handler: handleProgramsClick },
    { name: 'REGISTER NOW', handler: handleRegisterClick },
    { name: 'LOG IN', handler: handleLoginClick },
  ];


  return (
    <footer className="w-full bg-[#A67951] relative">

      {/* ---------------- Desktop View (md and up) - UNCHANGED ---------------- */}
      <div className="hidden md:block w-full min-h-[469px] py-20 px-4 xl:px-32 2xl:px-64">
        
        <div className="flex justify-between items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start max-w-lg">
            <div className="flex items-center mb-4">
              <Image
                src="/Logos/Header/ssicrshead2.png"
                alt="SSICRS Logo"
                width={130}
                height={130}
                className="object-contain"
              />
            </div>

            <p className="mt-2 text-white text-base font-lato leading-relaxed">
              Democratizing excellence in robotic surgery through world-class training and mentorship. SSICRS empowers surgeons and healthcare teams to deliver advanced care everywhere.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-start pt-6">
            <div className="flex gap-8 lg:gap-12 xl:gap-16 text-white font-sora font-light text-sm lg:text-base">
              <span className="cursor-pointer" onClick={handleAboutClick}>ABOUT</span>
              <span className="cursor-pointer" onClick={handleProgramsClick}>PROGRAMS</span>
              <span className="cursor-pointer">OUR FACULTY</span> {/* Note: Keeping 'OUR FACULTY' as is from original */}
              <span className="cursor-pointer" onClick={handleRegisterClick}>REGISTER NOW</span>
            </div>
          </div>
        </div>

        {/* White line */}
        <div className="border-t border-white w-full my-16"></div>

        {/* Bottom footer */}
        <div className="w-full text-white font-lato flex flex-col sm:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm font-normal mb-4 sm:mb-0">
            © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-normal font-sora">
            <span onClick={handleCookiesClick} className="cursor-pointer hover:underline">Cookies</span>
            <span>|</span>
            <span onClick={handlePrivacyClick} className="cursor-pointer hover:underline">Privacy Policy</span>
            <span>|</span>
            <span onClick={handleContactus} className="cursor-pointer hover:underline">Contact us</span>
            <span>|</span>
            <span onClick={handleTermsofuse} className="cursor-pointer hover:underline">Terms of use</span>
          </div>
        </div>
      </div>

      {/* ---------------- Mobile View (Below md) - MODIFIED to match image ---------------- */}
      <div className="block md:hidden w-full py-8 px-6">
        <div className="max-w-md mx-auto flex flex-col items-start">
          
          {/* Logo and Title (Top Section) */}
          <div className="flex items-center mb-6">
            <Image
              src="/Logos/Header/ssicrshead2.png"
              alt="SSICRS Logo"
              width={90} // Smaller size for mobile logo
              height={90}
              className="object-contain"
            />
   
          </div>

          {/* Navigation Links (Vertical, full-width, with lines and arrows) */}
          <nav className="w-full mb-6">
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                onClick={link.handler}
                // Styling for the link row: padding, border bottom, flex justification, text style
                className="w-full cursor-pointer py-4 border-b border-white border-opacity-70 flex justify-between items-center 
                         text-white text-base font-sora font-normal tracking-wider uppercase hover:bg-white/10 transition duration-150"
              >
                {link.name}
                {/* SVG Arrow Right icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </nav>

          {/* Motto/Description (Below Nav Links) */}
          <p className="text-white text-sm font-lato leading-relaxed">
            Democratizing excellence in robotic surgery through world-class training and mentorship. SSICRS empowers surgeons and healthcare teams to deliver advanced care everywhere.
          </p>

          {/* Separator Line (Before Legal Links) */}
          <div className="border-t border-white border-opacity-50 w-full my-8"></div>

          {/* Legal Links & Copyright (Bottom Section) */}
          <div className="w-full flex flex-col gap-4">
            
            {/* Legal Links Row (Left-aligned, incorporating Sitemap) */}
            <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 text-white text-xs font-sora font-light">
              <span onClick={handleCookiesClick} className="cursor-pointer hover:underline">Cookies</span>
              <span className="opacity-70">|</span>
              <span onClick={handlePrivacyClick} className="cursor-pointer hover:underline">Privacy Policy</span>
              <span className="opacity-70">|</span>
              <span onClick={handleContactus} className="cursor-pointer hover:underline">Contact us</span>
              <span className="opacity-70">|</span>
              <span onClick={handleTermsofuse} className="cursor-pointer hover:underline">Terms of use</span>

            </div>
            
            {/* Copyright Text */}
            <p className="text-white text-xs font-lato font-normal mt-2">
              © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
