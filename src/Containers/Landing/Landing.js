import React from "react";
import Play from "../../Assets/Icons/play.svg";
import Title from "../../Assets/Icons/title.svg";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";
export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-hanged-pattern bg-cover flex justify-center items-center px-6 py-36">
      <div className="w-full h-full relative flex flex-col  items-center">
        <div className=" w-full h-full bg-[#2B42B0] rounded-2xl p-3  opacity-75 flex justify-end flex-col">
          <div className="w-full h-full rounded-2xl bg-gradient-to-t from-[#2B42B0] to-[#07197D] flex justify-center items-center">
            <img
              className="hover:opacity-80 cursor-pointer"
              src={Play}
              alt="icon-play"
              onClick={() => navigate("/pick-category")}
            />
          </div>
        </div>
        <img className="absolute  top-[-55px]" src={Title} alt="title-game" />

        <div className="h-10 absolute w-[90%] bottom-7">
          <Button label="comment jouer" />
        </div>
      </div>
    </div>
  );
};
