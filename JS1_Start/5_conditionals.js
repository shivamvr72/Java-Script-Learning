let age = 23;


// if 
if (age>18){
    console.log("you can watch movies");
}

if(age > 18){
    console.log("you can vote");
}else{
    console.log("you can't vote");
}


let movie = "Interstaller";
if(age > 18 && movie[0] === "I"){
    console.log("your age is above 18 and can watch I");
}else if(age > 18 && movie[0]==="s" || movie[0]==="S"){
    console.log("movie name with s");
}else{
    console.log("Nothing matched");
}

let a = 30;
let b = 7;
let op = 1;
switch(op){
    case 1 : console.log(a + b); break;
    case 2 : console.log(a - b); break;
    default : console.log("something wrong");
}


let win = 7;
let n = +prompt("Guess No from 1 to 10 : ");

// while loop7
while(win != n){
    n = +prompt("Guess No from 1 to 10 : ");
    if(n > win){
        console.log("too high");
    }else if(n < win){
        console.log("too low");
    }else if(n == win){
        console.log("you win");
    }else{
        console.log("something wrong")
        break;
    }

}