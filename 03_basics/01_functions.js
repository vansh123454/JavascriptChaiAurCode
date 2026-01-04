// Functions - block of code

function sayName(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}

// console.log(sayName); // reference - [Function: sayName]
// sayName();

// Add two number
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2); // this function does not return anything
// }

// Add two number
function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

const result = addTwoNumbers(5,6);

// console.log("Result: ", result);

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter the username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// if user do not enter the username then it will automatically allot the name which is called default name
function loginUserMessage(username = "xyz"){
    if(!username){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in`;
}

// const res = loginUserMessage("vansh");
// console.log(res); // vansh just logged in

// without if conditon
// console.log(loginUserMessage()); // undefined just logged in

//with if condition and we did not add default check
// console.log(loginUserMessage()); // Please enter the username

// with default name check 
// console.log(loginUserMessage()); // xyz just logged in

// ************ Cart ***************************

// function addCart(new1){
//     return new1;
// }
// // const res = addCart(200); // 200

// this is rest operator. Spread operator and rest operator are similar
// function addCart(...new1){
//     return new1;
// }
// const res = addCart(200,400,500); // [ 200, 400, 500 ]


function addCart(value1, value2, ...new1){
    return new1;
}
// 200 goes to value1, 400 goes to value2 and rest goes to new1
const res = addCart(200,400,500,100,300); // [ 500, 100, 300 ]
console.log(res);

// object passing in function

const user = {
    username: "vansh",
    age: 20,
}

function handleObject(anyObject){
    console.log(`My name is ${anyObject.username} and i am ${anyObject.age} years old`)
}

handleObject(user); // My name is vansh and i am 20 years old

// we can directly pass object 
handleObject({
    username: "once",
    age: 21,
}); // My name is once and i am 21 years old


// array passing in function

const myArray = [99, 641, 574, 621];
function handleArray(getArray){
    return getArray[1];
}
// console.log(handleArray(myArray)); // 641
// we can directly pass array 
console.log(handleArray([641, 574, 99, 10])); // 574




