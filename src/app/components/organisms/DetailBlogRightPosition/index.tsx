import Image from "next/image";
import React from "react";

const DetailBlogRightPosition = () => {
  return (
    <div className="w-full sm:w-6/12 px-0 sm:px-8 mt-8 sm:mt-0">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center space-x-2 border-2 p-2 rounded-md  border-gray-100 bg-gray-50 w-full">
          {/* Image */}
          <div className="w-4/12 rounded-md h-20 overflow-hidden relative">
            <Image
              src={`/images/manworking.jpg`}
              alt="html"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className=" line-clamp-3 whitespace-normal  primay-color text-sm">
              Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis
            </h3>
            <div className="flex flex-row items-center justify-between ">
              <time
                dateTime="2024-05-26"
                className="text-xs font-semibold primary-color "
              >
                May 26, 2025
              </time>
              <span className="text-xs bg-amber-200 font-medium px-2 py-0.5 rounded-xl">
                Javascript
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 border-2 p-2 rounded-md  border-gray-100 bg-gray-50 w-full">
          {/* Image */}
          <div className="w-4/12 rounded-md h-20 overflow-hidden relative">
            <Image
              src={`/images/manworking.jpg`}
              alt="html"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className=" line-clamp-3 whitespace-normal  primay-color text-sm">
              Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis
            </h3>
            <div className="flex flex-row items-center justify-between ">
              <time
                dateTime="2024-05-26"
                className="text-xs font-semibold primary-color "
              >
                May 26, 2025
              </time>
              <span className="text-xs bg-amber-200 font-medium px-2 py-0.5 rounded-xl">
                Javascript
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 border-2 p-2 rounded-md  border-gray-100 bg-gray-50 w-full">
          {/* Image */}
          <div className="w-4/12 rounded-md h-20 overflow-hidden relative">
            <Image
              src={`/images/manworking.jpg`}
              alt="html"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className=" line-clamp-3 whitespace-normal  primay-color text-sm">
              Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis
            </h3>
            <div className="flex flex-row items-center justify-between ">
              <time
                dateTime="2024-05-26"
                className="text-xs font-semibold primary-color "
              >
                May 26, 2025
              </time>
              <span className="text-xs bg-amber-200 font-medium px-2 py-0.5 rounded-xl">
                Javascript
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 border-2 p-2 rounded-md  border-gray-100 bg-gray-50 w-full">
          {/* Image */}
          <div className="w-4/12 rounded-md h-20 overflow-hidden relative">
            <Image
              src={`/images/manworking.jpg`}
              alt="html"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className=" line-clamp-3 whitespace-normal  primay-color text-sm">
              Mengenal Teknologi Blockchain dan Manfaatnya untuk Bisnis
            </h3>
            <div className="flex flex-row items-center justify-between ">
              <time
                dateTime="2024-05-26"
                className="text-xs font-semibold primary-color "
              >
                May 26, 2025
              </time>
              <span className="text-xs bg-amber-200 font-medium px-2 py-0.5 rounded-xl">
                Javascript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlogRightPosition;
