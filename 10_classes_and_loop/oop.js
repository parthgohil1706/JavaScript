const user = {
    username: "Parth",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("Got use details from Database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    // return this    //bydefault

}

const userOne =new User("Parth",9,true)
const userTwo =new User("priyank",15,true)
console.log(userOne.constructor);
console.log(userTwo);

