arr = [1,2,3,4,5,6,7,8]

function rotatearr(arr,k){
    k=k % arr.length;
    return arr.slice(k).concat(arr.slice(0,k)); // k rotate left side && -k rotate from right side
}

// console.log(rotatearr(arr , 2))

//another methods
// rotate right 

function rarr(arr,k){
    k = k % arr.length;
    for (let i=0; i< k; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}

// console.log(rarr(arr,4))

//rotate left 

function larr(arr,k){
    k = k % arr.length;
    for (let i=0; i< k ; i++){
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}

console.log(larr(arr,3))
