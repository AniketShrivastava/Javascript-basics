// iife => stand for immediately invoke function expressions (IIFE)

//defination => globle scope polustion error its is use IIFE

(function chai(){
    //Name IIFE
    console.log('db connected');
})();// print db connected

((name)=>{
    console.log(`db connected ${name}`);
})("aniket");//print db connected aniket
