// Question: Use nested ternary operators to find largest among three numbers.

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

let largest = (a > b)
    ? (a > c ? a : c)
    : (b > c ? b : c);

console.log("Largest =", largest);