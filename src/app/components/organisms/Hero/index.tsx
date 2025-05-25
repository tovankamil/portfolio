import React from "react";
import { Button } from "../../atoms";
import Image from "next/image";

const index = () => {
  return (
    <div className="max-w-[1264px] px-4 sm:mx-auto flex flex-col sm:flex-row mt-20  pt-10 sm:pt-[114px] ">
      {/* left */}
      <div className="w-full sm:w-8/12 flex flex-col justify-start space-y-12  z-40">
        <h1 className="">
          <span> Frontend Artist. Backend Wizard. </span>
          <br className="hidden  sm:block" />
          <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-greens-400 bg-clip-text text-transparent">
            Digital Universe Architect.
          </span>
        </h1>
        <div className="hidden sm:flex flex-row  items-center  justify-start space-x-4 font-semibold  py-2 px-4 bg-gray-900 w-46 text-white rounded-[42px]  text-[18px]">
          <Image
            src={`/picture.png`}
            width={48}
            height={48}
            alt="html"
            className="z-30 border-2 rounded-full border-gray-400"
          />
          <span className="text-lg">Hire Me</span>
        </div>
      </div>
      {/* right */}
      <div className="w-full sm:w-4/12 flex flex-col justify-center items-start p-4  z-40">
        <p className="font-medium text-[18px] text-left">
          Full-stack mastery: Delivering fast, optimized & future-proof
          apps—frontend finesse meets backend power.
        </p>
        <div className="flex flex-row w-full mt-10 items-center space-x-2">
          <div className="flex flex-row -space-x-4 ">
            <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
            <div className="w-9 h-9 bg-gray-400 rounded-full"></div>
            <div className="w-9 h-9 bg-gray-500 rounded-full"></div>
          </div>
          <p className="text-[12px]"> Loved by 500 Founders</p>
        </div>
      </div>
    </div>
  );
};

export default index;
