// Destructure first two elements of an array

const prompt = require("prompt-sync")();

let arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(prompt("Enter value: "));
}

let [first, second] = arr;

console.log(first);
console.log(second);