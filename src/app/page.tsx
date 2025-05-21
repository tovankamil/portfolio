import Image from "next/image";
import { Expertise, Hero, Navbar } from "./components/organisms";

export default function Home() {
  return (
    <div>
      {/* nav menu */}

      <Navbar />
      {/* end nav menu */}
      {/* Section Hero */}
      <Hero />
      {/* End Hero */}
      {/* Section Expertise */}
      <Expertise />
      {/* Section Certifications */}
      {/* Section Footer */}
    </div>
  );
}
