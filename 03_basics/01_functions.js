function saymyname(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    
}
// saymyname()

// function addtwonum(number1,number2){
//    console.log( number1+number2);
   
// }

function addtwonum(number1,number2){
        // let res = number1+number2
        // return res   
        return number1+number2

}
const res = addtwonum(25,2)
// console.log("result: ",res);

function loginusermessage(username = "par"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//  console.log(loginusermessage("PArth"))

// console.log(loginusermessage("Gohil"));


function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200,400,500))

const user = {
    username: "Parth",
    price: 199
}

function handleObject(anyobject){
    console.log(`UserName Is ${anyobject.username} and price Is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Hitesh",
    price: 299
})

const myNewArry = [200,400,100,600]
function returnsecoundvalue(getArray){
    return getArray[1]
}

console.log(returnsecoundvalue(myNewArry));
