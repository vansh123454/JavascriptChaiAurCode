const name = "vansh";
const surname = "bamborde";

// this is bad, we dont use like this way
// console.log(name + surname);

// console.log(`my name is ${name} and surname is ${surname}`);

// second method to declare the string
const gameName = new String('TempleRun');
// string is an object

// console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // p
console.log(gameName.indexOf('p')); // 3
