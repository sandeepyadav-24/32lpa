import React from "react";
import LetterPullup from "./magicui/letter-pullup";

const Hero = () => {
  return (
    <div className="bg-[#F6F6F6] flex flex-row ">
      <div className="mx-20 w-1/2">
        <h1 className="text-7xl font-bold">
          Your Ultimate
          <span className="text-[#1C4980] px-2 ">
            College Placement Preparation
          </span>
          Hub
        </h1>
        <h3 className="text-[#787878] text-2xl my-5">
          Stay ahead of the competition with detailed insights on companies
          visiting our campus.
        </h3>
      </div>
      <div className="">Here Put some Nice Diagram and Pictures</div>
    </div>
  );
};

export default Hero;
