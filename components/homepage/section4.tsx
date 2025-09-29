"use client";

import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="w-full bg-white min-h-[110vh] flex flex-col items-start justify-start relative">
      {/* PC and Laptop Layout (STAYS UNCHANGED - visible only on md and up) */}
      {/* This layout uses fixed pixel positions as requested not to change */}
      <div className="hidden md:block w-full relative">
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
            src="/Images/homepage/section4/image1.png"
            alt="Fourth Section Image"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 1 */}
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

        {/* Second Image */}
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
            src="/Images/homepage/section4/image2.png"
            alt="Fourth Section Image"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 2 */}
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
          > 	Learn the essential workflows, patient preparation,<br /> and teamwork required in robotic ORs.
          </p>
        </div>

        {/* Third Image */}
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
            src="/Images/homepage/section4/image3.png"
            alt="Fourth Section Image"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 3 */}
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
          > 	Master the unique considerations of anesthesia in<br /> robotic surgery for safer patient outcomes.</p>
        </div>

        {/* Fourth Image */}
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
            src="/Images/homepage/section4/image4.png"
            alt="Fourth Section Image"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 4 */}
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
          > 	Partner with SSICRS to upskill teams, expand<br /> surgical capabilities, and bring world-class robotic care to communities.</p>
        </div>

        {/* Fifth Image */}
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
            src="/Images/homepage/section4/image5.png"
            alt="Fourth Section Image"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Card 5 */}
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
          > 	Access mentorship, training pathways, and <br />exposure to the SSI Mantra platform early in your careers.</p>
        </div>
      </div>

      {/* Mobile and Tablet Layout (Responsive for all devices smaller than md) */}
      <div className="md:hidden w-full flex flex-col items-center justify-center text-center px-6 py-12 gap-12 sm:px-12 sm:py-16">
        <h2
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            color: "#A67950",
          }}
          className="text-3xl sm:text-4xl" // Responsive font size
        >
          For Whom
        </h2>

        {/* Cards Container - Adjusted for better tablet layout */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 sm:gap-12 w-full max-w-4xl">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <Image
              src="/Images/homepage/section4/image1.png"
              alt="Surgeons"
              width={373}
              height={378}
              className="rounded-xl w-full"
            />
            <div
              className="mt-[-25px] rounded-lg flex flex-col items-center text-center p-4 w-[250px] sm:w-[300px] z-10" // z-10 ensures it overlaps the image below
              style={{
                backgroundColor: "#70493B",
              }}
            >
              <h3
                className="mt-4"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: "200",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Surgeons
              </h3>
              <p
                className="mt-2 text-sm" // increased text size slightly for readability
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#FFFFFF",
                }}
              >
                Build advanced skills in multi-specialty robotic surgery and gain global certification.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <Image
              src="/Images/homepage/section4/image2.png"
              alt="Surgical Staff"
              width={373}
              height={378}
              className="rounded-xl w-full"
            />
            <div
              className="mt-[-25px] rounded-lg flex flex-col items-center text-center p-4 w-[250px] sm:w-[300px] z-10"
              style={{
                backgroundColor: "#70493B",
              }}
            >
              <h3
                className="mt-4"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: "200",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Surgical Staff
              </h3>
              <p
                className="mt-2 text-sm"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#FFFFFF",
                }}
              >
                Learn the essential workflows, patient preparation, and teamwork required in robotic ORs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <Image
              src="/Images/homepage/section4/image3.png"
              alt="Anesthesiologists"
              width={373}
              height={378}
              className="rounded-xl w-full"
            />
            <div
              className="mt-[-25px] rounded-lg flex flex-col items-center text-center p-4 w-[250px] sm:w-[300px] z-10"
              style={{
                backgroundColor: "#70493B",
              }}
            >
              <h3
                className="mt-4"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: "200",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Anesthesiologists
              </h3>
              <p
                className="mt-2 text-sm"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#FFFFFF",
                }}
              >
                Master the unique considerations of anesthesia in robotic surgery for safer patient outcomes.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <Image
              src="/Images/homepage/section4/image4.png"
              alt="Medical Institutions & Hospitals"
              width={373}
              height={378}
              className="rounded-xl w-full"
            />
            <div
              className="mt-[-25px] rounded-lg flex flex-col items-center text-center p-4 w-[250px] sm:w-[300px] z-10"
              style={{
                backgroundColor: "#70493B",
              }}
            >
              <h3
                className="mt-4"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: "200",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Medical Institutions & Hospitals
              </h3>
              <p
                className="mt-2 text-sm"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#FFFFFF",
                }}
              >
                Partner with SSICRS to upskill teams, expand surgical capabilities, and bring world-class robotic care to communities.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <Image
              src="/Images/homepage/section4/image5.png"
              alt="Residents & Fellows"
              width={373}
              height={378}
              className="rounded-xl w-full"
            />
            <div
              className="mt-[-25px] rounded-lg flex flex-col items-center text-center p-4 w-[250px] sm:w-[300px] z-10"
              style={{
                backgroundColor: "#70493B",
              }}
            >
              <h3
                className="mt-4"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: "200",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
              >
                Residents & Fellows
              </h3>
              <p
                className="mt-2 text-sm"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  color: "#FFFFFF",
                }}
              >
                Access mentorship, training pathways, and exposure to the SSI Mantra platform early in your careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}