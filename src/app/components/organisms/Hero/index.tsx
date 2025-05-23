import React from "react";
import { Button } from "../../atoms";

const index = () => {
  return (
    <div className="max-w-[1264px]  mx-auto flex flex-row mt-20  pt-[114px] ">
      {/* left */}
      <div className="w-8/12 flex flex-col justify-start space-y-12  z-40">
        <h1 className="">
          <span> Frontend Artist. Backend Wizard. Digital</span>
          <br />
          <span className="bg-gradient-to-r from-red-600 via-yellow-500 to-greens-400 bg-clip-text text-transparent">
            Universe Architect.
          </span>
        </h1>
        <Button
          style="hidden sm:flex flex-row  items-center   space-x-4  font-semibold px-[24px] py-2 px-10 bg-gray-900 w-48 text-white rounded-[42px]  text-[18px]"
          text="Hire Me"
          icon
        />
      </div>
      {/* right */}
      <div className="w-4/12 flex flex-col justify-center items-start p-4  z-40">
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
