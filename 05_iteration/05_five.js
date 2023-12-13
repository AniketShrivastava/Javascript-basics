// forEach............

const coding = ["js","rb","py","java","cpp"]

// coding.forEach(function (item){
//  console.log(item);
// })

// coding.forEach((item)=>{
//  console.log(item);
// })

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})

const myCoding = [
    {
        languageName:"js",
        languageFileName:"js"
    },
    {
        languageName:"py",
        languageFileName:"py"
    },
    {
        languageName:"cpp",
        languageFileName:"cpp"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageName);// print languageName
})