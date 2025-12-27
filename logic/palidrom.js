function ispalidrom(str){
    let rvr = str.split('').reverse().join('');;
    return str == rvr;
}

console.log(ispalidrom('madam'));