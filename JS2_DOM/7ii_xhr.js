const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response); // xhr.responseText also valid
            } else {
                reject(new Error("somethig went wrong"));
            }
        }

        xhr.onerror = () => {
            reject(new Error("something went wrong"));
        }

        xhr.send();
    })
}


sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        return data;
    })
    .then(data => {
        const id = data[2].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error => {
        console.log(error);
    })