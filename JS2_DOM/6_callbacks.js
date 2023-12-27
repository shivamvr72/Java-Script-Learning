const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");


// setTimeout(()=>{
//     h1.textContent = "1";
//     h1.style.color = "red";

//     setTimeout(()=> {
//         h2.textContent = "2";
//         h2.style.color = "violet";

//         setTimeout(()=>{
//             h3.textContent = "3";
//             h3.style.color = "green";

//             setTimeout(()=>{
//                 h4.textContent = "4";
//                 h4.style.color = "blue";
                
//                 setTimeout(()=>{
//                     h5.textContent = "5";
//                     h5.style.color = "orange";

//                     setTimeout(()=>{
//                         h6.textContent = "6";
//                         h6.style.color = "yellow";

//                     }, 1000);

//                 }, 1000);

//             }, 1000);
            
//         },1000);

//     }, 1000);

// }, 1000);


// the pyramid of doom

// function changeText(element, text, color, time, onSuccess, onFailure){
//     setTimeout(()=>{
//         if(element){
//             element.changeText = text;
//             element.style.color = color;

//             if(onSuccess){
//                 onSuccess();
//             }

//         } else {

//             if(onFailure){
//                 onFailure();
//             }
//         }
//     }, time);
// }

// // this is pyramid of doom
// changeText(h1, "one", "red", 1000, ()=>{
//     changeText(h2, "two", "blue", 1000, ()=>{
//         changeText(h3, "three", "green", 1000, ()=>{
//             changeText(h4, "four", "violet", 1000, ()=>{
//                 changeText(h5, "five", "orange", 1000, ()=>{
//                     changeText(h6, "six", "purple", 1000, ()=>{
//                         changeText(h7, "seven", "brown", 1000, ()=>{
 
//                         }, ()=>{ console.log("heading7 not exists")});
//                     }, ()=>{ console.log("heading6 not exists")});
//                 }, ()=>{ console.log("heading5 not exists")});
//             }, ()=>{ console.log("heading4 not exists")});
//         }, ()=>{ console.log("heading3 not exists")});
//     }, ()=>{ console.log("heading2 not exists")});
// }, ()=>{ console.log("heading1 not exists")});



// now to solve this issue we can use promises 
// by this the code look more organised and clean

function changeText2(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("element not found!");
            }
        }, time);
    });
}


changeText2(h1, "one", "red", 1000)
    .then(()=>{
        return changeText2(h2, "two", "blue", 1000);
    })
    .then(()=>{
        return changeText2(h3, "three", "violet", 1000);
    })
    .then(()=>{
        return changeText2(h4, "four", "purple", 1000);
    })
    .then(()=>{
        return changeText2(h5, "five", "yellow", 1000);
    })
    .then(()=>{
        return changeText2(h6, "six", "orange", 1000);
    })
    .then(()=>{
        return changeText2(h7, "seven", "cyan", 1000);
    })
    .catch((error)=>{
        alert(error);
    })