// this key .................
const user = {
    username:"Aniket",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);// print this {
        //     username: 'Aniket',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
        //   Aniket, welcome to website
        //   {
        //     username: 'Aniket',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }
}

console.log(this); // print {} empty 
// user.welcomeMessage()// print Aniket, welcome to website
// username = "ani"
// user.welcomeMessage()// print ani, welcome to website


// arrow function

// function chai(){
//  console.log(this);
// }
// chai()

// function chai(){
//     let username1= "ani"
//      console.log(this.username1);// undefined
// }
// chai()

// basic arrow function
// const addTWO=(num1,num2)=>{
//  return num1+num2
// }
// console.log(addTWO(3,4));// 7

// implesit retrun arrow function
// const addTWO =()=> num1+num2
// console.log(addTWO(3,4));// 7

// const addTWO =()=> (num1+num2)
// console.log(addTWO(3,4));// 7

const addTWO =()=> ({usernamr :"aniket"})
console.log(addTWO(3,4));// print aniket

const array = [2,3,4,5]

array.forEach(()=>{})// arrow function with forEach method................

