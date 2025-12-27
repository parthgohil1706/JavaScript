class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A New Course Was Added by ${this.username}`);
        
    }

}

const chai = new Teacher("chai", "chai@Teacher.com","1234")
chai.addcourse()

const tea = new User("teaa")
tea.logMe()
console.log(chai instanceof Teacher);
