function charfreq(str){
    let fre = {};

    for(let char of str){
        fre[char] = (fre[char] || 0) + 1;
    }
    return fre;
}

console.log(charfreq("hello"))