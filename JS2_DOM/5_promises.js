// promises
// promises has status and value

const bucket = ['salt', 'rise', 'vegies', 'tea', 'coffee', 'masala']; // to make some recipe
// promise start with new keyword and takes callback function
// we can store the promise value after result like as below
const friedRise = new Promise((resolve, reject)=>{
    if(bucket.includes("salt")&& bucket.includes("rise") && bucket.includes("vegies")){
        resolve("fried rise");
    } else {
        reject("couldn't do it"); // we can also pass the errors or anthing we want
    }
});


// produced
// now consume the promise 
friedRise.then((myRise)=>{
        console.log("let's eat ", myRise); // when promise resolved
}, 
(error)=>{
        console.log(error); // when promise rejected
});



// we also can pass one or completely niglect one on resolve or reject like as below
// neglecting on resolve
friedRise.then(
    null,
    (error)=>{
        console.log(error);
    }
);

// neglecting on error
friedRise.then(
    (myRise)=>{
        console.log(myRise);
    }
);

// checking timeout
setTimeout(()=>{
    console.log("hello from setTimeout"); // it will display last cause micro task queue has higher priority then call back
}, 0);


// can method chain with it
friedRise.then(
    (myRise)=>{
        console.log(myRise);
    }
).catch((error)=>{
    console.log(error);
})


// promise is the feature of the browser
// promise is also a object the browser consumes and returns the result
// after completing the script the promise will be handled
// promises will be in micro task queue and it's having higher priority then callback


// function returning promise
function salad(){
    return new Promise((resolve, reject)=>{
        if(bucket.includes("salt") && bucket.includes("vegies")){
            resolve("salad for serves ");
        } else {
            reject("couldn't do it"); // we can also pass the errors or anthing we want
        }
    });
}

salad().then(
    (mySalad) => {
        console.log("fun ", mySalad);
    }).catch(
    (error)=>{
        console.log(error);
    });


// promise and setTimeout

function myPromise(){
    return new Promise((resolve, reject)=>{
        let value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            } else {
                reject();
            }
        });
    });
}

// now calling the promise 
myPromise()
    .then(()=>{console.log("resolved");}) 
    .catch(()=>{console.log("rejected");}); 

// then method always return promise and we can create a chain
function myPromise2(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    });
}

myPromise2()
    .then((value)=>{
        console.log(value);
        value += "bar"; // here the promise is returning
        return value;

    })
    .then((value)=>{
        console.log(value);
        value += " barr";
        return value;
    })
    .then((value)=>{
        console.log(value);
    })
