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

