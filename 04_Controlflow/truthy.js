const useremail = "H@gmail.com"

if(useremail){
    console.log("Got email");
} else {
    console.log("don't got email");
    
}

//falsy val

// false, 0 ,-0 ,BigInt 0n, "",null,undefine, NaN

//truthy val

// "0",'false'," ",[],{},function(){}

if (useremail.length == 0) {
    console.log("array is empty");
    
}

const emptyobj = {}

if (Object.keys(emptyobj).length == 0){
    console.log("object is empty");
    
}

//Nullish Coalescing Operator (??) : null undefined


let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

//ternary operator

//condition ? true : false

const icePrice = 100

icePrice >= 80 ? console.log("less than 80") : console.log("greater than 80") 