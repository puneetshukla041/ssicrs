"use client";

import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="w-full bg-white min-h-[140vh] flex items-center justify-center relative">

      <div
        className="absolute"
        style={{
          top: "200px",
          left: "276px",
        }}
      >
        <Image
          src="/images/fouthsection/image1.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>

      {/* Card */}
      <div
        className="absolute rounded-lg flex items-center justify-center"
        style={{
          width: "300px",
          height: "111px",
          top: `${235 + 251}px`, // 200 (image top) + 321 (gap from figma)
          left: "24.3%",
          transform: "translateX(-50%)",
          backgroundColor: "#70493B",
        }}
      >
        <h3
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: "200",
            fontSize: "18px",
            color: "#FFFFFF",
            margin: "-60px 0 0 -195px", // spacing from top-left
          }}
        >
          Surgeons
        </h3>
        
  {/* Subtitle */}
  <p
    style={{
      fontFamily: "Lato, sans-serif",
      fontWeight: "400",
      fontSize: "12px",
      color: "#FFFFFF",
      lineHeight: "16px",
      margin: "0 0 0 0", // no change to heading padding
      position: "absolute",
      top: "calc(30px + 22px + 4px)", // heading top + heading height + small gap
      left: "20px", // same as heading
    }}
  >    Build advanced skills in multi-specialty robotic<br /> surgery
    and gain global certification.</p>
      </div>

        <div
        className="absolute"
        style={{
          top: "200px",
          left: "766px",
          right: "760px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/fouthsection/image2.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>
            {/* Card */}
      <div
        className="absolute rounded-lg flex items-center justify-center"
        style={{
          width: "300px",
          height: "111px",
          top: `${235 + 251}px`, // 200 (image top) + 321 (gap from figma)
          left: "24.3%",
          transform: "translateX(-50%)",
          backgroundColor: "#70493B",
        }}
      >
        <h3
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: "200",
            fontSize: "18px",
            color: "#FFFFFF",
            margin: "-60px 0 0 -195px", // spacing from top-left
          }}
        >
          Surgeons
        </h3>
        
  {/* Subtitle */}
  <p
    style={{
      fontFamily: "Lato, sans-serif",
      fontWeight: "400",
      fontSize: "12px",
      color: "#FFFFFF",
      lineHeight: "16px",
      margin: "0 0 0 0", // no change to heading padding
      position: "absolute",
      top: "calc(30px + 22px + 4px)", // heading top + heading height + small gap
      left: "20px", // same as heading
    }}
  >    Build advanced skills in multi-specialty robotic<br /> surgery
    and gain global certification.</p>
    </div>


        <div
        className="absolute"
        style={{
          top: "200px",
          left: "1250px",
          right: "270px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/fouthsection/image3.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>

        <div
        className="absolute"
        style={{
          top: "650px",
          left: "521px",
          right: "1005px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/fouthsection/image4.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>


        <div
        className="absolute"
        style={{
          top: "650px",
          left: "1011px",
          right: "515px",
          bottom: "689px",
        }}
      >
        <Image
          src="/images/fouthsection/image5.png"
          alt="Fourth Section Image"
          width={373}
          height={378}
          className="rounded-xl"
        />
      </div>      
    </section>
  );
}
