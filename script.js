var randomNumber = Math.floor((Math.random() * 100) + 1);
var randomGuess = document.getElementById('numberGuess');
var guessButton = document.querySelector('.guess');
var setUserNumbers = document.querySelector('.userNumbers');

guessButton.addEventListener('click', function () {
    previousUserGuess.innerText = randomGuess.value;
    document.querySelector('.clear').disabled = false;
    submitGuess();
});

function submitGuess() {
  document.querySelector('.reset').disabled = false;
  document.getElementById('instruction').innerText = 'Your previous guess was...';
  if (parseInt(randomGuess.value) === randomNumber) {
    return document.getElementById('message').innerText = 'You are brilliant!';
  }
  if (parseInt(randomGuess.value) < 1 || parseInt(randomGuess.value) > 100 || isNaN(parseInt(randomGuess.value))) {
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

//reset function: clear number, make new randomNumber, clear message (.innerText)
function resetNumber() {
document.getElementById('instruction').innerText = 'Make a guess between 1 and 100';
document.getElementById('message').innerText = '';
document.getElementById('numberGuess').value = '';
document.getElementById('previousUserGuess').innerText='';
document.querySelector('.clear').disabled = true;
document.querySelector('.reset').disabled = true;
randomNumber = Math.floor((Math.random() * 100) + 1);
}

// setUserNumbers.addEventListener('click', function() {
//   document.getElementById(parseInt('userMinNumber').value = var min;
//   document.getElementById(parseInt('userMaxNumber').value = var max;
//   playWithUserNumbers();
// }

//submit button needs to check that the min is less than the max

//loop to add 10 to userMaxNumberax and subtract 10 to userMinNumber
