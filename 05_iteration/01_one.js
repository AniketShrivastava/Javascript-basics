// for..........

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);//0,1,2,3,4,5,6,7,8,9,10
}


// console.log(element);//element is not define 


for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        
    // console.log(`inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j +' = '+ i*j);
    }
    
}


let myArray = ["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = array[index];
    // console.log(element);// flash,batman,superman
}

// break and continue key words.................

// for (let index = 1; index < 20; index++) {
//     if(index== 5){
//         console.log(`detected 5`);// loop print in 5 line and break all lines
//         break;
//     }
//     console.log(`value is i is ${index}`);// 1 to 20 value print
    
// }

for (let index = 1; index < 20; index++) {
    if(index== 5){
        console.log(`detected 5`);// loop print in 5 line and break all lines
        continue;// continue play one skip ...............
    }
    console.log(`value is i is ${index}`);// 1 to 20 value print
    
}
