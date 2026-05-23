// Prime Number Check
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}

if (count == 2) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}