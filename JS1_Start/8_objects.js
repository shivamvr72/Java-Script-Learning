// the object are consists of the key value pair
console.log("object is more like dictionaries in python or associative array");

// here is an object
let person_obj = {
    "name" : "shivam", 
    age:23,
    hobbies : ["sleep",'riding','drawing'],
    "person nationality" : "india"  // use quoutes to make key with space and square bracket operator to acess this property
};

console.log(person_obj);


// the key in java scripts are by default string types so no need to add qoutes 
// key also known as property

// to access data using .
console.log(person_obj.name);
console.log(person_obj.age);
console.log(person_obj.hobbies[1]);

console.log(person_obj["person nationality"]); //square brackets operator cz key/propery has space in it



// to add new key

person_obj.gender = "male";
console.log(person_obj);


// to add new key from the variable

const key = "email";
person_obj[key] = "shivamvr@gmail.com";

console.log(person_obj);



// iterate object
// for in loop
console.log("for in loop to access")

for(let key in person_obj){
    // console.log(key); //gives key
    // console.log(person_obj[key]); // gives values 
    console.log(`${key}:${person_obj[key]}`);
}


console.log(Object.keys(person_obj)); // returns keys




//computational properties 
const v1 = "Hermoine";
const v2 = "gryffindor";

const k1 = "name";
const k2 = "house";


const hogwarts = {
    [k1] : v1, // this is know as computational properties
    [k2] : v2
}
console.log(hogwarts);



//spread oprerators in object

// you can make obj using any iterable valaue like string or array
// it will gives the index from 0 to n
const obj1 = {...["i1", "i2", "i3"]}; // 
console.log(obj1);

const obj2 = {..."abcdefg"};
console.log(obj2);



// now use to clone 
const newobj = {...person_obj, ...hogwarts, petrione : "The otter"} // if there any repetive key then its value get replace by last spreaded object
// and can add key like this 
console.log(newobj);
// like here name get replace by hermione 



// object destructing
console.log("ojbect destrucring.....")

const bandobj = {
    bandName : "bts",
    famousSong : "butter",
    song2 : "run",
    song3 : "purple",
    year : 1993
}


let {bandName:band, famousSong, ...etc} = bandobj; // it creates variables and achive destrucring
console.log(band); // you can create new variable name using : operator
console.log(famousSong); // direct name of the key and the variable will be created 
console.log(etc); // all rest properties will be stroed inside the etc as object


// array object destructring / nested destructuring
// the array has multiple object inside
const users = [
    {userid:1, fname:"saturo", gender:"male"},
    {userid:2, fname:"itadori", gender:"male"},
    {userid:3, fname:"mai mai", gender:"female"}
];


// how to access this variable with for of loop

//whole array object acess
for(let user of users){
    console.log(user)
}

//just iterating values
console.log("accessing keys")
for(let user of users){
    console.log(user.fname);
}

// how make variable of this
const [{fname:fnameU1},,{gender:gen3}] = users; // now here we creating renamed variable kike fnameU1 for user 1

//now print this 
console.log("user1 name : ",fnameU1);
console.log("user3 gender: ", gen3);
