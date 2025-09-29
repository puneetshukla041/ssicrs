"use client";

import Image from "next/image";

export default function Section7() {
  return (
    <section className="w-full bg-white min-h-[140vh] flex flex-col items-start justify-start relative">
      {/* PC and Laptop Layout (STAYS UNCHANGED - visible on md and up) */}
      <div className="hidden md:block w-full relative">

        {/* Section Heading */}
        <h2
          className="absolute"
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 530,
            fontSize: "40px",
            color: "#A67950",
            top: "80px",
            left: "200px",
          }}
        >
          Our Expert Faculty
        </h2>

        {/* Image 1 */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "200px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image1.png"
            alt="Expert 1"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Image 1 Text */}
        <h3
          className="absolute"
          style={{
            top: "600px",
            left: "200px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "34px",
            color: "#401323",
          }}
        >
          Sudhir Srivastava, MD
        </h3>
        <p
          className="absolute"
          style={{
            top: "645px",
            left: "200px",
            fontFamily: "Lato, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "16px",
            color: "#D2A073",
          }}
        >
          Founder, Chairman, CEO - SSICRS
        </p>
        <p
          className="absolute"
          style={{
            top: "670px",
            left: "200px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#A67950",
          }}
        >
          Robotic Cardiac Surgeon | Surgical Robotics Pioneer | Industry Leader
        </p>

        {/* Image 2 */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "766px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image2.png"
            alt="Expert 2"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Image 2 Text */}
        <h3
          className="absolute"
          style={{
            top: "600px",
            left: "766px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "34px",
            color: "#401323",
          }}
        >
          Sudhir K Rawal, MD
        </h3>
        <p
          className="absolute"
          style={{
            top: "645px",
            left: "766px",
            fontFamily: "Lato, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "16px",
            color: "#D2A073",
          }}
        >
          MBBS, MS, M.Ch, D.N.B (Urology)
        </p>
        <p
          className="absolute"
          style={{
            top: "670px",
            left: "766px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#A67950",
            lineHeight: "1.4",
          }}
        >
          Medical Director and Chief of GenitoUro – <br />
          Oncology Services | Rajiv Gandhi Cancer Institute <br />
          and Research Center, New Delhi
        </p>

        {/* Image 3 */}
        <div
          className="absolute"
          style={{
            top: "200px",
            left: "1320px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image3.png"
            alt="Expert 3"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Image 3 Text */}
        <h3
          className="absolute"
          style={{
            top: "600px",
            left: "1320px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "34px",
            color: "#401323",
          }}
        >
          Prof. Dr. Somashekhar SP
        </h3>
        <p
          className="absolute"
          style={{
            top: "645px",
            left: "1320px",
            fontFamily: "Lato, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "16px",
            color: "#D2A073",
          }}
        >
          MBBS, MS, MCh (Onco), FRCS Edinburgh
        </p>
        <p
          className="absolute"
          style={{
            top: "670px",
            left: "1320px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#A67950",
            lineHeight: "1.4",
          }}
        >
          Chairman - Medical Advisory Board | Aster DM <br />
          Healthcare - GCC & India
        </p>


        {/* Image 4 */}
        <div
          className="absolute"
          style={{
            top: "820px",
            left: "480px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image4.png"
            alt="Expert 4"
            width={373}
            height={378}
            className="rounded-xl"
          />
        </div>

        {/* Image 4 Text */}
        <h3
          className="absolute"
          style={{
            top: "1220px", // adjust based on image position
            left: "480px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "34px",
            color: "#401323",
          }}
        >
          Dr. Nitin Kumar Rajput
        </h3>
        <p
          className="absolute"
          style={{
            top: "1265px",
            left: "480px",
            fontFamily: "Lato, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "16px",
            color: "#D2A073",
          }}
        >
          MCH (Cardiothoracic and Vascular Surgery), MS (General Surgery)
        </p>
        <p
          className="absolute"
          style={{
            top: "1290px",
            left: "480px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#A67950",
            lineHeight: "1.4",
          }}
        >
          Associate Director - Cardiac Surgery | Medanta, <br />
          The Medicity - Gurugram, Haryana
        </p>

        {/* Image 5 */}
        <div
          className="absolute"
          style={{
            top: "820px",
            left: "1070px",
          }}
        >
          <Image
            src="/Images/homepage/section7/image5.png"
            alt="Expert 5"
            width={370}
            height={330}
            className="rounded-xl"
          />
        </div>

        {/* Image 5 Text */}
        <h3
          className="absolute"
          style={{
            top: "1220px",
            left: "1070px",
            fontFamily: "DM Serif Text, serif",
            fontWeight: 400,
            fontSize: "34px",
            color: "#401323",
          }}
        >
          Dr. Magan Mehrotra
        </h3>
        <p
          className="absolute"
          style={{
            top: "1265px",
            left: "1070px",
            fontFamily: "Lato, sans-serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "16px",
            color: "#D2A073",
            lineHeight: "1.4",
          }}
        >
          MS, MRCS (Edinburgh), MNAMS, FNB - Minimal Access and Bariatric Surgery
        </p>
        <p
          className="absolute"
          style={{
            top: "1290px",
            left: "1070px",
            fontFamily: "Lato, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            color: "#A67950",
            lineHeight: "1.4",
          }}
        >
          Managing Director - Apex Hospital, Moradabad
        </p>
      </div>

      {/* Mobile and Tablet Layout (Responsive - visible below md) */}
      <div className="md:hidden w-full flex flex-col items-center text-center px-6 py-12 sm:py-16 gap-12 sm:gap-16">
        {/* Section Heading */}
        <h2
          className="text-4xl sm:text-[40px]" // Responsive font size for tablet
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: 530,
            color: "#A67950",
          }}
        >
          Our Expert Faculty
        </h2>

        {/* Expert Profiles Container */}
        {/* Use grid for tablets (sm) to display 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 w-full max-w-6xl px-4 sm:px-8">
          
          {/* Expert 1 */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image1.png"
              alt="Expert 1"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px]"
            />
            <h3
              className="mt-4 text-2xl sm:text-3xl" // Responsive font size
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Sudhir Srivastava, MD
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              Founder, Chairman, CEO - SSICRS
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Robotic Cardiac Surgeon | Surgical Robotics Pioneer | Industry Leader
            </p>
          </div>

          {/* Expert 2 */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image2.png"
              alt="Expert 2"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px]"
            />
            <h3
              className="mt-4 text-2xl sm:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Sudhir K Rawal, MD
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              MBBS, MS, M.Ch, D.N.B (Urology)
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Medical Director and Chief of GenitoUro – Oncology Services | Rajiv Gandhi Cancer Institute and Research Center, New Delhi
            </p>
          </div>

          {/* Expert 3 */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image3.png"
              alt="Expert 3"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px]"
            />
            <h3
              className="mt-4 text-2xl sm:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Prof. Dr. Somashekhar SP
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              MBBS, MS, MCh (Onco), FRCS Edinburgh
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Chairman - Medical Advisory Board | Aster DM Healthcare - GCC & India
            </p>
          </div>

          {/* Expert 4 */}
          <div className="flex flex-col items-center w-full">
            <Image
              src="/Images/homepage/section7/image4.png"
              alt="Expert 4"
              width={373}
              height={378}
              className="rounded-xl w-full h-auto max-w-[300px]"
            />
            <h3
              className="mt-4 text-2xl sm:text-3xl"
              style={{
                fontFamily: "DM Serif Text, serif",
                fontWeight: 400,
                color: "#401323",
              }}
            >
              Dr. Nitin Kumar Rajput
            </h3>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "14px",
                color: "#D2A073",
              }}
            >
              MCH (Cardiothoracic and Vascular Surgery), MS (General Surgery)
            </p>
            <p
              className="mt-2 text-sm sm:text-base max-w-sm"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                color: "#A67950",
                lineHeight: "1.4",
              }}
            >
              Associate Director - Cardiac Surgery | Medanta, The Medicity - Gurugram, Haryana
            </p>
          </div>

          {/* Expert 5 */}
          {/* Expert 5 takes full width on tablets so it centers nicely */}
          <div className="sm:col-span-2 flex justify-center w-full">
            <div className="flex flex-col items-center max-w-[300px]">
              <Image
                src="/Images/homepage/section7/image5.png"
                alt="Expert 5"
                width={370}
                height={330}
                className="rounded-xl w-full h-auto"
              />
              <h3
                className="mt-4 text-2xl sm:text-3xl"
                style={{
                  fontFamily: "DM Serif Text, serif",
                  fontWeight: 400,
                  color: "#401323",
                }}
              >
                Dr. Magan Mehrotra
              </h3>
              <p
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#D2A073",
                  lineHeight: "1.4",
                }}
              >
                MS, MRCS (Edinburgh), MNAMS, FNB - Minimal Access and Bariatric Surgery
              </p>
              <p
                className="mt-2 text-sm sm:text-base max-w-sm"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 400,
                  color: "#A67950",
                  lineHeight: "1.4",
                }}
              >
                Managing Director - Apex Hospital, Moradabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}