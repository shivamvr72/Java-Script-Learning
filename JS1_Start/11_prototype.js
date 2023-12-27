console.log("prototype");

// js function also works as object 
// function == function + object
// we can add the prorery in it

function hello(){
    console.log("hello");
}

hello.mypropery = "my value";
console.log(hello.mypropery);


// name prorerty tells function name


// only function provides the prototype property
console.log(hello.prototype);

hello.prototype ? console.log("prototype") : console.log("not prototype");
// object not having this prototype properties
const h1 = {k2: "k2"};
h1.prototype ? console.log("prototype") : console.log("not prototype");

hello.prototype.o1 = "o1";
console.log(hello.prototype);
// adding the function
hello.prototype.sing = function(){"lalal lalalal alalalal"};
console.log(hello.prototype);




// adding the methods using prototype
console.log("adding the method using prototype");
// const usermethods = {
//     about: function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old and address is ${this.address}`;
//     },

//     is18: function(){
//         return this.age >= 18;
//     },
     
//     sing: function(){
//         console.log("lalll lalalall alalalal");
//     }
// }

function persons(fname, lname, age, address){
    const user = Object.create(persons.prototype); // now we don't need to write the methods to include it
    // we create simple self refrence object
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.address = address;
    return user;
}

persons.prototype.about = function(){
    return `${this.fname} ${this.lname} is ${this.age} years old and address is ${this.address}`;
};

persons.prototype.is18 = ()=>{
    return this.age >= 18;
};

persons.prototype.sing = ()=>{
    console.log("lalallal lallal al al");
};


const user1 = persons('shivam', 'rana', 23, 'myaddress1');
const user2 = persons('jay', 'kakkad', 13, 'myaddress2');
const user3 = persons('shivay', 'rana', 33, 'myaddress3');

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.is18());



