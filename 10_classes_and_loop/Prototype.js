// let myname ="parth      "

// // console.log(myname.trim().length);
// console.log(myname.trueLangth);

let myheros = ["thor","Ironman"]

let heroPower ={
    thor:"hammer",
    Ironman:"IronSuit",

    getIronPower: function(){
        console.log(`Iron pwer is ${this.Ironman}`);
        
    },
}
Object.prototype.Parth = function(){
    console.log(`Parth is present in all objects`);
    
}

Array.prototype.heyParth = function(){
    console.log(`parth says hello`);
    
}

// heroPower.Parth()

// myheros.Parth()
// myheros.heyParth()          //array
// heroPower.heyParth()         //object

//Inheritance
const user = {
    name: "chai",
    email: "chai@google.com",
}
const Teacher = {
    makvideo:true,
}
const TeachingSupport ={
    isavailable: false,
}
const TASupport ={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport      //old syntax
}

Teacher.__proto__ = user    //old syntax

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) 

let anotherusername= "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
    
}
anotherusername.trueLength()

"Parth   ".trueLength()
"iceTea".trueLength()