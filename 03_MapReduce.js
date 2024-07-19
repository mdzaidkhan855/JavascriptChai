
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let resultNum = myNumbers.map((num)=>{return num + 10})
//console.log(resultNum);

resultNum = myNumbers.map((num)=>{
    return num * 10 
}).map((num)=>{
    return num + 1
}).filter((num)=>{
    return num > 40
})
console.log(resultNum);




// Approach-1 for reduce
const myNums = [1,2,3,4];
const initialValue = 0;
let totalVal1 = myNums.reduce((initialValue,currentVal)=>{
    return initialValue + currentVal
})
console.log(totalVal1);

// Approach-2 for reduce,passing initial value as second argument
let totalVal2 = myNums.reduce((initialValue,currentVal)=>{
    return initialValue + currentVal
},0)
console.log(totalVal2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((intialVal,currentItem)=>{
    return intialVal + currentItem.price
},0)

console.log("totalPrice", totalPrice);