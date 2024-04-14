import React from "react";
import styled from "styled-components";

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const Letter = styled.div`
  /* background: white; */
  opacity: ${(props) => (props.selected ? "0.2" : "1")};
`;
export const Letters = () => {
  return (
    <div className="grid grid-cols-9 gap-y-5 sm:grid-cols-4 ">
      {alphabet.map((letter) => (
        <Letter
          //   selected
          className="py-4 rounded-md flex justify-center w-7 items-center bg-slate-50 font-bold text-2xl cursor-pointer hover:opacity-35"
        >
          <span className="text-xs">{letter.toUpperCase()}</span>
        </Letter>
      ))}
    </div>
  );
};
