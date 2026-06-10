// Only Character Display.....

// let display = document.getElementById("display");

// document.addEventListener("keydown", function(e){
//     if(e.key === " "){
//         display.textContent = "Space";
//         return;
//     }
//     display.textContent = e.key;
// });


// Full Text Display....

// let display = document.getElementById("display");
// let text = "";

// document.addEventListener("keydown", function(e){

//     if(e.key === "Backspace"){
//         text = text.slice(0,-1);
//     }
//     else if(e.key.length === 1){
//         text += e.key;
//     }

//     display.textContent = text;
// });



// Only Character Display With Sound.....


let display = document.getElementById("display");

document.addEventListener("keydown", function(e){

    display.textContent = e.key;

    let speech = new SpeechSynthesisUtterance(e.key);

    speech.rate = 0.8;
    speech.pitch = 1;
    speech.volume = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
});


//  Text Display With Sound......
// let display = document.getElementById("display");
// let text = "";

// document.addEventListener("keydown", function(e){

//     if(e.key === "Backspace"){
//         text = text.slice(0,-1);
//     }
//     else if(e.key.length === 1){
//         text += e.key;
//     }

//     display.textContent = text;

//     // Voice
//     speechSynthesis.cancel();
//     let speech = new SpeechSynthesisUtterance(text);
//     speech.rate = 0.8;
//     speech.pitch = 1;
//     speechSynthesis.speak(speech);
// });

