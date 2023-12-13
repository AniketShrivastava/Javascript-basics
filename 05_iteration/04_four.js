const myObject = {
    js:'javascript',
    cpp:"c++",
    rb:"ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);// js,cpp,rb,swift
    console.log(`${key} shortcut is for ${myObject[key]}`);//

}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key);// array keys in index 0 to 4
    console.log(programming[key]);
}


// const map = new Map()//its is not itretval
// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATES OF AMERICA")
// map.set('FR',"FRANCE")

// // [key] destructure key:value pair

// for (const key in map) {
//     // console.log(key , ':-', value);//print in array full value
//     console.log(key);
// }