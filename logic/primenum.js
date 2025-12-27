//1. Single Number is Prime

function isprime(num){
    if(num <= 1) return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % 2 === 0) return false;
    }
    return true;
}
// console.log(isprime(10))
//in array
function isprimenumarr(arr){
    return arr.filter(isprime)
}
console.log(isprimenumarr([1,0,2,3,4,5,6,7,19,18,29]));

//2. Find All Prime Numbers up to n

function primeupto(n){
    let primes = [];
    for(let i=2; i<= n;i++){
        if(isprime(i)){
            primes.push(i);
        }
    }
    return primes;
}
// console.log(primeupto(20));

