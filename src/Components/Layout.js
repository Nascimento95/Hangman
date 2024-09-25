import React from "react";
import { useNavigate } from "react-router-dom";

export const Layout = ({ src, children, headerSrc, ...props }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-full relative flex flex-col items-center px-6 py-32"
      {...props}
    >
      <div className="w-full h-full bg-[rgba(43,66,176,0.75)] rounded-2xl p-3 flex justify-end items-center flex-col  sm:w-[50%] md:w-[40%] lg:w-[35%]">
        <div className="w-full h-full rounded-2xl bg-gradient-to-t from-[rgba(43,66,176,0.75)] to-[rgba(7,25,125,0.75)] flex justify-center items-center px-4 py-10 relative">
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
    </div>
  );
};
