"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreenClient";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function SplashLayout({ children }: Props) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* SplashScreen only */}
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {/* Render Header and page content only after splash */}
      {splashDone && (
        <>
          <Header />
          <main className="min-h-screen">{children}</main>
        </>
      )}
    </>
  );
}
