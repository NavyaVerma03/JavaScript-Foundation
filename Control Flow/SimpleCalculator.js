// Perform calculation using switch case
const prompt = require('prompt-sync')();
let no1 = Number(prompt("Enter no1: "));
let no2 = Number(prompt("Enter no2: "));
let op= prompt("Enter an operator (+, -, *, /, %): "); 

switch(op){
    case '+':
        console.log(`${no1} + ${no2} = ${no1 + no2}`);                  
        break;

    
    case '-':
        console.log(`${no1} - ${no2} = ${no1 - no2}`);      
        break;

    case '*':
        console.log(`${no1} * ${no2} = ${no1 * no2}`);
        break;

    case '/':
        if (no2 !== 0) {
            console.log(`${no1} / ${no2} = ${no1 / no2}`);
        }
        else {
            console.log("Error: Division by zero is not allowed.");
        }

        break;

    case '%':
        console.log(`${no1} % ${no2} = ${no1 % no2}`);
        break;

    default:
        console.log("Invalid operator");    
} 