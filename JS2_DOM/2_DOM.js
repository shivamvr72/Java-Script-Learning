// stands for Document Object Model
console.log("Document Object Model");

console.dir(document);

// select element using...

// 1. document.getElementById("") 
const logoHome = document.getElementById("logo-home");
console.log(logoHome);
console.dir(logoHome);

// 2. document.querySelector();
// by using querySelector we can select anything from the document
const logoHomeQ = document.querySelector("#logo-home");
console.log(logoHomeQ);
console.dir(logoHomeQ);


const header = document.querySelector(".header");
console.log(header);
console.dir(header);

// select all elements that are matched
const navItems = document.querySelectorAll(".form-group"); // returns node list but it's also a array like object
// on node list we can use all type of for loops
console.log(navItems);
console.dir(navItems);


// change text 
const newLogo = document.getElementById("logo-home");

// .innerText
console.log(newLogo.innerText); // it will only show which is visible on webpage

// .textContent
console.log(newLogo.textContent); // it also shows the properties that are hidden like here Legos
newLogo.textContent = "DOMs";
newLogo.style.padding = "3px";
newLogo.style.margin = "5px"
console.log(newLogo.textContent);

// change style
const logoStyle = document.querySelector("nav h1#logo-home"); // inside nav there is h1 class "separated by space" ; select h1 where class #logo-home ; this is also way to select
console.log(logoStyle.style);
logoStyle.style.color = "white";
logoStyle.style.border = "2px solid grey"; 
logoStyle.style.backgroundColor = "blue";



// getAttribute method
// for example selecting href attribute value
// getAttribute is use manupulate any html attribute

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// setAttribute method
link.setAttribute("href", "#home2");
console.log(link.getAttribute("href"));


// get multiple element by class name 
const formGroups = document.getElementsByClassName("form-group"); // returns array like object
console.log(formGroups);
console.log(formGroups[0]);

// looping through the collection 
// we can't use forEach loop with HTML collection class
const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2);
for(let i=0; i < navItems2.length; i++){
    console.log(navItems2[i]);
}


// get element by tag name to select name as per tag
const allaTags = document.getElementsByTagName("a"); // returns html collection
console.log(allaTags); 
for(let i=0; i<allaTags.length; i++){
    console.log(allaTags[i]); //for printing pupose only
    allaTags[i].style.color = "blue";
    allaTags[i].style.fontWeight = "bold";
}

// for of loop on tags
for(items of allaTags){
    items.style.color ="white";
    items.style.border = "2px solid red";
}

// we can use forEach method by convering html collection into array

let a_Tags = Array.from(allaTags); //converting HTML collection into array
// be can't apply forEach method on html collection directly because it takes call back function 
a_Tags.forEach(element => {
    element.style.border = "none";
});



// innerHTML
const heading = document.querySelector(".headline");
heading.innerHTML = "<h1>This is DOM Manupulation</h1>";
// adding additional element 
heading.innerHTML += "<a href='https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents'>visit</a>";



// getting the root node travsing the DOM TREE
const rootNode = document.getRootNode();
console.log(rootNode); // the document object is the root node
const htmlElement = rootNode.childNodes[1];
console.log(htmlElement);
console.log(htmlElement.childNodes); // returns node list

const headElement = htmlElement.childNodes[0];
console.log(headElement);

const textElement = htmlElement.childNodes[1];
console.log(textElement);

const bodyElement = htmlElement.childNodes[2];
console.log(bodyElement);

// parent node
console.log("parent element of head", headElement.parentElement);


// sibling 
console.log(headElement.nextSibling);

console.log(headElement.previousSibling);

console.log(headElement.nextElementSibling);

console.log(headElement.childNodes);

console.log(headElement.children);// shows the children elements



// classlist add, remove, toggle classes
const sectionTodo = document.querySelector(".todo-section");
console.log(sectionTodo.classList);
sectionTodo.classList.add("dark"); //adding the class 

sectionTodo.classList.remove("dark"); // removing the class

const exist = sectionTodo.classList.contains("dark");
console.log(exist);

// if there then removes and not then adds
sectionTodo.classList.toggle("dark"); // adds
sectionTodo.classList.toggle("dark"); // removes 



