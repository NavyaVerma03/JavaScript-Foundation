// Find factorial of a number using while loop.
const prompt = require ("prompt-sync")();
let n = Number(prompt("Enter no: "));
let fact = 1 ;
while (n > 0 ){
    fact *= n;
    n--;
}

console.log("Factorial: ", fact);
