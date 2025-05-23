import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const interfont = Inter({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tofan - Fullstack Engineer | JavaScript, React & Node.js Specialist",
  description:
    "Personal portfolio of Tofan, a Fullstack Engineer with [7] years of experience building scalable web apps. Explore my projects in [Your Tech Stack] and let’s collaborate!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interfont.variable}antialiased`}>{children}</body>
    </html>
  );
}
