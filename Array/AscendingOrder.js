// Sort array of ages in ascending order

const prompt = require("prompt-sync")();

let ages = [];

for (let i = 0; i < 5; i++) {
    ages.push(Number(prompt("Enter age: ")));
}

ages.sort((a, b) => a - b);

console.log(`Ages in ascending order: ${ages.join(', ')}`);