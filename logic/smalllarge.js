const arr = [44,982,124,212,423,534,121,52,12]
let min = arr.sort((a,b)=>a-b);
   
console.log("min " + min[0])
console.log("max " + min[min.length - 1])