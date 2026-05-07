// Function to check if a number is even or odd
const prompt = require("prompt-sync")();
function checkEvenOdd() {
    let num = Number(prompt("Enter a number: "));

    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}


checkEvenOdd();