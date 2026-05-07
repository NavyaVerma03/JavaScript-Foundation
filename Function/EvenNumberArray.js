// Use a function to log even numbers in an array.

function printEvenNum(arr) {
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

let n = [1, 2, 3, 4, 5, 6, 7, 8];

printEvenNum(n);
