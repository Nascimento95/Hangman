import React from "react";
import { Letters } from "../../Components/Home/Letters";
import { Header } from "../../Components/Home/Header";
import { LettersFind } from "../../Components/Home/LettersFind";
export const Home = () => {
  return (
    <section className="h-screen w-full bg-hanged-pattern bg-cover px-4 flex flex-col justify-between pb-24">
      <Header />
      <LettersFind />
      <Letters />
    </section>
  );
};
