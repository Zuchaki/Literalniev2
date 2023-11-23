import { Word } from "@/pages";

type Props = {
  words: Word[];
};

const ResultsLetters: React.FC<Props> = ({ words }) => {
  return (
    <div className="flex flex-col gap-1">
      {words.map((line) => (
        <div className="flex flex-row gap-1">
          {line.map((letter) => (
            <div className="w-12 h-12 border flex border-primary-600 justify-center items-center">
              {letter ? letter.letter : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResultsLetters;
