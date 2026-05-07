// Create an array of student names and print each name using a loop.
const prompt = require('prompt-sync')();
let students = [];
for (let i = 0; i < 5; i++) {
    let name = prompt(`Enter the name of student ${i + 1}: `);
    students.push(name);
}


students.forEach((name, index) => {
    console.log(`Student ${index + 1}: ${name}`);
});