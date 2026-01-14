class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // kisiko bhi access nhi deta
        return `123`
    }
}

const vansh = new User("vansh")
// console.log(vansh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username); // it is mandatory when you set value from the above function or constructor
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

console.log(iphone.createId());