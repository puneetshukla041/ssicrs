"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

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
    router.push("/privacypolicy");
  };


  return (
    <footer className="w-full bg-[#A67951] relative">

      {/* ---------------- Desktop View (md and up) ---------------- */}
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
              <span className="cursor-pointer">ABOUT</span>
              <span className="cursor-pointer">PROGRAMS</span>
              <span className="cursor-pointer">OUR FACULTY</span>
              <span className="cursor-pointer">REGISTER NOW</span>
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

      {/* ---------------- Mobile View (Below md) ---------------- */}
      <div className="block md:hidden w-full py-8 px-6">
        <div className="max-w-[600px] mx-auto flex flex-col items-start gap-4">
          
          <div className="flex items-center gap-2">
            <Image
              src="/Logos/Header/ssicrshead2.png"
              alt="SSICRS Logo"
              width={87}
              height={87}
              className="object-contain"
            />
          </div>

          <p className="text-white text-sm font-lato leading-6">
            Democratizing excellence in robotic surgery through world-class training and mentorship. 
            SSICRS empowers surgeons and healthcare teams to deliver advanced care everywhere.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-white text-sm font-sora font-light pt-2">
            <span className="cursor-pointer">About</span>
            <span className="cursor-pointer">Programs</span>
            <span className="cursor-pointer">Resources</span>
            <span className="cursor-pointer">Register Now</span>
          </div>

          <div className="border-t border-white w-full my-6"></div>

          <div className="flex flex-col gap-3 text-white text-xs font-lato w-full">
            <div className="text-center">
              © 2025 SS International Center for Robotics Surgery | All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 items-center font-sora pt-1">
              <span onClick={handleCookiesClick} className="cursor-pointer hover:underline">Cookies</span>
              <span>|</span>
              <span onClick={handlePrivacyClick} className="cursor-pointer hover:underline">Privacy Policy</span>
              <span>|</span>
              <span className="cursor-pointer">Contact us</span>
              <span>|</span>
              <span className="cursor-pointer">Terms of use</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
