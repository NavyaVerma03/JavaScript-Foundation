// Create a pure funtion to add tax 

const prompt = require("prompt-sync")();

function addTax(price, rate) {
    return price + (price * rate/100);
}

let price = Number(prompt("Enter price: "));
let rate = Number(prompt("Enter tax rate: "));

let total = addTax(price, rate);

console.log("Total price after tax =", total);