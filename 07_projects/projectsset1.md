# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

``` javascript

const buttons = document.querySelectorAll('.button');
// console.log(buttons); // gives the NodeList
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // it will prevent your data to submit to the url or server bcoz we dont have any server

  //height is converted into integer
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // console.log(height);
  // console.log(weight);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2); // after point it will show only two decimals

    // show the result
    if (BMI < 18.6) {
      results.innerHTML = `<span> Under Weight, BMI: ${BMI}</span>`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = `<span> Normal Weight, BMI: ${BMI}</span>`;
    } else {
      results.innerHTML = `<span> OverWeight, BMI: ${BMI}</span>`;
    }
  }
});

```

## project 3

``` javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

//runs again and again after one second
setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4

``` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaingGuesses = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHigh = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuesses = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (event) => {
    event.preventDefault(); // do not sent to the server
    const userGuessedNum = parseInt(userInput.value);
    // console.log(userGuessedNum);
    validateGuess(userGuessedNum);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numOfGuesses >= 9) {
      // we are starting from 0
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  }
};

const displayGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `; // this is string we are adding not a number
  numOfGuesses++;
  console.log(numOfGuesses);
  remaingGuesses.innerHTML = `${10 - numOfGuesses}`;
};

const displayMessage = (message) => {
  lowOrHigh.innerHTML = `${message}`;
};

const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // now user can not enter the value
  p.classList.add('button'); // p with class name button
  // console.log(p);
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (event) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = '';
    prevGuess = [];
    userInput.removeAttribute('disabled');
    numOfGuesses = 0;
    guessSlot.innerHTML = '';
    remaingGuesses.innerHTML = `${10 - numOfGuesses}`;
    startOver.removeChild(p);
    displayMessage(``);
    playGame = true;
  });
};


```