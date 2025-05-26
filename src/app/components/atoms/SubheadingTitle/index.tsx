import { FC } from "react";

interface Props {
  title: string;
}
const SubheadingTitle: FC<Props> = ({ title }) => {
  return <h2 className="latestnews">{title}</h2>;
};

export default SubheadingTitle;
