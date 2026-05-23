//  Even Numbers
const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the number still you want to print: '));
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}