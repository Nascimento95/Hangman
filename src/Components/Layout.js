import React from "react";
import { useNavigate } from "react-router-dom";

export const Layout = ({ src, titleImg, children, headerSrc, ...props }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full relative flex flex-col items-center px-6 py-36 "
      {...props}
    >
      {headerSrc && (
        <img
          className="absolute  top-[120px] z-50"
          src={headerSrc}
          alt="title-game"
        />
      )}
      <div className="w-full h-full bg-[rgba(43,66,176,0.75)] rounded-2xl p-3  flex justify-end items-center flex-col">
        <div className="w-full h-full rounded-2xl bg-gradient-to-t from-[rgba(43,66,176,0.75)] to-[rgba(7,25,125,0.75)] flex justify-center items-center px-4 relative ">
          {!headerSrc && (
            <h2 className="text-white text-3xl font-bold absolute  top-[60px] text-center font-kavoon px-4">
              choisi une des options ci-dessous
            </h2>
          )}
          {children}
          {src && (
            <img
              className="hover:opacity-80 cursor-pointer"
              src={src}
              alt="icon-play"
              onClick={() => navigate("/pick-category")}
            />
          )}
        </div>
      </div>

      {titleImg && titleImg}
    </div>
  );
};
