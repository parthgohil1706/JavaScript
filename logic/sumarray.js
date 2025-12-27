function sumarr(arr){
    return arr.reduce((sum, num) => sum + num, 0);
}
// console.log(sumarr([1,2,3,4,5]));

function sumarray(arr){
    sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumarray([1,2,3,4,5,6]))
