// const myName = "Vansh   ";
// console.log(myName.trueLength);

const myArray = ["hulk","spiderman"];

const heroPower = {
    thor: "hammer",
    hulk: "physicalStrength",
    
    getHulkPower: function(){
        console.log(`This is hulk power`);
    }
}

// we have injected vansh method into the object
Object.prototype.vansh = function(){
    console.log(`vansh is present in all object`);
}
// Array, String, Function passes through object so when we inject any method or property into the object the rest of the other like array,string and function will be allow to access the method or property
heroPower.vansh(); // vansh is present in all object
myArray.vansh(); // vansh is present in all object

// Now we are injecting into the array
Array.prototype.hiiVansh = function(){
    console.log(`This is present in all Array`);
}
myArray.hiiVansh(); // This is present in all Array
// heroPower.hiiVansh(); // it will give you error because we can not acces hiiVansh method in object

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "VanshBamborde     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

