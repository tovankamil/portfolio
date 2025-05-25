import Image from "next/image";
import { Label } from "../../atoms";

const Certification = () => {
  return (
    <div
      className="max-w-[1264px]  mx-auto mt-[150px]"
      style={{ backgroundImage: "url(./icons/box.svg)" }}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <Label text="Certification" />
        <h2 className="w-full text-center">
          <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-greens-400 bg-clip-text text-transparent">
            Personal Certification
          </span>

          <span>
            {" "}
            And Achievement <br /> That Validate My Expertise
          </span>
        </h2>
      </div>
      <div className="w-full flex flex-col items-center justify-center z-30 mt-18 ">
        <Image
          src={`/Golang-certified.png`}
          width={800}
          height={800}
          alt="html"
          className="z-30 border-2 border-amber-400"
        />
        <h3 className="text-center mt-4 font-bold text-2xl">Golang </h3>
      </div>
    </div>
  );
};

export default Certification;
