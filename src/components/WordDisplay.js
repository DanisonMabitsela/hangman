import React from "react";
import "./WordDisplay.css";

function WordDisplay(props) {
  const { answer, guessed } = props;

  const word = answer.split("").map((ltr) => {
    if (guessed.has(ltr)) {
      return ltr;
    } else {
      return "_";
    }
  });

  return <p className="Hangman-word">{word}</p>;
}

export default WordDisplay;
