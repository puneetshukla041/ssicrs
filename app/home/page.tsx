"use client";

import Header from "@/components/Header"; // adjust path if needed

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Header at the top */}
      <Header />

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
          fontWeight: 400,   // regular
          fontSize: '64px',
          lineHeight: '1.2',
        }}
      >
        Shaping the Future of <br /> Robotic Surgery Training
      </h1>
    </div>
  );
}
