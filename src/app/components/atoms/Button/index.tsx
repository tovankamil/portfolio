import React, { FC } from "react";
interface Props {
  style?: string;
  text?: string;
  icon?: boolean;
}
const index: FC<Props> = ({ style, text, icon }) => {
  if (icon) {
    return (
      <button className={`${style} `}>
        <div className="w-9 h-9 bg-white rounded-full"></div>
        <span> {text}</span>
      </button>
    );
  }

  return <button className={style}>{text}</button>;
};

export default index;
