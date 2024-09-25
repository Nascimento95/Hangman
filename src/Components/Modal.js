import React from "react";
import { Layout } from "./Layout";
import { Button } from "./Button";
import youWin from "../Assets/Icons/you-win.svg";
import youLoose from "../Assets/Icons/you-loose.svg";
import { useNavigate, useParams } from "react-router-dom";
import useStoreSound from "../Store/useStoreSound";

export const Modal = ({ win, loose, setIsModal, resetGame }) => {
  const ImageHeaderModal = win ? youWin : loose ? youLoose : "";
  const setStopSound = useStoreSound((state) => state.setStopSound);
  const { category = "" } = useParams();
  const navigate = useNavigate();
  const onContinue = () => {
    if (win || loose) {
      resetGame();
    }
    setIsModal(false);
  };
  return (
    <Layout headerSrc={ImageHeaderModal}>
      <div className="w-full opacity-100  h-full flex flex-col justify-center">
        <div className="flex-1 flex justify-center items-center">
          {!ImageHeaderModal ? (
            <h2 className="text-white text-xl text-center font-bold font-kavoon md:text-3xl py-4">
              Choisis une des options ci-dessous
            </h2>
          ) : (
            <img
              className="flex-1 h-44"
              src={ImageHeaderModal}
              alt="title-game"
            />
          )}
        </div>

        <div className="flex flex-col">
          <div className="h-16 mb-4 sm:mb-6">
            <Button label="Continuer" onClick={onContinue} />
          </div>
          <div className="h-16 mb-4 sm:mb-6">
            <Button
              className="mb-4 h-16"
              label="Nouvelle Catégorie"
              onClick={() =>
                navigate("/pick-category", {
                  state: { goback: category },
                })
              }
            />
          </div>
          <div className="h-16 mb-4 sm:mb-6">
            <Button
              className="h-16"
              variant="secondary"
              label="Quitter le Jeu"
              onClick={() => {
                setStopSound();
                navigate("/");
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
