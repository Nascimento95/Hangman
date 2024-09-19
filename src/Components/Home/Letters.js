import React from "react";
import styled from "styled-components";
import useSounds from "../../Hooks/useSounds";

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const Letter = styled.div`
  opacity: ${(props) => (props.selected ? "0.2" : "1")};
`;
export const Letters = ({
  word,
  setWordWhole,
  wordWhole,
  tryGame,
  setTryGame,
}) => {
  const { handleValidateWord, handleWrongWord } = useSounds();
  const handleAddLetter = (e, value) => {
    if (tryGame === 0) return;
    const indices = word.split("").reduce((acc, currentElement, index) => {
      if (currentElement.toLowerCase() === value) {
        acc.push(index);
      }
      return acc;
    }, []);
    const newWord = word
      .split("")
      .map((w, index) =>
        indices.includes(index)
          ? value.toUpperCase()
          : wordWhole[index] === "_"
          ? "_"
          : w.toUpperCase()
      )
      .join("");
    const notFoundWord = newWord === wordWhole;
    if (notFoundWord) {
      handleWrongWord();
      setTryGame((prevTryGame) => prevTryGame - 1);
      return;
    }
    handleValidateWord();
    setWordWhole(newWord);
  };

  return (
    <div className="flex justify-start flex-wrap gap-x-1 gap-y-5 sm:gap-x-4 md:gap-y-6  ">
      {alphabet.map((letter) => (
        <Letter
          key={letter}
          className="py-4 rounded-md flex justify-center w-7 items-center bg-slate-50 font-bold text-2xl cursor-pointer hover:opacity-35 md:rounded-xl md:py-6 md:px-7 lg:py-8 lg:px-10"
          onClick={(e) => handleAddLetter(e, letter)}
        >
          <span className="font-kavoon text-xs md:text-base">
            {letter.toUpperCase()}
          </span>
        </Letter>
      ))}
    </div>
  );
};
