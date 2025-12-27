function movezero(arr){
    let nonzeros = arr.filter(num => num != 0);
    let zeros = new Array(arr.length - nonzeros.length).fill(0);

    return zeros.concat(nonzeros);
}

console.log(movezero([1,2,0,5,6,0,3,9]))