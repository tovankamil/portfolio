"use client";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

interface props {
  index: number;
  toggle: number;
  imageContent: string;
  imageAuthor: string;
  authorName: string;
  times: string;
  title: string;
  content: string;
  url: string;
  setToggle: (index: number) => void;
}
const BoxBlog: FC<props> = ({
  index,
  imageContent,
  imageAuthor,
  authorName,
  times,
  title,
  content,
  url,
  toggle,
  setToggle,
}) => {
  return (
    <div className=" w-6/12 break-words sm:w-4/12 flex flex-col p-3 z-30">
      {/* Image */}
      <Image
        src={`/images/${imageContent}`}
        width={300}
        height={300}
        alt="html"
        className="z-30 whitespace-normal  w-auto "
      />
      {/* endImage */}

      {/* Author */}
      <div className="w-full flex flex-row items-center space-x-2 mt-4 relative">
        <Image
          src={`/${imageAuthor}`}
          width={32}
          height={32}
          alt="html"
          className="z-30 border-2 rounded-full w-12 h-12 border-gray-400"
        />
        <div className="w-full flex flex-col">
          <div className="text-xs font-semibold">{authorName}</div>
          <div className="text-xs font-medium">{times}</div>
        </div>
        <div className="">
          <EllipsisVertical
            size={20}
            className="hover:cursor-pointer z-30"
            onClick={() => setToggle(index)}
          />
          <div
            className={`absolute  justify-center w-3/12 bg-gray-100 z-30 -right-5 -bottom-5 rounded-2xl ${toggle === index ? "flex" : "hidden"} `}
          >
            <Link
              href={`/${url}`}
              className="font-medium text-xs p-1 text-center"
            >
              Read more
            </Link>{" "}
          </div>
        </div>
      </div>
      {/* end Author */}

      {/* Title */}
      <div className="mt-4 space-y-2">
        <h1 className="blog line-clamp-2 whitespace-normal ">{title}</h1>
        <p className="text-sm line-clamp-6 max-w-sm whitespace-normal text-[#212121]">
          {content}
        </p>
      </div>
      {/* endTitle */}

      {/* Readmore */}
      {/* EndReadmore */}
    </div>
  );
};

export default BoxBlog;
