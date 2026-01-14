// ES6

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

const vansh = new User("Vansh","once@gmail.com","123");
console.log(vansh); // { username: 'Vansh', email: 'once@gmail.com', password: '123' }
console.log(vansh.encryptPassword()); // 123abc
console.log(vansh.changeUsername()); // VANSH


// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// injecting encryptPassword into the object
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
// injecting changeUsername into the object
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const once = new User("once", "once@gmail.com", "123")

console.log(once.encryptPassword());
console.log(once.changeUsername());