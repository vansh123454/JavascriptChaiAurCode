const marvelHeros = ["ironman","hulk","thor"];
const dcHeros = ["superman","batman","flash"];

// it adds into existing array 
// marvelHeros.push(dcHeros);
// console.log(marvelHeros); // [ 'ironman', 'hulk', 'thor', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvelHeros[3][2]); // flash

// it return the new array
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); // [ 'ironman', 'hulk', 'thor', 'superman', 'batman', 'flash' ]


// very very IMP 
// spread operator ...
// and we prefer this instead of concat
const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros); // [ 'ironman', 'hulk', 'thor', 'superman', 'batman', 'flash' ]

// flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const anotherArray = [1, 2, 3, [4,5], 6, [7, 8, [9, 2]]];
const flatArray = anotherArray.flat(Infinity);
console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 2 ]


console.log(Array.isArray("vansh")); // false
console.log(Array.from("vansh")); // it converts into the array  [ 'v', 'a', 'n', 's', 'h' ]
console.log(Array.from({name: "vansh"})); // interesting


// imp

let score1 = 100;
let score2 = 200;
let score3 = 300;
// it returns a new array from a set of elements.
const scoreArray = Array.of(score1, score2, score3);
console.log(scoreArray); // [ 100, 200, 300 ]





