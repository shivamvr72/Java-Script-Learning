// the class represent the blue print of the object in the js
// actually js has fake class 
// so most of the internal working happens like as we seen new keyword like that
// we use class keyword to create class
// class containts the property and the methods withing it
// also constructor and destructor 
// constructor will be called while creating new keyword
// almost all the working is like the any other opp languge

class Animal{
    constructor(name, age, sounds){
        console.log("Animal called...");
        this.name = name;
        this.age = age;
        this.sounds = sounds;
    }

    // static properties and methods 
    // we use static keyword 
    // not related to instance/objects
    // accessible by the name of the class only
    static ss = "static property in Animal Class";
    static MyStaticMethods(){
        return this.ss + ' inside method';
    }

    // creating methos 
    soundslike(){
        console.log(`${this.name} sounds like ${this.sounds}`);
    }

    displayAge(){
        console.log(`${this.name} age is ${this.age}`);
    }
}

//creating object 
cat = new Animal("catty", 2, "meow");
cat2 = new Animal("switty", 2, "meow");
cat.displayAge();
cat2.displayAge();


// acessing the static
// cannot be called using the instances/objects
console.log(Animal.ss);
console.log(Animal.MyStaticMethods());


// so now the Harshit first video has been completed


// inheritance using extends keyword
// inherit the properties and methods into child class
class Dog extends Animal{
    // if we don't create construtor here then it will called the parent class cosntructor and we pass the value as per parent class
    constructor(name, age, sounds, eats){
        // the super keyword use to awake parent class constructor 
        super(name,age,sounds); // calls the parent class constructor and pass the value through inheritance so no need to write all properties again
        this.eats = eats;
    }
    shakingTail(){
        console.log("shaking tail");
    }

    dogEats(){
        console.log(this.eats);
    }

    // method overrinding
    soundslike(){
        console.log("bow bow bow bow...");
    }

    // get and set keyword 
    // by this we can use it like a prorperty
    get maxSpeed(){
        console.log("40km/h");
    }

    set newEats(food){
        this.eats = food;
    }
}


// puppy = new Dog('puppy', 3, 'bow bow'); // called the parent constuructor
// puppy.shakingTail();
// puppy.soundslike();

const puppy = new Dog('puppy', 3, 'bow bow', "milk and biscuits"); // called the parent constuructor
puppy.shakingTail();
puppy.soundslike();
puppy.dogEats();
puppy.soundslike(); // now overrided method will be called

puppy.newEats = "dog food"; // now it's treated as proprty to set the value and cannot call it
puppy.dogEats();

puppy.maxSpeed; // now we can use it like a property no need to called possible using the "get" keyword AND cannot use the parantheses to call else gives error