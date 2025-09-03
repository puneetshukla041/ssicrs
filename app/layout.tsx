import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google"; // Add Lato import
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400", // "400" corresponds to "Regular"
});

export const metadata: Metadata = {
  title: "SSI Studios",
  description: "Professional web & mobile app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${lato.variable}`}>
      <body
        className={`antialiased font-lato`} // Apply the new Lato font globally
      >


        {/* ✅ Page Content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
