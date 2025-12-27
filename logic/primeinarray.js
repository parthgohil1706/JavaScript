// Find Prime Numbers in an Array

function findprimenuminarray(arr){
    let primes = [];

    for(let num of arr){
        if(num <= 1) continue;

        let isprime= true;

        for(let i=2; i<= Math.sqrt(num);i++){
            if(num % i === 0){
            isprime = false;
            break;
            }
        }
        if(isprime){
            primes.push(num);
        }
    }
    return primes;
}

console.log(findprimenuminarray([1,2,3,4,5,6,7,8,9,1,11,19,87,23,29]))