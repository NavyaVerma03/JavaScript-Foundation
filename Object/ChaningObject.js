// 9. Use optional chaining to safely access deep values

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
console.log(user.address?.location?.pin);
 console.log(user.contact?.phone);       