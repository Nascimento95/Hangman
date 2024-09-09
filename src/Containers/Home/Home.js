import React, { useMemo, useState } from "react";
import { Letters } from "../../Components/Home/Letters";
import { Header } from "../../Components/Home/Header";
import { LettersFind } from "../../Components/Home/LettersFind";
import { useParams } from "react-router-dom";
import datas from "../../datas.json";
import { Modal } from "../../Components/Modal";
export const Home = () => {
  const { category } = useParams();
  const randomIndex = Math.floor(Math.random() * datas[category].length);
  const [findword] = useState(datas[category][randomIndex].toUpperCase());
  const [tryGame, setTryGame] = useState(3);
  const [wordWhole, setWordWhole] = useState(
    datas[category][randomIndex]
      .split("")
      .map((word, index) => {
        const pair = index % 2 === 0;
        if (pair) return "_";
        return word;
      })
      .join("")
      .toUpperCase()
  );

  const win = useMemo(() => findword === wordWhole, [findword, wordWhole]);
  const loose = useMemo(() => tryGame === 0, [tryGame]);
  console.log(tryGame);
  return (
    <section className="h-screen w-full bg-hanged-pattern bg-cover px-4 flex flex-col justify-between pb-24 items-center">
      {win ||
        (loose && (
          <div className="absolute h-full w-full z-20">
            <Modal />
          </div>
        ))}
      <Header rightContent tryGame={tryGame} />
      <LettersFind word={wordWhole} />
      <Letters
        word={findword}
        setWordWhole={setWordWhole}
        wordWhole={wordWhole}
        setTryGame={setTryGame}
        tryGame={tryGame}
      />
    </section>
  );
};
