const mynum = [1,2,3]

// const mytotal = mynum.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and curr: ${currval}`);
    
//     return acc + currval
// },0)

const mytotal = mynum.reduce( (acc,currval)=> acc+currval,0)

console.log(mytotal);


const shoppingcart = [
    {
        itemname: "Js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 3999
    },
    {
        itemname: "data science course",
        price: 12999
    },
]

const addpriceshopping = shoppingcart.reduce((acc,item)=> acc+ item.price,0)

console.log(addpriceshopping);
