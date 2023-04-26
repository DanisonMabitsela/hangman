// Import necessary components and functions
import React, { useState } from "react";
import { randomWord } from "./components/Word";
import Gallows from "./Gallows";
import WordDisplay from "./components/WordDisplay";
import LetterButton from "./components/LetterButton";
import GameOverMessage from "./components/GameOverMessage";
import Help from "./components/Help";
import "./App.css";

// Define the Hangman component
const Hangman = ({ maxWrong = 10 }) => {
  // Define state variables using the useState hook
  const [nWrong, setNWrong] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [answer, setAnswer] = useState(randomWord());

  // Define a function to handle letter guesses
  const handleGuess = (letter) => {
    if (!guessed.has(letter)) {
      if (answer.includes(letter)) {
        setGuessed((prevGuessed) => new Set([...prevGuessed, letter]));
      } else {
        setGuessed((prevGuessed) => new Set([...prevGuessed, letter]));
        setNWrong((prevNWrong) => prevNWrong + 1);
      }
    }
  };

  // Define a function to reset the game
  const resetGame = () => {
    setNWrong(0);
    setGuessed(new Set());
    setAnswer(randomWord());
  };

  // Determine if the game is over or if the player has won
  const gameOver = nWrong === maxWrong;
  const gameWon =
    !gameOver && answer.split("").every((ltr) => guessed.has(ltr));
  const guessesLeft = maxWrong - nWrong;

  let gameResultComponent;
  if (gameOver || gameWon) {
    // Render a GameOverMessage component if the game is over or the player has won
    gameResultComponent = (
      <GameOverMessage
        isWinner={gameWon}
        answer={answer}
        resetGame={resetGame}
      />
    );
  } else {
    // Render a set of LetterButton components if the game is still in progress
    const letterButtons = "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((ltr) => (
        <LetterButton
          key={ltr}
          letter={ltr}
          guessed={guessed}
          handleGuess={handleGuess}
          disabled={guessed.has(ltr)}
        />
      ));

    gameResultComponent = (
      // Render the set of LetterButton components along with a button to reset the game
      <div className="Hangman-btns">
        {letterButtons}
        <button id="reset" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    );
  }

  // Render the Hangman game interface
  return (
    <div className="Hangman">
      <h1>Hangman</h1>

      <p>Guesses left: {guessesLeft}</p>
      <Gallows nWrong={nWrong} maxWrong={maxWrong} />
      <WordDisplay answer={answer} guessed={guessed} />
      <Help />
      {gameResultComponent}
    </div>
  );
};

export default Hangman;
