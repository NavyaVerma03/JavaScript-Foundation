// Take a number n and find the sum of numbers from 1 to n using while loop.

const prompt = require ("prompt-sync")();
let n = Number(prompt("Enter no: "));
let i = 1;
let sum = 0;
while (i <= n){
    sum += i;
    i++;
}

console.log("Sum = ", sum)