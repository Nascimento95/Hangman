import React from "react";
import category from "../../datas.json";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Home/Header";
import ArrowBack from "../../Assets/Icons/arrow-back.svg";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ButtonLink } from "../../Components/ButtonLink";
export const PickCategory = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="bg-hanged-pattern bg-cover h-screen px-6">
        <div className="mb-8">
          <Header
            iconSrc={ArrowBack}
            labelcategory="Choisissez une catégorie"
            onClick={() => navigate("/")}
          />
        </div>
        {Object.keys(category).map((categoryKey) => (
          <div className="h-14 mb-4">
            <ButtonLink label={categoryKey} url={`/home/${categoryKey}`} />
          </div>
        ))}
      </div>
    </>
  );
};
