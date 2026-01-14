class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Vansh = new Teacher("Vansh", "chai@teacher.com", "123")
Vansh.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(Vansh === Teacher); // false
console.log(Vansh instanceof Teacher); // true
console.log(Vansh instanceof User); // true