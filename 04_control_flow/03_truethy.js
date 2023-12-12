const userEmail = "a@gmail.com"

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}
// falsy value => its is false value

//    false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value...............

// "0" ,  'false' , " " , [] , {} , function(){} 


//  how to derect array is empty
const userEmail1 = ""
 if(userEmail.length === 0){
    console.log("Array is empty");
 }// print Array is empty

//  how to derect string is empty
 const emptyObject = {}
 if(Object.keys(emptyObject).length === 0){
  console.log("object is empty");
 }

 // false == 0 // true, 
//  false ==""//true ,
//   0==''//true


// Nulllish Coalescing Operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10 // value is 5 
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // print 15
val1 = null ?? 10 ?? 15 // frist value is assign 10



console.log(val1);

// Terniary Operator............

// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");// less than 80 its is true statement

