// singleton

//object literals
// Object.create

const mysymbol = Symbol("key1")

const jsuser = {
    name: "Aniket",
    "full name":"aniket shri",
    [mysymbol]:"mykey1",
    age:26,
    location:"indore",
    email:"a@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}


console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysymbol]);

jsuser.email = "s@gmail.com"
Object.freeze(jsuser);
jsuser.email = "s@gmailchat.com"
console.log(jsuser);


jsuser.greetings = function(){
    console.log("hello js user");
}
console.log(jsuser.greetings);// undefined
console.log(jsuser.greetings());// print hello js user

jsuser.greetingstwo = function(){
    console.log(`hello js user1 ${this.name}`);
}

console.log(jsuser.greetingstwo());// print hello js name






