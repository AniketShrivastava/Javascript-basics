// # primitive datatype .........

// 7 types : String,Number,Boolearn,Undefined,Null, Symbol,BigInt

// javascript static type and dynamic type :=>

const score = 100

const scoreValue = 100.3

const isLoggedIn= false
const OutsideTemp = false//boolearn

let userEmail;//undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId);//false

const bigNumber = 346748778478784778n//bigint


// Reference (Non primitive datatype)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"] // it is array

// object
let myObj=
{
    name:"Aniket",
    age :22
}//object

// function

const myFunction = function(){
    console.log("hello world");
}

// Stack(primitive),Heap(Non-primitive)

let myYoutubename = "Aniketshrivastavadotcom"

let anothername = myYoutubename
anothername = "myyoutube"
console.log(myYoutubename);// value : Aniket............
console.log(anothername);// value : myyoutube

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne

userTwo.email = "Aniket.shrivastava91@gmail"
console.log(userOne.email);//Aniket.shrivastava91@gmail
console.log(userTwo.email);//Aniket.shrivastava91@gmail



