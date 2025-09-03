"use client";

import Header from "@/components/Header";
import SecondSection from "@/components/home/secondsection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* ✅ Fixed Header at the top */}
      <Header className="fixed top-0 left-0 w-full z-50" />

      {/* Background Image */}
      <img
        src="/images/image1.webp"
        alt="SSI Studios"
        className="w-full h-screen object-cover"
      />

      {/* Centered Multi-line Text */}
      <h1
        className="absolute inset-0 flex items-center justify-center text-white text-center"
        style={{
          fontFamily: 'DM Serif Text, serif',
          fontWeight: 400,
          fontSize: '64px',
          lineHeight: '1.2',
        }}
      >
        Shaping the Future of <br /> Robotic Surgery Training
      </h1>

      {/* ✅ White Section Below Hero */}
      <SecondSection />
    </div>
  );
}
