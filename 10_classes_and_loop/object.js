function multyBy5(num){
    return num*5;
}

multyBy5.power = 2;

console.log(multyBy5(6));
console.log(multyBy5.power);
console.log(multyBy5.prototype);


function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.screen++
}
createuser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai =new createuser("chai",25)
const tea =new createuser("tea",250)

chai.printMe()