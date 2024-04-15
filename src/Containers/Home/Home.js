import React, { useState } from "react";
import { Letters } from "../../Components/Home/Letters";
import { Header } from "../../Components/Home/Header";
import { LettersFind } from "../../Components/Home/LettersFind";
import { useParams } from "react-router-dom";
import datas from "../../datas.json";
export const Home = () => {
  const { category } = useParams();
  const randomIndex = Math.floor(Math.random() * datas[category].length);
  const [findword] = useState(datas[category][randomIndex]);
  const [wordWhole, setWordWhole] = useState(
    datas[category][randomIndex]
      .split("")
      .map((word, index) => {
        const pair = index % 2 === 0;
        if (pair) return "_";
        return word;
      })
      .join("")
  );

  console.log(
    "====================================",
    datas[category][randomIndex]
  );
  console.log("====================================");

  return (
    <section className="h-screen w-full bg-hanged-pattern bg-cover px-4 flex flex-col justify-between pb-24">
      <Header rightContent />
      <LettersFind word={wordWhole} />
      <Letters
        word={findword}
        setWordWhole={setWordWhole}
        wordWhole={wordWhole}
      />
    </section>
  );
};
