// Check the given number is positive, negative or zero
const prompt = require('prompt-sync')();
let no = Number(prompt ("Enter no: "));
if(no > 0){
    console.log("Positive Number");
} else if(no < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}
