const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

// if there are all values then the first value is going to be assign.
// if there is null with some value then that value is going to be assign
// And same goes for undefined as we can see in below

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15; // 15
val1 = null ?? 5 ?? 10; // 5

console.log(val1); // 5

// Ternary Operator
// condition ? true : false;

const chaiPrice = 10;
chaiPrice <= 10 ? console.log("less than 10") : console.log("more than 10");

