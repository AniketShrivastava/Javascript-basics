// if

// Operator
// < , > ,==,===,!=, <= , >=


 const isUserloggedIn = true
 const temperature = 41

//  if(temperature<50){
//    console.log('less than 50');
//  }
//  else{
//      console.log("temperature is greater than 50");
//     }
//     console.log("excuted");

// const score = 200
//  if(score>100){
//     let power = "fly"
//     console.log(`user power:${power}`);
//  }
//  console.log(`user power:${power}`);

//inmature code............
// const balance = 1000
// if(balance>500) console.log("test");//print only one line test


// Nested..............
// const balance = 1000
// if(balance < 500){
//  console.log("less than ");
// }
// else if(balance < 750){
//     console.log("less than 500");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
 console.log("Allow to buy courses");
}// print true

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User loggedIn");
}//print multiple condition check print user loggedin
