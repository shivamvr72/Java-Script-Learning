// new keyword
// new keyword creates empty objects 
// this = {}
// able to replace this line = Object.create(persons.prototype);
// we don't need to write the prototype keyword we simpley write it with new keyword when creating object

// this shows how the how the class will be created internally
// actually java fakes the class by using this internally
// the class keyword introuduced in 2015 almost in js

function Persons(fname, lname, age, address){ // which function going to call using the new keyword will have the first letter as Capita as convestion 
    // const user = Object.create(Persons.prototype); // now we don't need to write this line to include the methods
    // we create simple self refrence object
    this.fname = fname; // now we need to use the this because we refrencing the object as self
    this.lname = lname;
    this.age = age;
    this.address = address;
    // return user; // no need to write return the object it will also handled by new keyword
}

Persons.prototype.about = function(){
    return `${this.fname} ${this.lname} is ${this.age} years old and address is ${this.address}`;
};

Persons.prototype.is18 = ()=>{
    return this.age >= 18;
};

Persons.prototype.sing = ()=>{
    console.log("lalallal lallal al al");
};


const user1 = new Persons('shivam', 'rana', 23, 'myaddress1');
const user2 = new Persons('jay', 'kakkad', 13, 'myaddress2');
const user3 = new Persons('shivay', 'rana', 33, 'myaddress3');

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
console.log(user1.is18());



// hasOwnPropery
// to print the propert which is actually part of the function object
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
