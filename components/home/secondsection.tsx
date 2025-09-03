"use client";

import { motion } from "framer-motion";

export default function SecondSection() {
  return (
    <section className="w-full bg-white min-h-screen relative flex flex-col items-center justify-center">
      {/* Top-right Image sliding from left to right */}
      <motion.img
        src="/images/image2.webp"
        alt="Decorative"
        className="absolute top-32 right-60 w-[513px] h-[280px] object-cover rounded-[8px]"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Image to the left of image2.webp (static) */}
      <img
        src="/images/section2text.webp"
        alt="Text Image"
        className="absolute top-32 right-[calc(150px+513px+150px)] w-[890px] h-[350px] object-contain rounded-[8px]"
      />

      {/* Full-width bottom image fading in */}
      <motion.img
        src="/images/section2image2.webp"
        alt="Bottom Image"
        className="absolute bottom-20 left-0 w-full h-auto object-contain"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </section>
  );
}
