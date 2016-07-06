// Random number between 1-100
  //Math.ceil(Math.random() * 100)

// Elment to display number guessed
var randomGuess = document.getElementById('numberGuess');
var guessButton = document.querySelector('.guess');

guessButton.addEventListener('click', function () {
    previousUserGuess.innerText = randomGuess.value
});

// make sure number inputed returns as number and not string
//return alert if number is too high
//return alert if number is too low

// if (number > 100) {
//   alert('Sorry, that guess is too high. Try a lower number.')
// } else (number < 1) {
//   alert('Sorry, that guess is too low. Try a higher number.')
// }
//need to figure out how ramndom will stay unless reset


//configure clearing button
  //to clear input area
    //should be disabled if nothing is in the input box

// configure reset button
  // will reset game and new number
    //should be disabled if nothing to reset

// should display error message if gues is not a number
// should display error message if guess is not between 1-100

// add addition inputs to spedify min and max number
  //will change the random number that is generated
    //will have to reconfigure input guess box to accomidate new number range

//everytime user wins max and min number increase by 10
  // will change the random number that is generated
    //will have to reconfigure input guess box to accomidate new number range
