
async function getPromise(a) {
    let myPromise = new Promise((resolve, reject) => {
    if(a > 15){
        const obj = {
            status: true,
            message: `Promise resolved successfully: ${a}`,
            name: "Shaffaq",
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

//console.log(getPromise(15));

async function callPromise() {
    try{
     let response = await getPromise(20);
     console.log(response);

     response = await getPromise(10);
     console.log(response);

     response = await getPromise(17);
     console.log(response);
    } catch (error) {
        console.log(error);
    } 
    
}

console.log(callPromise());
