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

  const isRegisterPage = pathname === "/Register";
  const loginPath = "/Login";

  useEffect(() => {
    // Prevent scroll-based changes on the Register page
    if (isRegisterPage) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isRegisterPage]);

  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const goToRegister = () => {
    router.push("/Register");
    setMobileOpen(false);
  };

  const goToLogin = () => {
    router.push(loginPath);
    setMobileOpen(false);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setMobileOpen(false);
  };

  const goHome = () => {
    router.push("/Home");
    setMobileOpen(false);
  };

  const headerBgColor = isRegisterPage
    ? "bg-white"
    : scrolled
    ? "bg-[#FBFAF2]"
    : "bg-transparent";

  const headerShadow = isRegisterPage
    ? "shadow-md"
    : scrolled
    ? "shadow-md"
    : "shadow-none";

  const headerTextColor = isRegisterPage
    ? "text-gray-800"
    : scrolled
    ? "text-gray-800"
    : "text-white";

  const mobileMenuIconColor =
    isRegisterPage || scrolled ? "text-gray-800" : "text-white";

  const logoSrc =
    isRegisterPage || scrolled
      ? "/Logos/Header/ssicrshead1.png"
      : "/Logos/Header/ssicrshead2.png";

  const navItems = [
    { label: "Home", path: "/Home" },
    { label: "About Us", path: "/AboutUs" },
    { label: "Programs", path: "/Programs" },
  ];

  return (
    <header
      className={`w-full py-3 md:py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-500
        ${headerBgColor} ${headerShadow} ${className}
        px-4 sm:px-6 md:px-10 lg:px-[200px] xl:px-[290px]
      `}
    >
      {/* Logo */}
      <button
        onClick={goHome}
        className="flex-shrink-0 flex items-center h-10 sm:h-12 focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
        aria-label="Go to Home"
      >
        <Image
          src={logoSrc}
          alt="SSI CRS Logo"
          width={220}
          height={0}
          className="w-auto h-8 sm:h-10 md:h-16 object-contain transition-all duration-500"
          priority
        />
      </button>

{/* Desktop Navigation */}
<nav
  className="hidden md:flex items-center space-x-8 lg:space-x-10 ml-8"
  style={{ fontFamily: "Lato, sans-serif" }}
>
  {navItems.map((item) => {
    const isActive = pathname === item.path;
    return (
      <button
        key={item.label}
        onClick={() => handleNavClick(item.path)}
        className={`transition-colors duration-300 text-base lg:text-[1rem] 
          ${isActive ? "text-[#C59D73]" : headerTextColor} 
          font-normal
          hover:text-[#C59D73]`}
      >
        {item.label}
      </button>
    );
  })}

  {/* Log In Button */}
  <button
    onClick={goToLogin}
    className={`px-6 py-2 rounded-[5px] font-normal transition-colors duration-300 border text-base
      ${isRegisterPage || scrolled
        ? "bg-transparent text-[#A67950] border-[#A67950] hover:border-[#A67950]"
        : "bg-transparent text-[#A67950] border-[#A67950] hover:border-[#A67950]"
      }
    `}
  >
    Log In
  </button>

  {/* Register Now Button */}
  <div className="relative flex items-center">
    <div
      className="absolute top-[-20] left-0 w-full"
      style={{
        height: "170%",
        backgroundColor: "#A67950",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        zIndex: 0,
      }}
    ></div>
    <button
      onClick={goToRegister}
      className="relative z-10 px-3 py-2 rounded-full cursor-pointer text-white font-medium transition-colors duration-500"
      style={{ backgroundColor: "transparent" }}
    >
      Register Now
    </button>
  </div>
</nav>

      {/* Mobile Button */}
      <button
        className={`md:hidden z-50 transition-colors duration-300 ${mobileMenuIconColor}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Navigation Menu (New Responsive Addition) */}
      <div
        className={`fixed inset-0 pt-[72px] bg-white transition-transform duration-300 md:hidden z-40
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col items-center space-y-8 p-6 overflow-y-auto`}
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        {/* Nav Items */}
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className={`text-xl font-medium transition-colors duration-300 w-full text-center py-2
                ${isActive ? "text-[#C59D73]" : "text-gray-800"} 
                hover:text-[#C59D73]`}
            >
              {item.label}
            </button>
          );
        })}

        <div className="w-full h-[1px] bg-gray-200 my-4"></div>

        {/* Log In Button (Mobile) */}
        <button
          onClick={goToLogin}
          className="w-full max-w-xs px-6 py-3 rounded-[5px] font-normal transition-colors duration-300 border text-lg bg-transparent text-[#A67950] border-[#A67950] hover:bg-[#F2F2F2]"
        >
          Log In
        </button>

        {/* Register Now Button (Mobile) */}
        <button
          onClick={goToRegister}
          className="w-full max-w-xs px-6 py-3 rounded-[5px] cursor-pointer text-white font-medium transition-colors duration-300 text-lg bg-[#A67950] hover:bg-[#8e613f]"
        >
          Register Now
        </button>
      </div>
    </header>
  );
}