"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-[12px] flex items-center justify-between">
      {/* Left Side - Logo */}
      <div className="flex-shrink-0 ml-50">
        <Image
          src="/logos/ssicrs.png"
          alt="SSI Studios Logo"
          width={50}   // smaller width
          height={50}  // smaller height
          className="object-contain"
        />
      </div>

      {/* Right Side - Nav Buttons */}
<nav className="flex-1 flex justify-center gap-6 text-gray-800 text-base font-normal pr-20" style={{ fontFamily: 'Lato, sans-serif' }}>
  <button className="hover:text-blue-600 cursor-pointer">Home</button>
  <button className="hover:text-blue-600 cursor-pointer">About Us</button>
  <button className="hover:text-blue-600 cursor-pointer">Programs</button>
  <button className="hover:text-blue-600 cursor-pointer">Resources</button>
  <button className="hover:text-blue-600 cursor-pointer">Register Now</button>
</nav>

    </header>
  );
}
