import React, { FC } from "react";
interface Props {
  text: string;
}
const index: FC<Props> = ({ text }) => {
  return <div className="text-sm text-gray-600">{text}</div>;
};

export default index;
