import React, { FC } from "react";
interface Props {
  text: string;
  bg?: boolean;
  styleBgStyle?: string;
}
const index: FC<Props> = ({ text, bg, styleBgStyle }) => {
  if (bg) {
    return (
      <span
        className={`text-sm text-gray-100 ${styleBgStyle} px-10 py-1.5 rounded-4xl`}
      >
        {text}
      </span>
    );
  }
  return <div className="text-sm text-gray-600">{text}</div>;
};

export default index;
