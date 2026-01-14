const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
//          Output
// {
//   value: 3.141592653589793,
//   writable: false, // can not change value 
//   enumerable: false, // can not iterate on object
//   configurable: false, // can not change property and can not redefine
// }
// we can not change the property of PI in Math library

const chai = {
    name: 'Adrak chai',
    price: 250,
    isAvailable: true,

    chaibani: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai)); // it will give you undefine

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// we can not iterate direct on the object
// for(let [key, value] of chai){
//     console.log(`${key}: ${value}`)
// }

//this is for without function in object
// for(let [key, value] of Object.entries(chai)){
//     console.log(`${key}: ${value}`)
// }
//      output
// name: Adrak chai
// price: 250
// isAvailable: true
// chaibani: function(){
//         console.log("chai nhi bni");
//     }



// this is for function in object
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key}: ${value}`);
    }
}
//      output
// name: Adrak chai
// price: 250
// isAvailable: true

// VERY VERY IMP
// if we do enumerable: false in 20th line then we can get name attribute or we can say we can not iterate on the object



