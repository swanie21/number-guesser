//random number generator
var randomNumber = Math.floor((Math.random() * 100) + 1);
var randomGuess = document.getElementById('numberGuess');
var guessButton = document.querySelector('.guess');

function submitGuess() {
  document.getElementById('instruction').innerText = 'Your previous guess was...';
  if (parseInt(randomGuess.value) === randomNumber) {
    return document.getElementById('message').innerText = 'You are correct!';
  } else if (parseInt(randomGuess.value) < 1 || parseInt(randomGuess.value) > 100 || isNaN(parseInt(randomGuess.value))) {
    document.getElementById('instruction').innerText = 'This number is not within range';
    return document.getElementById('message').innerText = 'Please choose a valid number!';
  } else if (parseInt(randomGuess.value) > randomNumber) {
    document.getElementById('message').innerText = 'Sorry, that guess is too high. Try a lower number.';
    return document.getElementById(numberGuess).value='';
  } else if (parseInt(randomGuess.value) < randomNumber) {
    return document.getElementById('message').innerText = 'Sorry, that guess is too low. Try a higher number.';
    return document.getElementById(numberGuess).value='';
  }
}

guessButton.addEventListener('click', function () {
    previousUserGuess.innerText = randomGuess.value
    submitGuess();
});

//
//disable buttons
//document.querySelector('.reset').disabled = true;
//if (document.getElementById)
//document.querySelector('.clear').disabled = true;
//
//clear function
function clearNumber () {
document.getElementById('numberGuess').value = '';
}
//
//reset function: clear number, make new randomNumber, clear message (.innerText)
function resetNumber() {
document.getElementById('instruction').innerText = 'Make a guess between 1 to 100';
document.getElementById('message').innerText = '';
document.getElementById('numberGuess').value = '';
document.getElementById('previousUserGuess').innerText='';
randomNumber = Math.floor((Math.random() * 100) + 1);
}
