"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Section8() {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/Register");
  };

  return (
    // FIX: Changed md:py-0 to md:py-20 to increase top and bottom padding on desktop
    <section className="w-full bg-[#FBFAF2] relative flex justify-center items-center pt-4 pb-12 md:py-20"> 

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
            onClick={handleRegisterClick}
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
      <div className="hidden md:block relative w-full max-w-[1306px] px-4">
        
        {/* The Image is the background container */}
        <div className="relative flex flex-col justify-center items-center">
            {/* The Image */}
            <Image
              src="/Images/homepage/section8/image1.png"
              alt="Seventh Section Image"
              width={1306}
              height={724}
              className="object-contain w-full h-auto"
            />

            {/* Content Container - Use flexbox to center content over the image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                
                {/* Heading */}
                <h2
                  className="text-4xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#D9A05B] via-[#EFE8D6] to-[#F2F0E4] whitespace-nowrap"
                  style={{
                    fontFamily: "DM Serif Text, serif",
                  }}
                >
                  Join the Robotic Surgery Revolution
                </h2>

                {/* Subtitle */}
                <p
                  className="text-[24px] font-medium mt-4 mb-8"
                  style={{
                    fontFamily: "Lato, sans-serif",
                    color: "#FBFAF2",
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
                  onClick={handleRegisterClick}
                  className="flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)] w-[167px] h-[43px] mt-2"
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
      </div>

    </section>
  );
}