// singleton 
// object.create
//object literals

const mysym = Symbol("key1")

const JSuser = {
    name: "Parth",
    "Full Name": "Parth Gohil",
    [mysym]: "mykey1",
    age:20,
    location:"Gujrat",
    email: "parthsinhgohil176@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"],

}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["Full Name"]);
// console.log(JSuser[mysym]);

JSuser.email = "parth@micro.com"
// Object.freeze(JSuser)
JSuser.email = "Parth@chatgpt.com"
// console.log(JSuser);


JSuser.greeting = function(){
    console.log("Hello JS user");
}
JSuser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greeting2());

