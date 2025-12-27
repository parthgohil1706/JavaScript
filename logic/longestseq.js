//find longest sequence in array

function lseq(arr){
    let set = new Set(arr)
    let longest = 0;
    let lseq = [];

    for(let num of set){
        if(!set.has(num-1)){
            let length = 1;
            let correctseq = [num];

            while(set.has(num + length)){
                correctseq.push(num + length);
                length++;
            }

            if(length > longest){
                longest = length;
                lseq = correctseq;
            }
        }
    }
    return{
        length: longest,
        longseq : lseq,
    };

}

console.log(lseq([1,3,4,5,7,8,5,3,5,6,7,8,9,2]))