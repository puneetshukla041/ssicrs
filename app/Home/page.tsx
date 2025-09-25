// app/Home/page.tsx
"use client";

import Section1 from "@/components/homepage/section1";
// Later you can import Section2, Section3, ... Section6

export default function HomePage() {
  return (
    <div className="w-full">
      <Section1 />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <Section4 /> */}
      {/* <Section5 /> */}
      {/* <Section6 /> */}
    </div>
  );
}
