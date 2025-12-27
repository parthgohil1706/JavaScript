const marvel_hero = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_hero.push(dc_heros)

// console.log(marvel_hero);

// const all_heros = marvel_hero.concat(dc_heros)
// console.log(all_heros);


const allnew_heros =[...marvel_hero,...dc_heros]
// console.log(allnew_heros);

const another_arry = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anarray = another_arry.flat(Infinity)
// console.log(real_anarray);


console.log(Array.isArray("parth"))
console.log(Array.from("parth"))
console.log(Array.from({name: "parth"})) //imp


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
