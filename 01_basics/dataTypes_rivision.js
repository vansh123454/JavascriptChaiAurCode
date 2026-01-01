// Primitive
// 7 :- String, Number, null, undefined, Boolean, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

// is javascript dynamically or statically type
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:
// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

const score = 100;
const scoreMin = 100.5;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123'); // different
const anotherId = Symbol('123'); // different

console.log(id === anotherId); // false

const bigNumber = 2145122n;


// Reference (Non Primitive)
// Array, Objects, Functions

// Array
const heroes = ["ironman","hulk","captain"];
// Objects
const myObject = {
    name: "vansh",
    age: 20,
}
// Functions
const myFunction = function(){
    
}

