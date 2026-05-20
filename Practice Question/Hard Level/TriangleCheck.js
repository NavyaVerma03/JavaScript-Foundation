// Question: Take three angles and check if they can form a triangle using logical operators.

let a = Number(prompt("Enter first angle:"));
let b = Number(prompt("Enter second angle:"));
let c = Number(prompt("Enter third angle:"));

if (a + b + c == 180) {
    console.log("Valid Triangle");
} else {
    console.log("Invalid Triangle");
}