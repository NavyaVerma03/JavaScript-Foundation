// Write a function to reverse an array

const prompt = require("prompt-sync")();

let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(prompt("Enter value: "));
}

function reverseArray(array) {
    return array.reverse();
}

console.log(`Reversed array: ${reverseArray(arr).join(', ')}`);