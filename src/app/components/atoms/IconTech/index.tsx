import Image from "next/image";
import React, { FC } from "react";
interface Props {
  title: string;
  image: string;
  style?: string;
  iconstyle?: string;
  width?: number | undefined;
  height?: number | undefined;
}
const IconTech: FC<Props> = ({
  title,
  image,
  style,
  width,
  height,
  iconstyle,
}) => {
  return (
    <div
      className={`bg-black rounded-full pb-0.5 w-16 h-7 pl-1 pr-2 flex items-center justify-center ${style}`}
    >
      <Image
        src={`./icons/${image}`}
        width={width}
        height={height}
        alt="html"
        className={`${iconstyle}`}
      />
      <span className="text text-xs font-medium text-white pt-0.5 ">
        {title}
      </span>
    </div>
  );
};

export default IconTech;
