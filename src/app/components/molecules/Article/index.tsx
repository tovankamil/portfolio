import Image from "next/image";
import { FC } from "react";

interface Props {
  image: string;
  title: string;
  date: string;
  tag: string;
}

const Article: FC<Props> = ({ image, title, date, tag }) => {
  return (
    <article className="flex flex-row items-center space-x-2 border-2 p-2 rounded-md  border-gray-100 bg-gray-50 w-full">
      <div className="w-4/12 rounded-md h-20 overflow-hidden relative">
        {/* Image */}
        <Image
          src={`/images/${image}`}
          alt="html"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col space-y-4">
        <h3 className=" line-clamp-3 whitespace-normal font-semibold  primay-color text-md">
          {title}
        </h3>
        <div className="flex flex-row items-center justify-between ">
          <time
            dateTime="2024-05-26"
            className="text-xs font-medium text-gray-500"
          >
            {date}
          </time>
          <span className="text-xs bg-amber-200 font-medium px-2 py-0.5 rounded-xl">
            {tag}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Article;
