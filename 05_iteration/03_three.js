// for of loop ...............

const arr = [ 1,2,3,4,5]
for (const num of arr) {
    // console.log(num);//1,2,3,4,5
}

const greeting = "hello world!"

for (const greet of greeting) {
    // console.log(`each char is ${greet}`);// print hello world line by line
}

// maps.................

const map = new Map()//only for unique value
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

// [key] destructure key:value pair

for (const [key,value] of map) {
    // console.log(key , ':-', value);//print in array full value
}

const myObject = {
    'game1':'NFS',
    "game2": "spderman"
}
// for (const [key,value] of myObject) {
//     console.log(key , ':-', value);//error
    
// }