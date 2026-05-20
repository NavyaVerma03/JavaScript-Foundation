// Question: Check whether a year is leap year using logical and comparison operators.

let year = Number(prompt("Enter year:"));

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}