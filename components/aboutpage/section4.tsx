// components/aboutus/Section3.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";

// Image list
const images = [
  "/Images/aboutpage/section4/image1.png",
  "/Images/aboutpage/section4/image2.png",
  "/Images/aboutpage/section4/image3.png",
  "/Images/aboutpage/section4/image4.png",
  "/Images/aboutpage/section4/image5.png",
];

// Text and paragraph for each image
const texts = [
  {
    heading: "SSICRS is redefining surgical education with world-class facilities.",
    para: `Every trainee starts with a common foundational module, covering:<br>
The Evolution of Robotics in Surgery<br>
Engineering Principles Behind Robotic-Assisted Surgery<br>
The SSI Mantra System: Technology & Clinical Integration`,
  },
  {
    heading: "We combine theory with real-world, hands-on training experiences.",
    para: "Our programs ensure every learner gains both deep knowledge and practical expertise.",
  },
  {
    heading: "Our mentors are leading surgeons shaping the future of robotics.",
    para: "Students learn directly from experts driving innovation in surgery and healthcare.",
  },
  {
    heading: "We believe in global collaboration to improve surgical outcomes.",
    para: "Through partnerships, we connect the best minds worldwide for better patient care.",
  },
  {
    heading: "At SSICRS, excellence is accessible to all, everywhere.",
    para: "We aim to democratize surgical education and make advanced training universally available.",
  },
];

export default function Section3() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (images.length - 1));
    setActiveIndex(newIndex);
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-black"
      style={{ height: `${images.length * 60}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Crossfade Images */}
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt={`Scroll Image ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Overlay text */}
        <div className="relative z-10 h-full w-full">
          {texts.map((item, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: "133px",
                bottom: "330px",
                marginLeft: "780px",
                marginRight: "117px",
                maxWidth: "calc(100% - 897px)",
              }}
              initial={false}
              animate={{ opacity: i === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Heading */}
              <h2
                className="font-[DM_Serif_Text]"
                style={{
                  fontSize: "26px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: "1.4",
                  marginBottom: "16px",
                }}
              >
                {item.heading}
              </h2>

              {/* Paragraph with line breaks */}
              <p
                className="font-[Lato]"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: "1.6",
                }}
                dangerouslySetInnerHTML={{ __html: item.para }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right-side dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          {images.map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              initial={false}
              animate={{
                scale: i === activeIndex ? 1.5 : 1,
                backgroundColor:
                  i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.4)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
