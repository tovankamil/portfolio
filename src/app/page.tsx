import Image from "next/image";
import { Experience, Expertise, Hero, Navbar } from "./components/organisms";

export default function Home() {
  return (
    <div>
      {/* nav menu */}
      <div className="relative">
        <div className="fixed -top-10 left-0 opacity-80  z-0 ">
          <Image
            src={`./icons/box2.svg`}
            width={96}
            height={43}
            alt="html"
            className="w-screen h-screen "
          />
        </div>
      </div>
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
      {/* Section Footer */}
    </div>
  );
}
