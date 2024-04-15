import React from "react";
import styled from "styled-components";

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const Letter = styled.div`
  /* background: white; */
  opacity: ${(props) => (props.selected ? "0.2" : "1")};
`;
export const Letters = ({ word, setWordWhole, wordWhole }) => {
  console.log(word);
  const handleAddLetter = (e, value) => {
    const ind = word.split("").findIndex((el) => el.toLowerCase() === value);
    console.log("====================================");
    console.log(ind);
    console.log("====================================");
    const newWord = word
      .split("")
      .map((w, index) =>
        ind === index
          ? value.toUpperCase()
          : wordWhole[index] === "_"
          ? "_"
          : w.toUpperCase()
      )
      .join("");
    setWordWhole(newWord);
  };
  return (
    <div className="grid grid-cols-9 gap-y-5 sm:grid-cols-4 ">
      {alphabet.map((letter) => (
        <Letter
          key={letter}
          //   selected
          className="py-4 rounded-md flex justify-center w-7 items-center bg-slate-50 font-bold text-2xl cursor-pointer hover:opacity-35"
          onClick={(e) => handleAddLetter(e, letter)}
        >
          <span className="text-xs">{letter.toUpperCase()}</span>
        </Letter>
      ))}
    </div>
  );
};
