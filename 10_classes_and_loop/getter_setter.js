class User{
    constructor(email,password)
    {
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}parth`
    }
    set password(value){
        this._password = value
    }
}

const Parth = new User("Parth@123","abc")
console.log(Parth.password);
console.log(Parth.email);
