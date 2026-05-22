// Question: Traffic Light System using switch-case.

const prompt = require('prompt-sync')();    

let color = prompt("Enter Traffic Light Color: ");

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Signal");
}