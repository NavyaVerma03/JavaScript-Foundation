// Question: Take two numbers and swap them using arithmetic operators only.

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a);
console.log("b =", b);