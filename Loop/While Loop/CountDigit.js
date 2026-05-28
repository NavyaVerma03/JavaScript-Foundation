// Count how many digits are present in a number using while loop.
const prompt = require ("prompt-sync")();
let n = Number(prompt("Enter no: "));
count = 0 ;
while(n >0)  {
    count ++;
    n = Math.floor(n/10);

}

console.log("Total Digit: ", count);
