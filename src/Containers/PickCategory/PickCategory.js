import React from "react";
import category from "../../datas.json";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Home/Header";
import ArrowBack from "../../Assets/Icons/arrow-back.svg";
import { useLocation, useNavigate } from "react-router-dom";
import useStoreSound from "../../Store/useStoreSound";

export const PickCategory = () => {
  const navigate = useNavigate();
  const setStopSound = useStoreSound((state) => state.setStopSound);
  const { state } = useLocation();
  const handleGoBack = () => {
    if (state !== null) {
      navigate(`/home/${state.goback}`);
      return;
    }
    setStopSound();
    navigate("/");
  };
  return (
    <>
      <div className="bg-hanged-pattern bg-cover h-screen px-6">
        <div className="mb-8">
          <Header
            iconSrc={ArrowBack}
            labelcategory="Choisissez une catégorie"
            onClick={handleGoBack}
          />
        </div>
        <div className="flex flex-col items-center">
          {Object.keys(category).map((categoryKey, index) => (
            <div
              className="h-14 mb-4 w-full md:max-w-[50%] 2xl:max-w-[30%]"
              key={categoryKey + index}
            >
              <Button
                label={categoryKey}
                onClick={() => navigate(`/home/${categoryKey}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
