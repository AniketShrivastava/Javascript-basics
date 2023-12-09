const tinderUser = new Object()
console.log(tinderUser);// {}

 tinderUser.id ="123abc"
 tinderUser.name = "ani"
 tinderUser.isLoggedIn = false
 console.log(tinderUser);// all value print

 const regularUser = {
    email:"aniket@gmail.com",
    fullname:{
        userfullname:{
            fristname:"aniket",
            lastname:"shrivastava"
        }
    }
 }

 console.log(regularUser.fullname.userfullname.fristname);// aniket


 const obj1 = {1:"a",2:"b"}
 const obj2 = {3:"a",4:"b"}

//  const obj3 = {obj1,obj2}
//  const obj3 = object.assign(obj1,obj2)

const obj3 = {...obj1,...obj2}

 console.log(obj3);

 const users = [
    {
        id:1,
        email:"a@gmail.com"
    },{
        id:1,
        email:"a@gmail.com"
    },{
        id:1,
        email:"a@gmail.com"
    }
 ]

 users[1].email

 console.log(tinderUser);
 console.log(object.key(tinderUser));
 console.log(object.values(tinderUser));
 console.log(object.entries(tinderUser));


 console.log(tinderUser.hasOwnProperty('isLoggedIn'));




 const course = {
    coursename :"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
 }

//  course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);// hetish
console.log(instructor);// hetish

// const navbar = ({company})=>{

// }
// navbar(company ="hetish")

// Api.................intro..........

  //  JSON
// {
//  "name":"hetish",
//  "coursename":"js hindi",
//  "price":"free"

// }

// [
//     {},
//     {},
//     {}
// ]


 
 
