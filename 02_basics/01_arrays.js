// array

const myArray = [1,2,3,4,5];

const myHeros = ["Ironman","Hulk"];
const myArray2 = new Array(4,2,3,5);// Another way of representing the array

// console.log(myArray[0]);

// ************** Array Methods *******************

// myArray.push(9);
// myArray.push(14);
// myArray.pop();
// console.log(myArray);

myArray.unshift(9); // it will add at the start
myArray.shift(); // it will remove from the start
// console.log(myArray);


// it will true or false value
// const result = myArray.includes(9);
// console.log(result);

// console.log(myArray.indexOf(3));

// join convert array into string
const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);//string

// slice and spilce

console.log("A ", myArray); // A  [ 1, 2, 3, 4, 5 ]

// it doest not include the last element
const myn1 = myArray.slice(1,3);
console.log(myn1); // [ 2, 3 ]
console.log("B ", myArray); // B  [ 1, 2, 3, 4, 5 ]

// it does include the start and last element but when we do 'splice' then it will cut that portion from the original array
const myn2 = myArray.splice(1,3);
console.log("C ", myArray); // C  [ 1, 5 ]
console.log(myn2); // [ 2, 3, 4 ]

// original array
console.log(myArray); // only [1, 5]



