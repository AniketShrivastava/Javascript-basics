// let a = 10
// const b =20
// var c = 30

// var c = 300 
let a = 300

if(true){
    let a = 10
    const b =20
    // var c = 30
    // console.log("inner:",a);
}

// for(let i =0; i<Array.length; i++){
//     const element = Array[i];
// }



// console.log(a);
// console.log(b);
// console.log(c);//30

// nested scope................

function one (){
    const userName = "Aniket"
    function two(){
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website);

    two()
}

// one()

if(true){
    const username = "aniket"
    if(username === "aniket"){
      const website1 = " youtube"
    //   console.log(username + website1);
    }
    // console.log(website1);
}
// console.log(username);



// +++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}
// console.log(addone(5));


addTwo(6)
const addTwo = function(num){
    return num + 2
}
