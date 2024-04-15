import React from "react";

export const Button = ({ label, onClick }) => {
  return (
    <div
      className="bg-[#2663FF] p-1 rounded-xl flex-1 h-full cursor-pointer hover:opacity-70"
      onClick={onClick}
    >
      <div className="flex justify-center items-center bg-[#2E6AFD] rounded-xl h-full">
        <span className="text-white font-bold text-lg">{label}</span>
      </div>
    </div>
  );
};
