// how js works 
// compilation phase
// 1. tokenization/lixing = breaking the code into chunks
// 2. parsing the code ==  to know which variable where to belong, how it's accessible, scope of the variable or i can say deterning appropriate scope of varialbe  and also for early error detection
// 3. code generation = abstract syntax tree
// in this phase the information available but code still a code so need a execution phase 

// code execution phase
// in js code executes inside execution cotext 
// the first the global execution context will be created
    // 1. creation phase
            // window : {} 
            // fname : undefined
            //  this : window 
                // window ojbect will provide by browser // key value object
    // 2. code execution phase



console.log(this);
console.log(window);
console.log(fname);
console.log(hey); // undefined cz of function expression/ annoymous function
console.log(hello); // fetches the function from global execution constext becase it will be parched in this is the part of hoisting
// in hoisting the memeory will be allocateed and the value is set as undefined 
// before execition the value is store in variable as undefined because of global execution context and that's why the hoisting is possible


// using let it will gives error
// Uncaught ReferenceError: Cannot access 'lname' before initialization at 14_HowJSworks.js:30:13
// let and const hoisting happens because it will prensent in execution context memoery this will now assinged as unintialized in case of let 
// untile it's not intialised the variable will be in temporaral dead zone TDZ
// console.log(lname);
// console.log(pi); //14_HowJSworks.js:33 Uncaught ReferenceError: Cannot access 'pi' before initialization at 14_HowJSworks.js:33:13 (anonymous) @ 14_HowJSworks.js:33



var fname = "shivam";
let lname = "rana";
const pi = 3.14;

console.log(fname);
console.log(lname);


function hello(){
    console.log("this is function");
}

// the function expression is now treated as variable in global execution context
// it will printed as undefined
var hey = function(){
    console.log("function expression/ annoymous function");
}


// function execution context
// the GLOBAL EXECUTION CONTEXT will be created in STACK / call stack
// when the function is called then NEW FUNCTION EXECUTION CONTEXT will be created and it will also pushed into main memories stack where the global execution context is pushed    | GEC[ | FEC[] | FEC[] | ]
// when the fucntion execution finished then it will be erased / pop / removed from the GLOBAL EXECUTION CONTEXT
// it also include CODE EXECUTION AND LOCAL MEMORY CREATION (array like object is part of this it's for arguments and arguments is also is the keyword)

let foo = "foo";
console.log(foo);
function getFullName(fname, lname){
    console.log(arguments);
    let myVal = "var inside funct";
    const fullName = fname + " " + lname;
    return fullName;
}

const personName = getFullName("shivam", "rana");
console.log(personName);