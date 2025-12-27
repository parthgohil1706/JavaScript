function longword(setence){
    let words = setence.split(" ");
    let longest = "";
    
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longword("i love javascript"))