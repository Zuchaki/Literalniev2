import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { getWords } from "../services/getWord";
import { useEffect, useState } from "react";
import Keyboard from "../components/Keyboard/Keyboard";
import Trials from "../components/ResultsLetters/ResultsLetters";
import { endOfArray } from "@/utils/findEndOfArray";
import ResultsLetters from "../components/ResultsLetters/ResultsLetters";
import SingleLetter from "@/components/ResultsLetters/SingleLetter";
import { split } from "postcss/lib/list";

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
  const [checked, setChecked] = useState<Word>([]);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const {
    data: answerWord,
    isError,
    isLoading,
  } = useQuery({
    queryFn: () => getWords(),
    queryKey: ["words"],
  });

  const { data: checkWord } = useQuery({
    queryFn: () =>
      getWords(
        words[endOfArray(words).outer]
          .map((e) => e.letter)
          .join("")
          .toLowerCase()
      ),
    queryKey: [
      "words",
      words[endOfArray(words).outer]
        .map((e) => e.letter)
        .join("")
        .toLowerCase(),
    ],
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

  const deleteLastLetterFromArray = () => {
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
    if (!checkWord?.[0]?.slowo) return console.log("Nie ma takeigo slowa");
    const lastWordIndex = endOfArray(words).outer;
    const newWords = words;
    const newChecked = checked;
    answerWord?.[0].slowo
      .toUpperCase()
      .split("")
      .forEach((letterOfSplitWord, index) => {
        newWords[lastWordIndex].forEach(
          (singleLetterOfNewWords, letterIndex) => {
            if (
              letterOfSplitWord === singleLetterOfNewWords.letter.toUpperCase()
            ) {
              newWords[lastWordIndex][letterIndex] = {
                letter: newWords[lastWordIndex][letterIndex].letter,
                status: Status.IN_THE_WRONG_PLACE,
              };
              newChecked.push({
                letter: newWords[lastWordIndex][letterIndex].letter,
                status: Status.IN_THE_WRONG_PLACE,
              });
            }
          }
        );

        if (
          letterOfSplitWord ===
          newWords[lastWordIndex][index].letter.toUpperCase()
        ) {
          newWords[lastWordIndex][index] = {
            letter: newWords[lastWordIndex][index].letter,
            status: Status.FOUND,
          };
          newChecked.push({
            letter: newWords[lastWordIndex][index].letter,
            status: Status.FOUND,
          });
        }
        if (newWords[lastWordIndex][index].status === "IN_TRY") {
          newWords[lastWordIndex][index] = {
            letter: newWords[lastWordIndex][index].letter,
            status: Status.MISS,
          };
          newChecked.push({
            letter: newWords[lastWordIndex][index].letter,
            status: Status.MISS,
          });
        }
      });
    console.log(newChecked);
    setChecked(newChecked);
    setWords([...newWords, []]);
  };

  if (isLoading) <div>Loading...</div>;
  if (isError) <div>Something gone wrong</div>;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ResultsLetters words={words} className="mb-3" />
      <Keyboard
        addLLetterToArray={addLetterToArray}
        deleteLastLetterFromArray={deleteLastLetterFromArray}
        checkWordInArray={checkWordInArray}
      />
    </main>
  );
};

export default Home;
