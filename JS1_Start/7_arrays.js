let cars = ["mercedes", "bmw", "porche", "land rover"];

console.log(cars[0]);
console.log(cars[1]);

let numbers = [1,2,3,4];

console.log(numbers[3]);
console.log(numbers[2]);

let mixed = [1,2,3,7.3, "string", null, undefined];
console.log(mixed);
console.log(cars);

// changing value of array
cars[2] = "toyata";
console.log(cars);

console.log(typeof cars);
console.log(Array.isArray(cars));  // return true


let obj = {} // object literal
console.log(Array.isArray(obj)); // returns false cz object litral is not array


// push, pop, shift

// to add the item at end of the list
cars.push("lucid");
console.log(cars);
cars.push("Paniferani Battista");
console.log(cars);


// to remove and return the item

let car = cars.pop(); //popping and storing item
console.log(cars);
console.log(car); // printing returne item

// to remove item from starting
let s = cars.shift();  
console.log(cars);
console.log(s); // printing removed first item

// to add item at start
cars.unshift("mclaren");
console.log(cars);

// push and pop is faster then shift and unshift cz shift and unshift needs to do operation to change thier position
cars.push("jaguar");



// reference type and copy type

// copy type
let a1 = 30
let a2 = a1 // the a1 will be pass as the copy into the a2 so no changes will be appear if you done whatever operation with a1

console.log(a1)
console.log(a2)

a1++

console.log(a1) // will increase by 1 but not appear in a2
console.log(a2)


// refence type
let arr = ["shivam", "jay"];
let arr_2 = arr; // in this example the reference of the arr (address) object has been passed to the arr_2 so both are pointing to the same memory location

// refence type mostly having the heap memory 
// copy type has the stack 



console.log(arr)
console.log(arr_2)

arr_2.push("kaushik") // updating the arr_2 will be reflacted to the arr cz it passes the refenece and stored in heap memory

console.log(arr) 
console.log(arr_2)

// let's check both are same or not

console.log(arr_2===arr)


// not how to make a clone of the arr
// usinig slice 
let arr3 = ['shivam','jay']


let arr4 = arr3.slice(0) // it passed the copy of element from 0 to end of the arr3
arr4.push("keval") // will not affect the arr3
//slice is little faster 
console.log(arr3) 
console.log(arr4)
console.log(arr3===arr4)


//using concate
let arr5 = [].concat(arr);

arr5.push("sanjay");
console.log(arr);
console.log(arr5);
console.log(arr === arr5)


//using spread operator
let arr6 = [...arr]

arr6.push("aaryan")

console.log(arr);
console.log(arr6);
console.log(arr === arr6)


// some other methods
let arr7 = arr.slice(0).concat(["keval"]);
console.log("arr7", arr7);

let arr8 = [].concat(arr, ['neha']);
console.log(arr8);


let arr9 = [...arr,...arr3]
console.log(arr9)


// loop throgh the arr

console.log(arr[0]); 
console.log(arr[1]); 
console.log(arr[2]); 


console.log(arr.length)

for(i=0;i<arr.length; i++){
    console.log(arr[i]);
}

// use const to create array

const arr10 = ["shivam", "snehal", "alpa"];

// for const we can modify array using method but can't use direct baracket for assing and throws the ERROR
//arr10 = [] // can't do this
arr10.push("shital");
arr10.push("vaishali");

console.log(arr10);

console.log("using while loop");
i = 0
while(i<arr10.length){
    console.log(arr10[i])
    i++;
}


// for of loop
console.log("using for of loop");

for(let n of arr10){
    console.log(n)
}
// for in loop
// gives index
console.log("using for in loop");
for(let index in arr10){
    console.log(index);
}


// array destructuring 
console.log("array destructuring")

let [shiv, sneh] = arr10; // it creates the variables by restucring it
console.log(shiv);
console.log(sneh);
let [shiv1, , alpa] = arr10; // can skip the second by putting commas
console.log(alpa);

// if there is less elements inside the array and you create more variables then the value of the variable will be undefined
// you can use const or var to make variables 

let [s1,s2, ...s3] = arr10; // here array is created with the rest of the item

console.log(s3);




