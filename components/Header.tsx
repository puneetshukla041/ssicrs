// components/Header.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isRegisterPage = pathname === "/register";

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToRegister = () => {
    router.push("/Register");
    setMobileOpen(false);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const headerBgColor = isRegisterPage ? "bg-white" : scrolled ? "bg-white" : "bg-transparent";
  const headerShadow = isRegisterPage ? "shadow-md" : scrolled ? "shadow-md" : "shadow-none";
  const headerTextColor = isRegisterPage ? "text-gray-600" : scrolled ? "text-gray-800" : "text-white";
  const mobileMenuIconColor = isRegisterPage || scrolled ? "text-gray-800" : "text-white";

  const logoSrc = isRegisterPage || scrolled
    ? "/Logos/Header/ssicrshead1.png"
    : "/Logos/Header/ssicrshead2.png";

  const navItems = [
    { label: "Home", path: "/Home" },
    { label: "About Us", path: "/AboutUs" },
    { label: "Programs", path: "/Programs" },
  ];

  return (
    <header
      className={`w-full py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500 ${headerBgColor} ${headerShadow} ${className} px-4 md:px-8 lg:px-12 xl:px-24`}
    >
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center h-12 ml-4 md:ml-60">
        <Image
          src={logoSrc}
          alt="SSI crs Logo"
          width={220}
          height={0}
          className="w-auto h-10 md:h-12 object-contain transition-all duration-500"
          priority
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center text-base font-normal" style={{ fontFamily: "Lato, sans-serif" }}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          const marginRight = index < navItems.length - 1 ? "mr-6 lg:mr-10" : "";
          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className={`inline-block relative transition-colors duration-300 ${marginRight} ${
                isActive ? "text-[#C59D73] font-medium" : headerTextColor
              }`}
            >
              {item.label}
            </button>
          );
        })}

        {/* Register Now Button */}
        <div className="relative flex items-center ml-2">
          <div
            className="absolute top-[-20px] left-0 w-full"
            style={{
              height: "170%",
              backgroundColor: "#A67950",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              zIndex: 0,
            }}
          ></div>

          <button
            onClick={goToRegister}
            className="relative z-10 px-6 py-2 rounded-full cursor-pointer text-white font-medium transition-colors duration-500 hover:bg-[#8C623C]"
          >
            Register Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden z-50 ${mobileMenuIconColor}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          ></div>

          <div
            className="fixed top-0 right-0 w-full max-w-xs h-full bg-white shadow-xl p-6 flex flex-col gap-6 transform transition-transform duration-300 translate-x-0 z-50"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileOpen(false)} className="text-gray-800 p-1" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>

            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-xl py-2 ${
                    isActive ? "text-[#C59D73] font-medium" : "text-gray-800"
                  } transition-colors duration-200 hover:text-[#A67950]`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={goToRegister}
              className="mt-8 px-6 py-3 rounded-xl text-white font-semibold bg-[#A67950] transition-colors duration-300 hover:bg-[#8C623C]"
            >
              Register Now
            </button>
          </div>
        </>
      )}
    </header>
  );
}
