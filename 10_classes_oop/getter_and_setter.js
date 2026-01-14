class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        // return this.email.toUpperCase(); // give you error
        return this._email.toUpperCase();// now it will run
    }
    set email(value){
        // this.email = value; // give you error
        this._email = value; 
    }

    get password(){
        // return `${this.password}vansh`; // give you error
        return `${this._password}vansh`; // give you error
    }
    set password(value){
        // this.password = value; // give you error
        this._password = value;
    }
}

const vansh = new User("once@gmail.com", "123");
console.log(vansh);
console.log(vansh.email); // ONCE@GMAIL.COM
console.log(vansh.password); // 123vansh