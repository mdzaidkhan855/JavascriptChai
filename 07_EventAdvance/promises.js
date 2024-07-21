const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task1 complete");
        resolve();
    }, 1000);
});

promiseOne.then(value=>{
    console.log("promise consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Async task2 complete");
        resolve();
    }, 1000);
}).then(value=>{
    console.log("Asyc2 consumed");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Data passed through resolve:",{username:"chai"} );
        resolve({username:"chai"});
    }, 1000);
});
promiseThree.then(value=>{
    console.log("data consumed:", value);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"Chai",password:"123"})
        }
        else{
            reject("something went wrong")
        }
    }, 1000);
});
promiseFour.then(data=>{
    console.log("data in first then:", data);
    return data.username
}).then(data=>{
    console.log("data in second then:", data);
}).catch(err=>{
    console.log(err);
}).finally(()=>console.log("Promise either resolved or rejected"))


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject("Js went wrong")
        }
    }, 1000);
});
const consumePromiseFive = async ()=>{
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))