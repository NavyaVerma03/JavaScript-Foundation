// Question: Take electricity units and calculate bill using conditional operators.

let units = Number(prompt("Enter electricity units:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else {
    bill = units * 8;
}

console.log("Electricity Bill =", bill);