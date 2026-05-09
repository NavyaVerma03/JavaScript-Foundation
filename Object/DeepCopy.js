// 8. Create a deep copy of an object with nested structure
let user = {
    name: "Navya Verma",
    address: {
        city: "Patna",
        location: {
            pin: 800001,
            state: "Bihar"
        }
    }
};

let deepcopy = JSON.parse(JSON.stringify(user));
console.log(deepcopy);
