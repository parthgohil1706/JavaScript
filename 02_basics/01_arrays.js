//array

const myarr = [0,1,2,3,4,5]
const myheros = ["shaktiman","naagaraj"] 

// console.log(myarr[0]);


//array methods 

// myarr.push(6)
// myarr.pop(6)


// myarr.unshift(10)
// myarr.shift()


// console.log(myarr.includes(10));
// console.log(myarr.indexOf(10));
// console.log(myarr);

// const newarr = myarr.join()
// console.log(newarr)
// console.log(typeof newarr)

//slice , splice

console.log("A",myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B",myarr);

const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);