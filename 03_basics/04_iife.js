// Immediately Invoked Function Expression(IIFE)

// IIFE ke do mtlb
// jo function immediately execute ho jaaye
// global scope ke polution ko hatane ke liye humne iife ka use kiya
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// ()() // this is syntax for iife
// first () is for function defination
// second () is mandatory

// (function aurcode(){
    // named IIFE
    // console.log(`DB CONNECTED TWO`);
// })();


// simple IIFE or unnamed IIFE
((name) =>{
    console.log(`DB CONNECTED THREE ${name}`);
})("Vansh");
