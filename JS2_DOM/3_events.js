// events will be triggered by the user on the basis of particular action has been done by the user 
const button = document.querySelector("input.btn");
console.dir(button);


// but this is the old way to do this 
button.onclick = function(){console.log("hello I'm clicked");}


const button2 = document.querySelector(".btn-headline");

function clicked(){
    console.log("i'm clicked fun");
    console.log(this); // returns button it self
}
button2.addEventListener("click", clicked);

// by the way of arrow function 
button2.addEventListener("click", ()=>{
    console.log("clicked by arrow");
    console.log(this); // returns window object / it's one step above value that's why need to pass argument and catch the relevant thin like event.current target
})

button2.addEventListener("click", (event)=>{
    console.log("clicked by arrow");
    console.log(event.currentTarget);
    console.log(event.currentTarget.textContent);
})
