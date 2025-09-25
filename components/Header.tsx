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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToRegister = () => {
    router.push("/register");
    setMobileOpen(false);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const headerBgColor = isRegisterPage ? "bg-white" : scrolled ? "bg-white" : "bg-transparent";
  const headerShadow = isRegisterPage ? "shadow-md" : scrolled ? "shadow-md" : "shadow-none";
  const headerTextColor = isRegisterPage ? "text-gray-600" : scrolled ? "text-gray-800" : "text-white";

  const logoSrc =
    isRegisterPage || scrolled
      ? "/Logos/Header/ssicrshead1.png"
      : "/Logos/Header/ssicrshead2.png";

  const navItems = [
    { label: "Home", path: "/Home" },
    { label: "About Us", path: "/aboutus" },
    { label: "Programs", path: "/programs" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <header
      className={`w-full py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500 ${headerBgColor} ${headerShadow} ${className} px-4 md:px-12 lg:px-24`}
    >
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center h-12">
        <Image
          src={logoSrc}
          alt="SSI Studios Logo"
          width={220}
          height={0}
          className="w-auto h-10 md:h-12 object-contain transition-all duration-500"
          priority
        />
      </div>

      {/* Desktop Nav */}
      <nav
        className="hidden md:flex items-center gap-10 text-base font-normal"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className={`inline-block relative transition-colors duration-300 ${
                isActive ? "text-[#C59D73] font-medium" : headerTextColor
              }`}
            >
              {item.label}
            </button>
          );
        })}

        {/* Register Now (desktop) */}
        <div className="relative flex items-center">
          <div
            className="absolute top-[-20] left-0 w-full"
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
            className="relative z-10 px-6 py-2 rounded-full cursor-pointer text-white font-medium transition-colors duration-500"
            style={{ backgroundColor: "transparent" }}
          >
            Register Now
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 text-gray-800"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-lg ${
                    isActive ? "text-[#C59D73] font-medium" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={goToRegister}
              className="mt-4 px-6 py-3 rounded-xl bg-[#A67950] text-white font-medium"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
