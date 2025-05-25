"use client";

import Image from "next/image";
import {
  Blog,
  Certification,
  Experience,
  Expertise,
  Footer,
  Hero,
  Navbar,
} from "./components/organisms";

export default function Home() {
  return (
    <div>
      <div className="fixed -top-10 left-0 opacity-80  z-0 ">
        <Image
          src={`./icons/box2.svg`}
          width={96}
          height={43}
          alt="html"
          className="w-screen h-screen z-0"
        />
      </div>

      {/* nav menu */}
      <Navbar />
      {/* end nav menu */}
      {/* Section Hero */}
      <Hero />
      {/* End Hero */}
      {/* Section Expertise */}
      <Expertise />
      {/* Section Experience */}
      <Experience />
      {/* end Section Experience */}
      {/* Section Certifications */}
      <Certification />
      {/* End Section Certifications */}
      {/* Section Certifications */}
      <Blog />
      {/* End Section Certifications */}
      {/* Section Footer */}
      <Footer />
      {/* Section Footer */}
    </div>
  );
}
