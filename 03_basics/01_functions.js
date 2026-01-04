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
console.log(loginUserMessage()); // undefined just logged in

//with if condition and we did not add default check
// console.log(loginUserMessage()); // Please enter the username

// with default name check 
console.log(loginUserMessage()); // xyz just logged in


