import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

type Props = {
  keyValue: string;
  onActive: (clicedKey?: string) => void;
  icon?: IconDefinition;
  className?: string;
};
const Key: React.FC<Props> = ({ keyValue, onActive, icon, className }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onActive]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.key !== keyValue &&
      event.key !== keyValue.toLowerCase() &&
      event.key !== keyValue.toUpperCase()
    )
      return;
    return onActive(keyValue);
  };

  return (
    <button
      onClick={() => onActive(keyValue)}
      className={`border font-semibold border-secondary-800 rounded-md hover:bg-secondary-200 ${className}`}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : keyValue.toUpperCase()}
    </button>
  );
};

export default Key;
