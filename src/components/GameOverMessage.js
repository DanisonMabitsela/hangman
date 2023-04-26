import React from "react";
import "./GameOverMessage.css";

function GameOverMessage(props) {
  // Destructure props into individual variables
  const { isWinner, answer, resetGame } = props;

  // Create a new variable called message and set its value based on the value of isWinner
  let message;
  if (isWinner) {
    message = "You WIN!";
  } else {
    message = "YOU LOSE";
  }

  // Render a div element with the class name "GameOverMessage"
  return (
    <div className="GameOverMessage">
      <p>{message}</p>

      <p>Correct Word is: {answer}</p>

      <button onClick={resetGame}>Play Again</button>
    </div>
  );
}

export default GameOverMessage;
