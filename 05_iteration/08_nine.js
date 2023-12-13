// reduce => return single value as a result
// its is use to shopping cart............

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//  return acc + currval
// },0)

const my = myNums.reduce((acc,currval)=>acc + currval,0)

console.log(myTotal);//print 6 

// shoppingcart
 

const shoppingcart = [
    {
        itemName :"py course",
        price: 5999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },{
        itemName: "data science course",
        price:12999
    }
]

const priceToPay = shoppingcart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay);//22996