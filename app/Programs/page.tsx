// app/aboutus/page.tsx
"use client";

import React from "react";
import Section1 from "@/components/programspage/section1";
import Section2 from "@/components/programspage/section2";
import Footer from "@/components/Footer";
export default function ProgramsPage() {
  return (
    <div className="w-full bg-[#FBFAF2]">
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
