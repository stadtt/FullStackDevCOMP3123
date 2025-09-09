function getPromise(a) {
    let myPromise = new Promise((resolve, reject) => {
    if(a > 10){
        const obj = {
            status: true,
            message: `Promise resolved successfully: ${a}`,
            name: "Pritesh",
            age: 24
        }
        resolve(obj);
    } else {
        const error = {
            status: false,
            message: "Promise rejected"
        }
        reject(error);
    }
})
    return myPromise;
}


// console.log("--START--");
// getPromise(15).then((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error);
// })

// getPromise(5).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })
// console.log("--END--");

// Chaining Promises
// getPromise(20).then((message) => {
//     console.log(message);
//     return "Chaining promises";
// }).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })

// getPromise(5).then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })

// Using Promise.all to handle multiple promises
Promise.all([getPromise(15), 
    getPromise(25), 
    getPromise(20)])
.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})