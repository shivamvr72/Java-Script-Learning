// fizz buzz
x = 100;
while(x){
    if (x % 3 == 0 && x % 5==0){
        console.log(x, "FIZZBUZZ");
    }
    if(x % 3 == 0){
        console.log(x, "FIZZ");
    } else if(  x % 3 != 0 && x % 5 == 0){
        console.log(x, "BUZZ");
    }
    x -= 1;
}