// Question: Login system with 3 attempts.

const prompt = require('prompt-sync')();

let correctUsername = "admin";
let correctPassword = "12345";

for (let i = 1; i <= 3; i++) {

    let username = prompt("Enter username: ");
    let password = prompt("Enter password: ");

    if (username === correctUsername && password === correctPassword) {
        console.log("Login Successful");
        break;
    } else {
        console.log("Invalid Credentials");
    }

    if (i === 3) {
        console.log("Account Blocked");
    }
}