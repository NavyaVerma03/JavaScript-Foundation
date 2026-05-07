// Write a function that returns another function. 

function outerFun() {
    return function innerFunction() {
        console.log("Hello from inner function!");
    };
}

const result = outerFun();
result(); 

