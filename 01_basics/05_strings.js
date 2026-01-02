const name = "vansh";
const surname = "bamborde";

// this is bad, we dont use like this way
// console.log(name + surname);

// console.log(`my name is ${name} and surname is ${surname}`);

// second method to declare the string
const gameName = new String('TempleRun');
// string is an object

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); // p
// console.log(gameName.indexOf('p')); // 3

const subject = new String('dataStructure');

// 5th index will not include
const newSubject = subject.substring(0,5);
// console.log(newSubject);

// (subject.length - 13) = (13 - 13) = 0
/// from back slice(-13,2) = slice(0,2);;
const newSubject2 = subject.slice(-13,2);
// console.log(newSubject2);

const newWord = "    Vansh  ";
console.log(newWord);
console.log(newWord.trim());

const url = 'https://vansh.com/vansh%40bamborde';

console.log(url.replace('%40', '-'));
console.log(url.includes('vansh')); // true

// split() se string ko array me convert krna
// on the space we divide the word 
const newName = "Javascript is the best programming language";
console.log(newName.split(' '));
// output - [ 'Javascript', 'is', 'the', 'best', 'programming', 'language' ]


