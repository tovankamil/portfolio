import React from "react";
import { Label } from "../../atoms";
import Image from "next/image";

const index = () => {
  return (
    <div
      className="max-w-[1264px] px-4 sm:mx-auto mt-[150px]"
      style={{ backgroundImage: "url(./icons/box.svg)" }}
    >
      <Label text="Expertise" />
      <h2 className="w-11/12">
        Modern stacks, timeless systems engineered for the companies defining
        tomorrow.
      </h2>
      <div className="box-expertise relative overflow-x-hidden overflow-y-hidden w-full">
        <div className="inline-block whitespace-nowrap  expertise">
          <div className="inline-flex w-full justify-start px-10 space-x-10 mt-8 ">
            <Image
              src={`./icons/html.svg`}
              width={54}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/css.svg`}
              width={54}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/javascript.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/reactjs.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/tailwinds.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/nodejs.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/tailwinds.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/mysql.svg`}
              width={96}
              height={43}
              alt="html"
              className="ml-10"
            />
          </div>
          <div className="inline-flex w-full justify-start px-10 space-x-10 mt-8 ">
            <Image
              src={`./icons/html.svg`}
              width={54}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/css.svg`}
              width={54}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/javascript.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/reactjs.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/tailwinds.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/nodejs.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/tailwinds.svg`}
              width={96}
              height={43}
              alt="html"
              className=" ml-10"
            />
            <Image
              src={`./icons/mysql.svg`}
              width={96}
              height={43}
              alt="html"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
