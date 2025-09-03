"use client";

import Header from "@/components/Header";
import SecondSection from "@/components/home/secondsection";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* ✅ Fixed Header at the top */}
      <Header className="fixed top-0 left-0 w-full z-50" />

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="/images/image1.webp"
          alt="SSI Studios"
          className="w-full h-full object-cover"
        />

        {/* Centered Text with scroll-triggered animation */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // triggers every time 50% visible
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1
            style={{
              fontFamily: "DM Serif Text, serif",
              fontWeight: 400,
              fontSize: "64px",
              lineHeight: "1.2",
            }}
            className="text-white"
          >
            Shaping the Future of <br /> Robotic Surgery Training
          </h1>

<p
  style={{
    fontFamily: "Lato, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "1.5",
    marginTop: "20px",
  }}
  className="text-white text-center px-6"
>
  Empowering healthcare professionals worldwide to master the SSI Mantra system and deliver safer, smarter care.
</p>

        </motion.div>
      </section>

      {/* ✅ White Section Below Hero */}
      <SecondSection />
    </div>
  );
}
