const myArr = [0,1,2,3,4,5]
const myHeros = [ "shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);//1

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()// last value delete

myArr.unshift(9)// it is use start array add value
myArr.shift()//remove frist element

console.log(myArr.includes(9));// false 
console.log(myArr.indexOf(9));// -1 value is not exits in array

const newArr = myArr.join()

console.log(myArr);// push one more value in myArr
console.log(newArr);//it is string format

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);//last is not print
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3);//
console.log(myn2);// original array maniplulate 

