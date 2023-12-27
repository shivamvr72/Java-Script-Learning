let a = 30;
console.log(typeof a);
console.log(typeof(a));
// int to str
console.log(typeof a + ""); // return number cz first will be evaluated
console.log(typeof (a + "")) // returns string cz whole expression will evaluated and it convert to string
// str to int if valid no
let b = '7';
b = +b; // + operator will convert it into int

let c = "sa";
c = +c; // converts value into NaN and type will be number
console.log(c);
console.log(typeof c);
console.log(typeof b);

d = Number(a);
console.log(typeof d);

d = String(d);
console.log(typeof d);