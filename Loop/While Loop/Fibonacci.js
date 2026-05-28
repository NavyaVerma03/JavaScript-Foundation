// Print first n Fibonacci numbers using while loop.
const prompt = require ("prompt-sync")();
let n = Number(prompt("Enter nth term you want to print fibonacci series: "));
let a = 0;
let b = 1;
let i = 1;
while(i <= n){
    process.stdout.write(a + " ");
    let c = a + b;
    a = b;
    b = c;
    i++;
}