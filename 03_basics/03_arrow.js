// this keyword only work in objects not in functions but here function is inside the object so it will work
const user = {
    username: "vansh",
    price: 841,
    // this keyword current context batata hai
    welcomeMessage: function(){
        console.log(` ${this.username}, welcome to the website`);
        // this keyword tell the current context
        console.log(this); // { username: 'vansh'price: 841,welcomeMessage: [Function: welcomeMessage]}
    }
}

// user.welcomeMessage();
// user.username = "once";
// user.welcomeMessage();

// console.log(this); // {}

// window is the global object when we try to console on browser then we get window object but in nodejs we get empty curly braces {}

// function chai(){
//     let username = "vansh";
//     console.log(this.username); // undefined - we can not use this keyword inside the function
// }
// chai();


const chai = () =>{
    let username = "vansh";
    console.log(this); // {}
}
// chai();


// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(5,9)); // 14

// implicit return - means only one line code we dont need to write '{}' these braces and also dont need to write 'return' word
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(5,9)); // 14

// object return by implicitly in parenthesis bracket
const addTwo = (num1, num2) => ({username: "vansh"});
console.log(addTwo(5,9)); // { username: 'vansh' }


