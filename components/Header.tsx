"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-[18px] flex items-center justify-between">
      {/* Left Side - Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logos/ssicrs.png"
          alt="SSI Studios Logo"
          width={57}   // smaller width
          height={57}   // smaller height
          className="object-contain"
        />
      </div>

      {/* Right Side - Nav Buttons */}
      <nav className="flex gap-4 text-gray-800 text-sm font-medium">
        <button className="hover:text-blue-600 cursor-pointer">Home</button>
        <button className="hover:text-blue-600 cursor-pointer">About Us</button>
        <button className="hover:text-blue-600 cursor-pointer">Programs</button>
        <button className="hover:text-blue-600 cursor-pointer">Resources</button>
        <button className="hover:text-blue-600 cursor-pointer">Register Now</button>
      </nav>
    </header>
  );
}
