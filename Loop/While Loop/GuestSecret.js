// Keep asking the user for input until they guess the correct number.

const prompt = require("prompt-sync")();

let correct = 7;
let guess = 0;

while (guess !== correct) {
    guess = Number(prompt("Enter your guess: "));
}

console.log("Correct Guess!");