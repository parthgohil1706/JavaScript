const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernum = 23.86569
// console.log(othernum.toPrecision(3));

const hund = 1000000
// console.log(hund.toLocaleString('en-IN'));


// *************maths************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,5,6,1,2,3));

console.log(Math.random()); //random value is between 0 to 1 
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min) ;