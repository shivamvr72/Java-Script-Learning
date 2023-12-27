// function can return function 
// also it can reurn array / object in js


function outerFunction(){
    function innerFuntion(){
        console.log("Hello World from inner function");
    }
    return innerFuntion; 
}

const ans = outerFunction(); // stores inner function
console.log(ans);
ans();



function fnames(fn, ln){
    function pnames(){
        console.log(fn + " " + ln);
    }
    return pnames;
    // when the function return from local execution context so before popping from call stack  the inner function will keep that variable with itself / here fn and ln and we can say it as a closure to it because it returns with fn and ln like variables
    // or i can say when inner function returns it will return with it's lexical environment/ global environment
}


const names = fnames("alpa", "rana");
names();


// second example for closures

function powers(power){
    return function calculates(number){
        return number ** power;
    }
}


const sqrt = powers(2);
const sans = sqrt(7);
console.log(sans);

const cube = powers(3);
const cans = cube(3);
console.log(cans);

// using arrow function
const powers2 = (power) => (num) => num ** power;

const sqrt2 = powers2(2);
const sans2 = sqrt2(7);
console.log(sans2);


// aplication of closure 
const myfunct = () => {
    let count = 0;
    return () => {
        count++;
        if(count > 1){
            console.log("i'm already called...");
        }else{
            console.log("hi i'm called");
        }
    }
}


const call1 = myfunct();
call1();
call1();
call1();

const call2 = myfunct();
call2();
call2();
call2();