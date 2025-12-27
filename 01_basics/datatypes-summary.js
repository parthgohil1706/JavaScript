// primitive 

// 7 types:~ String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

// const bignumber = 3214569874559852n  // n show the BigInt


// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["saktiman", " naagraj", "doga"];
let myObj = {
    name: "Parth",
    age: 20,
}

const myfunction =function(){
    console.log("hello world");
}
console.log(typeof heros);

// ****************************************************************

// memory

//  stack_memory (primitive), Heap (Non-Primitive)


let myYouTubename = "Parth12dotcom"

let anothername = myYouTubename
anothername = "parthsinhgohil"

console.log(myYouTubename);
console.log(anothername);


let userOne = {
    email:"user@google.com",
    upi:"user@ybl"   
}
let userTwo = userOne;

userTwo.email = "parth@google.com"
userTwo.upi= "rty@xyl"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);
console.log(userTwo.upi);
