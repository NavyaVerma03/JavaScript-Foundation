// Question: Take salary and bonus percentage, calculate final salary using assignment operators.

let salary = Number(prompt("Enter salary:"));
let bonus = Number(prompt("Enter bonus percentage:"));

salary += (salary * bonus) / 100;

console.log("Final Salary =", salary);