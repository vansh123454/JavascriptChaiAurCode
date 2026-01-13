// created promise successfully
// const promiseOne = new Promise();//

// Promise 1
const promiseOne = new Promise((resolve, reject)=>{
    // Do an async task
    // DB calls, network call, cryptography

    setTimeout(()=>{
        console.log("Async task is complete");
        resolve();// now .then will run
    }, 1000);
});
promiseOne.then(()=>{
    console.log("Promise Consumed");
});


// // Promise 2
// we are storing in the variable
new Promise((resolve, reject)=>{
    // Do async task
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("Async 2 resolved");
})

// Promise 3
const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Vansh", email: "vansh@gmail.com"});
    }, 1000);
})
promiseThree.then((user)=>{
    console.log(user);
})

// Promise 4
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error) {
            resolve({username: "Vansh", password: 123});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username; // this return value will go into the next .then function
}).then((username)=>{
    console.log(username); // Vansh
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"));


// Promise 5
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000)
})

// const consumePromiseFive = async () =>{
//     const response = await promiseFive;
//     console.log(response);
// }
const consumePromiseFive = async () =>{
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

////
// const getAllUsers = async () =>{
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // it is also async task
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// getAllUsers();


// by .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error: ", error);
})