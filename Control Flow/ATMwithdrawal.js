// Question: ATM Withdrawal System using conditions.
const prompt = require('prompt-sync')();

let bal = Number(prompt("Enter Account Balance:"));
let wdrl = Number(prompt("Enter Withdrawal Amount:"));

if (wdrl % 100 !== 0) {
    console.log("Amount must be multiple of 100");
} else if (wdrl > bal) {
    console.log("Insufficient Balance");
} else if (bal - wdrl < 100) {
    console.log("Minimum balance should be 100");
} else {
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: " + (bal - wdrl));
}