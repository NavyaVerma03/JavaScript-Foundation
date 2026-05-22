// Check the numbe is even or odd
const prompt = require('prompt-sync')();

let no = Number(prompt("Enter a number: "));

if (no % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}