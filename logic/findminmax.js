arr = [1,2,3,4]
function minmax(){
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}
console.log(minmax(arr));