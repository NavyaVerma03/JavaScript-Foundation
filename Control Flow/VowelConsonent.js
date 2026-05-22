// Check the character is a vowel or consonant
const prompt = require('prompt-sync')();
let ch = prompt("Enter a character: ");
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
    console.log(`${ch} is a vowel.`);
} else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
    console.log(`${ch} is a consonant.`);
} else {
    console.log(`${ch} is not a valid letter.`);
}   