function SetUserName(username){
    //complex DB calls
    this.username = username;
}
function createuser(username,email,password){
    SetUserName.call(this,username)
    
    this.email = email;
    this.password = password;
}

const chai =  new createuser("chai","chai@fb.com","123")
console.log(chai);
