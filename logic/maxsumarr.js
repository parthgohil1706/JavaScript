function maxsumarr(arr){
    // let set = [...new Set(arr)] //use to remove duplicate value and convert into array 
    // set.sort((a,b)=>b-a);   // sort use to high val to low val
    arr.sort((a,b)=>b-a);
    return{
        first: arr[0],
        second: arr[1],
        sum: arr[0]+arr[1],
    }

}
console.log(maxsumarr([1,2,6,7,3,3,7,4,5]))