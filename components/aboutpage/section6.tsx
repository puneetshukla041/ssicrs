"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation"; // 1. Import useRouter

export default function Section8() {
  const router = useRouter(); // 2. Initialize router

  const handleRegisterClick = () => {
    router.push("/Register"); // 3. Navigation logic
  };

  return (
    <section className="w-full bg-[#F2F0E4] relative flex justify-center items-center pt-4 pb-12 md:py-0">

      {/* ---------------- Mobile view - small card ---------------- */}
      <div className="md:hidden w-11/12 max-w-sm mx-auto relative rounded-lg overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/Images/homepage/section8/image1.png"
          alt="Mobile Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center p-6">
          {/* Heading */}
          <h2
            className="text-2xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] mb-2"
            style={{ fontFamily: "DM Serif Text, serif" }}
          >
            Join the Robotic Surgery Revolution
          </h2>

          {/* Subtitle */}
          <p
            className="text-base font-medium text-[#FBFAF2] mb-6"
            style={{ fontFamily: "Lato, sans-serif" }}
          >
            SSICRS invites you to be part of the movement that is transforming the future of surgery. Whether you&apos;re a <br className="hidden sm:inline-block" />
            surgeon looking to master robotic-assisted techniques, a nurse preparing to assist in robotic procedures, or an <br className="hidden sm:inline-block" />
            anesthesiologist ensuring robotic surgery patient safety—SSICRS is your gateway to expertise in the most <br className="hidden sm:inline-block" />
            advanced form of surgery today.
          </p>

          {/* Button (Mobile) */}
          <button
            onClick={handleRegisterClick} // Add onClick handler
            className="flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)] px-6 py-2"
            style={{
              background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              fontSize: "16px",
              color: "#000",
            }}
          >
            Register Now
          </button>
        </div>
      </div>


      {/* ---------------- Desktop view ---------------- */}
      <div className="hidden md:block relative flex flex-col justify-center items-center min-h-screen">

        <Image
          src="/Images/homepage/section8/image1.png"
          alt="Seventh Section Image"
          width={1306}
          height={724}
          className="object-contain mt-32"
        />

        {/* Heading */}
        <h2
          className="absolute text-center text-4xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] whitespace-nowrap"
          style={{
            fontFamily: "DM Serif Text, serif",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Join the Robotic Surgery Revolution
        </h2>

        {/* Subtitle */}
        <p
          className="absolute text-[24px] font-medium text-center"
          style={{
            fontFamily: "Lato, sans-serif",
            color: "#FBFAF2",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            whiteSpace: "pre-line",
          }}
        >
          SSICRS invites you to be part of the movement that is transforming the future of surgery. Whether you&apos;re a <br />
          surgeon looking to master robotic-assisted techniques, a nurse preparing to assist in robotic procedures, or an <br />
          anesthesiologist ensuring robotic surgery patient safety—SSICRS is your gateway to expertise in the most <br />
          advanced form of surgery today.
        </p>

        {/* Button (Desktop) */}
        <button
          onClick={handleRegisterClick} // Add onClick handler
          className="absolute flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)]"
          style={{
            top: "68%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "167px",
            height: "43px",
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

    </section>
  );
}