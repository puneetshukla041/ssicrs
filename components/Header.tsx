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
      <nav
        className="flex gap-10 text-gray-800 text-base font-normal mr-60"
        style={{ fontFamily: 'Lato, sans-serif' }}
      >
        {['Home', 'About Us', 'Programs', 'Resources'].map((item) => (
          <button
            key={item}
            className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </button>
        ))}

        {/* Register Now Button with background color */}
        <button
          className="relative cursor-pointer text-white px-4 py-1 rounded"
          style={{ backgroundColor: '#A67950' }}
        >
          Register Now
        </button>
      </nav>
    </header>
  );
}
