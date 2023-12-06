const accountId = 432356;
let accountEmail = "ani2gmail.com";
var accountPassword = "aniket";
accountCity = "indore"
let accountState;  //undefine because of value not assign

// accountId = 2 // not allow block level scope

accountEmail = "aniket@gmail.com";
accountPassword = "aniket123"
accountCity = "bhopal"


/*
prefer npt to use var

because of issue in block scope and function scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


