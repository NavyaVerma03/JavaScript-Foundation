// Question: Take a number and check whether it is divisible by both 3 and 5.

let num = Number(prompt("Enter a number:"));

if (num % 3 == 0 && num % 5 == 0) {
    console.log("Divisible");
} else {
    console.log("Not Divisible");
}