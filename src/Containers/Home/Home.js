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
  const [isModal, setIsModal] = useState(false);
  const [tryGame, setTryGame] = useState(4);
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

  return (
    <section className="h-screen w-full bg-hanged-pattern bg-cover flex justify-center">
      <div className="h-full px-3 flex flex-col justify-between pb-24 items-center md:px-12 lg:px-32 max-w-[1124px]">
        {(win || loose || isModal) && (
          <div className="absolute h-full w-full z-20">
            <Modal win={win} loose={loose} setIsModal={setIsModal} />
          </div>
        )}
        <Header
          rightContent
          tryGame={tryGame}
          onClick={() => setIsModal(true)}
        />
        <LettersFind word={wordWhole} />
        <Letters
          word={findword}
          setWordWhole={setWordWhole}
          wordWhole={wordWhole}
          setTryGame={setTryGame}
          tryGame={tryGame}
        />
      </div>
    </section>
  );
};
