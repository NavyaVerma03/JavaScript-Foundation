// Make a toUpperCase transformer using higher-order functions.

function transform(fn, text) {
    return fn(text);
}

function toUpper(str) {
    return str.toUpperCase();
}

console.log(transform(toUpper, "hello"));