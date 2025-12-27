const User = {
    _email: "chai@email.com",
    _password: "acbvf",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
