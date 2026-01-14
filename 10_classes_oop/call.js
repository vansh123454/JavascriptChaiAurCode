// function setUsername(username){
//     console.log(`username called: ${username}`);
//     this.username = username;
// }

// function createUser(username, email, password){
//     setUsername(username);
//     this.email = email;
//     this.password = password;
// }

// const once = new createUser("vansh","vansh@gmail.com","123");
// console.log(once); // username is not printing




function setUsername(username){
    console.log(`username called: ${username}`);
    this.username = username;
}

function createUser(username, email, password){
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

// call -> current execution context ko dusre function me pass krta hai so ki uski value assign ho sake.Jaise ki iss case me username set nahi ho raha tha to humne call ka use kiya aur set kr li

const once = new createUser("vansh","vansh@gmail.com","123");
console.log(once); // { username: 'vansh', email: 'vansh@gmail.com', password: '123' }