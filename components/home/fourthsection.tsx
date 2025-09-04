"use client";


import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="w-full bg-white min-h-[140vh] flex items-center justify-center relative">

      {/* Heading */}
      <h2
        className="absolute"
        style={{
          fontFamily: "DM Serif Text, serif",
          fontWeight: 400,
          fontSize: "40px",
          color: "#A67950",
          top: "80px",
          left: "276px",
        }}
      >
        For Whom
      </h2>

      {/* First Image */}
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
            margin: "-60px 0 0 -195px",
          }}
        >
          Surgeons
        </h3>

        <p
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "400",
            fontSize: "12px",
            color: "#FFFFFF",
            lineHeight: "16px",
            margin: "0",
            position: "absolute",
            top: "calc(30px + 22px + 4px)",
            left: "20px",
          }}
        >
          Build advanced skills in multi-specialty robotic<br /> surgery
          and gain global certification.
        </p>
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
          left: "50%",
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
            margin: "-60px 0 0 -160px", // spacing from top-left
          }}
        >
          Surgical Staff
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
  >    Learn the essential workflows, patient preparation,<br/> and teamwork required in robotic ORs.</p>
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
      {/* Card */}
      <div
        className="absolute rounded-lg flex items-center justify-center"
        style={{
          width: "300px",
          height: "111px",
          top: `${235 + 251}px`, // 200 (image top) + 321 (gap from figma)
          left: "75.3%",
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
            margin: "-60px 0 0 -135px", // spacing from top-left
          }}
        >
          Anesthesiologists
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
  >    Master the unique considerations of anesthesia in<br/> robotic surgery for safer patient outcomes.</p>
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
      {/* Card */}
      <div
        className="absolute rounded-lg flex items-center justify-center"
        style={{
          width: "300px",
          height: "111px",
          top: `${295 + 651}px`, // 200 (image top) + 321 (gap from figma)
          left: "37%",
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
            margin: "-60px 0 0 -25px", // spacing from top-left
          }}
        >
          Medical Institutions & Hospitals
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
      top: "calc(28px + 22px + 4px)", // heading top + heading height + small gap
      left: "20px", // same as heading
    }}
  >    Partner with SSICRS to upskill teams, expand<br/> surgical capabilities, and bring world-class robotic care to communities.</p>
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
            {/* Card */}
      <div
        className="absolute rounded-lg flex items-center justify-center"
        style={{
          width: "300px",
          height: "111px",
          top: `${295 + 651}px`, // 200 (image top) + 321 (gap from figma)
          left: "63%",
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
            margin: "-60px 0 0 -110px", // spacing from top-left
          }}
        >
          Residents & Fellows
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
      top: "calc(28px + 22px + 4px)", // heading top + heading height + small gap
      left: "20px", // same as heading
    }}
  >   Access mentorship, training pathways, and <br/>exposure to the SSI Mantra platform early in your careers.</p>
      </div>

    </section>
  );
}
