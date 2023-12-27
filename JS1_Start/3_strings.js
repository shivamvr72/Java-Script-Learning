let fName = "shivam";
console.log(fName[0]); // index through the string

console.log(fName.length); // prints out lenght of the string 6
console.log(fName[fName.length-1]); // prins m
// console.log(fName[-2]) // prints undefined 


// strings methods 

let strings = " Hello Worlds    ";
console.log(strings.length); // 17
// can assing to new variable or same variable bcz string are immutable so doesn't change original one so needs store in another variable or reassing after function call
strings = strings.trim(); 
console.log(strings);
console.log(strings.length); // 12

console.log(strings.toUpperCase());
console.log(strings.toLowerCase());
console.log(strings.slice(3,7)); 


let fname = "shivam";
let age = "23";

let sen = "you name is " + fname + " and age is " + age; // basic concatination 
let con = `you name is ${fname} and age is ${age}`;

console.log(sen);
console.log(con);

let a = "30";
let b = "7";
let add = + a + + b;
console.log("addiion of string ", add);
