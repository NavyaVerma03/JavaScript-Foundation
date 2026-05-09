// 3. Write a nested object (user with address and location)
let user ={
    name: "Navya Verma",
    address: {
        city: "Patna",
        location: {
            pin: 800001,
            state: "Bihar"
    }
}
};

console.log(user.address.location.pin);