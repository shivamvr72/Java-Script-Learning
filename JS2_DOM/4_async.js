// js is single treaded sync prog lang
// setTimeout(callback function, min time in mili second);
// achive this using the function


console.log("start");

const toid = setTimeout(()=>{
    console.log("hello world")
}, 0); // it returns id 

// this function takes min time out to execute and executes after whole script executed

for(let i=0; i<100; i++){
    console.log("...");
}
console.log("settimeout id : ", toid);

// clearTimeout(toid); // to not to execute time out function 

console.log("stop");



// set interval 
console.log("set interval");
console.log("set interval start...");
const iid = setInterval(()=>{
    console.log(Math.random())
}, 1000);

clearInterval(iid);
console.log("set interval stop");