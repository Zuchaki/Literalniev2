import React, { useEffect } from "react";

type Props = {
  keyValue: string;
  active: (clicedKey: string) => void;
};
const Key: React.FC<Props> = ({ keyValue, active }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the pressed key is 'K' or 'k'
      if (
        event.key === keyValue.toLowerCase() ||
        event.key === keyValue.toUpperCase()
      ) {
        active(keyValue);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyValue, active]);
  return (
    <button
      onClick={() => active(keyValue)}
      className="border p-4 border-secondary-800 rounded-lg"
    >
      {keyValue ?? "Null"}
    </button>
  );
};

export default Key;
