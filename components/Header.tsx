"use client";

import Image from "next/image";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header
      className={`w-full bg-white shadow-md p-[12px] flex items-center justify-between ${className}`}
    >
      {/* Left Side - Logo */}
      <div className="flex-shrink-0 ml-50">
        <Image
          src="/logos/ssicrs.png"
          alt="SSI Studios Logo"
          width={50}
          height={50}
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
            className="hover-underline text-gray-800 inline-block relative overflow-visible"
          >
            {item}
          </button>
        ))}

        {/* Register Now Button */}
        <button
          className="cursor-pointer text-white px-4 py-1 rounded"
          style={{ backgroundColor: '#A67950' }}
        >
          Register Now
        </button>
      </nav>
    </header>
  );
}
