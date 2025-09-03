"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
 
  <div className="flex-shrink-0">
    <img
      src="/logos/ssicrs.png"
      alt="SSI Studios Logo"
      className="h-10 w-auto"
    />
  </div>
{/* Hamburger Menu Button (visible on mobile) */}
<button
  onClick={() => setMobileNavOpen(!mobileNavOpen)}
  className={`md:hidden p-2 z-50 mr-4`}
  aria-label="Toggle Mobile Menu"
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke={scrolled ? "gray" : "white"} // ✅ color changes on scroll
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={
        mobileNavOpen
          ? "M6 18L18 6M6 6l12 12" // X icon when open
          : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
      }
    ></path>
  </svg>
</button>

      {/* Desktop & Laptop Nav Buttons */}
      <nav
        className="hidden md:flex gap-10 text-gray-800 text-base font-normal mr-60"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        {["Home", "About Us", "Programs", "Resources"].map((item) => (
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
          style={{
            backgroundColor: scrolled ? "#A67950" : "rgba(255,255,255,0.8)",
            color: scrolled ? "#fff" : "#000",
          }}
        >
          Register Now
        </button>
      </nav>

      {/* Mobile Nav Menu (hidden by default) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 mt-20 flex flex-col items-start gap-5">
          {["Home", "About Us", "Programs", "Resources"].map((item) => (
            <button
              key={item}
              className="text-gray-800 text-lg hover:text-gray-600 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            className="mt-4 w-full px-4 py-2 rounded transition-colors"
            style={{ backgroundColor: "#A67950", color: "#fff" }}
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
}
