import React, { useEffect } from "react";
import Key from "./Key";

const Keyboard = () => {
  const active = (clicedKey: string) => {
    console.log("press", clicedKey);
  };
  return <Key keyValue="4" active={active} />;
};

export default Keyboard;
