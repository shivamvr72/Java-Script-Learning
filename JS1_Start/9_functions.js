console.log("functions in java script");

// normal function
function hello(){
    console.log("hello world");
}

// now we need to call this function how many times we need to use

hello();
hello();


function add(){
    return 30+7;
}

console.log("addtion 30 + 7 = ", add());
let rvalueadd = add();
console.log("return in var : ", add());


// now we check the function with arguments / parameter
function sum(a, b){
    return a + b;
}

console.log("sum of : ", sum(10, 20));
console.log("sum of : ", sum(10+7, 20)); // it will firstly evaluate the expression the passes the argument

// we can pass the multiple parameter as many as we want



// odd even

function isEven(n){
    return n % 2  === 0;
}

console.log("if even then true : ", isEven(7));
console.log("if even then true : ", isEven(8));


//finding the target index of any numbers 
console.log("finding index");
function indexfind(arr, n){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === n){
            console.log("no at index of  : ", i);
            return i;
        } 
    }
    return -1;
}

const arrays = [1,4,6,7,3,8];

indexfind(arrays, 7);



//function expression we can also take let or var too
// this is also know as annoymous function 
const h1 = function(){
    return "this is hydrogen";
}

console.log(h1());



// arrow function 
// just remove the function keyword and name then store the funcion into the varible and put arrow after parenthesis then function body
const h2o = () => {
    return "water h2o";
}
console.log(h2o);// if you don't call the whole function expression will be appear
console.log(h2o());


//with parameter 
const mul = (a, b) => {
    return a * b;
}

console.log(mul(30,7));

//if you have single parameter then it can be write like this 
const findex = str => str[0];
console.log(findex("shivam"));


// function inside function 

const myfunc = () => {
    console.log("inside my funtion");

    const add = (a, b) => {
        return a+b;
    }

    const sub = (a, b) => {
        return a-b;
    }

    console.log(add(10,20));
    console.log(sub(30,20));
}

myfunc();



// lexical or global scope and local scope
console.log("lexical scope");
const v1 = "v1"
function f1(){
    
    function fi1(){
        const v1 = "vi1"; // when we declare variable specifically then it will take value from local scope else it will try to look into lexical scope to find that variable
        console.log(v1); 
    }
    function fi2(){
        console.log(v1); // finds the variable in the lexical scope
    }
    
    fi1();
    fi2();
}

f1();


// const and let are only accessible inside the block it  cannot be access outside the block
// var is the function scope
// we don't make block like this but it's like in function, loops, etc
{
    const fn = "shivam";
    let ln = "rana";
    var age = 23;
    console.log("inside block");
    console.log(fn);
    console.log(ln);
    console.log(age);
}
console.log("age : ", age); //can be accessible 
// console.log(fn); //cannot access outside the block



// default parameters
function add(a, b=1){
    console.log(a+b);
}

add(20,20); 
add(20);// second parameter will be take by default


// rest parameter 
// it will make array of the rest of paaramters
function restParams(a, b, ...c){
    console.log(a,b,c);
}

// below function call demands atleast 2 params else prints as undefined with empty array
restParams(2);
restParams(1,2,3,4,56,7);

function restParams2(...nparam){
    for(let i=0; i<nparam.length; i++){
        console.log(nparam[i]);
    }
    let total = 0;
    for(let n of nparam){
        total += n; 
    }
    return total;
}

console.log(restParams2(1,2,4,));


// paramter destrucring 
// as we use the {} brackets to destructure
person = {
    name:'gojo saturo',
    age : 27,
    gender : "male"
}

function restParams3({name, age}){
    console.log(name);
    console.log(age);
}
restParams3(person);


// function callback or function calling the function  


function fun1(name){
    console.log("I'm fun 1");
    console.log(name);
}

function fun2(fun){
    console.log("I'm fun 2");
    fun("shivam");
}

fun2(fun1);


// function returning function 

function r1(){
    console.log("R1");
    const ri1 = () => {
        console.log("ri1");
    }

    const rr1 = function ri2(){
        console.log("rr1");
    }

    // return rr1; // we can use any type of function way for the same 
    return ri1; // returning the function 
}

const gettings = r1(); // it will returns the function which is stored in the variable 
gettings(); // now calling the function through the function variable 




