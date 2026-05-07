// Map prices to include GST (18%)
const prompt = require(`prompt-sync`)();
let prices = [];
for(let i = 0; i < 3; i++) {
    prices.push(Number(prompt(`Enter price ${i + 1}: `)));
}
let gstIncludedPrices = prices.map(price => price * 1.18);
console.log(`Prices including GST: ${gstIncludedPrices.join(', ')}`);