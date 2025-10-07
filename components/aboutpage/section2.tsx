// components/aboutus/Section2.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  return (
    <section
      className="w-full py-10 lg:py-20 xl:py-24"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 xl:px-20">
        {/* ============= DESKTOP & LAPTOP VIEW ============= */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16 items-center">
          {/* Heading */}
          <div className="col-span-4">
            <h2
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "clamp(26px, 2.4vw, 34px)", // responsive font scaling
                fontWeight: 500,
                color: "#A67950",
                lineHeight: "1.25",
              }}
            >
              Educating the future of
              <br />
              Accessible Robotic
              <br />
              Surgery
            </h2>
          </div>

          {/* Text */}
          <div className="col-span-5">
            <div
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1vw, 16px)",
                lineHeight: "1.7",
                color: "#401323",
              }}
            >
              <p className="mb-6">
                <span className="font-semibold">Dr. Sudhir Srivastava</span>{" "}
                stands at the forefront of robotic surgical innovation as a
                globally recognized pioneer in robotic-assisted surgery. With an
                unwavering commitment to democratizing this transformative
                technology, he has dedicated his career to making robotic
                surgery more affordable, accessible, and impactful for patients
                worldwide.
              </p>
              <p className="mb-6">
                In pursuit of this vision, Dr. Srivastava founded SS Innovations
                to develop state-of-the-art, cost-effective robotic surgical
                solutions. Building on this success, the SS International Centre
                for Robotics Surgery (SSICRS) has been established to create a
                comprehensive educational framework. This initiative empowers
                the next generation of healthcare professionals—including
                surgeons, anesthesiologists, surgical staff, and ICU
                specialists—to master robotic-assisted surgery using the
                advanced SSI Mantra Surgical Robotic System.
              </p>
              <p>
                SSICRS is devoted to cultivating future leaders in robotic
                surgery, ensuring that the benefits of robotic-assisted
                healthcare are accessible to all, rather than being a privilege
                for only a select few.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-3 flex justify-center">
            <div className="relative w-full aspect-square max-w-[350px] xl:max-w-[404px]">
              <Image
                src="/Images/aboutpage/section2/sudhir.png"
                alt="Dr. Sudhir Srivastava"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ============= MOBILE VIEW ============= */}
        <div className="lg:hidden flex flex-col items-center">
          <h2
            className="text-center mb-8 max-w-lg"
            style={{
              color: "#A67950",
              fontFamily: "DM Serif Text",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "150%",
            }}
          >
            Educating the future of Accessible Robotic Surgery
          </h2>

          <div className="w-[158px] h-[158px] relative rounded-full overflow-hidden mb-8">
            <Image
              src="/Images/aboutpage/section2/sudhir.png"
              alt="Dr. Sudhir Srivastava"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className="max-w-lg text-left"
            style={{
              color: "#401323",
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            <p className="mb-6">
              <span className="font-semibold">Dr. Sudhir Srivastava</span> stands
              at the forefront of robotic surgical innovation as a globally
              recognized pioneer in robotic-assisted surgery.
            </p>
            <p className="mb-6">
              With an unwavering commitment to democratizing this transformative
              technology, he has dedicated his career to making robotic surgery
              more affordable, accessible, and impactful for patients worldwide.
            </p>
            <p className="mb-6">
              In pursuit of this vision, Dr. Srivastava founded SS Innovations to
              develop state-of-the-art, cost-effective robotic surgical
              solutions. Building on this success, the SS International Centre
              for Robotics Surgery (SSICRS) has been established to create a
              comprehensive educational framework. This initiative empowers the
              next generation of healthcare professionals—including surgeons,
              anesthesiologists, surgical staff, and ICU specialists—to master
              robotic-assisted surgery using the advanced SSI Mantra Surgical
              Robotic System.
            </p>
            <p>
              SSICRS is devoted to cultivating future leaders in robotic surgery,
              ensuring that the benefits of robotic-assisted healthcare are
              accessible to all, rather than being a privilege for only a select
              few.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
