const score = 50;
// console.log(score); //50

// explicitly declare for number
const balance = new Number(500);
// console.log(balance); // [Number: 500]

// console.log(balance.toString()); // 500
// console.log(balance.toString().length); // 3

const otherNum = 23.85;
// 123.85
// console.log(otherNum.toPrecision(3)); // 124
// 23.85
// console.log(otherNum.toPrecision(3)); // 23.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ++++++++++++++++ Math +++++++++++++++++++++++
// console.log(Math); // Object [Math] {}
// console.log(Math.round(4.4)); // 4
// console.log(Math.abs(-4)); // 4
// console.log(Math.ceil(4.2)); // 5 
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(3,6,2,8)); // 2
// console.log(Math.max(3,6,2,8)); // 8

// console.log(Math.random()); // 0 to 1
// console.log(Math.random() * 10); // 0 to 9
// console.log((Math.random() * 10) + 1); // 1 to 9
// console.log(Math.floor((Math.random() * 10) + 1)); // 1 to 10


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);