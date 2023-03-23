import React from "react";

const Shimmer = () => {
  return (

    <div className="flex flex-wrap">
      {Array(8).fill("").map((a, index) => {
        return (
          <div
            className="rounded-lg mx-2 mb-6 w-[15.5rem]"
            key={index}
          >
            <div className="rounded-xl bg-gray-300">
              <div className="w-80 h-44"></div>
            </div>
            <div className="py-3">
              <div className="text-medium rounded-md font-medium my-1 w-[228] h-6 bg-gray-300"></div>
              <div className="text-xs rounded-md text-gray-500 my-1 w-[228] h-6 bg-gray-300"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
