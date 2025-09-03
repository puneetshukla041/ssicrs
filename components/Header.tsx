"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full shadow-md p-[12px] flex items-center justify-between fixed top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white" : "bg-transparent"
      } ${className}`}
    >
      {/* Left Side - Logo */}
      <div className="flex-shrink-0 ml-50">
        <Image
          src="/logos/ssicrs.png"
          alt="SSI Studios Logo"
          width={40}
          height={40}
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
            className={`hover-underline inline-block relative overflow-visible ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {item}
          </button>
        ))}

        {/* Register Now Button */}
        <button
          className="cursor-pointer px-4 py-1 rounded transition-colors duration-500"
          style={{ backgroundColor: scrolled ? "#A67950" : "rgba(255,255,255,0.8)", color: scrolled ? "#fff" : "#000" }}
        >
          Register Now
        </button>
      </nav>
    </header>
  );
}
