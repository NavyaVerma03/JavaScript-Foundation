// Find the first student with grade A

let students = [
    { name: "Jiya", grade: "B" },
    { name: "Navya Verma", grade: "A" },
    { name: "Priya", grade: "C" }
];

let topper = students.find(student => student.grade === "A");

console.log(topper);