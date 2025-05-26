import Image from "next/image";
import React from "react";
import { SubheadingTitle } from "../../atoms";
import { Article } from "../../molecules";
type article = {
  image: string;
  title: string;
  tag: string;
  date: string;
};
const dummydataArticle: article[] = [
  {
    image: "manworking.jpg",
    title: "  Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis",
    tag: "javascript",
    date: "6 may, 2025",
  },
  {
    image: "manworking.jpg",
    title: "  Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis",
    tag: "javascript",
    date: "6 may, 2025",
  },
  {
    image: "manworking.jpg",
    title: "  Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis",
    tag: "javascript",
    date: "6 may, 2025",
  },
];
const DetailBlogRightPosition = () => {
  return (
    <div className="w-full sm:w-6/12 px-0 sm:px-8 mt-8 sm:mt-0">
      <div className="flex flex-col space-y-8">
        {/* Latest Update*/}
        <div className="flex flex-col space-y-4">
          <SubheadingTitle title="Latest Update" />
          {dummydataArticle.map((item, index) => {
            return (
              <Article
                key={index}
                image={item.image}
                title={item.title}
                tag={item.tag}
                date={item.date}
              />
            );
          })}
        </div>
        {/* end Latest Update*/}

        {/* Latest Update*/}
        <div className="flex flex-col space-y-4">
          <SubheadingTitle title="Related Article" />
          {dummydataArticle.map((item, index) => {
            return (
              <Article
                key={index}
                image={item.image}
                title={item.title}
                tag={item.tag}
                date={item.date}
              />
            );
          })}
        </div>
        {/* end Latest Update*/}
      </div>
    </div>
  );
};

export default DetailBlogRightPosition;
