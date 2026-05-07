// Write a discount calculator using Higher-Order Functions.

const prompt = require("prompt-sync")();

function calDcont(fn, price) {
    return fn(price);
}

const dis = function(price) {
    return price - 100; 
};

let price = Number(prompt("Enter price: "));

let finalPrice = calDcont(dis, price);

console.log("Final price after discount =", finalPrice);