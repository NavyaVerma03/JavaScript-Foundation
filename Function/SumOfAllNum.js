// Sum of all numbers using rest parameter.

function sumAll(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    console.log("Sum of all numbers =", sum);
}

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);