// undefined 
// null
// 0
// ""

let s1 = null;
console.log(s1);
console.log(typeof s1); //returns object insted of null and this is the bug in JS


console.log(Number.MAX_SAFE_INTEGER);
let b1 = BigInt(7); // in case the numbers is very big that exceeds the size max_size of normal variable 
let b2 = BigInt(30000000000000000000000); 

let addbig = b1 + b2; // can't perform arithmatic with normal variable
let n = 30 
// let adds = b1 + n ; // can't do that ERROR TYPEERROE
console.log(addbig);
console.log(BigInt.MAX_SAFE_INTEGER); // undefined



// comparition operator
let x = "7";
let y = 7;


console.log(x === y); // check type and value
console.log(x == y); // only checks value

console.log(x != y);
console.log(x !== y);


// falsey 

// false 
// ""
// null
// undefined
// 0

// x = "" // false
// x = 0 //false
// x = undefined;
// x = null
// x = false

if (x){
    console.log("x is true");
}else{
    console.log("x is false");
}

// truthly
// true
// "a..z"
// ...,-1, 1,...