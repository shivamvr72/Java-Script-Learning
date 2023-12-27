const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//     .then(resposne => resposne.json())
//     .then(data => console.log(data))


// when we write the async in front of function then it will return promise
async function getPost(){
    // the await keyword will force to wait until it will resolve and we can write as many as we wan
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("something went wrong!");
    }
    return await response.json();
    // return data; // it will also has the promises 
}

// in arrow function write async before bracket 
// const getPost = async() => {
//     const res =  await fetch(URL);
//     return await res.json();
// }

getPost()
    .then( myData => { 
        console.log(myData); 
    })
    .catch(error => {
        console.log(error);
    })
    
