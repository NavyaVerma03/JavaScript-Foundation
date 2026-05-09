// 5. Loop through keys and values of an object
let Person = {
    name: "Navya Verma",
    age: 20,
    city: "Patna"
};

for (let key in Person){
    console.log(key + ":  " + Person[key]);
}