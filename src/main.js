// Setting up variables and constants we need to store the data that the program will use :)
let randomNumber =
  Math.floor(Math.random() * 100) + 1; /* assigned to a number btw 1 & 100 */

// storing reference tot the result paragraphs in the HTML
// it's used to insert values it paragraphs
// all contained in div -> .resultParas -> added later
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

// custom class to querySelector the p with class userFeedback
// use this to display the tries left, guess count, and last guess and more...
const userFeedback = document.querySelector(".userFeedback");
// reveal the randomNumber at the end of the game if the user couldn't guess right...
const randomNumberReveal = document.querySelector(".randomNumberReveal");

const guessSubmit = document.querySelector(".guessSubmit"); /* button in DOM */
const guessField =
  document.querySelector(".guessField"); /* input field in DOM */

let guessCount = 1; /* first try */
let resetButton;
// improvement to the resetButton wit focus()
guessField.focus();

// Function to checkGuess
function checkGuess() {
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
    // randomNumberReveal.textContent = `${randomNumber} was the the random number. Better luck guessing next time!`;
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

  // //

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
// console.log(`Your last guess was ${userGuess}.`); /* [  ] delete this later */
// const guessCounter = `${guessCount}`;
// console.log(
//   `You have guessed ${guessCounter} times.`
// ); /* [  ] delete this later */

// // update userFeedback in the DOM with guesses left
// userFeedback.textContent = `You have ${
//   Number(10 + 1) - guessCounter
// } guesses left.`;

// * Add evenListener to implement the checkGuess() function for
guessSubmit.addEventListener("click", checkGuess);

// * Add eventListener to run the checkGuess() function when the user presses the Enter key (event.keyCode === 13)
guessField.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    checkGuess();
  }
});

// finish the game functionality and reset the game after 10 tries
// function to reset the game setGameOver()

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton =
    document.createElement(
      "button"
    ); /* ? why wasn't resetButton declared as a constant or a variable first? */
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton); /* could use append() too */
  resetButton.addEventListener("click", resetGame);
}

// * Resetting the game functionality
function resetGame() {
  // set guess count back to 1
  guessCount = 1;

  // declare constant for <div> with class .resultParas and
  // use querySelectorAll to select all the p elements in DOM
  const resetParas = document.querySelectorAll(".resultParas p");

  // ? use for...of loop to run a piece of code over and over again, until a condition is met
  for (const resetPara of resetParas) {
    /* can you explain this GitHub Copilot? :D :D :D :D  */
    resetPara.textContent = "";
  }
  // remove the resetButton from the DOM
  resetButton.parentNode.removeChild(resetButton);
  // enable the previously disabled input fields, the submit button, the value, and focus..
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  // reset the lastResult backgroundColor to white
  lastResult.stylebackgroundColor = "white";

  // ? why are we using the same variable for the randomNumber as well?
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
