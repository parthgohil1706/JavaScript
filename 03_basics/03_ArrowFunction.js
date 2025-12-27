const user = {
    username: "Parth",
    priice: 999,

    welcomemessage: function(){
        console.log(`${this.username}, wlcome to website`);        
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "PArth"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//         let username = "PArth"
//     console.log(this.username);
// }
// chai()


const chai = () => {
        let username = "PArth"
    // console.log(this);
}
chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) =>  num1 + num2
// const addtwo = (num1,num2) =>  (num1 + num2)
const addtwo = (num1,num2) => ({username: "Parth"})

console.log(addtwo(3,4));

// const myarr = [2,3,4,5,6,7]

// myarr.forEach()