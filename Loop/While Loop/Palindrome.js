// Check whether a number is palindrome or not using while loop.
const prompt = require ("prompt-sync")();
let n = Number(prompt("Enter no: "));
temp = n;
let rev = 0;
while (n > 0){
    let digit = n % 10;
    rev = rev * 10 + digit;
    n = Math.floor(n/10);

}

if (temp === rev){
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}