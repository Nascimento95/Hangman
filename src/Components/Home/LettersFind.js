import React from "react";
import styled from "styled-components";

const Letter = styled.div`
  /* background: white; */
  opacity: ${(props) => (props.selected ? "0.2" : "1")};
`;
export const LettersFind = ({ word = "united kingdom" }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-wrap justify-center gap-5">
        {word.split("").map((letter, index) => {
          if (letter === " ") {
            return null;
          }
          return (
            <div key={index} className="rounded-lg bg-[#3F74FD]">
              <div className="mx-1 my-1 px-1 py-2 bg-[#2464FD] rounded-sm">
                <span className="text-white font-black">{letter}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
