// Reduce salaries to calculate total payroll

const prompt = require("prompt-sync")();

let sal = [];

for (let i = 0; i < 3; i++) {
    sal.push(Number(prompt("Enter salary: ")));
}

let total = sal.reduce((sum, salary) => sum + salary, 0);

console.log("Total Payroll:", total);