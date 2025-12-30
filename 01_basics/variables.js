const accountId = 123;
let accountEmail = "Vansh@gmail.com";
var accountPassword = "1245";  
accountCity = "Nagpur";

// accountId = 1124; // not allowed

/*
Prefer not to use var because it creates problem like block scope and functional scope
*/

accountEmail = "Sfvfdfv@fvdf";
accountPassword = "5421";
accountCity = "Mumbai";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity]);