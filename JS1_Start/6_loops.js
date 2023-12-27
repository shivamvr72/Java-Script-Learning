// for loop
let n = 5;
for(let i =1 ; i<=10; i++){
    console.log(`${i} x ${n} = ${n * i}`);
}

// while loop
console.log("\nwhile");
while (n>0){
    console.log(n);
    n--;
}

// do while
console.log("do... while");
do{
    console.log(n);
    n++;
}while(n < 5);


//first natural total
console.log("Total of N numbers : ");
let total = (n*(n+1))/2
console.log(total);


console.log("using something diffrent syntax");
for(let i=0; i<5; console.log(i++));


// break
console.log("break");
for(let i =1 ; i<=10; i++){
    if(i==3){
        break;
    }else{
        console.log(i);
    }
}

console.log("continue");
for(let i =1 ; i<=10; i++){
    if(i===3){
        continue; // 3 will excluded from printing
    }else{
        console.log(i);
    }
}

