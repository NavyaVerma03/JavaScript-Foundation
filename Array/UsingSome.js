// Use some() to check if any student failed

let marks = [45, 60, 20, 75];

let failed = marks.some(mark => mark < 33);

console.log(`Any student failed? ${failed}`);