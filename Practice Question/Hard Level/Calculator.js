// Question: Create a calculator using operators (+, -, *, /, %, **) and user choice.

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let choice = prompt("Enter operator (+, -, *, /, %, **):");

switch (choice) {
    case '+':
        console.log(a + b);
        break;

    case '-':
        console.log(a - b);
        break;

    case '*':
        console.log(a * b);
        break;

    case '/':
        console.log(a / b);
        break;

    case '%':
        console.log(a % b);
        break;

    case '**':
        console.log(a ** b);
        break;

    default:
        console.log("Invalid Operator");
}