console.log("forEach method");

// the forEach method provide the facility to eaterate and make a fuction call for the all elements in the array

// manual

const arr = [2,4,5,6,7];

function mulbyn(num, i){
    console.log(`${num} * ${i} = ${num * i}`);
}


for(let i=0; i<arr.length; i++){
    mulbyn(arr[i], i); // logic to multiply by 5
}

// forEach method
console.log("by using the forEach methos");
arr.forEach(mulbyn);


// forEach with annoymous function 
console.log("foreach with annoymous function");
arr.forEach(function(arr, index){
    console.log(arr * index)
});


// foreach can be use with object too
const users = [
    {uid:"user1", name:"shivam"},
    {uid:"user2", name:"shiv"},
    {uid:"user3", name:"shivi"}
];

// using the normal way of function 
users.forEach(function(user){
    console.log(user.name);
});

// using the arrow function 
console.log("using the arrow function");
users.forEach((user)=>{
    console.log(user.name);
});



// map function 
console.log("map method");
// the map method takes array and then a function that returns somethig
function mul(n, i){
    return n * i;
}

const mulbyindex = arr.map(mul); // it returns the array
console.log(mulbyindex);

// we also use the annoymuous function here
const mbi = arr.map(function(n, i){
    return n*i;
});
console.log(mbi);

// using the arrow function 
const mbia = arr.map((n, i) => {
    return n*i;
});
console.log(mbia);

// the above all produces the same result
// now use with objects

const uname = users.map((user) => {
    return user.name;
});
console.log(uname);

// so this is all about the map function 
console.log("filter method");
console.log("finding out the odds ")
const odds = arr.filter((i)=>{
    return i%2 !== 0;
});
console.log(odds);

// reduce method
console.log("Reduce method");

const total = arr.reduce((accumulator, cvalue) => {
    return accumulator + cvalue;
}, 100); // we can set the default value like here 100
console.log(total);


const product = [
    {uid:'p1', name:"mobile", price:10000},
    {uid:'p1', name:"mobile cover", price:2000},
    {uid:'p1', name:"buds", price:10000},
];

// now let's total of the price
let cart_value = product.reduce((totalPrice, product) => {
    return totalPrice + product.price;
},0);

console.log(cart_value);


// sorting 
const arrs = [1,6,4,8,2,5,7,'a','A'];
arrs.sort(); // sorting based on ascii values will change original array
console.log(arrs);

//this method convert number into string then sort so some times not work as expected
const arrs2 = [1200,1205,6,5,32,1,4];
arrs2.sort();
console.log(arrs2); // not working as expected
//we need a call back function 
arrs2.sort((a,b) => {
    return a-b; //sorts in ascending order
})
console.log(arrs2); // working as expected for ascending order

arrs2.sort((a,b)=> b-a); // for reverse sort
console.log(arrs2); // reverse sort

//with objects
const productss = [
    { pid : 1, pname : "prod1", price:1000 },
    { pid : 2, pname : "prod2", price:1500 },
    { pid : 3, pname : "prod3", price:15000 },
    { pid : 4, pname : "prod4", price:100 },
]

let price = productss.sort((a,b) => a.price - b.price);
console.log(productss);
console.log(price);



console.log("find method");
// use to find the method using the call back function
// in belove we trying to find the length 5 name using arrow function 
let pnameL3 = productss.find((name) => {
    return name.pname.length === 5; 
})
console.log(pnameL3);


// every method
console.log("Every Method");
// the every method is used to check specific condition that might apply to all
const arrEv = [15,4,3,6,7];
const isOdd = arrEv.every((a,b) => a % b !== 0);
console.log("odds ", isOdd);

// some method
console.log("some method");
// finds out any of them like that
const isLike = arrEv.some((a,b)=> a%b === 0);
console.log("isLike", isLike);


// fill method
// used to fill the array with particular values
arrEv.fill(0,1,2); // changes 0th index with 0 (value, start, end)
console.log(arrEv);

//splice method 
// use to start, delete, insert in array
console.log("splice method");
arrSl = [1,2,3,4,5];
console.log("before splice method");
console.log(arrSl);
arrSl.splice(3, 0, "i3", "i4"); // it will just inserting 
arrSl.splice(1, 2, "i1", "i2"); // index to insert, delete no elements, insert into
console.log(arrSl);
console.log("after splice method");

// iterable 
// which ever property object having legth and index are know as iterable 


// sets 
// won't allow duplicates 
// it's iterable 
console.log("Set");
const arrST = [1,1,1,3,4,5,5,5,5];
// just removing duplicate values it's also use for many purposes 
console.log(arrST);
const arrSET = new Set(arrST);
console.log(arrSET);
// iterable proven here with iterator
for(let s of arrSET){
    console.log(s);
}


// map
// map data structure 
// this is almost like the objects 
// but in this the key can be intiger or string
// in object the key is the in string 
// the order will be maintained
const mp = new Map(); // like this map is created 
mp.set("fname", "shivam");
mp.set("city", 'umreth');
mp.set(7,'seven');
mp.set(3.1, "point one");
mp.set([1,2,3], 'arrays ');
console.log(mp);
console.log(mp.get(7));

for(let key of mp.keys()){
    console.log(key, typeof key);
}
console.log("for of loop");
for(let [key, value] of mp){
    console.log(key, value,  typeof key);
}


// cloning using the clone Object
console.log("object");
const obj = {
    fname : "shivam",
    lname : "rana"
};

console.log(obj);

// clonning 
const obj2 = {...obj}; // using the spread operator 
console.log(obj2);

// using the object
const obj3 = Object.assign({}, obj);
console.log(obj3);


// optional chaininng 
// this use for the to avoid error while accessing the object element when it's not there
// it will give undefined if not available
const user = {
    uid: "u1",
    fname: "shivam"
}
// if this element is available in this object then give else set as undefined
console.log(user?.uid);
console.log(user?.fname);
console.log(user?.lname); // in this case it will give undefined 


// methods 
console.log("Methods");
console.log("Method is basically function inside object");

// const person = {
//     name : "shivam",
//     age : "23",
//     about: function(){
//         console.log(`my name is ${this.name} and age is ${this.age}`);
//     }
// };

function personInfo(){
    console.log(`my name is ${this.name} and age is ${this.age}`);
}

const person1 = {
    name : "shivam",
    age : "23",
    about: personInfo,
};

const person2 = {
    name : "alpa",
    age : "34",
    about: personInfo,
};

const person3 = {
    name : "shital",
    age : "30",
    about: personInfo,
};

person1.about();
person2.about();
person3.about();


// this === window (window object)

// .call(<user object, ...>)
// .apply()
// .bind() // use for the function and object bind 



//function object methods\
console.log("storing the method in the diffrent object");
const usermethods = {
    about: function(){
        return `${this.fname} ${this.lname} is ${this.age} years old and address is ${this.address}`;
    },

    is18: function(){
        return this.age >= 18;
    }
}

function persons(fname, lname, age, address){
    // const user = {};
    const user = Object.create(usermethods); // now we don't need to write the methods to include it
    // ref below Ojbect.create
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.address = address;
    // user.about = usermethods.about;
    // user.is18 = usermethods.is18;
    return user;
}

const user1 = persons('shivam', 'rana', 23, 'myaddress1');
const user2 = persons('jay', 'kakkad', 13, 'myaddress2');
const user3 = persons('shivay', 'rana', 33, 'myaddress3');

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.is18());


// solution using Object.create(<obj>);
console.log("Object.create()");
// the another way to create the object and the referenced object also inherite their parents elments by this way
const objI = {
    k1: "k1",
    k2: "k2",
}

const objII = Object.create(objI);

objII.k3 = "k3";

console.log(objII);
// __proto__ === [[prototype]] but !== prototype
// the __proto__ will call the refrenced object by this if element will not found in the method then it will be get from it ref one
console.log(objII.k1);
console.log(objII.__proto__);

// now from above we can create chain of object
// by which we don't even need to call all individual method of other object







