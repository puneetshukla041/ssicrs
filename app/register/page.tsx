"use client";

import Header from "@/components/Header"; // adjust path if needed

export default function RegisterPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center text-center px-4 pt-32">
        {/* Heading */}
        <h1
          className="text-center"
          style={{
            fontFamily: "DM Serif Text, serif",
            fontWeight: "400", // Regular
            fontSize: "64px",
            color: "#A67950",
            lineHeight: "1.2",
          }}
        >
          Take the First Step Toward<br />
          Advancing Your Robotic Surgery Skills
        </h1>

        {/* Description */}<p
  className="mt-6 text-center"
  style={{
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
    fontSize: "20px",
    color: "#401323",
    lineHeight: "1.5",
    whiteSpace: "pre", // preserves spaces and only <br /> breaks
  }}
>
  Please Complete the form below to enroll into our Comprehensive robotic surgery training programs, upon successful registration, our team<br />
  will reach out with program details, schedules, and next steps.
</p>

      </div>
    </div>
  );
}
