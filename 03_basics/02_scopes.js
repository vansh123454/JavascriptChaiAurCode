// this is scope 
//{}

// this is called global scope 
// var c = 50;

// // this is called block scope
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30; // re-initialize that is why we do not prefer var
// }

// // console.log(a); // a is not defined
// // console.log(b); // b is not defined
// console.log(c); // 30


// --------------------------------------------------
let a = 90;
// this is called block scope
if(true){
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);
}

console.log(a); 
// console.log(b);  // b is not defined


// **************************************************
function one(){
    const username = "vansh";
    function two(){
        const website = "http://something.com";
        console.log(username);
    }
    // console.log(website); // give you error
    two();
}
// one(); 

if(true){
    const username = "vansh";
    if(username === "vansh"){
        const website = " bamborde";
        console.log(username + website);
    }
    // console.log(website); // give you error
}
// console.log(username); // give you error

// ************** interesting concept *************

console.log(addOne(5)); // it will run fine
function addOne(num){
    return num + 1;
}

// Cannot access 'addTwo' before initialization
// console.log(addTwo(8)); // it will give an error bcoz of the what function we have written
const addTwo = function(num){
    return num + 1;
}


