var randomGuess = document.getElementById('numberGuess');
var guessButton = document.querySelector('.guess');
var min = parseInt(document.getElementById('userMinNumber').value) || 1;
var max = parseInt(document.getElementById('userMaxNumber').value) || 100;

function randomNumberVariable () {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNumber = randomNumberVariable ();

guessButton.addEventListener('click', function () {
  previousUserGuess.innerText = randomGuess.value;
  document.querySelector('.clear').disabled = false;
  submitGuess();
});

function submitGuess() {
  document.querySelector('.reset').disabled = false;
  document.getElementById('instruction').innerText = 'Your previous guess was...';
  if (parseInt(randomGuess.value) === randomNumber) {
    min = min - 10;
    max = max + 10;
    randomNumber = randomNumberVariable();
    return document.getElementById('message').innerText = 'You are brilliant!';
  }
  if (parseInt(randomGuess.value) < min || parseInt(randomGuess.value) > max || isNaN(parseInt(randomGuess.value))) {
    document.getElementById('instruction').innerText = 'This number is not within range';
      return document.getElementById('message').innerText = 'Please choose a valid number!';
  }
  if (parseInt(randomGuess.value) > randomNumber) {
    document.getElementById('message').innerText = 'Sorry, that guess is too high. Try a lower number.';
      return document.getElementById('numberGuess').value='';
  }
  if (parseInt(randomGuess.value) < randomNumber) {
    document.getElementById('message').innerText = 'Sorry, that guess is too low. Try a higher number.';
      return document.getElementById('numberGuess').value='';
  }
};

//clear function
function clearNumber () {
  document.getElementById('numberGuess').value = '';
}

//reset function: clear number, make new randomNumber, clear message
function resetNumber() {
  document.getElementById('instruction').innerText = 'Make a guess between 1 and 100';
  document.getElementById('message').innerText = '';
  document.getElementById('numberGuess').value = '';
  document.getElementById('previousUserGuess').innerText='';
  document.querySelector('.clear').disabled = true;
  document.querySelector('.reset').disabled = true;
  document.getElementById('userMinNumber').value = '';
  document.getElementById('userMaxNumber').value = '';
  min = parseInt(document.getElementById('userMinNumber').value) || 1;
  max = parseInt(document.getElementById('userMaxNumber').value) || 100;
  randomNumberVariable();
}

//store user interval range
function submitUserNumbers() {
  document.getElementById('instruction').innerText = 'Make a guess between your selected numbers';
  document.getElementById('message').innerText = '';
  document.getElementById('numberGuess').value = '';
  document.getElementById('previousUserGuess').innerText = '';
  document.querySelector('.clear').disabled = true;
  document.querySelector('.reset').disabled = true;
  min = parseInt(document.getElementById('userMinNumber').value) || 1;
  max = parseInt(document.getElementById('userMaxNumber').value) || 100;
  if (min > max) {
    return document.getElementById('message').innerText = 'Not a valid range';
  }
  document.querySelector('.clear').disabled = false;
  document.querySelector('.reset').disabled = false;
  randomNumber = randomNumberVariable();
}

//enable clear & reset buttons when numbers are input
function enableBtn() {
  document.getElementById('numberGuess').value != '';
  document.querySelector('.clear').disabled = false;
  return document.querySelector('.reset').disabled = false;
};
