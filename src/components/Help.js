import React, { useState } from "react";
import "./Help.css";

const Help = () => {
  // Using the useState hook to create a state variable called showHelp
  // and a function to update it called setShowHelp
  // The initial value of showHelp is false
  const [showHelp, setShowHelp] = useState(false);

  const handleToggleHelp = () => {
    setShowHelp((prevShowHelp) => !prevShowHelp);
  };
  // Defining the handleToggleHelp function which is called when the button is clicked
  let buttonText;
  if (showHelp) {
    buttonText = "Hide Help";
  } else {
    buttonText = "Show Help";
  }

  return (
    <div className="Help">
      {/* Button that toggles the visibility of the help section */}
      <button className="Help-toggle" onClick={handleToggleHelp}>
        {buttonText}
      </button>
      {showHelp && (
        <div className="Help-content">
          <h2>Hangman Rules</h2>
          <ul>
            <li>Guess letters to uncover the hidden word.</li>
            <li>You have a limited number of guesses (usually 10).</li>
            <li>If you guess incorrectly too many times, you lose.</li>
            <li>
              If you guess all the letters correctly before you run out of
              guesses, you win!
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Help;
