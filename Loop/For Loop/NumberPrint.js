//  Print Numbers
const prompt = require('prompt-sync')();
const n = parseInt(prompt('Enter the number still you want to print: '));
for (let i = 1; i <= n; i++) {
    console.log(i);
}