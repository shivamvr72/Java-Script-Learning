// directly using variable names
//LName; //NOT VALID without var it will generate error while declaration of variable

// but if you declare using var keyword so you can initialise variable prior to that variable without using var as shown below
//"use strict" // will not allow to declare a variable withot instial keyword like var or key
fname; //VALID IF BELOW VARIABLE DECLARED WIHT VAR
var fname; 
console.log(fname); //shows undefined
fname = 'shivam';
console.log(fname); // prints output shivam
fname = 'jay';
console.log(fname);
fname = 'snehal';
console.log(fname);

var fname = "alpa"; // will not affect and hold the value
console.log(fname);

var a = 20;
function foo(){
    console.log(a); //undefined
    var a = 30;
    console.log(a); // 30
}

foo();
console.log(a); // 20

//let fname = "shivam"; // ERROR  variable already declared


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

// notes :
// var statement declares funtion-scoped or globally-scoped variables
// The list that follows the var keyword is called a binding list and is separated by commas, where the commas are not comma operators and the = signs are not assignment operators. Initializers of later variables can refer to earlier variables in the list and get the initialized value
// Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless the declaration has an initializer. 
// can't use numbers (at starting) or special character (other than $ and _ ) or reserved keyword for declaring variables 

// Hoisting : the top.
// var declarations are only hoisted to the top of the current script. If you have two <script> elements within one HTML, the first script cannot access variables declared by the second bef
// var declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it atore the second script has been processed and executed.



var s; 
console.log(s); //it's known as hoisting
s = "shivam";


// can perform arithmatic
var n = 5;
var $n = 7; // valid variable name
var _n = 30; // also valid special character
console.log($n ** 2); // 100
console.log($n + _n); // 37

// use let it's recommended
// diff
// "var" allows to redeclare identifier but "let" won't

// declaring constant (actually it's not variable) that variable won't change during execution life cycle of the code
const pi = 3.14;
//pi = 4; // throws error can't change const variable value
console.log(pi);

