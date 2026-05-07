//  Filter even numbers from an array 
const prompt = require(`prompt-sync`)();
let no = [];
for (let i = 0; i<5; i++){
    no.push(Number(prompt(`Enter no ${i + 1}: `)));

}
let evenNo = no.filter(num => num % 2 === 0);
console.log(`Even numbers are: ${evenNo}`);