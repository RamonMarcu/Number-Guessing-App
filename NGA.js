const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 17
const numberToGuess = Math.floor(Math.random() * 14) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
 
while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt('Welcome to the NumberGuessingApp! ｡^‿^｡ Try your luck! Guess a number from 1 to 14: ');
  // Convert the string input to a number
  guess = Number(guess);
 
  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log('Congratulations! ( ^o^)┘ You WON! └(^o^ ) ');
    foundCorrectNumber = true;
  } else {
    console.log('Sorry, you lost! ʕ •ᴥ•ʔ Better luck next time! You can try again');
  }
}