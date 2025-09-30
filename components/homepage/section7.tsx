"use client";

 import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
 export default function Section7() {
   return (
     <section className="w-full bg-white min-h-[90vh] flex flex-col items-start justify-start relative">
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
             left: "230px",
           }}
         >
           Our Expert Faculty
         </h2>

         {/* Image 1 (Sudhir Srivastava, MD) */}
         <div
           className="absolute"
           style={{
             top: "200px",
             left: "330px",
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

         {/* Image 1 Text (Sudhir Srivastava, MD) */}
<h3
  className="absolute"
  style={{
    top: "600px",
    left: "330px",
    color: "#401323",
    fontFamily: "DM Serif Text, serif",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // equivalent to 36px
  }}
>
  Sudhir Srivastava, MD
</h3>

<p
  className="absolute"
  style={{
    top: "645px",
    left: "330px",
    color: "#D2A073",
    fontFamily: "Lato, sans-serif",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "150%", // equivalent to 24px
  }}
>
  Founder, Chairman, CEO - SSICRS
</p>

<p
  className="absolute"
  style={{
    top: "670px",
    left: "330px",
    color: "#A67950",
    fontFamily: "Lato, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // equivalent to 24px
  }}
>
  Robotic Cardiac Surgeon | Surgical Robotics<br/> Pioneer | Industry Leader
</p>


         {/* Image 2 (Sudhir K Rawal, MD) */}
         <div
           className="absolute"
           style={{
             top: "200px",
             left: "800px",
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

         {/* Image 2 Text (Sudhir K Rawal, MD) */}
<h3
  className="absolute"
  style={{
    top: "600px",
    left: "800px",
    color: "#401323",
    fontFamily: "DM Serif Text",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 36px
  }}
>
  Dr. Husam Balkhy
</h3>

  <p
  className="absolute"
  style={{
    top: "645px",
    left: "800px",
    color: "#D2A073",
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "150%", // 24px
  }}
>
  MBBS, MS, FACS, FACC
</p>

<p
  className="absolute"
  style={{
    top: "670px",
    left: "800px",
    color: "#A67950",
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 24px
  }}
>
The University of Chicago Medicine and Biological <br/>Sciences Chicago, IL, USA
</p>


         {/* Image 3 (Prof. Dr. Somashekhar SP) */}
         <div
           className="absolute"
           style={{
             top: "200px",
             left: "1270px",
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
{/* Image 3 Text (Prof. Dr. Somashekhar SP) */}
<h3
  className="absolute"
  style={{
    top: "600px",
    left: "1270px",
    color: "#401323",
    fontFamily: "DM Serif Text",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 36px
  }}
>
  Dr. Nitin Kumar Rajput
</h3>
<p
  className="absolute"
  style={{
    top: "645px",
    left: "1270px",
    color: "#D2A073",
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: 400,
    lineHeight: "150%", // 24px
  }}
>
MCH (Cardiothoracic and Vascular Surgery), MS<br/> (General Surgery)
</p>
<p
  className="absolute"
  style={{
    top: "695px",
    left: "1270px",
    color: "#A67950",
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 24px
  }}
>
Associate Director - Cardiac Surgery | Medanta, <br/>The Medicity - Gurugram, Haryana
</p>



<div
  className="absolute"
  style={{
    top: "800px", // adjust to position below Image 3
    left: "1520px", // aligned with Image 3
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    padding: "10px 28px", // wider for rectangular oval
    borderRadius: "30px", // slightly rounded rectangular shape
    border: "2px solid rgba(0,0,0,0)",
    background: "#A46831",
    cursor: "pointer",
  }}
>
  <span
    style={{
      color: "#FFFFFF",
      fontFamily: "Lato, sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      display: "flex",
      alignItems: "center", // keeps text and arrow aligned
      gap: "6px", // space between text and arrow
    }}
  >
    View All <FiArrowRight size={16} />
  </span>
</div>

        {/* Button 
        <button
          className="absolute flex items-center justify-center rounded-full transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,234,210,0.5)]"
          style={{
            top: "58%", // moved a bit lower from 63%
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "167px",
            height: "43px",
            background: "linear-gradient(90deg, #FBFAF2, #FFEAD2)",
            fontFamily: "Lato, sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            color: "#000",
          }}
        >
          Register Now
          <FiArrowRight className="ml-2" size={18} />
        </button>*/}

{/* View All Button - Mobile / Tablet */}
<div className="md:hidden flex justify-center mt-8">
  <button
    className="px-6 py-3 rounded-full bg-[#A46831] text-white flex items-center justify-center gap-2"
    style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px" }}
  >
    View All
  </button>
</div>


         {/* Removed Image 4 (Dr. Nitin Kumar Rajput) and its text */}

         {/* Removed Image 5 (Dr. Magan Mehrotra) and its text */}
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

           {/* Expert 1 (Sudhir Srivastava, MD) */}
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

           {/* Expert 2 (Sudhir K Rawal, MD) */}
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

           {/* Expert 3 (Prof. Dr. Somashekhar SP) */}
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
 

           {/* Removed Expert 4 and Expert 5 sections from here */}
{/* View All Button - PC / Laptop */}
<div
  className="absolute"
  style={{
    top: "800px", // adjust this value to position below Image 3
    left: "1270px", // aligned with Image 3
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    borderRadius: "100px",
    border: "2px solid rgba(0,0,0,0)",
    background: "#A46831",
    cursor: "pointer",
  }}
>
  <span style={{ color: "#FFFFFF", fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px" }}>
    View All
  </span>
</div>

{/* View All Button - Mobile / Tablet */}
<div className="md:hidden flex justify-center mt-8">
  <button
    className="px-6 py-3 rounded-full bg-[#A46831] text-white flex items-center justify-center gap-2"
    style={{ fontFamily: "Lato, sans-serif", fontWeight: 500, fontSize: "16px" }}
  >
    View All
  </button>
</div>

         </div>
       </div>
     </section>
   );
 }