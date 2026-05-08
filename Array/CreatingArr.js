// Creating an array with 3 fruit and print the second fruit

let fruit = ["Apple", "Banana", "Litchi"]
console.log(fruit[1]);

// Add Mango at the end
fruit.push("Mango")
console.log(fruit);

// Add Pineapple at the beginning of the array
fruit.unshift("pineapple")
console.log(fruit);

// Replace Banana with Kiwi
fruit[2]="Kiwi"
console.log(fruit);

// Removing last item from the array
fruit.pop();
console.log(fruit);

// Insert Guava and orange at index 1 in the array
fruit.splice(1,0,"Guava", "Orange")
console.log(fruit)

// Extract only middle 3 element of the array
let newarr = fruit.slice(1,4)
console.log(newarr);

// Sort array alphabetical order
let fr = fruit.sort();
console.log(fr);

// Reverse Array
let frr = fruit.reverse();
console.log(frr);

// use map to square each number
let arr = [1,2,3,4,5]
let newno = arr.map(function(val){
    return val*val;
});
console.log(newno);

// use filter tonkeep no greater than 10 
let n = [3,12,98,6,9];
let newn = n.filter(function(val){
    return val > 10;
});
console.log(newn);

// Use reduce to find sum 
let num = [10,20,30]
let newnum = num.reduce((acc,val)=>{
return acc+val;
},0);
console.log(newnum)

// use find to get first no greater than 10
let n1 = [3,12,98,6,9];
let n2 = n1.find(val=>{return val<10;
});
console.log(n2);

// Use some() sum to check if any student has stored below 35:
let n3 = [45,60,25,90];
let n4 = n3.some(mark =>
    {return mark < 35;

    });
console.log(n4);



//  every() to check if all number are even
let n5 = [2,4, 6,8,10];
let even=n5.every(num => {
    return num%2===0;
});
console.log(even);

// Decturucture this arrat to get firstname and lastname
let fullname=["Navya", "Verma"];
let[firstname, lastname]=fullname;
console.log(firstname);
console.log(lastname);

// Merge two array using spread operator 

let a = [1,2]
let b =[3,4]
let c =[...a,...b];
console.log(c);

// Add "INDIA" to the start of this array using spread
let countries = ["USA", "UK"];

countries = ["INDIA", ...countries];

console.log(countries);

// array property (not by reference)
let arr1 = [1,2,3];
let arr2 = [...arr1]
console.log(arr2);