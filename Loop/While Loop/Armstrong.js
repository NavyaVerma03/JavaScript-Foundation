
// Check whether a number is an Armstrong number using while loop.

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let temp = n;
let sum = 0;

while (n > 0) {
    let digit = n % 10;

    sum += digit ** 3;

    n = Math.floor(n / 10);
}

if (sum === temp) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}