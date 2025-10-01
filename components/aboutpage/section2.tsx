// components/aboutus/Section2.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function Section2() {
  // Mobile styles are set for the default (no prefix)
  // Desktop styles use the 'lg:' prefix

  const fullText = (
    <>
      <p className="mb-6 lg:mb-4">
        <span className="font-semibold lg:font-normal">
          Dr. Sudhir Srivastava
        </span>{" "}
        stands at the forefront of robotic surgical innovation as a globally
        recognized pioneer in robotic-assisted surgery.
      </p>
      <p className="mb-6 lg:mb-4">
        With an unwavering commitment to democratizing this transformative
        technology, he has dedicated his career to making robotic surgery more
        affordable, accessible, and impactful for patients worldwide.
      </p>
      <p className="mb-6 lg:mb-4">
        In pursuit of this vision, Dr. Srivastava founded SS Innovations to
        develop state-of-the-art, cost-effective robotic surgical solutions.
        Building on this success, the SS International Centre for Robotics Surgery
        (SSICRS) has been established to create a comprehensive educational
        framework. This initiative empowers the next generation of healthcare
        professionals—including surgeons, anesthesiologists, surgical staff, and
        ICU specialists—to master robotic-assisted surgery using the advanced SSI
        Mantra Surgical Robotic System.
      </p>
      <p>
        SSICRS is devoted to cultivating future leaders in robotic surgery,
        ensuring that the benefits of robotic-assisted healthcare are accessible
        to all, rather than being a privilege for only a select few.
      </p>
    </>
  );

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FBFAF2" }}
    >
      {/* DESKTOP VIEW (lg: prefix): Retains original absolute positioning
      */}
      <div className="hidden lg:block relative w-full min-h-[570px] lg:min-h-[620px]">
        {/* Heading on the left (Desktop) */}
        <h2
          className="absolute"
          style={{
            left: "270px",
            top: "250px",
            fontFamily: "DM Serif Display, serif",
            fontSize: "34px",
            fontWeight: 500,
            color: "#A67950",
          }}
        >
          Educating the future of<br />Accessible Robotic <br />Surgery
        </h2>

        {/* Text on the left (Desktop) */}
        <div
          className="absolute"
          style={{
            left: "680px",
            width: "700px",
            top: "120px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#401323",
          }}
        >
          {/* Note: I'm converting your <br /> based structure to a standard paragraph structure 
              for better practice, but replicating the original spacing where possible. 
              The content is the same as the original. 
          */}
          <p className="mb-4">
            Dr. Sudhir Srivastava stands at the forefront of robotic surgical innovation <br/>
            as a globally recognized pioneer in robotic-assisted surgery. With an <br/>
            unwavering commitment to democratizing this transformative technology, <br/>
            he has dedicated his career to making robotic surgery more affordable, <br/>
            accessible, and impactful for patients worldwide.
          </p>
          <p className="mb-4">
            In pursuit of this vision, Dr. Srivastava founded SS Innovations to develop <br/>
            state-of-the-art, cost-effective robotic surgical solutions. Building on this <br/>
            success, the SS International Centre for Robotics Surgery (SSICRS) has <br/>
            been established to create a comprehensive educational framework. This <br/>
            initiative empowers the next generation of healthcare professionals— <br/>
            including surgeons, anesthesiologists, surgical staff, and ICU specialists— <br/>
            to master robotic-assisted surgery using the advanced SSI Mantra Surgical <br/>
            Robotic System.
          </p>
          <p>
            SSICRS is devoted to cultivating future leaders in robotic surgery, ensuring <br/>
            that the benefits of robotic-assisted healthcare are accessible to all, rather <br/>
            than being a privilege for only a select few.
          </p>
        </div>

        {/* Image on the right (Desktop) */}
        <div
          className="absolute w-[404px] h-[404px]"
          style={{ left: "1260px", top: "50px" }}
        >
          <Image
            src="/Images/aboutpage/section2/sudhir.png"
            alt="Dr. Sudhir Srivastava"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* MOBILE VIEW (No prefix): Uses fluid layout and specified mobile styles
      */}
      <div className="lg:hidden px-8 py-10 flex flex-col items-center">
        {/* Mobile Heading */}
        <h2
          className="w-[351px] text-center mb-8"
          style={{
            color: "#A67950",
            fontFamily: "DM Serif Text",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "150%", // 36px
          }}
        >
          Educating the future of Accessible Robotic Surgery
        </h2>

        {/* Mobile Image and first paragraph combined */}
        <div className="flex flex-col items-center mb-6">
          {/* Mobile Image */}
          <div
            className="w-[158px] h-[158px] relative rounded-full overflow-hidden mb-6"
            // The aspect-ratio and background property are inherent in w/h and Image fill
          >
            <Image
              src="/Images/aboutpage/section2/sudhir.png"
              alt="Dr. Sudhir Srivastava"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Mobile Text Content - Note: I'm combining the specified mobile paragraphs for a clean flow */}
          <div
            className="max-w-[351px] text-left"
            style={{
              color: "#401323",
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "24px", // 200%
            }}
          >
            <p className="mb-6">
              <span className="font-semibold" style={{ width: "0px", display: "inline-block" }}>
                
              </span>
               Dr. Sudhir Srivastava stands at the forefront of robotic surgical innovation as a globally recognized pioneer in robotic-assisted surgery.
            </p>
            <p className="mb-6">
              With an unwavering commitment to democratizing this transformative technology, he has dedicated his career to making robotic surgery more affordable, accessible, and impactful for patients worldwide.
            </p>
            <p className="mb-6">
              In pursuit of this vision, Dr. Srivastava founded SS Innovations to develop state-of-the-art, cost-effective robotic surgical solutions. Building on this success, the SS International Centre for Robotics Surgery (SSICRS) has been established to create a comprehensive educational framework. This initiative empowers the next generation of healthcare professionals—including surgeons, anesthesiologists, surgical staff, and ICU specialists—to master robotic-assisted surgery using the advanced SSI Mantra Surgical Robotic System.
            </p>
            <p>
              SSICRS is devoted to cultivating future leaders in robotic surgery, ensuring that the benefits of robotic-assisted healthcare are accessible to all, rather than being a privilege for only a select few.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}