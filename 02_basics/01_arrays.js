// array

const myArray = [1,2,3,4,5];

const myHeros = ["Ironman","Hulk"];
const myArray2 = new Array(4,2,3,5);// Another way of representing the array

console.log(myArray[0]);

// ************** Array Methods *******************

// myArray.push(9);
// myArray.push(14);
// myArray.pop();
// console.log(myArray);

myArray.unshift(9); // it will add at the start
myArray.shift(); // it will remove from the start
console.log(myArray);


// it will true or false value
const result = myArray.includes(9);
console.log(result);

console.log(myArray.indexOf(3));
