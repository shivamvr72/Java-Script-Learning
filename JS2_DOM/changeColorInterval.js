const bgbody = document.body;

// function colorGenerator(){
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const rgb = `rgb(${red}, ${green}, ${blue})`;
//     return rgb;
// }


const id = setInterval(() => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    console.log(rgb);
    bgbody.style.background = rgb
}, 1000);

const button = document.querySelector("#btn");
// console.log(button);
button.addEventListener("click", (e)=>{
    clearInterval(id);
    button.textContent = bgbody.style.background;   
})