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







