// Dates 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

// let newDate = new Date(2025, 0, 14);
// let newDate = new Date(2025, 0, 14, 5, 3);
// let newDate = new Date("2025-01-12");
let newDate = new Date("01-12-2025");
// console.log(newDate.toLocaleString());

// Times
let myTimeStamp = Date.now();
console.log(myTimeStamp); //1767373953958 - in ms
console.log(Math.floor(myTimeStamp/1000));// 1767374007 - in second

let secondDate = new Date();
console.log(secondDate);
console.log(secondDate.getDay());
console.log(secondDate.getMonth());

// toLocaleString is a object
secondDate.toLocaleString('default', {
    weekday: 'long'
})

