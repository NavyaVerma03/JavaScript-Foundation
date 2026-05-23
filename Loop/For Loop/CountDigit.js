// Count Digits using simple for loop
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));
let count = 0;

for (let i = n; i > 0; i = (i - i % 10) / 10) {
    count++;
}

console.log("Digits =", count);