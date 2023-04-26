function LetterButton(props) {
  const { letter, guessed, handleGuess } = props;

  return (
    <button
      // Set the value of the button to the letter prop
      value={letter}
      // Set the onClick event handler to call the handleGuess function with the letter prop as an argument
      onClick={() => handleGuess(letter)}
      // Set the disabled attribute to true if the letter has already been guessed
      disabled={guessed.has(letter)}
    >
      {/* Render the letter prop inside the button */}
      {letter && letter}
    </button>
  );
}

export default LetterButton;
