// Setting up variables and constants we need to store the data that the program will use :)
let randomNumber =
  Math.floor(Math.random() * 100) + 1; /* assigned to a number btw 1 & 100 */

// storing reference tot the result paragraphs in the HTML
// it's used to insert values it paragraphs
// all contained in div -> .resultParas -> added later
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1; /* first try */
let resetButton;

// Function to checkGuess
function checkGuess() {
  // alert("I am a placeholder");
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }
  }
}


guessCount++;
guessField.value = " ";
guessField.focus();

// Add evenListener to implement the checkGuess() function for
guessSubmit.addEventListener("click", checkGuess);

// finish the game functionality and reset the game after 10 tries
// function to reset the game setGameOver()

function SetGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createELement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}


xxxx