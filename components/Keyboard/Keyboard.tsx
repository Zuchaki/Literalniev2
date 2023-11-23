import React from "react";
import Key from "./Key";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

type Props = {
  addLLetterToArray: (clicedKey?: string) => void;
  deleteLastLetterFromArray: () => void;
  checkWordInArray: () => void;
  className?: string;
};
const Keyboard: React.FC<Props> = ({
  addLLetterToArray,
  deleteLastLetterFromArray,
  checkWordInArray,
  className,
}) => {
  const keysOnKeyboard = ["ąćęłóśńżź", "qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className="flex flex-col gap-2 items-center">
        {keysOnKeyboard.map((line) => (
          <div className="flex gap-1" key={line}>
            {line.split("").map((keyValue) => (
              <Key
                key={keyValue}
                keyValue={keyValue}
                onActive={addLLetterToArray}
                className="md:w-10 md:h-16 w-8 h-12"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex w-full h-10 felx-row gap-2">
        <Key
          key={"Enter"}
          keyValue="Enter"
          onActive={checkWordInArray}
          className="w-full"
        />
        <Key
          key={"Backspace"}
          icon={faBackspace}
          keyValue="Backspace"
          onActive={deleteLastLetterFromArray}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Keyboard;
