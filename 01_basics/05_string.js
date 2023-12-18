//String:=> its is collection of characters.....................

const name = "Aniket"
const repoCOunt = 50

// console.log(name + repoCOunt +"Value");// print Aniket50 Value......

// `` backsticks.........

console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`);

const gameName = new String('Aniket-sh');
console.log(gameName[0]);// A
console.log(gameName.__proto__);

console.log(gameName.length);// total length 8

console.log(gameName.toUpperCase());//ANIKET PRINT

console.log(gameName.charAt(2));//print i

console.log(gameName.indexOf('t')); // print second position

const newString = gameName.substring(0,4);
console.log(newString);// print Anik

const anotherString = gameName.slice(-6,4)
console.log(anotherString);// nik

const newStringOne = "    Aniket    "
console.log(newStringOne);
console.log(newStringOne.trim());// for use space remove.......

const url = "https://Anikey.com/Aniket%20shri"

console.log(url.replace('%20','-'));// it remove %20 and replace -

console.log(url.includes('Aniket'));// true
console.log(url.includes('Ani'));// false

const data = "hello-world-hc"
console.log(data.split('-'));//


