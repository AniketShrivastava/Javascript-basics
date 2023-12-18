//Dates

let myDate = new Date()
console.log(myDate.toString());// today date,time, year print
console.log(myDate.toDateString());// Fri Dec 08 2023
console.log(myDate.toLocaleString());// 12/8/2023, 5:30:29 PM
console.log(typeof myDate);// its is object in js

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());//  Mon Jan 23 2023


// let myCreatedDates = new Date(2023, 0, 23,5,3)
// console.log(myCreatedDates.toLocaleString());// 1/23/2023, 5:03:00 AM

// let myCreatedDates = new Date("2023-01-14");
// console.log(myCreatedDates.toLocaleString());// 1/14/2023, 12:00:00 AM

// let myCreatedDates = new Date("01-03-2023");
// console.log(myCreatedDates.toLocaleString());//1/3/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000));// 1702057376


let newDate = new Date();

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long"
})
