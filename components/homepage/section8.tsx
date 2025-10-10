"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function SeventhSection() {
  const router = useRouter();
  const mobileImageSrc = "/Images/homepage/section8/image1.png";

  const handleRegisterClick = () => {
    router.push("/Register");
  };

  return (
    <section className="w-full bg-[#FBFAF2] relative flex justify-center items-center pt-12 sm:pt-0 pb-20 md:pb-24 min-h-[500px] md:min-h-0 overflow-hidden">

      {/* ---------------- Mobile & Tablet View ---------------- */}
      <div className="md:hidden w-11/12 max-w-xl mx-auto relative rounded-lg overflow-hidden min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center">
        
        {/* Image with 50% zoom effect */}
        <div className="absolute inset-0 scale-[1.5]">
          <Image
            src={mobileImageSrc}
            alt="Next Step Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center flex flex-col items-center max-w-lg px-4">
          <h2
            className="text-2xl sm:text-3xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] mb-3 sm:mb-4 leading-snug"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Take the Next Step Toward Surgical Excellence
          </h2>

          <p
            className="text-sm sm:text-base font-medium text-[#FBFAF2] mb-8 sm:mb-10"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Enroll today and gain access to expert mentorship, hands-on training, and internationally recognized certification.
          </p>

          <button
            onClick={handleRegisterClick}
            className="flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)] px-8 py-3 w-48 sm:w-52"
            style={{
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
              color: "#000",
            }}
          >
            Register Now
            <FiArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>

      {/* ---------------- Desktop View ---------------- */}
      <div className="hidden md:block relative flex flex-col justify-center items-center w-full max-w-[1306px]">
        <div className="relative w-full h-auto">
          <Image
            src="/Images/homepage/section8/image1.png"
            alt="Seventh Section Image"
            width={1306}
            height={724}
            className="object-contain w-full h-auto"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h2
            className="text-4xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] whitespace-nowrap mb-4 md:mb-6"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Take the Next Step Toward Surgical Excellence
          </h2>

          <p
            className="text-xl md:text-[24px] font-medium text-[#FBFAF2] max-w-xl mb-8 md:mb-10 lg:max-w-2xl"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            Enroll today and gain access to expert mentorship, hands-on training, and internationally recognized certification.
          </p>

          <button
            onClick={handleRegisterClick}
            className="absolute flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)]"
            style={{
              top: "62%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "167px",
              height: "43px",
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "22px",
              color: "#000",
            }}
          >
            Register Now
            <FiArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
