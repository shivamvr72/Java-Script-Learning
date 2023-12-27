const xhr = new XMLHttpRequest();
// console.log(xhr);

const url = "https://jsonplaceholder.typicode.com/comments?postId=1";

xhr.open("GET", url);

// console.log(xhr.readyState); // ready state has mdr 
// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// console.log(xhr.onload);
// xhr.send();

console.log(xhr.status);

// with error handling 
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    } else {
        console.log("something went wrong!");
    }

}
xhr.send();

xhr.onerror = () => {
    console.log("network error"); // like it will handles the error related to network
}

console.log(xhr.status);