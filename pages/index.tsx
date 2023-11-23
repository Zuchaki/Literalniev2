import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { getWords } from "../services/getWord";
import { useEffect, useState } from "react";
import Keyboard from "../components/Keyboard/Keyboard";
import Trials from "../components/ResultsLetters/ResultsLetters";
import { endOfArray } from "@/utils/findEndOfArray";
import ResultsLetters from "../components/ResultsLetters/ResultsLetters";

const inter = Inter({ subsets: ["latin"] });

export enum Status {
  FOUND = "FOUND",
  IN_THE_WRONG_PLACE = "IN_THE_WRONG_PLACE",
  MISS = "MISS",
  IN_TRY = "IN_TRY",
}

export type Word = { letter: string; status: Status }[];

const Home = () => {
  const [words, setWords] = useState<Word[]>([[]]);
  useEffect(() => {
    console.log(endOfArray(words));
  }, [words]);
  const { data, isError, isLoading } = useQuery({
    queryFn: getWords,
    queryKey: ["words"],
  });

  const addLetterToArray = (clickedKey?: string) => {
    if (typeof clickedKey !== "string") return;
    if (endOfArray(words).inner >= 5) return;

    const newWords = [...words];
    newWords[endOfArray(words).outer] = [
      ...newWords[endOfArray(words).outer],
      {
        letter: clickedKey,
        status: Status.IN_TRY,
      },
    ];
    setWords(newWords);
  };

  const deleteLetterFromArray = () => {
    if (endOfArray(words).inner === 0) return;

    const newWords = [...words];
    newWords[endOfArray(words).outer] = newWords[endOfArray(words).outer].slice(
      0,
      -1
    );
    setWords(newWords);
  };

  const checkWordInArray = () => {
    if (endOfArray(words).inner < 5) return;
    setWords([...words, []]);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ResultsLetters words={words} />
      <Keyboard
        addLLetterToArray={addLetterToArray}
        deleteLetterFromArray={deleteLetterFromArray}
        checkWordInArray={checkWordInArray}
      />
    </main>
  );
};

export default Home;
