import React from "react";
import { Layout } from "./Layout";
import { Button } from "./Button";
import youWin from "../Assets/Icons/you-win.svg";
import youLoose from "../Assets/Icons/you-loose.svg";
import { useNavigate } from "react-router-dom";

export const Modal = ({ win }) => {
  const ImageHeaderModal = win ? youWin : youLoose;
  const navigate = useNavigate();

  return (
    <Layout headerSrc={ImageHeaderModal}>
      <div className="w-full opacity-100">
        <div className="h-14 mb-6">
          <Button label="Continue" onClick={() => navigate(0)} />
        </div>
        <div className="h-14 mb-6">
          <Button
            label="New Category"
            onClick={() => navigate("/pick-category")}
          />
        </div>
        <div className="h-14 mb-6 ">
          <Button
            variant="secondary"
            label="Quit Game"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </Layout>
  );
};
