const tinderUser = new Object(); // it is singleton object - signleton objects are those object which is created by constructor

// const tinderUser = {}; // it is not sisngleton objects, it is object literal

// console.log(tinderUser); // {} output will br the same for both declaration of object

tinderUser.id = "124vff";
tinderUser.name = "vansh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '124vff', name: 'vansh', isLoggedIn: false }

const regularUser = {
    email: "vansh@out.com",
    fullname: {
        userFullname: {
            firstName: "vansh",
            lastName: "bamborde"
        }
    }
}

// console.log(regularUser.fullname);// { userFullname: { firstName: 'vansh', lastName: 'bamborde' } }
// console.log(regularUser.fullname.userFullname); // { firstName: 'vansh', lastName: 'bamborde' }
console.log(regularUser.fullname.userFullname.firstName); // vansh

// merge multiple objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign(obj1, obj2); // everything is going into obj1
const obj3 = Object.assign({}, obj1, obj2); // everything is going into {} this
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// But we use spread operator
// easy and simple
const obj4 = {...obj1, ...obj2};
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }






