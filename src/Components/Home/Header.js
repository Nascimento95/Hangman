import React from "react";
import { LifeBar } from "./LifeBar";
import HeartIcon from "../../Assets/Icons/heart.svg";
export const Header = ({ labelcategory = "labelcategory" }) => {
  return (
    <header className="flex items-center justify-between w-full py-6">
      <div className="flex items-center">
        <div className="bg-gradient-to-t from-[rgb(133,125,247)] to-[#F97AFF] rounded-full flex flex-col justify-center items-center px-2  h-8 w-8 sm:h-14 sm:w-14  ">
          <span className="text-white flex w-full bg-white h-1 mb-0.5 "></span>
          <span className="text-white flex w-full bg-white h-1 mb-0.5 "></span>
          <span className="text-white flex w-full bg-white h-1"></span>
        </div>
        <div>
          <span className="text-white text-xs ml-2">{labelcategory}</span>
        </div>
      </div>
      <div className="flex items-center">
        <LifeBar />
        <img className="ml-2" src={HeartIcon} alt="heart-icon" />
      </div>
    </header>
  );
};
