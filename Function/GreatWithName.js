// Create a great function with default name
const prompt = require("prompt-sync")();

function greet(name = "Guest") {
    console.log(`Hello, ${name || "Guest"}! 👋`);
}

let userName = prompt("Enter your name: ");
greet(userName);
