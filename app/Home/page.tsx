// app/Home/page.tsx
"use client";

import Section1 from "@/components/homepage/section1";
import Section2 from "@/components/homepage/section2";
import Section3 from "@/components/homepage/section3";
import Section4 from "@/components/homepage/section4";
import Section5 from "@/components/homepage/section5";
import Section6 from "@/components/homepage/section6";
import Section7 from "@/components/homepage/section7";
import Section8 from "@/components/homepage/section8";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    // CRUCIAL: h-screen, overflow-y-scroll, snap-y, and snap-mandatory enable the section-snapping effect.
    <div
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* All primary sections must be h-full and snap-start */}
      <Section1 className="snap-start h-full" /> 
      <Section2 className="snap-start h-full" />
      <Section3 className="snap-start h-full" />
      <Section4 className="snap-start h-full" />
      <Section5 className="snap-start h-full" />
      <Section6 className="snap-start h-full" />
      <Section7 className="snap-start h-full" />
      <Section8 className="snap-start h-full" />
      {/* Footer can be snap-start, but often doesn't need h-full */}
      <Footer className="snap-start" />
    </div>
  );
}