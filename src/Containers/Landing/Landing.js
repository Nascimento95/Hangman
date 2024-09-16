import React from "react";
import Play from "../../Assets/Icons/play.svg";
import Title from "../../Assets/Icons/title.svg";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-hanged-pattern bg-cover flex justify-center items-center px-6 py-36">
      <div className="w-full h-full relative flex flex-col  items-center lg:px-64 2xl:max-w-[60%]">
        <div className=" w-full h-full bg-[rgba(43,66,176,0.60)] rounded-2xl p-3 flex justify-end flex-col">
          <div className="w-full h-full rounded-2xl bg-gradient-to-t from-[rgba(43,66,176,0.50)] to-[rgba(7,25,125,0.50)] flex justify-center items-center">
            <img
              className="hover:opacity-80 cursor-pointer"
              src={Play}
              alt="icon-play"
              onClick={() => navigate("/pick-category")}
            />
          </div>
        </div>
        <img className="absolute  top-[-55px]" src={Title} alt="title-game" />

        <div className="h-14 absolute w-[90%] bottom-7 sm:w-[90%] md:w-[90%] lg:w-[40%]">
          <Button label="comment jouer" onClick={() => console.log("click")} />
        </div>
      </div>
    </div>
  );
};
