// Find the largest of three numbers
const prompt =require('prompt-sync')();
let a = Number(prompt("Enter no1: "));
let b = Number(prompt("Enter no2: "));
let c = Number(prompt("Enter no3: "));
if (a >= b && a >= c) {
    console.log(`${a} is the largest number`);
} else if (b >= a && b >= c) {
    console.log(`${b} is the largest number`);
} else {
    console.log(`${c} is the largest number`);
}