// Question: Take three numbers and find the largest using comparison operators.

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}