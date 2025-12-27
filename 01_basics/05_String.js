const name = "parth"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parthsinh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const NewString = gameName.substring(0,4)
console.log(NewString);

const anaotherstring = gameName.slice(-8,4)
console.log(anaotherstring);

const string1 = "   parth   "
console.log(string1);
console.log(string1.trim());

const url = "https://hitrsh.com/hitrsh%20googlecom"

console.log(url.replace('%20','-'))
console.log(url.includes('hitrsh'))

const newstr12 = "par-th-gohil"

console.log(newstr12.split('-'));
