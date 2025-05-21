import React from "react";
import { Label } from "../../atoms";
import Image from "next/image";

const index = () => {
  return (
    <div className="max-w-[1264px]  mx-auto mt-[150px]">
      <Label text="Expertise" />
      <h2 className="w-11/12">
        Modern stacks, timeless systems engineered for the companies defining
        tomorrow.
      </h2>
      <div className="flex flex-row w-full justify-between">
        <Image src={`./icons/html.svg`} width={64} height={43} alt="html" />
        <Image src={`./icons/css.svg`} width={64} height={43} alt="html" />
        <Image
          src={`./icons/javascript.svg`}
          width={96}
          height={43}
          alt="html"
        />
        <Image src={`./icons/reactjs.svg`} width={96} height={43} alt="html" />
        <Image
          src={`./icons/tailwinds.svg`}
          width={96}
          height={43}
          alt="html"
        />
      </div>
    </div>
  );
};

export default index;
