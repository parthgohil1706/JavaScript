arr = [1,33,45,33,7,1,6,66]
// using Set function
function removeduplicate(){
    let rd = new Set(arr);
    return[...rd];
}
// console.log(removeduplicate(arr))

function rduplicate(arr){
    let result= [];

    for(let i=0; i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    };

    
    return result;
}
console.log(rduplicate(arr));

let output = rduplicate(arr).sort((a,b)=> a-b);   //low -> high
let output1 = rduplicate(arr).sort((a,b)=> b-a);   //high -> low

console.log(output);
console.log(output1);