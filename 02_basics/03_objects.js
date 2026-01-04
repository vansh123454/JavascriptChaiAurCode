// singleton
// Object.create = constructor
// when we create object using constructor then singleton comes up


const mySym = Symbol("key1");

// object leterals
const user = {
    name: "vansh",
    "surname": "bamborde",
    [mySym]: "myKey1",
    age: 20,
    location: "nagpur",
    isLoggedIn: false,
    email: "vansh@gmail.com",
    lastLoginDays: ["monday","saturday"]
}

// this is correct way but we should prefer another way too
// console.log(user.email); // vansh@gmail.com
// console.log(user["email"]); // vansh@gmail.com

// "surname": "bamborde" :- for this we can not access with '.' dot operator we use [""] like this 
// but now a day that problem has been resolved

console.log(user.surname); // it will not give error but 1-2 years back it was a problem

// so we were using [""] this
// console.log(user["surname"]);

// using symbol as a key in the object, interview questions

// we use square braket to declare symbol in the object
// console.log(user.mySym); // we can not acces like this it gives undefined

console.log(user[mySym]);
console.log(typeof user[mySym]);
console.log(user); // output - // {
//   name: 'vansh',
//   surname: 'bamborde',
//   age: 20,
//   location: 'nagpur',
//   isLoggedIn: false,
//   email: 'vansh@gmail.com',
//   lastLoginDays: [ 'monday', 'saturday' ],
//   [Symbol(key1)]: 'myKey1' - IMP LINE
// }

// update value 
user.email = "vansh@google.com";
console.log(user.email); // vansh@google.com
// freeze object so no one can change the value
// Object.freeze(user); // now no one can change if he wants to
user.email = "vansh@chatgpt.com";
console.log(user.email); // vansh@google.com

// functions
user.greeting = () =>{
    console.log("Hello JS User");
}

// Arrow functions do NOT bind 'this'.
// user.greetingTwo = () =>{
//     console.log(`Hello JS User ${this.name}`);
// } output - Hello JS User undefined

user.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

// we undo the freeze, so that this code will work
console.log(user.greeting); // [Function (anonymous)] - it returns the function 
console.log(user.greeting()); // Hello JS User
console.log(user.greetingTwo()); // Hello JS User vansh






