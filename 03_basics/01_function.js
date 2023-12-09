function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");

}

sayMyName(); 

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers()//Nan
addTwoNumbers(3,4);// 7
addTwoNumbers(3,"4");// 34
addTwoNumbers(3,"a");// 3a
addTwoNumbers(3,null);//3

const result = addTwoNumbers(3,5)

console.log("result:",result);// result: undefined


function addTwoNumbers(number1,number2){
    // let result = number1 +  number2
    // return result
    return number1 + number2
    
}




function loginUserMessage (username = "sam"){
    if(username===undefined){
        console.log("please enter a message");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"));// hitesh
console.log(loginUserMessage(""));// just logged in
console.log(loginUserMessage());// undefined

console.log(loginUserMessage());// sam just logged in
console.log(loginUserMessage("hitesh"));// hitesh just logged in


// shopping cart function................

  function calculateCartPrice(val1,val2,...num1){
    return num1
  }

//   calculateCartPrice(2)
  console.log(calculateCartPrice(200,400,500,2000));// [200,400,500,2000]
  console.log(calculateCartPrice(200,400,500,2000));// [200val1,400val2,500,2000]

const user = {
    username:"ani",
    price: 199
}

function handleObjects(anyObject){
 console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObjects(user)// 
handleObjects({
    username:"ani",
    price: 399
})// 

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200,400,500,1000]);





