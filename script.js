var randomGuess = document.getElementById('numberGuess');
var guessButton = document.querySelector('.guess');

guessButton.addEventListener('click', function () {
    previousUserGuess.innerText = randomGuess.value
});

//return alert if number is too high
//return alert if number is too low

// if (number > 100) {
//   alert('Sorry, that guess is too high. Try a lower number.')
// } else (number < 1) {
//   alert('Sorry, that guess is too low. Try a higher number.')
// }
