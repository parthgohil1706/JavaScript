let randomnum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const reaming = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');0

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if ((playgame = true)) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter valid number');
  } else if (guess < 1) {
    alert('please enter number more than 1');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomnum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomnum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomnum) {
    displayMessage(`Number is too low`);
  } else if (guess > randomnum) {
    displayMessage(`Number is too High`);
  }
}
function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  reaming.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomnum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    reaming.innerHTML = `${10 - numGuess}`;
    userinput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
