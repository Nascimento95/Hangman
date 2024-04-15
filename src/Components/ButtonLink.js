import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ label, url }) => {
  return (
    <div className="bg-[#2663FF] p-1 rounded-xl flex-1 h-full cursor-pointer hover:opacity-70">
      <div className="flex justify-center items-center bg-[#2E6AFD] rounded-xl h-full">
        <Link className="text-white font-bold text-lg" to={url}>
          {label}
        </Link>
      </div>
    </div>
  );
};
